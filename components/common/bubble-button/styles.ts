import { CenterFlex } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div<{
  size?: {
    width: string;
    height: string;
    marginLeft?: string;
    marginRight?: string;
  };
}>`
  position: relative;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
  margin-left: ${(props) => props.size?.marginLeft || 0};
  margin-right: ${(props) => props.size?.marginRight || 0};
  transition: all 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    .tip-wrap {
      background: rgba(0, 0, 0, 0.85);
      transform: translateY(-0.5rem);
      visibility: visible;
      .tip,
      .link {
        opacity: 1;
      }
    }
  }
`;
export const TipWrap = styled.div`
  position: absolute;
  width: 36.5rem;
  left: 50%;
  bottom: 13rem;
  margin-left: -18.25rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.6s 0.1s;
  background: rgba(0, 0, 0, 0);
  visibility: hidden;
`;
export const Tip = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #f1f1f1;
  transition: all 0.6s;
  opacity: 0;
`;
export const Link = styled.a`
  display: block;
  width: 32.5rem;
  height: 3.5rem;
  border-radius: 0.6rem;
  line-height: 3.5rem;
  text-align: center;
  text-decoration: none;
  color: #2ad2d6;
  transition: background 120ms ease-out;
  margin-top: 0.7rem;
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 1.4rem;
  opacity: 0;
  transition: all 0.6s;
  svg {
    width: 0.6rem;
    height: 1rem;
    color: inherit;
    margin-top: 1.2rem;
    margin-left: 0.5rem;
  }
  &:hover {
    text-decoration: none;
    background: #2ad4d8;
    color: #252525;
  }
`;
export const Trigger = styled(CenterFlex)<{
  size?: { width: string; height: string };
}>`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    label {
      color: white;
    }
    svg {
      transform: scale(1.1);
    }
  }
  .icon-wrap {
    display: flex;
    align-items: center;
    pointer-events: none;
    margin-bottom: 1.1rem;
    margin-top: 1rem;
    svg {
      width: ${(props) => props.size?.width || "7rem"};
      height: ${(props) => props.size?.height || "7rem"};
      color: #f1f1f1;
      transition: all 0.6s;
    }
  }
  label {
    font-family: "Source Sans Pro";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5rem;
    color: #f1f1f1;
    text-align: center;
    text-transform: capitalize;
    pointer-events: none;
    letter-spacing: 0.1rem;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 10rem;
    height: 1.5rem;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
