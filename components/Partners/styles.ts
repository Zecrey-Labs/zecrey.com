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
    margin-bottom: ${vw(30)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${vw(30)};
    height: ${vw(28)};
    &.hide {
      display: none;
    }
    .grid-1 {
      grid-column: 1;
      grid-row: 1;
      &.center {
        flex: 1;
        padding-right: ${vw(20)};
      }
    }
    .grid-2 {
      grid-column: 2;
      grid-row: 1;
      &.center {
        flex: 1;
        padding-left: ${vw(20)};
      }
    }
    .grid-1,
    .grid-2 {
      text-align: center;
      img {
        height: ${vw(28)};
      }
    }
  }
`
