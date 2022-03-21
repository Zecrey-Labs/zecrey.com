import { FlatBtn } from '@/styles/global'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Icon from '../common/Icon'
import ZecreyEcosystemMap from '../Ecosystem/zecreyEcosystemMap'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% - 79rem);
`
const Trigger = styled(FlatBtn)`
  cursor: pointer;
  svg {
    width: 1.1rem;
    height: 1.5rem;
    color: #2ad4d8;
    margin-right: 0.6rem;
    vertical-align: middle;
    pointer-events: none;
  }
  span {
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1.2rem;
    color: #2ad4d8;
    vertical-align: middle;
    pointer-events: none;
  }
  &:hover span {
    text-decoration: underline;
  }
`

const Modal = () => {
  const [show, setShow] = useState(false)

  return (
    <Wrap>
      <Trigger onClick={() => setShow(!show)}>
        <Icon name='img' />
        <span>View Zecrey-Eco Map</span>
      </Trigger>
      {show &&
        ReactDOM.createPortal(
          <ZecreyEcosystemMap close={() => setShow(false)} />,
          document.getElementById('__next')
        )}
    </Wrap>
  )
}

export default Modal
