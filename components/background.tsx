import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div<{ theme: 'dark' | 'light' }>`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgb(34, 34, 34)' : 'rgb(241, 241, 241)'};

  @keyframes background-routine1 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 3rem);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes background-routine2 {
    0% {
      transform: translate(0, 2rem);
    }
    50% {
      transform: translate(0, -3rem);
    }
    to {
      transform: translate(0, 2rem);
    }
  }

  div.dark {
    height: 100%;
    z-index: 1;
    flex: 1;
    background-color: rgba(34, 34, 34, 0.6);
    transition: opacity 0.6s ease-out;
  }
  img {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: auto;
  }
  img:nth-of-type(1) {
    animation: background-routine1 20s cubic-bezier(0.55, 1.375, 0.46, -0.48)
      infinite;
  }
  img:nth-of-type(2) {
    animation: background-routine2 20s cubic-bezier(0.55, 1.375, 0.46, -0.48)
      infinite;
  }
`

export const Background = observer(() => {
  const store = useStore()

  return (
    <Style theme={store.theme}>
      {store.theme === 'dark' && (
        <>
          <div className='dark'></div>
          <Img src='/section1/blue.png' alt='' />
          <Img src='/section1/pink.png' alt='' />
        </>
      )}
    </Style>
  )
})
