import styled from "styled-components";
import { CenterFlex, vw } from "styles/globals";

export const Wrap = styled.div`
  position: relative;
  padding: 3rem 0 5.7rem 0;
  text-align: center;
  .headline {
    margin: 0 auto;
  }
  .introduce {
    width: 77.5%;
    margin: 5.5rem auto 4rem auto;
    font-family: "IBM Plex Sans";
    font-size: 1.6rem;
    line-height: 2.1rem;
    letter-spacing: 0.02rem;
    color: #ffff;
    animation-delay: 0.2s !important;
  }
  .img-box.earth-bg {
    position: absolute;
    left: calc(50% - 19.2rem);
    bottom: 0;
    z-index: -1;
  }
`;

export const Media = styled(CenterFlex)`
  animation-delay: 0.5s !important;
  .bubble-button {
    width: 13rem;
    height: 13rem;
    margin-right: 3.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const MobileWrap = styled.div`
  padding: ${vw(30)} ${vw(20)};
  position: relative;
  label.title-1 {
    display: block;
    font-family: "Lexend";
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
    font-family: "IBM Plex Sans";
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
      position: relative;
      height: 0;
      padding-bottom: 100%;
      position: relative;
      background: rgba(216, 216, 216, 0.05);
      border-radius: ${vw(10)};
      a {
        position: absolute;
        width: 100%;
        height: 100%;
        text-decoration: none;
        cursor: pointer;
        padding: 30% 0 12% 0;
        svg {
          position: absolute;
          width: ${vw(36)};
          color: #fff;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        span {
          position: absolute;
          font-family: "Lexend";
          font-size: ${vw(12)};
          color: #fff;
          text-transform: capitalize;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;
