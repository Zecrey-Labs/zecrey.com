import { vw } from '@/styles/global'
import styled from 'styled-components'
import { CenterFlex, FlatBtn } from '@/styles/global'

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(300)};
  padding: ${vw(30)} ${vw(20)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
  overflow: hidden;
  text-align: center;
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
      text-align: left;
    }
    .grid-2 {
      grid-column: 2;
      grid-row: 1;
      text-align: right;
    }
    .grid-1,
    .grid-2 {
      img {
        height: ${vw(28)};
      }
    }
  }
  button {
    background: none;
    border: none;
    color: #2ad4d9;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: ${vw(12)};
    img {
      width: ${vw(10)};
      height: ${vw(10)};
      margin-left: ${vw(5)};
    }
  }
`

export const Brands = styled.div`
  width: 83.7rem;
  height: 100%;
  margin-top: -7rem;
`
export const BrandsWrap = styled(CenterFlex)`
  justify-content: space-between;
  width: 100%;
  height: 5.5rem;
  margin-bottom: 2rem;
  &:last-child {
    margin: 0;
  }
  ${CenterFlex} {
    width: 18rem;
    &.left {
      justify-content: flex-start;
    }
    &.right {
      // justify-content: flex-end;
    }
    &.center {
      justify-content: center;
    }
  }
  .lower img {
    margin-bottom: -1.3rem;
  }
  img {
    opacity: 0.85;
    transition: opacity 120ms ease-out;
  }
  img:hover {
    opacity: 1;
  }
  ${FlatBtn} {
    width: 11.6rem;
    min-width: 11.6rem;
    height: 3.5rem;
    border-radius: 1rem;
    color: #2ad4d9;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    svg {
      width: 0.6rem;
      height: 1rem;
      margin-left: 0.6rem;
      transform: rotate(90deg);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`
