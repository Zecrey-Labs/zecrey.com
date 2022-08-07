import { BetweenFlex, CenterFlex, vw } from '@/styles/global'
import styled from 'styled-components'

export const Wrap = styled(CenterFlex)`
  position: relative;
  height: 100%;
  .items-wrap {
    width: 80rem;
    justify-content: space-between;
  }
`

export const MobileWrap = styled.div`
  ${BetweenFlex} {
    padding: 0 ${vw(10)};
    margin-bottom: ${vw(20)};
    &:last-child {
      padding: 0 ${vw(40)};
      margin-bottom: ${vw(34)};
    }
  }
`

export const ItemWrap = styled(CenterFlex)`
  flex-direction: column;
  width: ${vw(35)};
  svg {
    width: ${vw(35)};
    height: ${vw(35)};
    margin-bottom: ${vw(5)};
  }
  label {
    font-family: 'Lexend';
    font-weight: 500;
    font-size: ${vw(10)};
    line-height: ${vw(12)};
    color: #f1f1f1;
    text-transform: capitalize;
  }
`
