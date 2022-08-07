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
  label.title-2 {
    display: block;
    font-family: 'IBM Plex Sans';
    font-size: ${vw(10)};
    line-height: ${vw(14)};
    color: #f1f1f1;
    padding: ${vw(15)} 0;
    text-align: center;
  }
  .grid {
    display: grid;
    grid-gap: ${vw(10)};
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${vw(10)};
    &:last-child {
      margin-bottom: -${vw(10)};
    }
    .grid-1 {
      grid-column: 1;
      grid-row: 1;
    }
    .grid-2 {
      grid-column: 2;
      grid-row: 1;
    }
    .grid-1,
    .grid-2 {
      height: 0;
      padding-bottom: 100%;
      position: relative;
      background: rgba(216, 216, 216, 0.05);
      border-radius: ${vw(10)};
      a {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        cursor: pointer;
        svg {
          width: ${vw(36)};
          color: #fff;
        }
        span {
          font-family: 'Lexend';
          font-size: ${vw(12)};
          color: #fff;
          text-transform: capitalize;
          padding-top: ${vw(28)};
        }
      }
    }
  }
`
