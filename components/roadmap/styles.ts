import { vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div<{ padding?: string }>`
  position: relative;
  width: auto;
  height: 100%;
  padding: 6rem 0 7rem 0;
  svg.line {
    display: block;
    width: 83rem;
    height: 0.3rem;
    margin-right: -0.9rem;
  }
  svg.flag {
    position: absolute;
    width: 2rem;
    height: 2.3rem;
    right: 37rem;
    bottom: 7rem;
  }
`;

export const BoxGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 83.7rem;
  margin-bottom: 3.5rem;
`;

export const Box = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  padding: 1.4rem 2.3rem 0 2.5rem;
  border-radius: 1rem;
  transition: all 120ms ease-out;
  label {
    display: block;
    padding-bottom: 0.7rem;
    font-family: IBM Plex sans;
    font-style: italic;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: #fff;
    opacity: 0.3;
    transition: all 120ms ease-out;
    cursor: default;
  }
  span {
    display: block;
    height: 6rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #e9e9e9;
    transition: all 120ms ease-out;
    cursor: default;
    opacity: 0.4;
    i {
      display: block;
      font-style: normal;
    }
  }
  &.ac {
    label,
    span {
      color: #2ad4d8;
      opacity: 1;
    }
    label {
      font-size: 3.6rem;
      line-height: 5.2rem;
    }
    span {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    label,
    span {
      opacity: 1;
    }
  }
  &.muted:hover {
    background: rgba(255, 255, 255, 0.05);
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
  .map {
    position: relative;
    height: ${vw(486)};
    padding: ${vw(20)} 0 ${vw(28)} 0;
    div {
      width: ${vw(172)};
      padding-bottom: ${vw(42)};
      margin-left: ${vw(50)};
      label {
        display: block;
        font-family: Zing Rust;
        font-style: italic;
        font-weight: 700;
        color: #fff;
      }
      span {
        font-family: "IBM Plex Sans";
        font-weight: 500;
        font-size: ${vw(12)};
        color: #e9e9e9;
      }
      &:last-child {
        padding: 0;
      }
      &.card_1 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(34)};
        }
        opacity: 0.3;
      }
      &.card_2 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(52)};
        }
        opacity: 0.6;
      }
      &.card_3 {
        label {
          font-size: ${vw(36)};
          line-height: ${vw(34)};
          color: #2ad4d8;
        }
        span {
          font-weight: 700;
          color: #2ad4d8;
          font-size: ${vw(14)};
          margin-top: ${vw(-4)};
        }
      }
      &.card_4 {
        label {
          font-size: ${vw(24)};
          line-height: ${vw(34)};
        }
        opacity: 0.6;
      }
    }
    svg.line {
      position: absolute;
      transform: rotate(90deg);
      width: ${vw(426)};
      top: ${vw(213)};
      left: ${vw(-203)};
    }
    svg.flag {
      position: absolute;
      width: ${vw(20)};
      height: ${vw(23)};
      left: ${vw(5)};
      top: ${vw(300)};
    }
  }
  label.title-2 {
    display: block;
    font-family: "IBM Plex Sans";
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    color: #f1f1f1;
    padding: ${vw(25)} 0;
    text-align: center;
  }
`;
