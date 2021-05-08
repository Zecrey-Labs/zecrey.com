import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { META } from '@/constant'

const Style = styled.div<{ theme: 'dark' | 'light' }>`
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  display: flex;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(34, 34, 34, 0.6)' : 'rgb(241, 241, 241)'};

  @keyframes background-routine {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translateY(5px);
    }
    to {
      transform: translate(0);
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
    animation: background-routine 3s linear infinite;
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
      <img src={`${META.basePath}/section1/blue.png`} alt='' />
      <img src={`${META.basePath}/section1/pink.png`} alt='' />
    </Style>
  )
})
