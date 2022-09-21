import { CenterFlex, vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  height: 27.5rem;
  width: 80rem;
  margin-top: 1rem;
  .items-wrap {
    position: absolute;
    height: 25rem;
    width: 80rem;
    top: 2.5rem;
    bottom: 0;
    left: 41%;
    transform: translateX(-50%);
  }
  .dashed {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .logo {
    position: absolute;
    bottom: 8.7rem;
    left: 42rem;
  }
`;
export const LogoDot = styled.div`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  bottom: 5.9rem;
  left: 47.7rem;
  background: #2ad4d8;
  box-shadow: 0 0 0 0.3rem rgba(42, 212, 216, 0.4605);
`;

export const ItemWrap = styled(CenterFlex)<{
  opacity?: number;
  bottom: string;
  left: string;
  smaller?: boolean;
}>`
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: translateX(-50%);
  flex-direction: column;
  .icon {
    width: 1.8rem;
    color: #fff;
    opacity: ${(props) => props.opacity || 1};
  }
  .line {
    height: 10.6rem;
    flex-direction: column;
    label {
      text-transform: uppercase;
      font-family: "Zing Rust";
      font-size: ${(props) => (props.smaller ? "1.2rem" : "1.4rem")};
      line-height: 2rem;
      letter-spacing: 0.6px;
      color: #e3e3e3;
      padding-top: 0.6rem;
      padding-bottom: ${(props) => (props.smaller ? 0.9 : 0.3)}rem;
      opacity: ${(props) => props.opacity || 1};
      white-space: nowrap;
    }
    .svg-wrap {
      position: relative;
      width: 4rem;
      height: 6.1rem;
      margin-bottom: 0.7rem;
    }
    svg {
      position: absolute;
      width: 4rem;
      height: 6.1rem;
      top: 0;
      opacity: ${(props) => props.opacity || 1};
      &.normal {
      }
      &.highlight {
        opacity: 0;
      }
    }
    .dot {
      width: 0.6rem;
      height: 0.6rem;
      min-width: 0.6rem;
      min-height: 0.6rem;
      border-radius: 50%;
      box-shadow: 0 0 0 0.3rem rgba(255, 255, 255, 0.5);
      background: #fff;
    }
  }
  &:hover {
    .icon {
      opacity: 1;
    }
    svg,
    label {
      color: #2ad4d8;
      opacity: 1;
    }
    .dot {
      background: #2ad4d8;
      box-shadow: 0 0 0 0.3rem rgba(42, 212, 216, 0.5);
    }
    .line {
      svg {
        &.normal {
          opacity: 0;
        }
        &.highlight {
          opacity: 1;
        }
      }
    }
  }
`;

export const MobileLogo = styled.div`
  position: absolute;
  top: ${vw(176)};
  right: ${vw(-30)};
  .img-box {
    width: ${vw(135)};
    min-width: ${vw(135)};
    height: ${vw(150)};
  }
`;

export const MobileItemWrap = styled(CenterFlex)`
  position: absolute;
  .indicator {
    width: ${vw(6)};
    min-width: ${vw(6)};
    height: ${vw(6)};
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 ${vw(3)} rgba(255, 255, 255, 0.5);
  }
  svg {
    max-width: ${vw(18)};
    max-height: ${vw(18)};
    min-widht: ${vw(15)};
    min-height: ${vw(15)};
    color: #fff;
    margin: 0 ${vw(7)} 0 ${vw(15)};
    g {
      opacity: 1;
    }
  }
  label {
    text-transform: uppercase;
    font-family: "Zing Rust";
    font-style: italic;
    font-weight: 400;
    font-size: ${vw(14)};
    line-height: ${vw(20)};
    color: #e3e3e3;
    white-space: nowrap;
  }
`;
