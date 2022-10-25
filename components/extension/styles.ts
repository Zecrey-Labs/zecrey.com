import { MainTitle, vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 4rem;
  padding-left: 6rem;
  padding-bottom: 5rem;
  overflow: hidden;
  svg.extension-wallet {
    display: block;
    width: 9.7rem;
    height: 1.7rem;
    margin-bottom: 20.8rem;
  }
  .title {
    justify-content: flex-start;
    font-family: "Helvetica";
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.015rem;
    color: #f1f1f1;
    animation-delay: 0.2s !important;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 0.8rem;
    }
  }
  ${MainTitle} {
    padding: 1rem 0 2rem 0;
    animation-delay: 0.2s !important;
  }
  a.download {
    display: block;
    width: 10.7rem;
    height: 2.6rem;
    border: 0.1rem solid #fff;
    border-radius: 1.3rem;
    font-family: Lexend;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.017rem;
    color: #fff;
    text-align: center;
    text-decoration: none;
    margin-bottom: 5.5rem;
    transition: all 120ms ease-out;
    animation-delay: 0.2s !important;
    &:hover {
      background: #fff;
      color: #2a2a2a;
    }
  }
  .video {
    color: #2ad4d8;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    animation-delay: 0.2s !important;
    svg {
      width: 1.6rem;
      height: 1.6rem;
      color: inherit;
      margin-right: 0.5rem;
      vertical-align: text-bottom;
    }
  }
  .img-wrap {
    position: absolute;
    width: 80rem;
    height: 44.2rem;
    left: 33.43%;
    bottom: 0;
    overflow: hidden;
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
  .title-1 {
    text-align: center;
  }
  label.title-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Helvetica";
    font-weight: 700;
    font-size: ${vw(12)};
    line-height: ${vw(14)};
    color: #f1f1f1;
    padding: ${vw(25)} 0;
    text-align: center;
    svg {
      width: ${vw(18)};
      height: ${vw(18)};
      margin-right: ${vw(6)};
    }
  }
  .img-box {
    width: ${vw(535)};
    height: ${vw(348)};
    margin-left: ${vw(-290)};
    margin-bottom: ${vw(25)};
  }
  a {
    margin-bottom: ${vw(10)};
  }
  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${vw(36)};
    border: ${vw(1)} solid #2ad4d8;
    border-radius: ${vw(10)};
    font-family: "IBM Plex Sans";
    font-size: ${vw(12)};
    font-weight: 500;
    color: #2ad4d8;
    background: none;
    &:hover {
      text-decoration: none;
    }
    svg {
      width: ${vw(16)};
      height: ${vw(16)};
      margin-right: ${vw(5)};
    }
  }
`;
