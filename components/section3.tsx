/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { useStore } from '@/store'
import { desktopPx2vw, px2vw } from '@/utils'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Img from '@/components/img'
import { GetStarted } from '@/components/getStarted'

const Style = styled.div`
  position: relative;
  padding-top: ${desktopPx2vw(711)};
  margin-top: ${desktopPx2vw(-50)};
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
      margin-left: ${px2vw(23.5, 1862)};
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
  > img.transfer {
    z-index: 5;
    position: absolute;
    height: ${desktopPx2vw(823)};
    top: ${desktopPx2vw(315)};
    right: ${desktopPx2vw(433)};
    border-radius: ${desktopPx2vw(12)};
    box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
  }
`

const Image1 = styled.div`
  position: absolute;
  z-index: -1;
  width: ${desktopPx2vw(871)};
  height: ${desktopPx2vw(214)};
  top: ${desktopPx2vw(596)};
  right: ${desktopPx2vw(1094)};
  opacity: 0.1;
`
const Image2 = styled.div`
  position: absolute;
  z-index: 4;
  width: ${desktopPx2vw(493.75)};
  height: ${desktopPx2vw(822)};
  top: ${desktopPx2vw(52)};
  right: ${desktopPx2vw(239)};
  box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
  border-radius: ${desktopPx2vw(12)};
`

const Image3 = styled.div`
  position: absolute;
  z-index: 3;
  width: ${desktopPx2vw(493)};
  height: ${desktopPx2vw(822)};
  top: ${desktopPx2vw(580)};
  right: ${desktopPx2vw(121)};
  box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
  border-radius: ${desktopPx2vw(12)};
`

const Image4 = styled.div`
  position: absolute;
  z-index: 2;
  width: ${desktopPx2vw(294)};
  height: ${desktopPx2vw(294)};
  top: ${desktopPx2vw(987)};
  right: ${desktopPx2vw(812)};
`

const Image5 = styled.div`
  position: absolute;
  z-index: -1;
  width: ${desktopPx2vw(463)};
  height: ${desktopPx2vw(114)};
  top: ${desktopPx2vw(620 + 372 + 174.5)};
  left: ${desktopPx2vw(114 - 174.5)};
  transform: rotateZ(90deg);
  opacity: 0.06;
`

const Image6 = styled.div`
  position: absolute;
  width: ${desktopPx2vw(336)};
  height: ${desktopPx2vw(82)};
  top: ${desktopPx2vw(280)};
  right: ${desktopPx2vw(1256)};
  transform: rotateZ(90deg);
  opacity: 0.06;
`

export const Section3 = observer(() => {
  const store = useStore()
  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div className='badge'>
        <div className='left'>
          <h3>Privacy Transfer</h3>
          <span>Zecrey Wallet Application</span>
        </div>
        <div className='right'>
          <Img className='icon' src={'/section3/dollar.svg'} alt='' />
        </div>
      </div>
      <h1>
        One-to-Many
        <br />
        High Efficiency.
      </h1>
      <p>
        Bridge different blockchain platforms to enable direct interactions
        between digital assets with complete privacy. Keep account balance and
        transaction amount confidential.
      </p>
      <GetStarted />
      <Img className='transfer' src='/section3/transfer.png' />
      <Image1>
        <Image
          src='/section3/image6.png'
          className='image1'
          alt='image1'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image1>
      <Image2>
        <Image
          src='/section3/image2.png'
          className='image2'
          alt='image2'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image2>
      <Image3>
        <Image
          src='/section3/image3.png'
          className='image3'
          alt='image3'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image3>
      <Image4>
        <Image
          src='/section3/image4.svg'
          className='image4'
          alt='image4'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image4>
      <Image5>
        <Image
          src='/section3/image5.png'
          className='image5'
          alt='image5'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image5>
      <Image6>
        <Image
          src='/section3/image6.png'
          className='image6'
          alt='image6'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image6>
    </Style>
  )
})
