import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import classNames from 'classnames'

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
      display: flex;
      align-items: center;
      height: 1.4rem;
      position: absolute;
      left: 6rem;
      top: 28.6rem;
      opacity: 0;
      .zecreymobile {
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
  .mobile {
    opacity: 0;
    min-width: 11rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    border: 0.1rem solid #2ad4d8;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 2rem;
    font-family: Adobe Gothic Std;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    color: #2ad4d8;
  }
  .anywhere {
    opacity: 0;
    width: 26rem;
    height: 6.6rem;
    position: absolute;
    left: 4.69%;
    right: 75%;
    /* top: calc(50% - 66px/2 + 89.5px); */
    top: 31.1rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .comingsoon {
    width: 12.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 85.39%;
    top: 78.39%;
    bottom: 16.5%;
    border: 0.1rem solid #ffffff;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.0168824rem;
    color: #f1f1f1;
    text-align: center;
    opacity: 0;
  }
  .iphone {
    width: 55.463rem;
    height: 42.231rem;
    position: absolute;
    left: 59.2rem;
    top: 12.8rem;
    z-index: 10;
    opacity: 0;
  }
  .iphone img {
    width: 100%;
  }
  &.visible {
    .mobile,
    .iphone {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .img-span,
    .anywhere,
    .comingsoon {
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
`

function ZecreyMobile() {
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
        <div className='outermostlayer'>
          <div className='mobile'>Zecrey Mobile</div>
          <div className='img-span'>
            <div className='zecreymobile'>Zecrey Mobile</div>
            <img src='/zecreymobile/mobilephone.png' alt='zecrey' />
          </div>
          <div className='anywhere'>Anywhere,anytime in your pocket.</div>
          <div className='comingsoon'>Coming Soon</div>
          <div className='iphone'>
            <img src='/zecreymobile/cellphone.webp' alt='' />
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default ZecreyMobile
