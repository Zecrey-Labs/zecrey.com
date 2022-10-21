import { ContentCard, TextWrap } from "components/legend/styles";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  overflow: hidden;
  .left {
    width: 31.25%;
    overflow: hidden;
    padding-left: 6rem;
    padding-top: 7.4rem;
    .title {
      span {
        display: inline-block;
        margin-left: 0.9rem;
        border: 0.1rem solid #2ad4d8;
        border-radius: 0.7rem;
        padding: 0 0.8rem;
        font-family: "Lexend";
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.6rem;
        letter-spacing: 0.02rem;
        color: #2ad4d8;
        padding-top: 0.2rem;
      }
    }
    .bg {
      animation-delay: 0.2s !important;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;
      svg {
        width: 36.1rem;
        height: 30.8rem;
      }
    }
  }
  .right {
    flex: 1;
    padding-top: 7.4rem;
    padding-right: 4rem;
  }
`;

export const PrivateWrap = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 8rem 0 0 4rem;
  }
  svg.img {
    position: absolute;
    width: 34.4rem;
    height: 28.7rem;
    top: 0;
    right: 3.8rem;
    z-index: -10;
  }
`;

export const AboutWrap = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 7rem 0 0 4rem;
  }
  svg.img {
    position: absolute;
    width: 44.9rem;
    height: 28.7rem;
    top: 0;
    right: 0;
    z-index: -10;
  }
`;

export const DeveloperWrap = styled(ContentCard)`
  position: relative;
  ${TextWrap} {
    padding: 7rem 0 0 39.5rem;
  }
  svg.img {
    position: absolute;
    width: 26.4rem;
    height: 26.7rem;
    top: 2rem;
    left: 0;
    z-index: -10;
  }
`;
