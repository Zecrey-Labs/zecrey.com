/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

const Style = styled.div`
  padding: 0 ${px2vw(30, 1920)};
  padding-bottom: ${px2vw(300, 1920)};
  width: 100vw;
  width: ${px2vw(1288, 1920)};
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;

  h2 {
    margin-bottom: ${px2vw(162, 1920)};
    text-align: center;
    text-shadow: 0px ${px2vw(3, 1920)} ${px2vw(12, 1920)} #00000040;
    white-space: normal;
    font: normal normal bold ${px2vw(80, 1920)} / ${px2vw(100, 1920)} Lexend;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  div.content {
    position: relative;
    div.textList {
      display: flex;
      flex-direction: column;
      position: relative;
      div.text {
        width: ${px2vw(443, 1920)};
        &:nth-of-type(2) {
          align-self: flex-end;
        }
        h3 {
          text-align: left;
          letter-spacing: 0px;
          color: #e4e4e4;
          text-shadow: 0px ${px2vw(3, 1920)} ${px2vw(12, 1920)} #00000040;
          opacity: 1;
          margin-bottom: ${px2vw(30, 1920)};
          font: normal normal bold ${px2vw(42, 1920)} / ${px2vw(53, 1920)}
            Lexend;
        }
        p {
          text-align: left;
          font: normal normal normal ${px2vw(24, 1920)} / ${px2vw(32, 1920)} IBM
            Plex Sans;
          letter-spacing: 0px;
          color: #e4e4e4;
          opacity: 1;
        }
      }
    }
    div.block {
      display: flex;
      flex-direction: column;
      width: ${px2vw(226, 1920)};
      height: ${px2vw(582, 1920)};
      position: absolute;
      left: calc(50% - ${px2vw(130, 1920)});
      top: 0;
      z-index: 1;
      div.bg1 {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: rgba(56, 56, 56, 0.1);
        border-radius: ${px2vw(20, 1920)};
        backdrop-filter: blur(${px2vw(3, 1920)}) brightness(110%);
      }
      img.image1 {
        position: absolute;
        top: ${px2vw(42, 1920)};
        left: -${px2vw(20, 1920)};
        width: ${px2vw(143, 1920)};
      }
      img.image2 {
        position: absolute;
        top: ${px2vw(241, 1920)};
        right: -${px2vw(67, 1920)};
        z-index: -2;
        width: ${px2vw(169, 1920)};
      }
      img.image3 {
        position: absolute;
        bottom: -${px2vw(140, 1920)};
        left: -${px2vw(57, 1920)};
        z-index: 2;
        width: ${px2vw(248, 1920)};
        box-sizing: border-box;
        background: rgba(56, 56, 56, 0.1);
        backdrop-filter: blur(${px2vw(3, 1920)}) brightness(110%);
        border-radius: ${px2vw(20, 1920)};
        padding: ${px2vw(75, 1920)} ${px2vw(68, 1920)};
      }
    }
  }

  div.anchor {
    position: absolute;
    top: ${px2vw(520, 1920)};
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 20px 30px;
    h2 {
      font: normal normal bold 42px/42px Lexend;
    }
    div.content {
      display: flex;
      flex-direction: row;
      align-items: flex;
      width: 100%;
      justify-content: center;
      div.block {
        width: 120px;
        height: 300px;
        position: relative;
        left: 0;
        z-index: 1;
        margin-right: 50px;
        img.image1 {
          width: 72px;
          top: 40px;
          left: -14px;
        }
        img.image2 {
          top: 130px;
          right: -34px;
          width: 78px;
        }
      }
      div.textList {
        flex: 1;
        max-width: 62em;
        div.text {
          width: auto;
          margin-bottom: 40px;
          h3 {
            font: normal normal bold 28px/28px Lexend;
          }
          p {
            font-size: 22px;
            line-height: 25px;
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    padding: 0 ${px2vw(20, 320)} 0 ${px2vw(32, 320)};
    h2 {
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(26, 320)};
      line-height: ${px2vw(32, 320)};
      text-align: center;
      color: #ffffff;
      margin-top: ${px2vw(40, 320)};
      margin-bottom: ${px2vw(30, 320)};
      width: ${px2vw(166, 320)};
    }
    div.content {
      div.block {
        width: ${px2vw(62, 320)};
        height: ${px2vw(360, 320)};
        margin-right: ${px2vw(35, 320)};
        img.image1 {
          height: ${px2vw(72, 320)};
          width: auto;
          left: ${px2vw(2.5, 320)};
          top: ${px2vw(7, 320)};
          transform: translate3d(0, 0, 200px) rotateY(180deg);
        }
        img.image2 {
          width: ${px2vw(84, 320)};
          height: auto;
          top: ${px2vw(142, 320)};
          right: ${px2vw(-31, 320)};
        }
        img.image3 {
          width: ${px2vw(48, 320)};
          height: auto;
          left: ${px2vw(5, 320)};
          bottom: ${px2vw(48, 320)};
          padding: ${px2vw(18, 320)} ${px2vw(14, 320)};
          box-sizing: content-box;
          background: #424242;
          mix-blend-mode: normal;
          opacity: 0.79;
          backdrop-filter: blur(3px) brightness(110%);
          border-radius: ${px2vw(5, 320)};
        }
        div.bg1 {
          width: ${px2vw(62, 320)};
          height: ${px2vw(360, 320)};
          background: rgba(56, 56, 56, 0.1);
          backdrop-filter: blur(3px) brightness(110%);
          border-radius: ${px2vw(2, 320)};
        }
      }
      div.textList {
        padding-top: ${px2vw(12, 320)};
        div.text {
          margin-bottom: ${px2vw(29, 320)};
          h3 {
            font-family: Lexend;
            font-style: normal;
            font-weight: 800;
            font-size: ${px2vw(16, 320)};
            line-height: ${px2vw(20, 320)};
            color: #2ad4d9;
            width: ${px2vw(110, 320)};
            padding-left: ${px2vw(11, 320)};
          }
          p {
            font-size: ${px2vw(10, 320)};
            line-height: ${px2vw(12, 320)};
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.6;
            border-left: 1px solid rgba(166, 166, 166, 0.3);
            padding-left: ${px2vw(11, 320)};
          }
        }
      }
    }
  }
`

export const Section5 = observer(() => {
  const store = useStore()
  const anchor2 = React.useRef(null)
  React.useEffect(() => {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer1 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y <= window.innerHeight) {
          store.setAnchor2Appear(true)
        } else {
          store.setAnchor2Appear(false)
        }
      })
      observer1.observe(anchor2.current)
    }
  }, [])
  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <h2>Why Zecrey?</h2>
      <div className='content'>
        <div className='block'>
          <Img className='image1' src='/section5/image1.svg' alt='' />
          <Img className='image2' src='/section5/image2.svg' alt='' />
          <div className='bg1'></div>
          <Img className='image3' src='/section5/image3.svg' alt='' />
        </div>
        <div className='textList'>
          <div className='text'>
            <h3>Confidential Assets</h3>
            <p>
              Make account balances and transaction amounts confidential. Only
              you know your own balances.
            </p>
          </div>
          <div className='text'>
            <h3>Anonymous Identity</h3>
            <p>
              Conceal the relationship between sender and receiver and make
              yourself anonymous in blockchain networks.
            </p>
          </div>
          <div className='text'>
            <h3>Privacy Bridges</h3>
            <p>
              Bridging different blockchain platforms to enable direct
              interactions between digital assets with complete privacy.
            </p>
          </div>
        </div>
      </div>
      <div ref={anchor2} className='anchor' />
    </Style>
  )
})
