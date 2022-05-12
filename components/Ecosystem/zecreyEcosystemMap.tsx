import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FlatBtn } from '@/styles/global'
import classNames from 'classnames'

const Wrap = styled.div`
  position: fixed;
  min-width: ${125600 / 1440}vw;
  z-index: 2224;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  .ecosystemmap {
    max-width: 125.6rem;
    max-height: 76.9rem;
    width: ${125600 / 1440}vw;
    height: auto;
    background: #383838;
    mix-blend-mode: normal;
    opacity: 0.95;
    border: 0.1rem solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    z-index: 1000;
  }
  .map {
    width: 100%;
    height: 4.5rem;
    padding-top: 0.9rem;
    font-family: 'Lexend';
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #2ad4d9;
  }
  .picture {
    max-width: 120.6rem;
    max-height: 63rem;
    width: ${120600 / 1440}vw;
    height: ${63000 / 1440}vw;
    margin: 0 auto;
  }
  .picture img {
    width: 100%;
    height: 100%;
  }
  .button-close {
    display: block;
    width: 12rem;
    height: 3.4rem;
    border: 0.1rem solid #2ad4d9;
    box-sizing: border-box;
    border-radius: 1.8rem;
    margin: 3rem auto;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 3.4rem;
    text-align: center;
    color: #2ad4d9;
    cursor: pointer;
    &:hover {
      background: #01a2b3;
      color: white;
    }
  }
  &.scroll {
    display: block;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
    .ecosystemmap {
      margin: 3rem auto;
    }
  }
`

function ZecreyEcosystemMap(props: { close: () => void }) {
  const wrap = useRef<HTMLDivElement>(null)
  const modal = useRef<HTMLDivElement>(null)

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (!modal.current || !wrap.current) return
      if (modal.current.clientHeight > wrap.current.clientHeight) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    handler()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <Wrap className={classNames({ scroll })} ref={wrap}>
      <div className='ecosystemmap' ref={modal}>
        <div className='map'>
          <p>Zecrey Ecosystem Map</p>
        </div>
        <div className='picture'>
          <img src='/Ecosystem/ecosystem.png' alt='' />
        </div>
        <FlatBtn className='button-close' onClick={props.close}>
          Close
        </FlatBtn>
      </div>
    </Wrap>
  )
}

export default ZecreyEcosystemMap
