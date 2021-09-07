/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import styled from 'styled-components'
import { desktopPx2vw } from '@/utils'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: Lexend;
    font-size: ${desktopPx2vw(60)};
    font-style: normal;
    font-weight: 800;
    line-height: ${desktopPx2vw(75)};
    letter-spacing: 0.7235293984413147px;
    text-align: left;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${desktopPx2vw(22)};
  }
  h2 {
    font-family: Lexend;
    font-size: ${desktopPx2vw(28)};
    font-style: normal;
    font-weight: 600;
    line-height: ${desktopPx2vw(35)};
    letter-spacing: 0;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: ${desktopPx2vw(72)};
  }
  iframe,
  video {
    width: ${desktopPx2vw(1686)};
    height: ${desktopPx2vw(902)};
    max-height: calc(100vh - ${desktopPx2vw(220)});
    max-width: calc(186.91vh - ${desktopPx2vw(411)});
  }
`

const url =
  'https://zecrey.obs.ap-southeast-3.myhuaweicloud.com:443/Meet.Zecrey%202021%201080p.mp4?AccessKeyId=BEEB9AHVC2WCDCOIOETF&Expires=1661313910&Signature=k4Mico/8UGIgXTVvxhG5YuKaJLo%3D'

export const Section2 = () => {
  return (
    <Styled>
      <h1>Feature Introduction</h1>
      <h2>know about Zecrey in 3 minutes</h2>
      <video
        src={url}
        playsInline={false}
        controls={true}
        poster='/poster.png'
      />
    </Styled>
  )
}
