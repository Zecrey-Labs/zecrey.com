/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import Img from './img'
import { useStore } from '@/store'
import { desktopPx2vw } from '@/utils'
import { observer } from 'mobx-react-lite'

const Style = styled.div`
  position: relative;
  padding-top: ${desktopPx2vw(711)};
  margin-top: ${desktopPx2vw(61)};
  padding-left: ${desktopPx2vw(198)};
  padding-bottom: ${desktopPx2vw(380)};
  > div.badge {
    padding-left: ${desktopPx2vw(28)};
    padding-bottom: ${desktopPx2vw(30)};
    display: flex;
    flex-direction: row;
    align-items: center;
    > div.left {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-family: Lexend;
        font-style: normal;
        font-weight: 600;
        font-size: ${desktopPx2vw(16)};
        line-height: ${desktopPx2vw(20)};
        text-align: center;
        color: #e3e3e3;
      }
      span {
        font-family: Lexend;
        font-style: normal;
        font-weight: normal;
        font-size: ${desktopPx2vw(10.5)};
        line-height: ${desktopPx2vw(13)};
        text-align: center;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.35;
      }
    }
    > div.right {
      margin-left: ${desktopPx2vw(17)};
      border: #53f8ff solid ${desktopPx2vw(2)};
      border-radius: ${desktopPx2vw(7.6)};
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${desktopPx2vw(24)};
      height: ${desktopPx2vw(30)};
      width: ${desktopPx2vw(59)};
      box-sizing: content-box;
      color: #53f8ff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  > h1 {
    margin-left: ${desktopPx2vw(28)};
    margin-bottom: ${desktopPx2vw(41)};
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    font-size: ${desktopPx2vw(60)};
    line-height: ${desktopPx2vw(75)};
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  > p {
    border-left: 5px solid rgba(255, 255, 255, 0.3);
    padding-left: ${desktopPx2vw(23)};
    margin-bottom: ${desktopPx2vw(50)};
    width: ${desktopPx2vw(616)};
    font-family: Lexend;
    font-style: normal;
    font-weight: normal;
    font-size: ${desktopPx2vw(18)};
    line-height: ${desktopPx2vw(24)};
    letter-spacing: 0.217059px;
    color: #dadada;
  }
  > img {
    position: absolute;
    &.image1 {
      z-index: -1;
      height: ${desktopPx2vw(214)};
      top: ${desktopPx2vw(596)};
      right: ${desktopPx2vw(1094)};
      opacity: 0.1;
    }
    &.image2 {
      z-index: 4;
      height: ${desktopPx2vw(822)};
      top: ${desktopPx2vw(52)};
      right: ${desktopPx2vw(239)};
      box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
      border-radius: ${desktopPx2vw(12)};
    }
    &.image3 {
      z-index: 3;
      height: ${desktopPx2vw(822)};
      top: ${desktopPx2vw(580)};
      right: ${desktopPx2vw(121)};
      box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
      border-radius: ${desktopPx2vw(12)};
    }
    &.image4 {
      z-index: 2;
      height: ${desktopPx2vw(294)};
      top: ${desktopPx2vw(987)};
      right: ${desktopPx2vw(812)};
    }
    &.image5 {
      z-index: -1;
      height: ${desktopPx2vw(114)};
      top: ${desktopPx2vw(620 + 372 + 174.5)};
      left: ${desktopPx2vw(114 - 174.5)};
      transform: rotateZ(90deg);
      opacity: 0.06;
    }
    &.image6 {
      height: ${desktopPx2vw(82)};
      top: ${desktopPx2vw(280)};
      right: ${desktopPx2vw(1256)};
      transform: rotateZ(90deg);
      opacity: 0.06;
    }
  }
  > video {
    z-index: 5;
    position: absolute;
    height: ${desktopPx2vw(823)};
    top: ${desktopPx2vw(315)};
    right: ${desktopPx2vw(433)};
    border-radius: ${desktopPx2vw(12)};
    box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
  }
`

export const Section3 = observer(() => {
  const store = useStore()
  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div className='badge'>
        <div className='left'>
          <h3>Zecrey Protocol</h3>
          <span>User Interface Version 1.0</span>
        </div>
        <div className='right'>1.0</div>
      </div>
      <h1>
        Fast and Stable. <br /> Cross-Chain, Private.
      </h1>
      <p>
        Bridge different blockchain platforms to enable direct interactions
        between digital assets with complete privacy. Keep account balance and
        transaction amount confidential.
      </p>
      <video autoPlay muted loop src={'/section2/video.mp4'} />
      <Img className='image1' src={'/section3/image6.png'} />
      <Img className='image2' src={'/section3/image2.png'} />
      <Img className='image3' src={'/section3/image3.png'} />
      <Img className='image4' src={'/section3/image4.svg'} />
      <Img className='image5' src={'/section3/image5.png'} />
      <Img className='image6' src={'/section3/image6.png'} />
    </Style>
  )
})
