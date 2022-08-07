import { vw } from '@/styles/global'
import styled from 'styled-components'

export const Wrap = styled.div`
  .outermostlayer {
    position: relative;
    width: 128rem;
    height: 50.9rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 4rem;
    .img-span {
      display: flex;
      align-items: center;
      position: absolute;
      height: 1.4rem;
      left: 6rem;
      top: 26.5rem;
      opacity: 0;
      .privacy {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.4rem;
        letter-spacing: 0.0144706rem;
        color: #f1f1f1;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
    }
  }
  .extensionwallet {
    width: 10.5rem;
    height: 2rem;
    position: absolute;
    left: 6rem;
    top: 5.3rem;
    opacity: 0;
  }
  .oneclick {
    width: 29.4rem;
    height: 6.6rem;
    position: absolute;
    height: 6.6rem;
    left: 4.69%;
    right: 73.12%;
    top: 29rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 800;
    font-size: 21px;
    line-height: 3.2rem;
    letter-spacing: 0.0313529rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    color: transparent;
    -webkit-background-clip: text;
    opacity: 0;
  }
  .download {
    width: 10.7rem;
    height: 2.6rem;
    position: absolute;
    left: 4.69%;
    right: 86.95%;
    top: 36.2rem;
    bottom: 16.5%;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 1.3rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.0168824rem;
    color: #ffffff;
    text-align: center;
    opacity: 0;
    &:hover {
      background: #ffffff;
      box-sizing: border-box;
      color: #2a2a2a;
      cursor: pointer;
    }
  }
  .rightpicture {
    width: 80rem;
    height: 44.2rem;
    position: absolute;
    top: 6.7rem;
    left: 42.8rem;
    opacity: 0;
  }
  .cross {
    width: 100%;
    /* height: 44.2rem; */
  }
  &.visible {
    .extensionwallet,
    .rightpicture {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .img-span,
    .oneclick,
    .download,
    button.video {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
  }
  @keyframes move22 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  button.video {
    position: absolute;
    border: none;
    background: none;
    padding: 0;
    left: 6rem;
    bottom: 5rem;
    color: #2ad4d8;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    opacity: 0;
    svg {
      width: 1.6rem;
      height: 1.6rem;
      color: inherit;
      margin-right: 0.5rem;
      vertical-align: text-bottom;
    }
  }
`

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(290)};
  padding: ${vw(30)} ${vw(20)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
  overflow: hidden;
  label.title-1 {
    display: block;
    font-family: 'Lexend';
    font-weight: 700;
    font-size: ${vw(18)};
    line-height: ${vw(22.5)};
    text-align: center;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  label.title-2 {
    display: block;
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: ${vw(12)};
    line-height: ${vw(14)};
    color: #f1f1f1;
    padding: ${vw(25)} 0;
    text-align: center;
  }
  .img-box {
    width: ${vw(535)};
    height: ${vw(296)};
    margin-left: ${vw(-290)};
    margin-bottom: ${vw(25)};
  }
  a {
    margin-bottom: ${vw(10)};
  }
  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${vw(36)};
    border: ${vw(1)} solid #2ad4d8;
    border-radius: ${vw(10)};
    font-family: 'IBM Plex Sans';
    font-size: ${vw(12)};
    font-weight: 500;
    color: #2ad4d8;
    background: none;
    &:hover {
      text-decoration: none;
    }
    svg {
      width: ${vw(16)};
      height: ${vw(16)};
      margin-right: ${vw(5)};
    }
  }
  video.video-on-mobile {
    position: absolute;
    z-index: -100;
    pointer-events: none;
    bottom: 0;
  }
`
