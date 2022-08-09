import { vw } from '@/styles/global'
import styled from 'styled-components'

export const Wrap = styled.div`
  .wrap {
    position: relative;
    width: 128rem;
    height: 50.9rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .privacy {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 1rem;
    z-index: 100;
    backdrop-filter: blur(2.7rem);
  }
  .text {
    width: 55rem;
    height: 9.5rem;
    position: absolute;
    top: 21.5rem;
    left: 6rem;
  }
  .text p {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.0144706rem;
    color: #ffffff;
    margin-top: 20px;
    opacity: 0;
  }
  .whitepaper {
    width: 9.3rem;
    height: 1.8rem;
    position: absolute;
    top: 40rem;
    left: 6rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
  }
  .join {
    width: 12rem;
    height: 1.8rem;
    position: absolute;
    top: 40rem;
    left: 19.2rem;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
  }
  .player {
    width: 55rem;
    height: 30.9rem;
    position: absolute;
    left: 67rem;
    top: 9rem;
    opacity: 0;
    img {
      width: 55rem;
      height: 100%;
      border-radius: 10px;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 22;
      width: 55rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      border: 1.03125px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 11.6rem;
        height: 11.6rem;
        cursor: pointer;
      }
    }
  }
  .meet {
    min-width: 27.6rem;
    height: 1.8rem;
    position: absolute;
    top: 41.7rem;
    left: 67rem;
  }
  .meet p {
    width: 55rem;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #2ad4d8;
    opacity: 0;
    text-align: center;
  }
  &.visible {
    .Pri,
    .player {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .text p {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
    .whitepaper,
    .join,
    .meet p {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
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
  @media (max-width: 780px) {
    .wrap {
      width: ${vw(300)};
      height: auto;
    }
    .privacy {
      position: relative;
      width: ${vw(300)};
      height: auto;
      padding: ${vw(30)} ${vw(20)} ${vw(25)} ${vw(20)};
      border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
      border-radius: ${vw(10)};
      background: rgba(56, 56, 56, 0.5);
      margin: 0 auto ${vw(20)} auto;
      z-index: unset;
    }
    label.title {
      display: block;
      text-align: center;
      background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Lexend';
      font-size: ${vw(18)};
      font-weight: 700;
    }
    .player {
      position: relative;
      top: unset;
      left: unset;
      width: ${vw(250)};
      height: ${vw(140)};
      margin: ${vw(30)} auto ${vw(10)} auto;
      img,
      .mask {
        width: 100%;
      }
    }
    .meet {
      position: relative;
      top: unset;
      left: unset;
      height: auto;
      text-align: center;
      p {
        width: 100%;
        font-size: ${vw(10)};
        line-height: ${vw(12.5)};
      }
    }
    .text {
      position: relative;
      width: 100%;
      top: unset;
      left: unset;
      height: auto;
      text-align: center;
      padding: ${vw(25)} 0 ${vw(47)} 0;
      p {
        font-size: ${vw(10)};
        line-height: ${vw(13)};
        margin: 0;
        &:last-child {
          margin-top: ${vw(10)};
        }
      }
    }
    .whitepaper {
      margin-bottom: ${vw(10)};
    }
    .whitepaper,
    .join {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      top: unset;
      left: unset;
      width: 100%;
      height: ${vw(36)};
      border: ${vw(1)} solid #2ad4d8;
      border-radius: ${vw(10)};
      font-size: ${vw(12)};
      &:hover {
        text-decoration: none;
      }
    }
    &.visible {
      .Pri,
      .player,
      .text p,
      .whitepaper,
      .join,
      .meet p {
        animation: none;
        transform: translateY(0);
        opacity: 1;
      }
    }
    video.video-on-mobile {
      position: absolute;
      z-index: -100;
      pointer-events: none;
    }
  }
`
export const Img = styled.div`
  position: relative;
  width: 54.9rem;
  height: 12.7rem;
  position: absolute;
  top: 10.099rem;
  left: 5.8rem;
  opacity: 0;
  img {
    width: 100%;
    margin-top: -10px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0.24rem;
    height: 2.8rem;
    background: #fff;
    right: 1.1rem;
    bottom: 1.8rem;
    opacity: 0.2;
    animation: shine 1.2s forwards infinite;
    animation-timing-function: steps(2, jump-none);
    pointer-events: none;
  }
  @keyframes shine {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`
