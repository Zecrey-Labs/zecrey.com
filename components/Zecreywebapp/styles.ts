import { vw } from '@/styles/global'
import styled from 'styled-components'

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(300)};
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
    width: ${vw(281)};
    height: ${vw(297)};
    margin-right: ${vw(-221)};
    margin-bottom: ${vw(35)};
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${vw(36)};
    border: ${vw(1)} solid #2ad4d8;
    border-radius: ${vw(10)};
    font-family: 'Lexend';
    font-weight: 600;
    font-size: ${vw(12)};
    color: #2ad4d8;
    background: none;
    &:hover {
      text-decoration: none;
    }
    &:disabled {
      opacity: 0.5;
    }
    svg {
      width: ${vw(16)};
      height: ${vw(16)};
      margin-right: ${vw(5)};
    }
  }
`
