import styled from "styled-components";
import { CenterFlex, FlatBtn, vw } from "styles/globals";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 7.8rem;
  border-bottom: 0.1rem solid #4e4e4e;
  background: rgba(56, 56, 56, 0.8);
  z-index: 1000;
  backdrop-filter: blur(5rem);
  /* position: relative; */
  &.header-container {
    border-bottom: 0.1rem solid#DADADA;
    background: #e7e7e7;
  }
`;
export const Wrap = styled(CenterFlex)`
  width: 144rem;
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0 3rem 0 3.6rem;
`;
export const Brand = styled(FlatBtn)``;
export const Nav = styled(CenterFlex)<{ dark: boolean }>`
  flex: 1;
  justify-content: flex-start;
  padding: 0 6.3rem;
  height: 7.8rem;
  position: relative;
  .link {
    margin-right: 7.3rem;
    height: 100%;
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
    &:last-child {
      margin-right: 0;
    }
    &:hover .hover,
    &:hover .hover1 {
      display: block;
      cursor: pointer;
    }

    ${FlatBtn} {
      height: 100%;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      color: #fff;
      &.nav-link {
        color: #222;
      }
    }

    &.ac {
      border-bottom-color: ${(props) => (props.dark ? "#2AD4D9" : "#01ABB2")};

      ${FlatBtn} {
        font-weight: 800;
        color: ${(props) => (props.dark ? "#2AD4D9" : "#01ABB2")};
      }
    }

    .hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      width: 9.5rem;
      height: 3rem;
      position: absolute;
      top: 2.4rem;
      left: 27.4rem;
      display: none;
      z-index: -1;
    }
    .hover1 {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      width: 7.8rem;
      height: 3rem;
      position: absolute;
      top: 2.4rem;
      left: 40.4rem;
      display: none;
      z-index: -1;
    }
  }
`;
export const Download = styled(CenterFlex)`
  .divider {
    width: 0.1rem;
    height: 3.1rem;
    background: #fff;
    margin: 0 3.7rem;
  }
  .divider-light {
    background: #999;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 17rem;
    height: 4rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    border: 0.2rem solid rgba(42, 212, 217, 0.15);
    border-radius: 3.5rem;
    font-family: "Lexend";
    font-weight: bold;
    font-size: 1.8rem;
    color: #000;
    background-clip: padding-box;
    span {
      pointer-events: none;
      z-index: 100;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #2ad4d9;
      border-radius: 2.1rem;
      filter: blur(6.7957px);
      top: 0;
      left: 0;
      z-index: -10;
      opacity: 0;
      transition: opacity 120ms ease-out;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
    &.download {
      background: linear-gradient(180deg, #00b6ba 0%, #01abb2 100%);
      border: 0.2rem solid #00969c;
      color: #fff;
    }
  }
`;
export const MobileWrap = styled.div`
  position: fixed;
  width: 100%;
  height: ${vw(50)};
  top: 0;
  left: 0;
  z-index: 100;
  .header {
    height: 100%;
    border-bottom: 0.1rem solid #4e4e4e;
    backdrop-filter: blur(${vw(50)});
    border-bottom: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
    padding: 0 ${vw(20)};
    button.brand {
      width: ${vw(66)};
      height: ${vw(24)};
      .img-box {
        width: 100%;
        height: 100%;
      }
    }
    button.ctrl {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${vw(28)};
      height: ${vw(28)};
      border-radius: ${vw(5)};
      transition: background 250ms ease-out;
      svg {
        width: ${vw(18)};
        height: ${vw(12)};
        color: #d8d8d8;
        transition: transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
      }
      &.ac {
        background: rgba(216, 216, 216, 0.15);
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  .menu {
    position: absolute;
    opacity: 1;
    pointer-events: none;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(56, 56, 56, 0.3);
    border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(${vw(50)});
    border-radius: 0 0 ${vw(10)} ${vw(10)};
    padding: ${vw(64)} ${vw(35)} 0 ${vw(35)};
    z-index: -100;
    transform: translateY(-100vh);
    transition: transform 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    button.link {
      width: 100%;
      height: ${vw(31)};
      border-bottom: ${vw(0.5)} solid rgba(255, 255, 255, 0.5);
      text-align: left;
      font-family: "Lexend";
      font-weight: 500;
      font-size: ${vw(12)};
      color: #fff;
      &:disabled {
        opacity: 0.5;
      }
    }
    .media {
      padding: ${vw(25)} 0 ${vw(28)} 0;
    }
    .media a {
      display: inline-block;
      margin-right: ${vw(20)};
      &:last-child {
        margin-right: 0;
      }
      &.twitter,
      &.telegram {
        width: ${vw(18)};
        height: ${vw(15)};
      }
      &.medium {
        width: ${vw(15)};
        height: ${vw(15)};
      }
      &.discord {
        width: ${vw(15)};
        height: ${vw(17)};
        transform: translateY(${vw(1.5)});
      }
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    &.ac {
      pointer-events: auto;
    }
  }
`;
