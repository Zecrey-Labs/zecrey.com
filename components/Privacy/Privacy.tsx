import { WHITE_PAPER_URL } from '@/constant'
import classNames from 'classnames'
import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { VideoModal } from '../video-modal'
import { Img, Wrap } from './styles'
import { isMobile } from 'react-device-detect'

function Privacy() {
  const isMobileView = useMediaQuery({ maxWidth: 780 })
  const [visible, setVisible] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
  const videoDom = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let handleScroll = () => {
      if (dom.current) {
        let domTop = dom.current.getBoundingClientRect().top
        let domHeight = dom.current.getBoundingClientRect().height
        let height = window.innerHeight
        if (height - domTop >= domHeight / 5) {
          setVisible(true)
          document.removeEventListener('scroll', handleScroll)
        }
      }
    }
    const debouncedScrollEventHandler = debounce(handleScroll, 50)
    document.addEventListener('scroll', debouncedScrollEventHandler)
    return () => {
      document.removeEventListener('scroll', debouncedScrollEventHandler)
    }
  }, [])
  const [video, setVideo] = useState(false)

  return (
    <>
      <Wrap ref={dom} className={classNames({ visible })}>
        <div className='wrap'>
          <div className='privacy'>
            {isMobileView ? (
              <label className='title'>What's Zecrey?</label>
            ) : (
              <Img className='Pri'>
                <img src='/privacy/privacy.png' alt='' />
              </Img>
            )}
            <div className='player'>
              <img src='/video/cover.png' alt='' />
              <div className='mask'>
                <img
                  src='/video/play.svg'
                  alt=''
                  onClick={() => {
                    isMobile ? videoDom.current.play() : setVideo(true)
                  }}
                />
              </div>
            </div>
            <div className='meet'>
              <p>Introducing the Zecrey Protocol</p>
            </div>
            <div className='text'>
              <p>
                Zecrey is a zk-rollup based Layer 2 protocol bringing crosschain
                support and privacy to your digital assets. The two major
                problems facing the blockchain community: Lack of Privacy &
                Isolation in a diverse multi-chain ecosystem. Zecrey protocol
                addresses this with two core functionalities: Cross-chain Bridge
                & DEX-Based Asset Swap where your transactions are not privy to
                the public eye.
              </p>
              <p>
                Zecrey provides a reliable and safe crosschain solution, with
                its security rooted in Layer 1s. And Zecrey is also a
                well-designed product aggregating assets and liquidity with a
                user-friendly wallet as an entrance to multiple blockchains.
              </p>
            </div>
            <a className='whitepaper' href={WHITE_PAPER_URL} target='_blank'>
              White Paper {'>'}
            </a>
            <a className='join' href='#join'>
              Join Community {'>'}
            </a>
          </div>
        </div>
        {video ? (
          <VideoModal
            label='Introducing the Zecrey Protocol'
            src='/video/video.mp4'
            close={() => setVideo(false)}
          />
        ) : null}
        {isMobile && (
          <video
            className='video-on-mobile'
            ref={videoDom}
            src='/video/video.mp4'
            controls
            onContextMenu={e => e.preventDefault()}></video>
        )}
      </Wrap>
    </>
  )
}

export default Privacy
