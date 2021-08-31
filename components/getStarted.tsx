/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import styled, { css } from 'styled-components'
import Img from '@/components/img'
import { desktopPx2vw } from '@/utils'
import { useCallback } from 'react'
import { DOWNLOAD_URL } from '@/constant'

const Styled = styled.div`
  cursor: pointer;
  width: ${desktopPx2vw(215)};
  height: ${desktopPx2vw(46)};
  border: ${desktopPx2vw(2)} solid #dadada;
  color: #dadada;
  margin-left: ${desktopPx2vw(28)};
  > img.hover {
    display: none;
  }
  > img.normal {
    display: inline-block;
  }
  &:hover {
    border: none;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    box-shadow: 0 0 ${desktopPx2vw(40)} #00b6ba;
    color: black;
    > img.hover {
      display: inline-block;
    }
    > img.normal {
      display: none;
    }
  }
  box-sizing: border-box;
  border-radius: ${desktopPx2vw(37)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: ${desktopPx2vw(16)};
    margin-right: ${desktopPx2vw(12)};
  }
  span {
    height: ${desktopPx2vw(30)};
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: ${desktopPx2vw(24)};
    line-height: ${desktopPx2vw(30)};
    letter-spacing: ${desktopPx2vw(0.289412)};
  }
`

export const GetStarted = () => {
  const onClick = useCallback(() => {
    window.open(DOWNLOAD_URL)
  }, [])

  return (
    <Styled onClick={onClick}>
      <Img className='normal' src='/download.svg' />
      <Img className='hover' src='/download2.svg' />
      <span>Get Started</span>
    </Styled>
  )
}
