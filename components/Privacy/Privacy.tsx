import { WHITE_PAPER_URL } from '@/constant'
import classNames from 'classnames'
import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { VideoModal } from '../video-modal'

const Wrap = styled.div`
  .wrap {
    position: relative;
    width: 128rem;
    height: 50.9rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .privacy {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 1rem;
    z-index: 100;
    backdrop-filter: blur(2.7rem);
  }
  .Pri {
    width: 54.9rem;
    height: 12.7rem;
    position: absolute;
    top: 10.099rem;
    left: 5.8rem;
    opacity: 0;
  }
  .Pri img {
    width: 100%;
    margin-top: -10px;
  }
  .text {
    width: 55rem;
    height: 9.5rem;
    position: absolute;
    top: 21.5rem;
    left: 6rem;
  }
  .text p {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #ffffff;
    margin-top: 20px;
    opacity: 0;
  }
  .whitepaper {
    width: 9.3rem;
    height: 1.8rem;
    position: absolute;
    top: 40rem;
    left: 6rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
  }
  .join {
    width: 12rem;
    height: 1.8rem;
    position: absolute;
    top: 40rem;
    left: 19.2rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
  }
  .player {
    width: 55rem;
    height: 30.9rem;
    position: absolute;
    left: 67rem;
    top: 9rem;
    opacity: 0;
    img {
      width: 55rem;
      height: 100%;
      border-radius: 10px;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 22;
      width: 55rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      border: 1.03125px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 11.6rem;
        height: 11.6rem;
        cursor: pointer;
      }
    }
  }
  .meet {
    min-width: 27.6rem;
    height: 1.8rem;
    position: absolute;
    top: 41.7rem;
    left: 67rem;
  }
  .meet p {
    width: 55rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
    text-align: center;
  }
  &.visible {
    .Pri,
    .player {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .text p {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
    .whitepaper,
    .join,
    .meet p {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
    }
  }
  @keyframes move22 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

function Privacy() {
  const [visible, setVisible] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
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
            <div className='Pri'>
              <img src='/privacy/privacy.png' alt='' />
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
              </p>{' '}
            </div>
            <a className='whitepaper' href={WHITE_PAPER_URL} target='_blank'>
              White Paper {'>'}
            </a>
            <a className='join' href='#join'>
              Join Community {'>'}
            </a>
            <div className='player'>
              <img src='/video/cover.png' alt='' />
              <div className='mask'>
                <img
                  src='/video/play.svg'
                  alt=''
                  onClick={() => setVideo(true)}
                />
              </div>
            </div>
            <div className='meet'>
              <p>Introducing the Zecrey Protocol</p>
            </div>
          </div>
        </div>
        {video ? (
          <VideoModal
            label='Introducing the Zecrey Protocol'
            src='/video/video.mp4'
            close={() => setVideo(false)}
          />
        ) : null}
      </Wrap>
    </>
  )
}

export default Privacy
