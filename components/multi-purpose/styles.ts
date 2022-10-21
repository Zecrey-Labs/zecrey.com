import { BetweenFlex, CenterFlex, vw } from "styles/globals";
import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  height: 100%;
  margin-top: 8rem;
  margin-bottom: 4.4rem;
  .items-wrap {
    width: 80rem;
    justify-content: space-between;
  }
  .corner-link {
    float: right;
    margin-top: 6rem;
  }
`;

export const MobileWrap = styled.div`
  margin-top: ${vw(30)};
  ${BetweenFlex} {
    padding: 0 ${vw(10)};
    margin-bottom: ${vw(20)};
    &:last-child {
      padding: 0 ${vw(40)};
      margin-bottom: ${vw(34)};
    }
  }
`;

export const ItemWrap = styled(CenterFlex)`
  flex-direction: column;
  width: ${vw(35)};
  svg {
    width: ${vw(35)};
    height: ${vw(35)};
    margin-bottom: ${vw(5)};
  }
  label {
    font-family: "Lexend";
    font-weight: 500;
    font-size: ${vw(10)};
    line-height: ${vw(12)};
    color: #f1f1f1;
    text-transform: capitalize;
  }
`;
