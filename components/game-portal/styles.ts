import styled from "styled-components";
import { FlatBtn, vw } from "styles/globals";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 81.5rem;
  padding-top: 2.2rem;
  padding-bottom: 8.3rem;
  @media (max-width: 780px) {
    display: block;
    width: ${vw(270)};
    padding-top: ${vw(19)};
    padding-bottom: 0;
  }
`;

export const Link = styled(FlatBtn)`
  position: absolute;
  bottom: 4.4rem;
  right: 0.2rem;
  color: #2ad4d9;
  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    color: inherit;
    vertical-align: middle;
  }
  span {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.2rem;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
  }
  &:hover span {
    text-decoration: underline;
  }
`;

export const PortalCard = styled.div<{}>`
  position: relative;
  display: inline-block;
  width: 39.2rem;
  height: 19.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: border 120ms ease-out;
  &:hover {
    border-color: #2ad4d9;
  }
  .title {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 6.2rem;
    svg {
      height: 2rem;
    }
  }
  .subtitle {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 9rem;
    svg {
      height: 1.2rem;
    }
  }
  button {
    display: block;
    width: 11.3rem;
    height: 2.6rem;
    margin: 1.5rem auto 0 auto;
    background: rgba(255, 255, 255, 0.05);
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 1.85rem;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.014rem;
    color: #ffffff;
    transition: border 120ms ease-out;
    &:hover {
      border-color: #2ad4d9;
    }
  }
  &:first-child {
    margin-right: 3.1rem;
  }
  @media (max-width: 780px) {
    display: block;
    width: ${vw(270)};
    height: ${vw(160)};
    border-radius: ${vw(15)};
    .img-box {
      width: 100%;
      height: ${vw(100)};
    }
    .title {
      top: ${vw(38)};
      svg {
        height: ${vw(15)};
      }
    }
    .subtitle {
      top: ${vw(58)};
      svg {
        height: ${vw(9)};
      }
    }
    button {
      width: ${vw(113)};
      height: ${vw(26)};
      margin: ${vw(15)} auto 0 auto;
      border: 0.1rem solid rgba(255, 255, 255, 0.2);
      border-radius: ${vw(18.5)};
      font-size: ${vw(12)};
      line-height: ${vw(16)};
    }
    &:first-child {
      margin-right: 0;
      margin-bottom: ${vw(15)};
    }
  }
`;
