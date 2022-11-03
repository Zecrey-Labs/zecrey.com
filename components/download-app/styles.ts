import styled from "styled-components";
import { CenterFlex, MobileWrap, vw } from "styles/globals";

export const BannerWrap = styled(CenterFlex)`
  width: 128rem;
  height: 17.5rem;
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.3rem);
  border-radius: 1rem;
  margin: 3rem auto 2rem auto;
  padding: 3rem 4rem;
  justify-content: flex-start;
  .logo {
    width: 11.5rem;
    heihgt: 11.5rem;
    display: inline-block;
    vertical-align: center;
    background: rgba(0, 0, 0, 0.15);
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    border-radius: 2.5rem;
    padding: 1.8rem 2rem;
    margin-right: 3rem;
  }
  .title {
    font-family: "IBM Plex Sans";
    .main {
      justify-content: flex-start;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.1rem;
      color: #2ad4d9;
      .beta {
        border: 0.1rem solid #2ad4d8;
        border-radius: 0.5rem;
        padding: 0.4rem 0.6rem;
        margin-left: 0.8rem;
      }
    }
    .sub {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: #f1f1f1;
      padding-top: 0.8rem;
    }
  }
`;

export const MobileBanner = styled(CenterFlex)`
  width: 100%;
  height: ${vw(40)};
  border-bottom: ${vw(1)} solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(${vw(27)});
  padding: 0 ${vw(20)};
  .img-box {
    width: ${vw(20)};
    height: ${vw(20)};
  }
  .text {
    flex: 1;
    font-family: "IBM Plex Sans";
    font-size: ${vw(12)};
    line-height: ${vw(16)};
    color: #fff;
    padding: 0 ${vw(5)};
  }
  button {
    width: ${vw(60)};
    height: ${vw(20)};
    border: none;
    background: #2ad4d9;
    border-radius: ${vw(35)};
    font-family: "Source Sans Pro";
    font-weight: 700;
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    color: #2b2b2b;
  }
`;

export const Wrap = styled.div`
  width: 128rem;
  margin: 2rem auto 7rem auto;
  padding: 4rem 4rem 0 4rem;
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.3rem);
  border-radius: 1rem;
  .labels {
    width: 100%;
    transform: none;
    animation: none;
  }
  .contents {
    height: 53rem;
    .content-wrap {
      width: 100%;
      height: 53rem;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 53rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1.5rem 1.5rem 0 0;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-left: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-right: 0.1rem solid rgba(255, 255, 255, 0.1);
`;

export const Info = styled.div<{ top: string; left: string }>`
  padding-top: ${(props) => props.top};
  padding-left: ${(props) => props.left};
  .title {
    .main {
      font-family: "IBM Plex Sans";
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.1rem;
      color: #f1f1f1;
      i {
        font-style: italic;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: #f7821b;
        padding-left: 0.6rem;
      }
    }
    .sub {
      font-family: "IBM Plex Sans";
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: #f1f1f1;
      opacity: 0.5;
      padding-top: 0.9rem;
      padding-bottom: 4.6rem;
    }
  }
  .divider {
    width: 35.5rem;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.1);
  }
  .details {
    height: 17.4rem;
    padding-top: 3.9rem;
    span {
      display: block;
      font-family: "Source Sans Pro";
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #f5f5f5;
    }
  }
  .logos {
    padding-top: 3.5rem;
    .img-box {
      display: inline-block;
      vertical-align: top;
      margin-right: 2rem;
    }
  }
`;

export const AndroidWrap = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  .img-box.app {
    position: absolute;
    bottom: 0;
    left: 13.7rem;
  }
  .qr-button {
    position: absolute;
    width: 4.2rem;
    height: 4.2rem;
    top: 2.1rem;
    right: 2.1rem;
    border-radius: 0.8rem;
    background: none;
    transition: all 120ms ease-out;
    cursor: pointer;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: #fff;
      opacity: 0.5;
      transition: opacity 120ms ease-out;
      pointer-events: none;
    }
    .hover-up {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0.8rem;
      right: 0;
      top: 5rem;
      padding: 1.2rem 1.2rem 0.8rem 1.2rem;
      transition: opacity 200ms ease-out;
      .qr {
        width: 7.6rem;
        height: 7.6rem;
      }
      .text {
        padding-top: 0.7rem;
        font-family: "IBM Plex Sans";
        font-size: 1.2rem;
        line-height: 1.6rem;
        text-align: center;
        color: #f1f1f1;
      }
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      svg,
      .hover-up {
        opacity: 1;
      }
    }
  }
`;

export const ExtensionWrap = styled(AndroidWrap)`
  .img-box.app {
    left: -14.7rem;
    bottom: -3.8rem;
  }
`;

export const MobileBox = styled(MobileWrap)`
  margin-top: ${vw(20)};
  padding: ${vw(20)} ${vw(25)} ${vw(30)} ${vw(25)};
  .title-1 {
    width: 100%;
  }
  .title-2 {
    padding: ${vw(15)} 0 ${vw(25)} 0;
    font-family: "IBM Plex Sans";
    font-size: ${vw(12)};
    line-height: ${vw(16)};
    opacity: 0.6;
    color: #f1f1f1;
  }
  .img-box {
    width: ${vw(210)};
    height: ${vw(303)};
    margin: 0 auto ${vw(20)} auto;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${vw(1)} solid #2ad4d8;
    background: none;
    border-radius: ${vw(10)};
    width: 100%;
    height: ${vw(36)};
    font-family: "Lexend";
    font-weight: 600;
    font-size: ${vw(12)};
    letter-spacing: ${vw(0.14)};
    color: #2ad4d8;
    svg {
      height: ${vw(13)};
      margin-right: ${vw(5)};
    }
    &:disabled {
      opacity: 0.5;
    }
  }
`;
