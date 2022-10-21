import styled from "styled-components";
import { CenterFlex, FlatBtn, vw } from "styles/globals";

export const Wrap = styled.div`
  &.isShow {
    .show {
      height: 62rem;
      transition: all 0.7s;
      li {
        transition: opacity 0.7s;
        &.none {
          opacity: 0.85;
        }
      }
    }
  }
  .partner {
    width: 81.9rem;
    height: 18.163rem;
    position: absolute;
    top: -32px;
    right: 0;
    display: flex;
    flex-wrap: wrap;
  }
  li img {
    display: inline-block;
    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }
  li {
    width: 25%;
    height: 7.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &.left1 img {
      margin-left: -10px;
    }
    &.left2 img {
      margin-left: -40px;
    }
    &.left3 img {
      margin-left: -30px;
    }
    &.left4 img {
      margin-left: 10px;
    }
    &.left5 img {
      margin-left: -47px;
    }
    &.none {
      cursor: default;
      opacity: 0;
    }
    &:last-child img {
      height: 7.2rem;
      margin-top: 1.1rem;
    }
  }

  .partner11 {
    &.none {
      display: none;
    }
    div {
      width: 116px;
      height: 35px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    span {
      width: 59px;
      height: 16px;
      font-family: "IBM Plex Sans";
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.144706px;
      color: #2ad4d9;
      margin-left: 22px;
      cursor: pointer;
    }
    img {
      margin-left: 6px;
      vertical-align: baseline;
    }
  }
`;

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
    font-family: "Lexend";
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
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: ${vw(12)};
    img {
      width: ${vw(10)};
      height: ${vw(10)};
      margin-left: ${vw(5)};
    }
  }
`;

export const Brands = styled.div`
  height: 100%;
  margin-right: -3.7rem;
`;

export const BrandsWrap = styled(CenterFlex)`
  justify-content: space-between;
  width: 83.7rem;
  height: 5.5rem;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 6rem;
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
    font-family: "IBM Plex Sans";
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
`;
