import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 42px;
  @media (max-width: 760px) {
    padding: 0 37px;
    margin-top: 40px;
  }
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;

    div.block {
      padding: 0.4rem;
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
    @media (max-width: 760px) {
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
      div.block {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding: 0;
        margin-bottom: 30px;
        &.image1 {
          padding-top: 6px;
          div.image {
            img {
              height: 42px;
              width: auto;
              left: 12px;
            }
          }
        }
        &.image2 {
          padding-top: 20px;
          div.image {
            img {
              height: 85px;
              width: auto;
              left: 20px;
            }
          }
        }
        &.image3 {
          padding-top: 3px;
          div.image {
            img {
              height: 49px;
              width: auto;
              left: 16px;
            }
          }
        }
        &.image4 {
          padding-top: 10px;
          div.image {
            img {
              left: 12px;
              height: 62px;
              width: auto;
            }
          }
        }

        div.image {
          width: auto;
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          margin: 0;
          img {
            position: absolute;
            top: 0;
            max-width: none;
            max-height: none;
            left: auto;
            bottom: auto;
          }
        }
        div.text {
          width: 100%;
          h3 {
            margin-left: auto;
            margin-bottom: 0;
            margin-right: 24px;
            font-family: Lexend;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 22px;
            text-align: right;
            color: #2ad4d9;
            width: 123px;
          }
          p {
            margin-top: -10px;
            padding: 17px 10px 17px 12px;
            font-size: 10px;
            line-height: 12px;
            color: #ffffff;
            background: #2d2d2d;
            border-radius: 4px;
            position: relative;
            overflow: hidden;
            z-index: -1;
            &::before {
              content: ' ';
              display: inline-block;
              position: absolute;
              left: 0;
              top: 0;
              box-shadow: 0px 0px 35px 33px rgb(0, 162, 168);
            }
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
    text: 'Bring anonymity and privacy for account-based transactions.',
    class: 'image1'
  },
  {
    image: '/section4/image2.svg',
    title: 'Low-Latency Transactions',
    text:
      'Private transactions are completed in seconds on Layer 2 and will be settled in minutes on Layer 1.',
    class: 'image2'
  },
  {
    image: '/section4/image3.svg',
    title: 'Privacy Bridges',
    text:
      'Use customize Sigma protocol for users to make it easy and safe to swap assets between different blockchains with privacy.',
    class: 'image3'
  },
  {
    image: '/section4/image4.svg',
    title: 'Privacy Plug-in',
    text:
      'Providing Zecrey extensions for Layer1 Dapp to provide privacy for transactions.',
    class: 'image4'
  }
]

export const Section4 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div>
        {blocks.map(block => (
          <div className={`block ${block.class}`} key={block.title}>
            <div className='image'>
              <Img src={block.image} className={block.class} />
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
