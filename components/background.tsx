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

  @keyframes blue-routine {
    0% {
      width: 100vw;
      height: 127vh;
      top: -24.7vh;
      left: 0;
    }
    50% {
      width: 108.8vw;
      height: 137vh;
      top: 10.6vh;
      left: -8.8vw;
    }
    to {
      width: 100vw;
      height: 127vh;
      top: -24.7vh;
      left: 0;
    }
  }
  @keyframes pink-routine {
    0% {
      width: 109.6vw;
      height: 128vh;
      top: -8vh;
      left: -2.2vw;
    }
    50% {
      width: 100vw;
      height: 117vh;
      top: -36vh;
      left: 0;
    }
    to {
      width: 109.6vw;
      height: 128vh;
      top: -8vh;
      left: -2.2vw;
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
    object-fit: cover;
  }
  img.blue {
    width: calc(100vw + 1.7rem);
    animation: blue-routine 20s cubic-bezier(0.55, 1.375, 0.46, -0.48) infinite;
  }
  img.pink {
    width: 100vw;
    animation: pink-routine 20s cubic-bezier(0.55, 1.375, 0.46, -0.48) infinite;
  }
`

export const Background = observer(() => {
  const store = useStore()

  return (
    <Style theme={store.theme}>
      {store.theme === 'dark' && (
        <>
          <div className='dark'></div>
          <Img src='/section1/blue.png' alt='' className='blue' />
          <Img src='/section1/pink.png' alt='' className='pink' />
        </>
      )}
    </Style>
  )
})
