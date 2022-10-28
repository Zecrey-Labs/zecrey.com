import styled from "styled-components";
import { MobileWrap, vw } from "styles/globals";

export const Wrap = styled.div`
  display: flex;
  overflow: hidden;
  .left {
    width: 31.25%;
    overflow: hidden;
    padding-left: 6rem;
    padding-top: 7.4rem;
    .title {
      span {
        display: inline-block;
        margin-left: 0.9rem;
        border: 0.1rem solid #2ad4d8;
        border-radius: 0.7rem;
        padding: 0 0.8rem;
        font-family: "Lexend";
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.6rem;
        letter-spacing: 0.02rem;
        color: #2ad4d8;
        padding-top: 0.2rem;
      }
    }
  }
  .right {
    flex: 1;
    padding-top: 7.4rem;
    padding-right: 4rem;
  }
`;

export const AnimWrap = styled.div`
  position: absolute;
  width: 50rem;
  height: 36rem;
  bottom: 0;
  left: -8rem;
  overflow: hidden;
  animation-delay: 0.2s !important;
  .renderer {
    position: absolute;
    width: 50rem;
    height: 50rem;
    top: 0;
    left: 0;
    svg image {
      transform: scale(1.15);
      transform-origin: center;
    }
  }
`;

export const TextWrap = styled.div`
  .main {
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.6rem;
    letter-spacing: 0.025rem;
    color: #fff;
  }
  .sub {
    width: 37rem;
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #f5f5f5;
    margin: 1.6rem 0 2rem 0;
  }
  a,
  button {
    display: inline-block;
    width: auto;
    padding: 0 1.5rem;
    background: none;
    border: 0.1rem solid #19cacf;
    border-radius: 1.8rem;
    font-family: "IBM Plex Sans";
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.015rem;
    color: #19cacf;
    transition: all 120ms ease-out;
    &:hover {
      background: #19cacf;
      color: #2b2b2b;
    }
  }
  &.mobile {
    .main {
      font-size: ${vw(16)};
      line-height: ${vw(20)};
      color: #2ad4d9;
    }
    .sub {
      font-size: ${vw(10)};
      line-height: ${vw(13)};
      margin: ${vw(8)} 0 0 0;
    }
    a,
    button {
      display: none;
    }
  }
`;

export const ContentCard = styled.div`
  width: 84rem;
  height: 28.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  &.mobile {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: ${vw(1)} solid rgba(255, 255, 255, 0.05);
    border-radius: ${vw(10)};
  }
`;

export const NftMarketWrap = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 7rem 0 0 4rem;
  }
  svg.img {
    position: absolute;
    &.img-1 {
      width: 18.5rem;
      height: 18.5rem;
      top: 4.8rem;
      right: 13.5rem;
      z-index: 10;
    }
    &.img-2 {
      width: 14.8rem;
      height: 11.7rem;
      top: 0;
      right: 4rem;
    }
    &.img-3 {
      width: 13.3rem;
      height: 11.6rem;
      bottom: 0;
      right: 0;
    }
  }
  &.mobile {
    ${TextWrap} {
      padding: ${vw(184)} 0 0 ${vw(20)};
      .main {
        width: ${vw(163)};
      }
      .sub {
        width: ${vw(230)};
      }
    }
    svg.img {
      &.img-1 {
        width: ${vw(145)};
        height: ${vw(145)};
        top: ${vw(20)};
        right: ${vw(75)};
      }
      &.img-2 {
        width: ${vw(120)};
        height: ${vw(120)};
        top: ${vw(-29)};
        right: ${vw(2)};
      }
      &.img-3 {
        width: ${vw(105)};
        height: ${vw(105)};
        bottom: ${vw(110)};
        right: ${vw(-30)};
      }
    }
  }
`;

export const AboutWrap = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 8.8rem 0 0 42.4rem;
  }
  svg.img {
    position: absolute;
    width: 44.8rem;
    height: 28.7rem;
    top: 0;
    left: 0;
    z-index: -10;
  }
  &.mobile {
    ${TextWrap} {
      padding: ${vw(25)} 0 0 ${vw(20)};
      .sub {
        width: ${vw(230)};
      }
    }
    .img-box {
      position: absolute;
      width: ${vw(270)};
      height: ${vw(300)};
      top: 0;
      left: 0;
    }
  }
`;

export const DeveloperWarp = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 7.8rem 0 0 4rem;
  }
  svg.img {
    position: absolute;
    width: 25.9rem;
    height: 26.7rem;
    bottom: 0;
    right: 0;
    z-index: -10;
  }
  &.mobile {
    ${TextWrap} {
      padding: ${vw(197)} 0 0 ${vw(20)};
      .main {
        width: ${vw(200)};
      }
      .sub {
        width: ${vw(230)};
      }
    }
    .img-box {
      position: absolute;
      width: ${vw(250)};
      height: ${vw(206)};
      top: 0;
      left: ${vw(20)};
    }
  }
`;

export const MobileStyles = styled(MobileWrap)`
  padding-left: ${vw(15)};
  padding-right: ${vw(15)};
  padding-bottom: ${vw(20)};
  .label {
    margin-top: ${vw(-10)};
    margin-bottom: ${vw(15)};
    .img-box {
      width: ${vw(42)};
      height: ${vw(42)};
    }
    span {
      font-family: "IBM Plex Sans";
      font-weight: 700;
      font-size: ${vw(18)};
      line-height: ${vw(23)};
      letter-spacing: ${vw(0.22)};
      color: #fff;
      padding-left: ${vw(10)};
    }
  }
`;

export const MoreText = styled.div<{ ac: boolean }>`
  width: 100%;
  padding: ${vw(20)};
  padding-bottom: ${(props) => (props.ac ? vw(20) : vw(15))};
  margin-bottom: ${vw(10)};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${vw(10)};
  button {
    display: block;
    font-family: "IBM Plex Sans";
    font-size: ${vw(12)};
    line-height: ${vw(16)};
    color: #2ad4d8;
    margin: 0 auto;
  }
  p {
    font-family: "IBM Plex Sans";
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    color: #fff;
    &.top {
      margin-top: 0;
      margin-bottom: ${vw(10)};
    }
    &.bottom {
      margin-top: ${vw(16)};
      margin-bottom: 0;
    }
  }
`;
