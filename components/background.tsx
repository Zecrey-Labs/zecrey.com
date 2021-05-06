import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
const blue = require('@/public/section1/blue.png')
const pink = require('@/public/section1/pink.png')

const Style = styled.div`
  &.dark {
    div.dark {
      display: normal;
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

      z-index: -10;
      min-width: 100vw;
      min-height: 100vh;
      position: fixed;
      background-color: rgb(34, 34, 34);
      display: flex;
      div.black {
        width: 100%;
        min-height: 100vh;
        background-color: rgba(34, 34, 34, 0.6);
      }
      img {
        z-index: -11;
        position: absolute;
        animation: background-routine 3s linear infinite;
      }
      img:nth-of-type(1) {
        top: 30px;
        left: 7px;
      }
      img:nth-of-type(2) {
        top: -481px;
        left: -158px;
      }
    }
    div.light {
      display: none;
    }
  }
  &.light {
    div.dark {
      display: none;
    }
    div.light {
      display: normal;
      z-index: -10;
      min-width: 100vw;
      min-height: 100vh;
      position: fixed;
      background-color: rgb(241, 241, 241);
    }
  }
`

export const Background = observer(() => {
  const store = useStore()

  return (
    <Style className={store.theme}>
      <div className='dark'>
        <div className='dark'></div>
        <img src={blue} alt='' />
        <img src={pink} alt='' />
      </div>
      <div className='light'></div>
    </Style>
  )
})
