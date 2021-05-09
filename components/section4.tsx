import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div`
  background-color: rgb(34, 34, 34);
  > div {
    width: 1680px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 203px;
    div.block {
      width: 360px;
      div.image {
        height: 100px;
        position: relative;
        img {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      h3 {
        text-align: left;
        font: normal normal bold 38px/48px Lexend;
        margin-bottom: 30px;
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
    }
  }
`

const blocks = [
  {
    image: '/section4/image1.svg',
    title: 'Zecrey Protocol',
    text: 'Bring anonymity and privacy for account-based transactions.'
  },
  {
    image: '/section4/image2.svg',
    title: 'Fast Transactions',
    text:
      'Private transactions are computed in seconds on all devices, and our rollup service saves gas and settles in minutes.'
  },
  {
    image: '/section4/image3.svg',
    title: 'Privacy Bridges',
    text:
      'Use customize Sigma protocol for users to make it easy and safe to swap assets between different blockchains with privacy.'
  },
  {
    image: '/section4/image4.svg',
    title: 'Privacy Plug-in',
    text:
      'Providing Zecrey extensions for Layer1 Dapp to provide privacy for transactions.'
  }
]

export const Section4 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div>
        {blocks.map(block => (
          <div className='block' key={block.title}>
            <div className='image'>
              <Img src={block.image} />
            </div>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
        ))}
      </div>
    </Style>
  )
})
