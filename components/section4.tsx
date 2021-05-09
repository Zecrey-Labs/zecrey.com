import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { device } from '@/utils'

const Style = styled.div`
  background-color: rgb(34, 34, 34);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 42px;
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 203px;

    div.block {
      padding: 10px;
      div.text {
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

    @media (max-width: 860px) {
      div.block {
        display: flex;
        flex-direction: row;
        padding: 30px;
        div.image {
          flex: 0 0 130px;
        }
      }
    }
    /* 两列 */
    @media (min-width: 860px) and (max-width: 1650px) {
      width: 760px;
      box-sizing: content-box;
    }
    /* 两列、四列 */
    @media (min-width: 860px) {
      div.block {
        box-sizing: content-box;
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
            <div className='text'>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Style>
  )
})
