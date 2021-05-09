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
  > div.back {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: rgb(34, 34, 34);
  }
  > img.wave {
    z-index: -1;
    position: absolute;
    left: -94px;
    top: 203px;
  }
  > div {
    width: 1519px;
    margin: 0 auto;
    padding-top: 334px;
    div.row1 {
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      flex-direction: row;
      img {
        width: 267px;
        height: 109px;
        margin-left: 16px;
        margin-right: 130px;
        position: relative;
        top: -32px;
      }
      > div.column {
        margin-right: 103px;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        span {
          margin-bottom: 20px;
          text-align: left;
          font: normal normal bold 28px/37px Roboto;
          letter-spacing: 0px;
          color: #e4e4e4;
        }
      }
    }
    div.row2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 62px;
      div.column1 {
        display: flex;
        align-items: center;
        font-size: 30px;
        margin-left: 28px;
        margin-top: 33px;
        svg {
          font-size: 38px;
          color: #00acb1;
          margin-right: 35px;
        }
      }
      div.column2 {
        margin-top: 31px;
        text-align: right;
        font: normal normal normal 20px/27px Leelawadee UI;
        letter-spacing: 0px;
        color: #e4e4e4;
      }
    }
  }
`

export const Footer = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <div className='back'></div>
      <Img className='wave' src='/footer/wave.svg' />
      <div>
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
