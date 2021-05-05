/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePrevious } from '@ys/utils/hooks'
import { useBodySize } from '../../utils'
import { getAverage, scrollTo } from './utils'

const StyledLayout = styled.div`
  width: 100vw;
  position: relative;

  > * {
    width: 100vw;
    height: 100vh;
  }
`

type Props = {
  children?: any
}

let scrollings = []
let canScroll = true
let prevTime = Date.now()

export function FullSlider({ children }: Props) {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const lastIndex = usePrevious(index)
  const size = useBodySize()

  useEffect(() => {
    const origin = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'

    return () => {
      document.documentElement.style.scrollBehavior = origin
    }
  }, [])

  // fix current index
  useEffect(() => {
    const hashToIndex: Object = Array.prototype.reduce.call(
      ref.current.children,
      (res, item, index) => ({
        ...(res as Object),
        [item.id]: index,
      }),
      {}
    )

    function onHashChange() {
      const currentIndex = hashToIndex[location.hash.replace(/^#/, '')]
      if (currentIndex !== undefined) {
        setIndex(currentIndex)
      }
    }

    onHashChange()
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  useEffect(() => {
    const maxIndex = Math.max(ref.current.children.length - 1, 0)
    function onWheel(e) {
      e.preventDefault()
      const curTime = Date.now()

      e = e || window.event
      const value = e.wheelDelta || -e.deltaY || -e.detail
      const delta = Math.max(-1, Math.min(1, value))

      const horizontalDetection =
        typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined'
      const isScrollingVertically =
        Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
        Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
        !horizontalDetection

      if (scrollings.length > 149) {
        scrollings.shift()
      }

      scrollings.push(Math.abs(value))

      const timeDiff = curTime - prevTime
      prevTime = curTime

      // haven't they scrolled in a while?
      // (enough to be consider a different scrolling action to scroll another section)
      if (timeDiff > 200) {
        scrollings = []
      }

      if (canScroll) {
        const averageEnd = getAverage(scrollings, 10)
        const averageMiddle = getAverage(scrollings, 70)
        const isAccelerating = averageEnd >= averageMiddle

        if (isAccelerating && isScrollingVertically) {
          if (delta < 0) {
            setIndex(index => {
              // sliders is over
              // slide to footer
              if (index === maxIndex) {
                canScroll = false
                scrollTo(document.body.scrollHeight).finally(() => {
                  canScroll = true
                })
              }
              const nextIndex = Math.min(maxIndex, index + 1)
              if (nextIndex !== index) {
                canScroll = false
              }
              return nextIndex
            })
          } else {
            setIndex(index => {
              // reset from footer
              if (window.scrollY > index * size.innerHeight) {
                canScroll = false
                scrollTo(index * size.innerHeight).finally(() => {
                  canScroll = true
                })
                return index
              } else {
                const nextIndex = Math.max(0, index - 1)
                if (nextIndex !== index) {
                  canScroll = false
                }
                return nextIndex
              }
            })
          }
        }
      }

      return false
    }

    window.addEventListener('wheel', onWheel, {
      passive: false,
    })

    return () => {
      window.removeEventListener('wheel', onWheel)
    }
  }, [size])

  useEffect(() => {
    if (lastIndex === undefined || index === lastIndex) {
      canScroll = true
      return
    } else {
      scrollTo(index * size.innerHeight).finally(() => {
        canScroll = true
      })
    }
  }, [index, size])

  return <StyledLayout ref={ref}>{children}</StyledLayout>
}
