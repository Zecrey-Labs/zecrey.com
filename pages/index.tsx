import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Header, Section1, Section2, Background } from '@/components'
import { useStore } from '@/store'

const Style = styled.div`
  div.anchor {
    position: absolute;
    width: 1px;
    height: 1px;
    left: 0;
    height: 5px;
    width: 100vw;
    background-color: red;
    z-index: 10;
    &.anchor1 {
      top: 1000px;
    }
    &.anchor2 {
      top: 2500px;
    }
  }
`

const Home = observer(function Home() {
  const store = useStore()
  const anchor1 = React.useRef(null)
  const anchor2 = React.useRef(null)

  const [anchor1Appear, setAnchor1Appear] = React.useState(false)
  const [anchor2Appear, setAnchor2Appear] = React.useState(false)
  React.useEffect(() => {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer1 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y <= window.innerHeight) {
          setAnchor1Appear(true)
        } else {
          setAnchor1Appear(false)
        }
      })
      observer1.observe(anchor1.current)

      let observer2 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y <= window.innerHeight) {
          setAnchor2Appear(true)
        } else {
          setAnchor2Appear(false)
        }
      })
      observer2.observe(anchor2.current)
    }
  }, [])

  React.useEffect(() => {
    if (anchor1Appear === true && anchor2Appear === false) {
      store.setTheme('light')
    } else {
      store.setTheme('dark')
    }
  }, [anchor1Appear, anchor2Appear])

  return (
    <Style>
      <Background />
      <Header />
      <Section1 />
      <Section2 />
      <div ref={anchor1} className='anchor anchor1' />
      <div ref={anchor2} className='anchor anchor2' />
    </Style>
  )
})
export default Home
