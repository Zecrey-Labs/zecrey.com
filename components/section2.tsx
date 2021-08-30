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
  display: flex;
  margin-top: ${desktopPx2vw(267)};
  padding-bottom: ${desktopPx2vw(163)};
  position: relative;
  flex-direction: row;
  height: ${desktopPx2vw(1161)};
  > div.left {
    position: relative;
    > video {
      position: absolute;
      left: ${desktopPx2vw(230)};
      top: ${desktopPx2vw(160)};
      height: ${desktopPx2vw(823)};
      box-shadow: 0 0 ${desktopPx2vw(40)} rgb(36, 36, 36);
    }
  }
  > div.right {
    flex: 1;
    padding-top: ${desktopPx2vw(302)};
    padding-left: ${desktopPx2vw(201)};
    padding-right: ${desktopPx2vw(200)};
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
      width: ${desktopPx2vw(557)};
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
  }
  > div.arrow {
    z-index: -1;
    opacity: 0.2;
    position: absolute;
    width: ${desktopPx2vw(1920 - 753 - 787)};
    height: ${desktopPx2vw(3969 - 554 - 3169)};
    left: ${desktopPx2vw(753)};
    top: ${desktopPx2vw(349)};
  }
`

const Image1 = styled.div`
  position: relative;
  width: ${desktopPx2vw(857)};
  height: ${desktopPx2vw(1161)};
`

const ArrowLeft = styled.div`
  position: absolute;
  width: ${desktopPx2vw(259)};
  height: ${desktopPx2vw(164)};
  left: 0;
  top: 0;
`

const ArrowRight = styled.div`
  position: absolute;
  width: ${desktopPx2vw(259)};
  height: ${desktopPx2vw(164)};
  right: 0;
  bottom: 0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const Section2 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div className='left'>
        <Image1>
          <Image
            src='/section2/image1.png'
            className='image1'
            alt='image1'
            layout='fill'
          />
        </Image1>
        <video autoPlay muted loop src={'/section2/video2.mp4'} />
      </div>
      <div className='right'>
        <div className='badge'>
          <div className='left'>
            <h3>Zecrey Protocol</h3>
            <span>Privacy Wallet Application</span>
          </div>
          <div className='right'>
            <Img className='icon' src={'/section2/yes.svg'} alt='' />
          </div>
        </div>
        <h1>
          One-Click Pricacy
          <br />
          No Trace.
        </h1>
        <p>
          Blockchains today are not protecting user privacy. Privacy protocols
          have enabled private cash transactions, but these systems lack
          programmability. It is difficult and expensive for users to achieve
          complete digital asset privacy.
        </p>
        <GetStarted />
      </div>
      <div className='arrow'>
        <ArrowLeft>
          <Image
            src='/section2/arrow.svg'
            className='arrow-left'
            alt='arrow-left'
            layout='fill'
          />
        </ArrowLeft>
        <ArrowRight>
          <Image
            src='/section2/arrow.svg'
            className='arrow-right'
            alt='arrow-right'
            layout='fill'
          />
        </ArrowRight>
      </div>
    </Style>
  )
})
