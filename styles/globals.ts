import styled from "styled-components";

export const vw = (val: number) => {
  return (val * 100) / 320 + "vw";
};

export const highlight = "#2AD4D9";

export const color = "#f1f1f1";

export const warn = "#f7821b";

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BetweenFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlatBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const CenteredFlatBtn = styled(FlatBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrimaryBtn = styled.button`
  border: 0.1rem solid ${highlight};
  border-radius: 0.8rem;
  font-family: "Lexend";
  font-weight: 600;
  background: transparent;
  transition: background 120ms ease-out, color 120ms ease-out;
  color: ${highlight};
  &:hover {
    background: ${highlight};
    color: #2b2b2b;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const HighLightBtn = styled.button`
  background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
  border: none;
  border-radius: 0.8rem;
  font-family: "Lexend";
  font-weight: 700;
  color: #000;
  &:hover {
    box-shadow: 0 0 0.5rem ${highlight};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const MainTitle = styled.div`
  display: inline-block;
  font-family: Lexend;
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: 0.028rem;
  background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 780px) {
    font-size: ${vw(18)};
    line-height: ${vw(22.5)};
  }
`;

export const MobileWrap = styled.div`
  position: relative;
  width: ${vw(300)};
  padding: ${vw(30)} ${vw(20)} ${vw(55)} ${vw(20)};
  border: ${vw(0.5)} solid rgba(255, 255, 255, 0.1);
  border-radius: ${vw(10)};
  background: rgba(56, 56, 56, 0.5);
  margin: 0 auto ${vw(20)} auto;
  overflow: hidden;
  backdrop-filter: blur(${vw(27)});
  .title-1 {
    text-align: center;
  }
  .title-2 {
    font-family: "IBM Plex Sans";
    font-size: ${vw(10)};
    line-height: ${vw(13)};
    text-align: center;
    color: #fff;
  }
`;

export const MobileBGIcon = styled.div<{ width: number; height: number }>`
  position: absolute;
  width: ${(props) => vw(props.width)};
  height: ${(props) => vw(props.height)};
  left: 0;
  bottom: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;
