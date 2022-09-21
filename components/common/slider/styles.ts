import styled from "styled-components";
import { CenterFlex } from "styles/globals";

export const Labels = styled(CenterFlex)`
  position: relative;
  width: 84rem;
  height: 4.8rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  button {
    flex: 1;
    display: block;
    height: 100%;
    font-family: "IBM Plex Sans";
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 0.02rem;
    color: #fff;
    opacity: 0.5;
    transition: opacity 120ms ease-out,
      color 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
    &:hover {
      opacity: 1;
    }
    &.ac {
      opacity: 1;
      color: #2b2b2b;
    }
  }
`;

export const Indicator = styled.div<{ index: number }>`
  position: absolute;
  width: calc(33.33% - 1rem);
  height: calc(100% - 1rem);
  left: calc(0.5rem + ${(props) => props.index * 33.33}%);
  background: #2ad4d8;
  border-radius: 1rem;
  z-index: -1;
  transition: left 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Content = styled.div`
  position: relative;
  height: 28.6rem;
  animation-delay: 0.2s !important;
  .content-wrap {
    position: absolute;
    bottom: 0;
    transition: transform 0.8s cubic-bezier(0.44, 0.01, 0.23, 0.97),
      opacity 1s cubic-bezier(0.44, 0.01, 0.23, 0.97);
    &.be-left {
      transform: translateX(-64rem);
      opacity: 0;
    }
    &.be-right {
      transform: translateX(64rem);
      opacity: 0;
    }
  }
`;
