import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import classNames from 'classnames'
import { debounce } from 'lodash'

const Wrap = styled.div`
  .outermostlayer {
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
      position: absolute;
      height: 1.4rem;
      left: 87.3rem;
      top: 28.6rem;
      display: flex;
      align-items: center;
      opacity: 0;
      .application {
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
  .webapp {
    width: 10.5rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    opacity: 0;
  }
  .backgroundbox {
    min-width: 81.489rem;
    height: 47.379rem;
    position: absolute;
    top: 12.853rem;
    left: -2.285rem;
    opacity: 0;
  }
  .backgroundimage-img {
    width: 100%;
    height: 100%;
  }
  .crypto {
    opacity: 0;
    width: 32.9rem;
    height: 6.6rem;
    position: absolute;
    left: 68.33%;
    right: 8.44%;
    top: calc(50% - 6.6rem / 2 + 8.95rem);
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .launchapp {
    width: 11.6rem;
    height: 2.6rem;
    position: absolute;
    left: 68.5%;
    right: 19.61%;
    top: 78.39%;
    bottom: 16.5%;
    border: 1px solid #ffffff;
    border-radius: 1.3rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.0168824rem;
    color: #f1f1f1;
    text-align: center;
    opacity: 0;
  }
  &.visible {
    .webapp {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .backgroundbox,
    .img-span,
    .crypto {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
    .launchapp {
      animation: move24 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
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
  @keyframes move24 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  }
`

function ZecreyWebApp() {
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
          <img src='/Zecreywebapp/WebApp.svg' alt='' className='webapp' />
          <div className='backgroundbox'>
            <img
              src='/Zecreywebapp/WebApp.webp'
              className='backgroundimage-img'
              alt='zecrey'
            />
          </div>
          <div className='img-span'>
            <div className='application'>Zecrey Web Application</div>
            <img src='/Zecreywebapp/butteryhatch.png' alt='zecrey' />
          </div>
          <div className='crypto'>
            Streamlined Experience Simple, Yet Robust
          </div>
          <div className='launchapp'>Coming Soon</div>
        </div>
      </Wrap>
    </>
  )
}

export default ZecreyWebApp
