import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Style = styled.div`
  position: relative;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  background-color: rgb(34, 34, 34);
  > img.wave {
    width: calc(100% + 2.24rem);
    z-index: -1;
    position: absolute;
    left: -0.94rem;
    top: 2.03rem;
  }
  > div.content {
    max-width: 15.19rem;
    margin: 0 auto;
    padding-top: 3.34rem;
    position: relative;
    div.black {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: rgb(34, 34, 34);
    }
    div.row1 {
      z-index: 1;
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      flex-direction: row;
      img {
        width: 2.67rem;
        height: 1.09rem;
        margin-left: 0.16rem;
        margin-right: 1.3rem;
        position: relative;
        top: -0.32rem;
      }
      > div.column {
        margin-right: 1.03rem;
        display: flex;
        flex-direction: column;
        padding-bottom: 0.1rem;
        span {
          margin-bottom: 0.2rem;
          text-align: left;
          font: normal normal bold 0.28rem/0.37rem Roboto;
          color: #e4e4e4;
        }
      }
    }
    div.row2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(34, 34, 34);
      padding: 0.3rem 0;
      div.column1 {
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        svg {
          font-size: 0.38rem;
          color: #00acb1;
          margin: 0 0.17rem;
        }
      }
      div.column2 {
        text-align: right;
        font: normal normal normal 0.2rem/0.27rem Leelawadee UI;
        color: #e4e4e4;
      }
    }
  }
  @media (max-width: 500px) {
    div.content {
      div.row2 {
        flex-direction: column;
        div.column1 {
          justify-content: center;
          margin-bottom: 0.3rem;
        }
        div.column2 {
          text-align: center;
          font: normal normal normal 14px/16px Leelawadee UI;
        }
      }
    }
  }
`

export const Footer = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <Img className='wave' src='/footer/wave.svg' />
      <div className='content'>
        <div className='row1'>
          <Img className='icon' src={'/logo1.svg'} alt='' />
          <div className='column'>
            <span>White paper</span>
            <span>App</span>
          </div>
          <div className='column'>
            <span>Team</span>
            <span>About</span>
          </div>
        </div>
        <div className='row2'>
          <div className='column1'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon icon={['fab', 'github']} />
            <FontAwesomeIcon icon={['fab', 'discord']} />
          </div>
          <div className='column2'>
            Copyright © 2021 Zecrey. All rights reserved.
          </div>
        </div>
      </div>
    </Style>
  )
})
