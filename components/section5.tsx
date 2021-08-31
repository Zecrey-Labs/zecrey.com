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
  margin-top: ${desktopPx2vw(267)};
  margin-left: ${desktopPx2vw(138)};
  padding-bottom: ${desktopPx2vw(163)};
  position: relative;
  flex-direction: row;
  height: ${desktopPx2vw(1161)};
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
    flex: 1;
    padding-left: ${desktopPx2vw(181)};
  }
`

export const Section5 = () => {
  return (
    <Style>
      <div className='left'>
        <div className='image1'>
          <Image src='/section6/swap1.png' alt='image1' layout='fill' />
        </div>
        <div className='image2'>
          <Image
            src='/section6/swap2.png'
            className='image2'
            alt='image1'
            layout='fill'
          />
        </div>
        <div className='image3'>
          <Image
            src='/section6/swap3.png'
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
              <Img className='icon' src='/section6/icon4.svg' alg='' />
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
    </Style>
  )
}
