import { vw } from '@/styles/global'
import styled from 'styled-components'
export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 7.8rem);
  min-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(43, 43, 43, 1);
  margin-top: -4rem;
  margin-bottom: 7.8rem;
  animation: backgroundFadeOut 1.7s cubic-bezier(0.44, 0.01, 0.23, 0.97) 2.5s
    forwards;
  overflow: hidden;
  @keyframes backgroundFadeOut {
    0% {
      background: rgba(43, 43, 43, 1);
    }
    100% {
      background: rgba(43, 43, 43, 0);
    }
  }
  .container {
    position: relative;
    width: 128rem;
    height: 58.6rem;
    z-index: 100;
  }
`
export const Box = styled.div`
  position: relative;
  width: 10.5rem;
  height: 32.6rem;
  background: rgba(56, 56, 56, 0.25);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  backdrop-filter: blur(2.7rem);
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 11.6rem;
  opacity: 0;
  animation: zoomIn1 1.7s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards,
    zoomIn2 0.4s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes zoomIn1 {
    0% {
      width: 10.5rem;
    }
    100% {
      width: 97.4rem;
    }
  }
  @keyframes zoomIn2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.05;
    &.dots {
      width: 27.2rem;
      height: 26.6rem;
      color: #fff;
    }
    &.logo {
      width: 15.3rem;
      height: 16.4rem;
      color: #fffdfd;
    }
  }
  @media (max-width: 780px) {
    animation: none;
    opacity: 1;
    width: ${vw(291)};
    height: ${vw(249)};
    margin: 0 auto;
    border-radius: ${vw(10)};
    padding: ${vw(25)};
    overflow: visible;
    margin-bottom: ${vw(154)};
    svg {
      opacity: 1;
      &.dots {
        width: ${vw(122)};
        height: ${vw(99)};
      }
      &.logo {
        width: ${vw(72)};
        height: ${vw(58)};
        border-radius: 0 0 ${vw(10)} 0;
      }
    }
  }
`
export const Label = styled.div`
  position: absolute;
  top: 18rem;
  left: 6rem;
  display: inline-block;
  height: 1.8rem;
  border: 0.1rem solid #2ad4d8;
  border-radius: 0.5rem;
  font-family: 'Lexend';
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #2ad4d8;
  padding: 0 0.7rem;
  transform: scale(0.92) translateY(1.3rem);
  transform-origin: left;
  opacity: 0;
  animation: fadeUp 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes fadeUp {
    0% {
      transform: scale(0.92) translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: scale(0.92) translateY(0);
      opacity: 1;
    }
  }
`
export const Text = styled.div`
  position: absolute;
  width: 47.4rem;
  top: 21.2rem;
  left: 6rem;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  background: linear-gradient(90deg, #29e9f0 0%, #f5b6ff 99.86%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeUp2 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 1s forwards;
  transform: translateY(1.3rem);
  opacity: 0;
  span.muted {
    opacity: 0;
  }
  @media (max-width: 780px) {
    position: relative;
    animation: none;
    transform: translateY(0);
    opacity: 1;
    width: 100%;
    font-size: ${vw(21)};
    line-height: ${vw(26)};
    top: unset;
    left: unset;
  }
`
export const Text2 = styled.div`
  position: absolute;
  width: 56.6rem;
  top: 31.2rem;
  left: 6rem;
  font-family: 'IBM Plex Sans';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.014rem;
  color: #ffffff;
  transform: translateY(1.3rem);
  opacity: 0;
  animation: fadeUp2 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 4s forwards;
  @keyframes fadeUp2 {
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
    position: relative;
    animation: none;
    transform: translateY(0);
    opacity: 1;
    width: ${vw(219)};
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    top: unset;
    left: unset;
    padding-top: ${vw(15)};
  }
`
export const Img = styled.img`
  position: absolute;
  top: 0;
  right: -4.5rem;
  width: 83.7rem;
  height: 58.6rem;
  opacity: 0;
  animation: imgFadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  @keyframes imgFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 780px) {
    animation: none;
    opacity: 1;
    width: ${vw(382)};
    height: ${vw(243)};
    top: ${vw(160)};
    left: ${vw(-60)};
    transform: scale(1.1);
  }
`
export const Video = styled.video`
  position: absolute;
  top: 0;
  right: -4.5rem;
  width: 83.7rem;
  height: 58.6rem;
  opacity: 0;
  animation: fadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const Bottom = styled.div`
  position: absolute;
  bottom: 4rem;
  opacity: 0;
  animation: fadeIn 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 5s forwards;
  div {
    font-family: 'Lexend';
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #ffffff;
  }
  svg {
    display: block;
    width: 1.3rem;
    height: 0.8rem;
    margin: 0.8rem auto 1rem auto;
    color: #ffffff;
    animation: move 1.8s ease-out 5s infinite;
  }
  @keyframes move {
    0% {
      transform: translateY(-15%);
    }
    50% {
      transform: translateY(35%);
    }
    100% {
      transform: translateY(-15%);
    }
  }
  @media (max-width: 780px) {
    animation: none;
    opacity: 1;
    width: 100%;
    text-align: center;
    bottom: ${vw(10)};
    div {
      font-size: ${vw(12)};
      line-height: ${vw(16)};
    }
    svg {
      animation: none;
      width: ${vw(10)};
      height: ${vw(7)};
      margin-top: ${vw(7)};
    }
    .longer & {
      bottom: unset;
      top: ${vw(490)};
    }
  }
`
export const MobileWrap = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - ${vw(100)});
  margin-bottom: ${vw(50)};
  &.longer {
    height: ${vw(440)};
  }
`
