/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

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
    padding-top: ${px2vw(200, 1920)};

    div.block {
      padding: ${px2vw(40, 1920)};
      box-sizing: content-box;
      width: ${px2vw(360, 1920)};
      div.image {
        height: ${px2vw(90, 1920)};
        width: ${px2vw(90, 1920)};
        position: relative;
        margin-bottom: ${px2vw(30, 1920)};
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
          font: normal normal bold ${px2vw(38, 1920)} / ${px2vw(48, 1920)}
            Lexend;
          margin-bottom: ${px2vw(30, 1920)};
          letter-spacing: 0px;
          color: #e4e4e4;
          text-shadow: 0px ${px2vw(3, 1920)} ${px2vw(12, 1920)} #00000040;
          opacity: 1;
        }
        p {
          text-align: left;
          font: normal normal normal ${px2vw(24, 1920)} / ${px2vw(32, 1920)} IBM
            Plex Sans;
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
        margin-bottom: ${px2vw(30, 320)};
        &.image1 {
          padding-top: ${px2vw(6, 320)};
          div.image {
            img {
              height: ${px2vw(42, 320)};
              width: auto;
              left: ${px2vw(12, 320)};
            }
          }
        }
        &.image2 {
          padding-top: ${px2vw(20, 320)};
          div.image {
            img {
              height: ${px2vw(85, 320)};
              width: auto;
              left: ${px2vw(20, 320)};
            }
          }
        }
        &.image3 {
          padding-top: ${px2vw(3, 320)};
          div.image {
            img {
              height: ${px2vw(49, 320)};
              width: auto;
              left: ${px2vw(16, 320)};
            }
          }
        }
        &.image4 {
          padding-top: ${px2vw(10, 320)};
          div.image {
            img {
              left: ${px2vw(12, 320)};
              height: ${px2vw(62, 320)};
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
          z-index: 1;
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
            z-index: 2;
            margin-left: auto;
            margin-bottom: 0;
            margin-right: ${px2vw(24, 320)};
            font-family: Lexend;
            font-style: normal;
            font-weight: 800;
            font-size: ${px2vw(18, 320)};
            line-height: ${px2vw(22, 320)};
            text-align: right;
            color: #2ad4d9;
            width: ${px2vw(123, 320)};
            position: relative;
            &::before {
              content: ' ';
              width: 3px;
              height: 10px;
              background: #00adb1;
              display: block;
              position: absolute;
              right: -11px;
              bottom: 5px;
            }
          }
          p {
            margin-top: -${px2vw(10, 320)};
            padding: ${px2vw(17, 320)} ${px2vw(10, 320)} ${px2vw(17, 320)}
              ${px2vw(12, 320)};
            font-size: ${px2vw(10, 320)};
            line-height: ${px2vw(12, 320)};
            color: #ffffff;
            background: #2d2d2d;
            border-radius: ${px2vw(4, 320)};
            position: relative;
            overflow: hidden;
            z-index: 1;
            &::before {
              content: ' ';
              display: inline-block;
              position: absolute;
              left: 0;
              top: 0;
              width: 1px;
              height: 1px;
              box-shadow: 0 0 ${px2vw(35, 320)} ${px2vw(33, 320)}
                rgb(0, 162, 168);
            }
          }
        }
      }
    }
  }
`

const blocks = [
  {
    image: '/section6/image1.svg',
    title: 'Zecrey Protocol',
    text: 'Bringing anonymity and privacy to account-based transactions.',
    class: 'image1'
  },
  {
    image: '/section6/image2.svg',
    title: 'Low-Latency Transactions',
    text:
      'Private transactions are completed in seconds on Layer 2 and will be settled in minutes on Layer 1.',
    class: 'image2'
  },
  {
    image: '/section6/image3.svg',
    title: 'Privacy Bridges',
    text:
      'Use the customized Sigma protocol to make it easy and safe to swap assets between different blockchains with privacy.',
    class: 'image3'
  },
  {
    image: '/section6/image4.svg',
    title: 'Privacy Plug-in',
    text:
      'Zecrey extensions enable Layer1 Dapps to provide transaction privacy.',
    class: 'image4'
  }
]

export const Section6 = observer(() => {
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
