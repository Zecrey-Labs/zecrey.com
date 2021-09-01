/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { SideContentStyle } from '@/components/style'
import Img from '@/components/img'
import { GetStarted } from '@/components/getStarted'
import { desktopPx2vw } from '@/utils'

const Style = styled.div`
  display: flex;
  margin-left: ${desktopPx2vw(138)};
  height: ${desktopPx2vw(831)};
  position: relative;
  flex-direction: row;
  > div.left {
    width: ${desktopPx2vw(819)};
    position: relative;
    > div {
      position: absolute;
      &.image1 {
        width: ${desktopPx2vw(499)};
        height: ${desktopPx2vw(831)};
        left: ${desktopPx2vw(170)};
        top: 0;
        z-index: 1;
      }
      &.image2 {
        width: ${desktopPx2vw(441)};
        height: ${desktopPx2vw(736)};
        top: ${desktopPx2vw(63)};
        left: 0;
      }
      &.image3 {
        width: ${desktopPx2vw(441)};
        height: ${desktopPx2vw(736)};
        top: ${desktopPx2vw(63)};
        right: 0;
      }
    }
  }
  > div.right {
    padding-top: ${desktopPx2vw(214)};
    padding-left: ${desktopPx2vw(181)};
  }
  > div.arrow {
    z-index: -1;
    opacity: 0.2;
    position: absolute;
    width: ${desktopPx2vw(1920 - 753 - 787)};
    height: ${desktopPx2vw(3969 - 554 - 3169)};
    left: ${desktopPx2vw(716)};
    top: ${desktopPx2vw(60)};
  }
  > div.dollar {
    position: absolute;
    z-index: -1;
    mix-blend-mode: normal;
    left: ${desktopPx2vw(772)};
    top: ${desktopPx2vw(897 - 361)};
    width: ${desktopPx2vw(124)};
    height: ${desktopPx2vw(124)};
    > div.dollar1 {
      position: absolute;
      left: 0;
      top: 0;
      width: ${desktopPx2vw(124)};
      height: ${desktopPx2vw(124)};
    }
    > div.dollar2 {
      position: absolute;
      left: ${desktopPx2vw(10)};
      top: ${desktopPx2vw(73)};
      width: ${desktopPx2vw(158)};
      height: ${desktopPx2vw(158)};
    }
  }
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
const Image1 = styled.div`
  position: absolute;
  width: ${desktopPx2vw(329)};
  height: ${desktopPx2vw(213)};
  right: ${desktopPx2vw(697)};
  top: ${desktopPx2vw(281)};
  z-index: -1;
  opacity: 0.15;
`
const Image2 = styled.div`
  position: absolute;
  width: ${desktopPx2vw(158)};
  height: ${desktopPx2vw(158)};
  right: ${desktopPx2vw(839)};
  top: ${desktopPx2vw(609)};
`
const Image3 = styled.div`
  position: absolute;
  width: ${desktopPx2vw(124)};
  height: ${desktopPx2vw(124)};
  right: ${desktopPx2vw(883)};
  top: ${desktopPx2vw(536)};
  z-index: -1;
  opacity: 0.4;
`

export const Section5 = () => {
  return (
    <Style>
      <Image1>
        <Image
          src='/section5/arrows.svg'
          className='arrows'
          alt='arrows'
          layout='fill'
        />
      </Image1>
      <Image2>
        <Image
          src='/section5/dollar-coin.svg'
          className='dollar'
          alt='dollar'
          layout='fill'
        />
      </Image2>
      <Image3>
        <Image
          src='/section5/dollar-coin.svg'
          className='dollar'
          alt='dollar'
          layout='fill'
        />
      </Image3>
      <div className='left'>
        <div className='image1'>
          <Image src='/screenshots/swap1.png' alt='image1' layout='fill' />
        </div>
        <div className='image2'>
          <Image
            src='/screenshots/swap2.png'
            className='image2'
            alt='image1'
            layout='fill'
          />
        </div>
        <div className='image3'>
          <Image
            src='/screenshots/swap3.png'
            className='image3'
            alt='image1'
            layout='fill'
          />
        </div>
      </div>
      <div className='right'>
        <SideContentStyle>
          <div className='badge'>
            <div className='left'>
              <h3>Cross-chain Swap</h3>
              <span>Zecrey Wallet Application</span>
            </div>
            <div className='right'>
              <Img className='icon' src='/section5/icon.svg' alg='' />
            </div>
          </div>
          <h1>
            Multi-chain Swap
            <br />a Giant Leap.
          </h1>
          <p>
            Blockchains today are not protecting user privacy. Privacy protocols
            have enabled private cash transactions, but these systems lack
            programmability. It is difficult and expensive for users to achieve
            complete digital asset privacy.
          </p>
          <GetStarted />
        </SideContentStyle>
      </div>
      <div className='arrow'>
        <ArrowLeft>
          <Image
            src='/section6/arrow.svg'
            className='arrow-left'
            alt='arrow-left'
            layout='fill'
          />
        </ArrowLeft>
        <ArrowRight>
          <Image
            src='/section6/arrow.svg'
            className='arrow-right'
            alt='arrow-right'
            layout='fill'
          />
        </ArrowRight>
      </div>
      <div className='dollar'>
        <div className='dollar1'>
          <Image src='/section6/dollar1.svg' alt='dollar' layout='fill' />
        </div>
        <div className='dollar2'>
          <Image src='/section6/dollar2.svg' alt='dollar' layout='fill' />
        </div>
      </div>
    </Style>
  )
}
