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
    img {
      width: 55rem;
      height: 30.9rem;
      border-radius: 10px;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 22;
      width: 55rem;
      height: 30.9rem;
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
  .video-mask {
    position: fixed;
    z-index: 2224;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    background: rgba(0, 0, 0, 0.3);
    .video {
      background: rgba(56, 56, 56, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      width: 1256px;
      height: 705px;
      margin: 25px auto;
      padding: 9px 25px 30px;
      position: relative;
      .meet1 {
        width: 100%;
        position: absolute;
        top: 9px;
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-family: 'Lexend';
          font-weight: 800;
          font-size: 18px;
          line-height: 22px;
          color: #2ad4d9;
        }
        img {
          position: absolute;
          right: 14px;
          cursor: pointer;
        }
      }
      video {
        margin-top: 35px;
      }
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
              <img src='/video/video.webp' alt='' />
              <div className='mask'>
                <img
                  src='/video/play.svg'
                  alt=''
                  onClick={() => setVideo(true)}
                />
              </div>
            </div>
            <div className='meet'>
              <p>Meet Zecrey:Wallet Introduction(2021)</p>
            </div>
          </div>
        </div>
        {video ? (
          <div className='video-mask'>
            <div className='video'>
              <div className='meet1'>
                <p>Meet Zecrey:Wallet Introduction(2021)</p>
                <img
                  src='/video/close.svg'
                  alt=''
                  onClick={() => setVideo(false)}
                />
              </div>
              <video
                src='/video/video.mp4'
                style={{ width: '1205px', height: '631px' }}
                controls // control panel
                autoPlay></video>
            </div>
          </div>
        ) : null}
      </Wrap>
    </>
  )
}

export default Privacy
