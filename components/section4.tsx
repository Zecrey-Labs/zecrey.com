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
  @media (min-width: 633px) {
    padding: 0 42px;
  }
  @media (max-width: 632px) {
    padding: 0 10px;
  }
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;

    div.block {
      padding: 0.1rem;
      box-sizing: content-box;
      width: 3.6rem;
      div.image {
        height: 0.9rem;
        width: 0.9rem;
        position: relative;
        margin-bottom: 0.3rem;
        img {
          position: absolute;
          left: 0;
          bottom: 0;
          max-height: 100%;
          max-width: 100%;
        }
      }
      div.text {
        h3 {
          text-align: left;
          font: normal normal bold 0.38rem/0.48rem Lexend;
          margin-bottom: 0.3rem;
          letter-spacing: 0px;
          color: #e4e4e4;
          text-shadow: 0px 0.03rem 0.12rem #00000040;
          opacity: 1;
        }
        p {
          text-align: left;
          font: normal normal normal 0.24rem/0.32rem IBM Plex Sans;
          letter-spacing: 0px;
          color: #e4e4e4;
          opacity: 1;
        }
      }
    }

    /* 两列 */
    @media (min-width: 860px) and (max-width: 1650px) {
      /* width: 760px; */
      /* box-sizing: content-box; */
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
