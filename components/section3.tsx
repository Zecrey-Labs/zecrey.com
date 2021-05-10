import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

const Style = styled.div`
  padding: 0 30px;
  padding-bottom: 122px;
  width: 100vw;

  h2 {
    margin-bottom: 162px;
    text-align: center;
    font: normal normal bold 80px/100px Lexend;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    white-space: normal;
  }
  div.content {
    position: relative;
    div.textList {
      display: flex;
      flex-direction: column;
      position: relative;
      div.text {
        width: 443px;
        @media (max-width: 443px) {
          width: 100%;
        }
        h3 {
          text-align: left;
          letter-spacing: 0px;
          color: #e4e4e4;
          text-shadow: 0px 3px 12px #00000040;
          opacity: 1;
          margin-bottom: 30px;
          @media (min-width: 481px) {
            font: normal normal bold 42px/53px Lexend;
          }
          @media (max-width: 480px) {
            font: normal normal bold 28px/42px Lexend;
          }
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
    div.block {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 226px;
      height: 582px;
      div.bg1 {
        position: absolute;
        z-index: -1;
        width: 226px;
        height: 582px;
        background: rgba(56, 56, 56, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(3px) brightness(110%);
      }
      img.image1 {
        position: absolute;
        top: 42px;
        left: -20px;
        width: 143px;
        height: 136px;
      }
      img.image2 {
        position: absolute;
        top: 241px;
        right: -67px;
        z-index: -2;
        width: 169px;
        height: 124px;
      }
      img.image3 {
        position: absolute;
        bottom: -140px;
        left: -57px;
        z-index: 2;
        width: 248px;
        height: 279px;
        background: rgba(56, 56, 56, 0.1);
        backdrop-filter: blur(3px) brightness(110%);
        border-radius: 20px;
        padding: 75px 68px;
      }
    }
  }

  @media (max-width: 749px) {
    div.content {
      div.block {
        display: none;
      }
      div.textList {
        align-items: center;
        div.text {
          margin: 20px;
        }
      }
    }
  }
  @media (min-width: 750px) and (max-width: 1347px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    div.content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      div.block {
        position: relative;
      }
      div.textList {
        div.text {
          margin: 20px;
        }
      }
    }
  }

  @media (min-width: 1348px) {
    width: 1288px;
    margin: 0 auto;
    box-sizing: content-box;
    div.content {
      div.block {
        position: absolute;
        left: calc(50% - 130px);
        top: 0;
        z-index: 1;
      }
      div.textList {
        div.text {
          &:nth-of-type(2) {
            align-self: flex-end;
          }
        }
      }
    }
  }
`

export const Section3 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <h2>What Zecrey special</h2>
      <div className='content'>
        <div className='block'>
          <Img className='image1' src={'/section3/image1.svg'} alt='' />
          <Img className='image2' src={'/section3/image2.svg'} alt='' />
          <div className='bg1'></div>
          <Img className='image3' src={'/section3/image3.svg'} alt='' />
        </div>
        <div className='textList'>
          <div className='text'>
            <h3>Confidential Assets</h3>
            <p>
              Make account balance and transaction amount confidential. Nobody
              will know your balance have except yourself.
            </p>
          </div>
          <div className='text'>
            <h3>Anonymous Identity</h3>
            <p>
              Conceal the relationship between sender and receiver and make
              yourself anonymous in the blockchain network.
            </p>
          </div>
          <div className='text'>
            <h3>Privacy Bridges</h3>
            <p>
              Bridge different blockchains assets that can make them interact
              with each other in a private way.
            </p>
          </div>
        </div>
      </div>
    </Style>
  )
})
