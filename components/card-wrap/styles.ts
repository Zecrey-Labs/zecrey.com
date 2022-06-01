import { CenterFlex, vw } from '@/styles/global'
import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 128rem;
  height: 41rem;
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.7rem);
  border-radius: 1rem;
  padding: 7rem 8rem 6rem 4rem;
  margin: 0 auto 4rem auto;
  z-index: 10;
  .text-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const Title = styled.div`
  display: inline-block;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  width: 24rem;
  margin-left: 19px;
  background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(1.3rem);
  opacity: 0;
  &.title {
    width: 21rem;
  }
  .visible & {
    animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
  }
  @media (max-width: 780px) {
    animation: none;
    transform: none;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 1;
    &.title {
      width: 100%;
      font-size: ${vw(18)};
      line-height: ${vw(22.5)};
      padding-bottom: ${vw(30)};
      margin: 0;
    }
  }
`
export const IconWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40rem;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  z-index: -10;
`
export const BackgoundIcon = styled.div<{
  size: { width: string; height: string }
}>`
  width: 37.8rem;
  height: 26.5rem;
  overflow: hidden;
  position: absolute;
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  left: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.05);
  transform: translateY(0.6rem);
  opacity: 0;
  .visible & {
    animation: move3 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
  }
  @keyframes move3 {
    0% {
      transform: translateY(0.6rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
export const Text = styled.div`
  width: 79rem;
  p {
    font-family: 'IBM Plex Sans';
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #ffffff;
    transform: translateY(1.3rem);
    opacity: 0;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  .visible & {
    p {
      animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
  }
  @keyframes move1 {
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
    width: 100%;
    p {
      width: 100%;
      transform: translateY(0);
      opacity: 1;
      animation: none;
      font-size: ${vw(10)};
      line-height: ${vw(13)};
      text-align: center;
    }
  }
`
export const Content = styled(CenterFlex)`
  flex: 1;
  justify-content: flex-end;
  transform: translateY(1.3rem);
  opacity: 0;
  .visible & {
    animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
  }
`

export const MobileWrap = styled.div`
  width: ${vw(290)};
  padding: ${vw(30)} ${vw(20)} ${vw(60)} ${vw(20)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
`
