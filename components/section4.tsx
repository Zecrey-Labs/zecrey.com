/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { desktopPx2vw } from '@/utils'
import Image from 'next/image'
import Img from '@/components/img'
import { GetStarted } from '@/components/getStarted'
import { SideContentStyle } from '@/components/style'

const Style = styled.div`
  position: relative;
  padding-top: ${desktopPx2vw(363)};
  padding-left: ${desktopPx2vw(182)};
  padding-bottom: ${desktopPx2vw(561)};
`

const BasicCard = styled.div`
  position: absolute;
  width: ${desktopPx2vw(494)};
  height: ${desktopPx2vw(823)};
  div.blur-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #363636;
    border-radius: ${desktopPx2vw(10)};
    filter: blur(${desktopPx2vw(111)});
  }
  div:last-child {
    position: absolute;
    border-radius: ${desktopPx2vw(10)};
  }
`

const Image1 = styled.div`
  position: absolute;
  z-index: -1;
  width: ${desktopPx2vw(871)};
  height: ${desktopPx2vw(214)};
  top: ${desktopPx2vw(236)};
  right: ${desktopPx2vw(1094)};
  opacity: 0.1;
`
const Image2 = styled(BasicCard)`
  z-index: 4;
  top: ${desktopPx2vw(0)};
  right: ${desktopPx2vw(256)};
`

const Image3 = styled(BasicCard)`
  z-index: 3;
  top: ${desktopPx2vw(278)};
  right: ${desktopPx2vw(137)};
`

const Image4 = styled.div`
  position: absolute;
  z-index: 2;
  width: ${desktopPx2vw(303)};
  height: ${desktopPx2vw(303)};
  top: ${desktopPx2vw(668)};
  left: ${desktopPx2vw(764)};
`

const Image5 = styled.div`
  position: absolute;
  z-index: -1;
  width: ${desktopPx2vw(133)};
  height: ${desktopPx2vw(514)};
  top: ${desktopPx2vw(739)};
  left: ${desktopPx2vw(87)};
`

const Image6 = styled(BasicCard)`
  z-index: 5;
  top: ${desktopPx2vw(160)};
  right: ${desktopPx2vw(449)};
`

export const Section4 = () => {
  return (
    <Style>
      <SideContentStyle>
        <div className='badge'>
          <div className='left'>
            <h3>Privacy Transfer</h3>
            <span>Zecrey Wallet Application</span>
          </div>
          <div className='right'>
            <Img className='icon' src={'/section4/dollar.svg'} alt='' />
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
      </SideContentStyle>
      <Image1>
        <Image
          src='/section4/zecrey.png'
          className='image1'
          alt='image1'
          layout='fill'
          quality={100}
        />
      </Image1>
      <Image2>
        <div className='blur-bg'></div>
        <Image
          src='/screenshots/l2-wallet.png'
          className='l2-wallet'
          alt='l2-wallet'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image2>
      <Image3>
        <div className='blur-bg'></div>
        <Image
          src='/screenshots/l1-wallet.png'
          className='l1-wallet'
          alt='l1-wallet'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image3>
      <Image4>
        <Image
          src='/section4/check-alt.svg'
          className='check-alt'
          alt='check-alt'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Image4>
      <Image5>
        <Image
          src='/section3/zecrey.svg'
          className='zecrey'
          alt='zecrey'
          layout='fill'
          quality={100}
        />
      </Image5>
      <Image6>
        <div className='blur-bg'></div>
        <Image
          src='/screenshots/l2-transfer.png'
          className='l2-transfer'
          alt='l2-transfer'
          layout='fill'
          quality={100}
        />
      </Image6>
    </Style>
  )
}
