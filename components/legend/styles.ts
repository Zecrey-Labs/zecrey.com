import styled from "styled-components";
import { vw } from "styles/globals";

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

export const Span = styled.span`
  display: inline-block;
  margin-left: ${vw(6)};
  border: 0.1rem solid #2ad4d8;
  border-radius: ${vw(5)};
  padding: 0 ${vw(4)};
  font-family: "Lexend";
  font-weight: 700;
  font-size: ${vw(14)};
  line-height: ${vw(18)};
  letter-spacing: ${vw(0.2)};
  color: #2ad4d8;
  padding-top: ${vw(2)};
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
  a {
    display: inline-block;
    width: auto;
    padding: 0 1.5rem;
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
`;

export const ContentCard = styled.div`
  width: 84rem;
  height: 28.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
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
`;
