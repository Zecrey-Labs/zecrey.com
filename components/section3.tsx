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
  > div.eye.icon {
    position: absolute;
    z-index: -1;
    mix-blend-mode: normal;
    width: ${desktopPx2vw(410)};
    height: ${desktopPx2vw(317)};
    left: ${desktopPx2vw(695)};
    top: ${desktopPx2vw(602)};
  }
`

const Image1 = styled.div`
  position: relative;
  width: ${desktopPx2vw(857)};
  height: ${desktopPx2vw(1161)};
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
            One-Click Privacy
            <br />
            No Trace.
          </h1>
          <p>
            Transaction details are significant information for both parties
            that are not supposed to be exposed. Privacy transaction just needs
            one click and gets stable protection with no trace.
          </p>
          <GetStarted />
        </SideContentStyle>
      </div>
      <div className='eye icon'>
        <Image src='/section2/eye.svg' alt='eye' layout='fill' />
      </div>
    </Style>
  )
}
