import { CenterFlex, FlatBtn, highlight } from '@/styles/global'
import styled from 'styled-components'

export const Brands = styled.div`
  width: 83.7rem;
  height: 100%;
`
export const BrandsWrap = styled(CenterFlex)`
  justify-content: space-between;
  width: 100%;
  height: 5.5rem;
  margin-bottom: 2rem;
  &:last-child {
    margin: 0;
  }
  ${CenterFlex} {
    width: 18rem;
    &.left {
      justify-content: flex-start;
    }
    &.right {
      // justify-content: flex-end;
    }
  }
  .lower img {
    margin-bottom: -1.3rem;
  }
  ${FlatBtn} {
    width: 11.6rem;
    min-width: 11.6rem;
    height: 3.5rem;
    border-radius: 1rem;
    color: #2ad4d9;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    svg {
      width: 0.6rem;
      height: 1rem;
      margin-left: 0.6rem;
      transform: rotate(90deg);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`
