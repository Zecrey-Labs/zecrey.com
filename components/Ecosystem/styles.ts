import { CenterFlex, vw } from '@/styles/global'
import styled from 'styled-components'

export const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  margin-right: -9.2rem;
  margin-bottom: -6rem;
  height: 24rem;
  width: 96.6rem;
  .dashed {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    position: absolute;
    bottom: 8.7rem;
    left: 42rem;
  }
  @media (max-width: 780px) {
    position: relative;
    width: 100%;
    height: ${vw(336)};
    .ecosystem-icon {
      position: absolute;
      width: ${vw(273)};
      height: ${vw(398)};
      top: ${vw(-49)};
    }
    .logo {
      width: ${vw(125)};
      height: ${vw(150)};
      top: ${vw(66)};
      bottom: unset;
      right: ${vw(-40)};
      left: unset;
    }
  }
`
export const LogoDot = styled.div`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  bottom: 5.9rem;
  left: 47.7rem;
  background: #2ad4d8;
  box-shadow: 0 0 0 0.3rem rgba(42, 212, 216, 0.4605);
`

export const ItemWrap = styled(CenterFlex)<{
  opacity?: number
  bottom: string
  left: string
  smaller: boolean
}>`
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  transform: translateX(-50%);
  flex-direction: column;
  .icon {
    width: 1.8rem;
    color: #fff;
    opacity: ${props => props.opacity || 1};
  }
  .line {
    height: 10.6rem;
    flex-direction: column;
    label {
      text-transform: uppercase;
      font-family: 'Zing Rust';
      font-weight: 400;
      font-size: ${props => (props.smaller ? '1.2rem' : '1.4rem')};
      line-height: 2rem;
      letter-spacing: 0.6px;
      color: #e3e3e3;
      padding-top: 0.6rem;
      padding-bottom: ${props => (props.smaller ? 0.9 : 0.3)}rem;
      opacity: ${props => props.opacity || 1};
    }
    svg {
      width: 4rem;
      height: 6.1rem;
      margin-bottom: 0.7rem;
      opacity: ${props => props.opacity || 1};
      &.normal {
        display: block;
      }
      &.highlight {
        display: none;
      }
    }
    .dot {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      box-shadow: 0 0 0 0.3rem rgba(255, 255, 255, 0.5);
      background: #fff;
    }
  }
  &:hover {
    .icon {
      opacity: 1;
    }
    svg,
    label {
      color: #2ad4d8;
      opacity: 1;
    }
    .dot {
      background: #2ad4d8;
      box-shadow: 0 0 0 0.3rem rgba(42, 212, 216, 0.5);
    }
    .line {
      svg path {
        fill: url(#highlight);
      }
    }
  }
`

export const MobileItemWrap = styled(CenterFlex)<{ top: number; left: number }>`
  position: absolute;
  top: ${props => vw(props.top)};
  left: ${props => vw(props.left)};
  .indicator {
    width: ${vw(6)};
    min-width: ${vw(6)};
    height: ${vw(6)};
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 ${vw(3)} rgba(255, 255, 255, 0.5);
  }
  svg {
    max-width: ${vw(18)};
    max-height: ${vw(18)};
    min-widht: ${vw(15)};
    min-height: ${vw(15)};
    color: #fff;
    margin: 0 ${vw(7)} 0 ${vw(15)};
    g {
      opacity: 1;
    }
  }
  label {
    text-transform: uppercase;
    font-family: 'Zing Rust';
    font-style: italic;
    font-weight: 400;
    font-size: ${vw(14)};
    line-height: ${vw(20)};
    color: #e3e3e3;
    white-space: nowrap;
  }
`
