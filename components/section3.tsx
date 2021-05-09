import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div`
  display: flex;
  flex-direction: column;
  width: 1288px;
  margin: 0 auto;
  h2 {
    text-align: left;
    font: normal normal bold 80px/120px Lexend;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    opacity: 1;
  }
  div.text {
    width: 443px;
    h3 {
      text-align: left;
      font: normal normal bold 42px/80px Lexend;
      letter-spacing: 0px;
      color: #e4e4e4;
      text-shadow: 0px 3px 12px #00000040;
      opacity: 1;
    }
    p {
      text-align: left;
      font: normal normal normal 24px/32px IBM Plex Sans;
      letter-spacing: 0px;
      color: #e4e4e4;
      opacity: 1;
    }
    &:nth-of-type(2) {
      align-self: flex-end;
    }
  }
`

export const Section3 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <h2>What Zecrey special</h2>
      <div className='text'>
        <h3>Confidential Assets</h3>
        <p>
          Make account balance and transaction amount confidential. Nobody will
          know your balance have except yourself.
        </p>
      </div>
      <div className='text'>
        <h3>Anonymous Identity</h3>
        <p>
          Conceal the relationship between sender and receiver and make yourself
          anonymous in the blockchain network.
        </p>
      </div>
      <div className='text'>
        <h3>Privacy Bridges</h3>
        <p>
          Bridge different blockchains assets that can make them interact with
          each other in a private way.
        </p>
      </div>
    </Style>
  )
})
