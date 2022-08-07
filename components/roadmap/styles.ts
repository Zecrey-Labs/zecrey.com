import { vw } from '@/styles/global'
import styled from 'styled-components'

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
  .map {
    position: relative;
    height: ${vw(426)};
    padding: ${vw(20)} 0 ${vw(28)} 0;
    div {
      width: ${vw(172)};
      padding-bottom: ${vw(42)};
      margin-left: ${vw(50)};
      label {
        display: block;
        font-family: 'Lexend';
        font-style: italic;
        font-weight: 700;
        color: #fff;
      }
      span {
        font-family: 'IBM Plex Sans';
        font-weight: 500;
        font-size: ${vw(12)};
        color: #e9e9e9;
      }
      &:last-child {
        padding: 0;
      }
      &.card_1 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(34)};
        }
        opacity: 0.3;
      }
      &.card_2 {
        label {
          font-size: ${vw(36)};
          line-height: ${vw(52)};
          color: #2ad4d8;
        }
        span {
          font-weight: 700;
          color: #2ad4d8;
          font-size: ${vw(14)};
        }
      }
      &.card_3 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(34)};
        }
        opacity: 0.6;
      }
      &.card_4 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(34)};
        }
        opacity: 0.6;
      }
    }
    svg.line {
      position: absolute;
      transform: rotate(90deg);
      width: ${vw(426)};
      top: ${vw(213)};
      left: ${vw(-203)};
    }
    svg.flag {
      position: absolute;
      left: ${vw(9)};
      top: ${vw(145)};
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: ${vw(10)};
      height: ${vw(5)};
      border-radius: ${vw(20)};
      background-color: #2ad4d8;
      left: ${vw(5)};
      top: ${vw(162)};
    }
  }
  label.title-2 {
    display: block;
    font-family: 'IBM Plex Sans';
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    color: #f1f1f1;
    padding: ${vw(25)} 0;
    text-align: center;
  }
`
