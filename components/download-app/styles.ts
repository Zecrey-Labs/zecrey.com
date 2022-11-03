import styled from "styled-components";
import { CenterFlex, vw } from "styles/globals";

export const BannerWrap = styled(CenterFlex)`
  width: 144rem;
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
