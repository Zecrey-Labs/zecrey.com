import { BetweenFlex, CenterFlex, vw } from '@/styles/global'
import styled from 'styled-components'

export const Wrap = styled(CenterFlex)`
  width: 81.9rem;
  position: relative;
  height: 100%;
  .item-wrap {
    width: 77.5rem;
    justify-content: space-between;
  }
`

export const MobileWrap = styled(BetweenFlex)`
  width: calc(100% - ${vw(10)});
  margin: ${vw(20)} auto ${vw(40)} auto;
  padding-left: ${vw(5)};
  svg {
    max-width: ${vw(27)};
    max-height: ${vw(27)};
  }
`
