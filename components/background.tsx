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
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 3rem);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes pink-routine {
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
    background-color: rgba(34, 34, 34, 0.4);
    transition: opacity 0.6s ease-out;
  }
  img {
    z-index: -1;
    position: absolute;
    height: auto;
    height: 100%;
    object-fit: cover;
  }
  img.blue {
    width: calc(100vw + 1.7rem);
    right: 0;
    top: 0;
    animation: blue-routine 20s infinite;
  }
  img.pink {
    width: 100vw;
    left: -1rem;
    top: 2rem;
    animation: pink-routine 20s infinite;
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
