import { CenterFlex } from '@/styles/global'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'

const Wrap = styled.div`
  position: relative;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
  transition: all 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    .tip-wrap {
      display: block;
    }
    svg {
      transform: scale(1.1);
    }
  }
`
const TipWrap = styled.div`
  position: absolute;
  display: none;
  width: 36.5rem;
  left: 50%;
  bottom: 13.5rem;
  transform: translateX(-50%);
  padding: 2rem;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 1rem;
`
const Tip = styled.div`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #f1f1f1;
`
const Link = styled.a`
  display: block;
  width: 32.5rem;
  height: 3.5rem;
  border-radius: 0.6rem;
  line-height: 3.5rem;
  text-align: center;
  text-decoration: none;
  color: #2ad2d6;
  transition: background 120ms ease-out;
  margin-top: 0.7rem;
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: 1.4rem;
  svg {
    width: 0.6rem;
    height: 1rem;
    color: inherit;
  }
  &:hover {
    text-decoration: none;
    background: #2ad4d8;
    color: #252525;
  }
`
const Trigger = styled(CenterFlex)<{
  size?: { width: string; height: string }
}>`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  &:hover label {
    color: white;
  }
  .icon-wrap {
    display: flex;
    align-items: center;
    pointer-events: none;
    margin-bottom: 11px;
    margin-top: 10px;
    svg {
      width: ${props => props.size?.width || '7rem'};
      height: ${props => props.size?.height || '7rem'};
      color: #f1f1f1;
      transition: all 0.5s;
    }
  }
  label {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5rem;
    color: #f1f1f1;
    text-align: center;
    text-transform: capitalize;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 10rem;
    height: 1.5rem;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const BubbleButton = (props: {
  children: ReactNode
  label: string
  tip?: string
  linkLabel?: string
  link?: string
  size?: { width: string; height: string }
}) => {
  return (
    <Wrap className='bubble-button'>
      {props.tip && (
        <TipWrap className='tip-wrap'>
          <Tip>{props.tip}</Tip>
          {props.link && props.linkLabel && (
            <Link href={props.link} target='_blank' rel='noreferrer'>
              {props.linkLabel} <Icon name='dart-2' />
            </Link>
          )}
        </TipWrap>
      )}
      <Trigger size={props.size}>
        <div className='icon-wrap'>{props.children}</div>
        <label>{props.label}</label>
      </Trigger>
    </Wrap>
  )
}

export default BubbleButton
