import styled from "styled-components";
import { CenterFlex, MainTitle, vw } from "styles/globals";

export const CardWrap = styled.div`
  width: 128rem;
  height: auto;
  background: rgba(56, 56, 56, 0.5);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.7rem);
  border-radius: 1rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  .move13to0 {
    transform: translateY(1.3rem);
    opacity: 0;
  }
  .move06to0 {
    transform: translateY(0.6rem);
    opacity: 0;
  }
  &.visible {
    .move13to0 {
      animation: move1 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .move06to0 {
      animation: move2 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
    }
  }
  @keyframes move1 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes move2 {
    0% {
      transform: translateY(0.6rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(300)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
`;

export const CardLayoutWrap = styled.div`
  position: relative;
  .card-content {
    align-items: flex-start;
    & > .left {
      width: 31.25%;
      min-width: 31.25%;
      padding-left: 6rem;
      padding-top: 7.4rem;
    }
    & > .right {
      position: relative;
      flex: 1;
      padding-top: 7.4rem;
      padding-right: 8rem;
    }
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40rem;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  z-index: -10;
`;

export const BackgoundIcon = styled.div<{
  size: { width: string; height: string };
}>`
  overflow: hidden;
  position: absolute;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  left: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.05);
`;

export const Text = styled.div`
  width: 80rem;
  p {
    font-family: "IBM Plex Sans";
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
    margin: 0;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
  @media (max-width: 780px) {
    width: 100%;
    p {
      width: 100%;
      transform: translateY(0);
      opacity: 1;
      animation: none;
      font-size: ${vw(10)};
      line-height: ${vw(13)};
      text-align: center;
    }
  }
`;

export const Content = styled(CenterFlex)`
  width: 80rem;
  animation-delay: 0.2s !important;
`;

export const CardLayoutMobile = styled.div`
  position: relative;
  width: ${vw(300)};
`;

export const Title = styled(MainTitle)`
  display: block;
  width: 100%;
  font-family: "Lexend";
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: ${vw(18)};
  line-height: ${vw(22.5)};
  padding-bottom: ${vw(30)};
  margin: 0;
`;
