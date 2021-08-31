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
  display: flex;
  margin-top: ${desktopPx2vw(267)};
  padding-bottom: ${desktopPx2vw(163)};
  position: relative;
  flex-direction: row;
  height: ${desktopPx2vw(1161)};
  > div.left {
    position: relative;
    > img.transfer {
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

export const Section3 = () => {
  return (
    <Style>
      <div className='left'>
        <Image1>
          <Image
            src='/section2/image1.png'
            className='image1'
            alt='image1'
            layout='fill'
          />
        </Image1>
        <Img className='transfer' src='/section2/transfer.png' />
      </div>
      <div className='right'>
        <SideContentStyle>
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
        </SideContentStyle>
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
}
