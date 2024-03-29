import styled from "styled-components";
import { CenterFlex, vw } from "styles/globals";

export const Wrap = styled.div`
  min-width: 128rem;
  min-height: 100vh;
  .content {
    padding-top: 11.8rem;
  }
  @media (max-width: 780px) {
    min-width: 100vw;
    overflow-x: hidden;
    .content {
      padding-top: ${vw(50)};
    }
  }
`;

export const Container = styled.div`
  padding-top: 7.8rem;
  overflow: hidden;
  &.mobile {
    padding-top: ${vw(50)};
  }
`;

export const BGWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding-top: 7.8rem;
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 127.7vw;
    height: 58.7vw;
    &.bg_1 {
      background-position: center;
      background-repeat: repeat-x;
    }
    &.bg_2 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  animation: backgroundFadeOut 100ms ease-out 2s forwards;
  @keyframes backgroundFadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MobileBG = styled(CenterFlex)`
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  top: 0;
  .img-box {
    width: 100vw;
    height: ${73800 / 529}vw;
  }
`;
