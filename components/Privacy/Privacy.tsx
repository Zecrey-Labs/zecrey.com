import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
    top: 10.799rem;
    left: 5.8rem;
    opacity: 0;
  }
  .Pri img {
    width: 100%;
  }
  .text {
    width: 55rem;
    height: 9.5rem;
    position: absolute;
    top: 23.5rem;
    left: 6rem;
  }
  .text p {
    font-family: IBM Plex Sans;
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
    top: 37.9rem;
    left: 6rem;
    font-family: IBM Plex Sans;
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
    top: 37.9rem;
    left: 19.2rem;
    font-family: IBM Plex Sans;
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
    top: 10rem;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0;
    border: 0.103125rem solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
  }
  .meet {
    min-width: 27.6rem;
    height: 1.8rem;
    position: absolute;
    top: 42.1rem;
    left: 80.7rem;
  }
  .meet p {
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
  }
  &.visible {
    .Pri {
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
    .player {
      animation: move33 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
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
  @keyframes move33 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.6;
    }
  }
`

function Privacy() {
  const [visible, setVisible] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let handleScroll = e => {
      if (dom.current && dom.current.getBoundingClientRect()) {
        let domTop = dom.current.getBoundingClientRect().top
        let domHeight = dom.current.getBoundingClientRect().height
        let height = window.innerHeight
        if (domTop > 0 && height - domTop >= domHeight / 5) {
          setVisible(true)
          document.removeEventListener('scroll', handleScroll)
        }
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
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
                Zecrey is an ayer 2 privacy protocol based on zk-rollup, which
                can bring cross-chain privacy to the multi-public chain ecology,
                and can solve the two major problems of privacy and isolation in
                the blockchain today.{' '}
              </p>
              <p>
                Zecrey privacy cross-chain solution has two core
                functionalities: privacy cross-chain bridge and privacy
                cross-chain asset swap.
              </p>
            </div>
            <span className='whitepaper'>White Paper {'>'}</span>
            <span className='join'>Join Community {'>'}</span>
            <div className='player'>
              <video
                src='/video/video.mp4'
                style={{ width: '55rem', height: '30.9rem' }}
                controls // control panel
              ></video>
            </div>
            <div className='meet'>
              <p>Meet Zecrey:Wallet Introduction(2021)</p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default Privacy
