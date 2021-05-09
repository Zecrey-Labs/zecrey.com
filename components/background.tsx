import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div<{ theme: 'dark' | 'light' }>`
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  display: flex;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(34, 34, 34, 0.6)' : 'rgb(241, 241, 241)'};

  @keyframes bg1 {
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
    z-index: -10;
    flex: 1;
    background-color: rgb(34, 34, 34);
    opacity: ${({ theme }) => (theme === 'dark' ? 1 : 0)};
    transition: opacity 0.6s ease-out;
  }
  img {
    z-index: -1;
    position: absolute;
    animation: bg1 20s cubic-bezier(0.55, 1.375, 0.46, -0.48) infinite;
    display: ${({ theme }) => (theme === 'dark' ? 'normal' : 'none')};
  }
  img:nth-of-type(1) {
    top: 30px;
    left: 7px;
  }
  img:nth-of-type(2) {
    top: -481px;
    left: -158px;
  }
`

export const Background = observer(() => {
  const store = useStore()

  return (
    <Style theme={store.theme}>
      <div className='dark'></div>
      <Img src='/section1/blue.png' alt='' />
      <Img src='/section1/pink.png' alt='' />
    </Style>
  )
})
