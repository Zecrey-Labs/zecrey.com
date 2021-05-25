import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

const icons = [
  {
    name: 'loopring',
    image: '/section5/loopring.png'
  },
  {
    name: 'bybit',
    image: '/section5/bybit.png'
  },
  {
    name: 'hackerfund',
    image: '/section5/hackerfund.png'
  }
]

const Style = styled.div`
  padding: ${px2vw(90, 1437)} ${px2vw(204, 1437)} ${px2vw(200, 1437)}
    ${px2vw(204, 1437)};
  h2 {
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(48, 1437)};
    line-height: ${px2vw(60, 1437)};
    text-align: center;
    color: #ffffff;
    margin-bottom: ${px2vw(30, 1437)};
  }
  p {
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: ${px2vw(24, 1437)};
    line-height: ${px2vw(30, 1437)};
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: ${px2vw(90, 1437)};
  }
  div.icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    img {
      width: ${px2vw(210, 1437)};
      height: auto;
    }
  }
`

export const Section5 = observer(() => {
  const store = useStore()
  return (
    <Style>
      <h2>Investors</h2>
      <p>Cooperate with us and become the forethinkers in the privacy world.</p>
      <div className='icons'>
        {icons.map(icon => (
          <Img src={icon.image} key={icon.name} />
        ))}
      </div>
    </Style>
  )
})
