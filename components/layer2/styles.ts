import styled from "styled-components";
import { vw } from "styles/globals";

export const Wrap = styled.div`
  display: flex;
  .left {
    width: 44.76%;
    overflow: hidden;
    svg {
      width: 50.4rem;
      height: 50.9rem;
    }
  }
  .right {
    width: 50.78%;
    padding-top: 7rem;
    .sub {
      font-family: IBM Plex Sans;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #f5f5f5;
      animation-delay: 0.2s !important;
      &.sub1 {
        margin-top: 1.3rem;
      }
      &.sub2 {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }
  }
`;

export const Layers = styled.div`
  display: flex;
  height: 27rem;
  overflow: hidden;
  animation-delay: 0.4s !important;
`;

export const LayerItem = styled.div`
  width: 30rem;
  min-width: 30rem;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  transform: translateY(7.8rem);
  margin-right: 3rem;
  padding: 3.5rem;
  transition: transform 0.8s cubic-bezier(0.44, 0.01, 0.23, 0.97),
    border 120ms cubic-bezier(0.44, 0.01, 0.23, 0.97);
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
  .info {
    display: flex;
    align-items: center;
    .name {
      padding-left: 1rem;
      label {
        display: block;
        font-family: IBM Plex Sans;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.3rem;
        letter-spacing: 0.02rem;
        color: #fff;
      }
      span {
        font-family: Source Sans Pro;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: #f5f5f5;
        opacity: 0.6;
        white-space: nowrap;
      }
    }
  }
  .desc {
    border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.44, 0.01, 0.23, 0.97);
    margin-top: -4.9rem;
    .text {
      font-family: "Source Sans Pro";
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #f5f5f5;
      &:first-child {
        margin-bottom: 2rem;
      }
    }
  }
  button {
    display: block;
    width: 4.8rem;
    height: 2.4rem;
    margin: 4rem auto 0 auto;
    background: rgba(255, 255, 255, 0.05);
    border: 0.1rem solid rgba(255, 255, 255, 0.35);
    border-radius: 1.3rem;
    transition: opacity 1s cubic-bezier(0.44, 0.01, 0.23, 0.97);
    opacity: 1;
    svg {
      width: 1.2rem;
      height: 1.2rem;
      transform: rotate(90deg);
      color: #fff;
      opacity: 0.35;
      margin-top: 0.3rem;
    }
  }
  &:hover {
    transform: translateY(0);
    border-color: #2ad4d9;
    .desc {
      opacity: 1;
    }
    button {
      opacity: 0;
    }
  }
`;

export const MobileLayerItem = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: ${vw(1)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(15)};
  padding: ${vw(20)} ${vw(12)};
  &:first-child {
    margin-top: ${vw(40)};
    margin-bottom: ${vw(20)};
  }
  .info {
    display: flex;
    align-items: center;
    .img-box {
      width: ${vw(55)};
      min-width: ${vw(55)};
      height: ${vw(55)};
      min-height: ${vw(55)};
    }
    .name {
      padding-left: ${vw(10)};
      label {
        display: block;
        font-family: IBM Plex Sans;
        font-weight: 700;
        font-size: ${vw(18)};
        line-height: ${vw(23)};
        letter-spacing: ${vw(0.2)};
        color: #fff;
      }
      span {
        font-family: Source Sans Pro;
        font-size: ${vw(14)};
        line-height: ${vw(18)};
        color: #f5f5f5;
        opacity: 0.6;
        white-space: nowrap;
      }
    }
  }
  .desc {
    border-top: ${vw(1)} solid rgba(255, 255, 255, 0.1);
    margin-top: ${vw(15)};
    padding-top: ${vw(15)};
    .text {
      font-family: "Source Sans Pro";
      font-size: ${vw(12)};
      line-height: ${vw(15)};
      color: #f5f5f5;
      &:first-child {
        margin-bottom: ${vw(20)};
      }
    }
  }
`;
