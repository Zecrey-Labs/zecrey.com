/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import styled from 'styled-components'
import { desktopPx2vw, px2vw } from '@/utils'

export const SideContentStyle = styled.div`
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
`
