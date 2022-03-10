import { CenterFlex } from '@/styles/global'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'

const Wrap = styled(CenterFlex)<{
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
      font-family: 'IBM Plex Sans';
      font-weight: 700;
      font-style: italic;
      font-size: ${props => (props.smaller ? '1.2rem' : '1.4rem')};
      line-height: 2rem;
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

const Item = (props: {
  name: string
  icon: ReactNode
  opacity?: number
  bottom: string
  left: string
  smaller?: boolean
}) => {
  return (
    <Wrap
      opacity={props.opacity}
      bottom={props.bottom}
      left={props.left}
      smaller={props.smaller}>
      <div className='icon'>{props.icon}</div>
      <CenterFlex className='line'>
        <label>{props.name}</label>
        <Icon className='normal' name='dashed' />
        <div className='dot'></div>
      </CenterFlex>
    </Wrap>
  )
}

export default Item
