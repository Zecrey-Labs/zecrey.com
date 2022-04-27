import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import classNames from 'classnames'
import { debounce } from 'lodash'
import { VideoModal } from '../video-modal'
import Icon from '../common/Icon'

const Wrap = styled.div`
  .outermostlayer {
    position: relative;
    width: 128rem;
    height: 50.9rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 4rem;
    .img-span {
      display: flex;
      align-items: center;
      position: absolute;
      height: 1.4rem;
      left: 6rem;
      top: 26.5rem;
      opacity: 0;
      .privacy {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.4rem;
        letter-spacing: 0.0144706rem;
        color: #f1f1f1;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
    }
  }
  .extensionwallet {
    width: 10.5rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    opacity: 0;
  }
  .oneclick {
    width: 29.4rem;
    height: 6.6rem;
    position: absolute;
    height: 6.6rem;
    left: 4.69%;
    right: 73.12%;
    top: 29rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 800;
    font-size: 21px;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    color: transparent;
    -webkit-background-clip: text;
    opacity: 0;
  }
  .download {
    width: 10.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 86.95%;
    top: 36.2rem;
    bottom: 16.5%;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 1.3rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.0168824rem;
    color: #ffffff;
    text-align: center;
    opacity: 0;
    &:hover {
      background: #ffffff;
      box-sizing: border-box;
      color: #2a2a2a;
      cursor: pointer;
    }
  }
  .rightpicture {
    width: 80rem;
    height: 44.2rem;
    position: absolute;
    top: 6.7rem;
    left: 42.8rem;
    opacity: 0;
  }
  .cross {
    width: 100%;
    /* height: 44.2rem; */
  }
  &.visible {
    .extensionwallet,
    .rightpicture {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .img-span,
    .oneclick,
    .download,
    button.video {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
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
  button.video {
    position: absolute;
    border: none;
    background: none;
    padding: 0;
    left: 6rem;
    bottom: 5rem;
    color: #2ad4d8;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    svg {
      width: 1.6rem;
      height: 1.6rem;
      color: inherit;
      margin-right: 0.5rem;
      vertical-align: text-bottom;
    }
  }
`

function WalletDownload() {
  const [visible, setVisible] = useState(false)
  const [video, setVideo] = useState(false)
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
    const debouncedScrollEventHandler = debounce(handleScroll, 50)
    document.addEventListener('scroll', debouncedScrollEventHandler)
    return () => {
      document.removeEventListener('scroll', debouncedScrollEventHandler)
    }
  }, [])
  return (
    <>
      <Wrap ref={dom} className={classNames({ visible })}>
        <div className='outermostlayer'>
          <img
            src='/walletdownload/Extension.svg'
            alt=''
            className='extensionwallet'
          />
          <div className='img-span'>
            <span className='privacy'>Privacy Wallet Extension</span>
            <img src='/walletdownload/smallcircle.png' alt='' />
          </div>
          <div className='oneclick'>
            Your Privacy Matters <br /> with One-Click
          </div>
          <div className='download'>Download</div>
          <button className='video' onClick={() => setVideo(true)}>
            <Icon name='play' /> Watch the video introduction
          </button>
          <div className='rightpicture'>
            <img
              src='/walletdownload/largeIcon.webp'
              className='cross'
              alt='zecrey'
            />
          </div>
        </div>
        {video && (
          <VideoModal
            label='Introduction'
            src='/video/wallet-video.mp4'
            close={() => setVideo(false)}
          />
        )}
      </Wrap>
    </>
  )
}

export default WalletDownload
