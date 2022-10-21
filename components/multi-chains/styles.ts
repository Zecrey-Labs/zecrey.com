import { BetweenFlex, vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 81.9rem;
  position: relative;
  height: 100%;
  padding: 7.5rem 0 5.5rem 0;
  .item-wrap {
    width: 77.5rem;
    justify-content: space-between;
  }
  .corner-link {
    float: right;
    margin-top: 3.7rem;
  }
`;

export const MobileWrap = styled(BetweenFlex)`
  width: calc(100% - ${vw(10)});
  margin: ${vw(50)} auto ${vw(40)} auto;
  padding-left: ${vw(5)};
  svg {
    width: ${vw(27)};
    height: ${vw(27)};
    max-width: ${vw(27)};
    max-height: ${vw(27)};
  }
`;
