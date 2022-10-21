import styled from "styled-components";

export const Wrap = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => props.width / 10 + "rem"};
  min-width: ${(props) => props.width / 10 + "rem"};
  height: ${(props) => props.height / 10 + "rem"};
  min-height: ${(props) => props.height / 10 + "rem"};
  pointer-events: none;
  overflow: hidden;
  #img-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    top: 0;
    left: 0;
  }
`;
