import { ReactNode } from 'react'
import styled from 'styled-components'

const Link = styled.a`
  position: absolute;
  color: #2ad4d8;
  right: 0;
  bottom: -15px;
  cursor: pointer;
  &:hover {
    span {
      text-decoration: underline;
    }
  }
  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    color: inherit;
    vertical-align: middle;
  }
  span {
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
  }
`
const CornerLink = (props: { children: ReactNode; href: string }) => {
  return (
    <Link href={props.href} target='_black' rel='noreferrer'>
      {props.children}
    </Link>
  )
}

export default CornerLink
