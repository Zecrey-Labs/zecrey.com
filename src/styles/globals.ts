import styled from "styled-components";

export const vw = (val: number) => {
  return (val * 100) / 320 + "vw";
};


export const ContainerCenter = styled.div`
  width: 1140px;
  margin: 0 auto;
  @media (max-width: 960px) {
    width: 100%;
    padding: 0 50px;
  }
`;

