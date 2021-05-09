import React from 'react'
import styled from 'styled-components'
import Img from './img'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const Style = styled.div`
  z-index: 9;
  position: relative;
  padding: 273px 289px 225px 281px;
  div.content {
    position: relative;
    width: 1330px;
    height: 554px;
    h2 {
      width: 925px;
      height: 87px;
      text-align: center;
      font: normal normal bold 36px/36px Lexend;
      letter-spacing: 0px;
      color: #383838;
      padding: 23px 0 16px 0;
      position: relative;
      background: #e4e4e4 0% 0% no-repeat padding-box;
      border-radius: 5px;
      img {
        position: absolute;
        &.badge1 {
          z-index: 0;
          left: -33px;
          bottom: 0;
        }
        &.badge2 {
          z-index: -1;
          left: -33px;
          bottom: 0;
        }
        &.badge3 {
          z-index: -1;
          right: -18px;
          bottom: 0;
        }
        &.badge4 {
          z-index: 1;
          right: -18px;
          bottom: 0;
        }
        &.circle1 {
          z-index: -1;
          top: 0;
          transform: translateY(-50%);
          right: 62px;
        }
        &.circle2 {
          z-index: -1;
          bottom: 0;
          transform: translateY(50%);
          left: 62px;
        }
        &.halfcircle1 {
          z-index: 1;
          top: 0;
          right: 62px;
        }
        &.halfcircle2 {
          z-index: 1;
          bottom: 0;
          left: 62px;
          transform: rotateX(180deg);
        }
      }
    }
    div.text {
      padding-left: 133px;
      padding-top: 34px;
      p {
        text-align: left;
        font: normal normal normal 24px/32px IBM Plex Sans;
        letter-spacing: 0px;
        color: #222222;
        opacity: 1;
        &:nth-of-type(1) {
          width: 728px;
          margin-bottom: 29px;
        }
        &:nth-of-type(2) {
          width: 525px;
        }
      }
    }
    ul.features {
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #e4e4e4 0% 0% no-repeat padding-box;
        border-radius: 5px;
        width: 300px;
        height: 186px;
        padding: 25px 0;
        margin: 10px 0;
        position: absolute;
        img {
          /* width: 97px; */
          height: 88px;
          margin-bottom: 25px;
        }
        span {
          text-align: left;
          font: normal normal bold 24px/29px Lexend;
          letter-spacing: 0px;
          color: rgba(150, 150, 150);
        }
        &:nth-of-type(1) {
          right: 0;
          bottom: 226px;
        }
        &:nth-of-type(3) {
          right: 0;
          bottom: 0;
        }
        &:nth-of-type(2) {
          bottom: 0;
          right: 340px;
        }
      }
    }
  }
`

export const Section2 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'light' ? 1 : 0 }}>
      <div className='content'>
        <h2>
          <span>Keep Privacy in a Smart Contract World</span>
          <Img className='badge1' src={'/section2/badge1.svg'} alt='' />
          <Img className='badge2' src={'/section2/badge2.svg'} alt='' />
          <Img className='badge3' src={'/section2/badge3.svg'} alt='' />
          <Img className='badge4' src={'/section2/badge4.svg'} alt='' />
          <Img className='circle1' src={'/section2/circle.svg'} alt='' />
          <Img className='circle2' src={'/section2/circle.svg'} alt='' />
          <Img
            className='halfcircle1'
            src={'/section2/halfcircle.svg'}
            alt=''
          />
          <Img
            className='halfcircle2'
            src={'/section2/halfcircle.svg'}
            alt=''
          />
        </h2>
        <div className='text'>
          <p>
            Problems of the privacy of blockchain right now are that used only
            as privacy cash, in other words, it's non-programmable. In addition,
            if the user wants to achieve asset privacy, it's not easy to use and
            will cost a lot.
          </p>
          <p>
            Zecrey is such a protocol that makes it easy to bring your assets
            into a private world with high efficiency and low cost.
          </p>
        </div>
        <ul className='features'>
          <li>
            <Img src={'/section2/icon1.svg'} alt='' />
            <span>Public Scenes</span>
          </li>
          <li>
            <Img src={'/section2/icon2.svg'} alt='' />
            <span>Inefficient</span>
          </li>
          <li>
            <Img src={'/section2/icon3.svg'} alt='' />
            <span>High Cost</span>
          </li>
        </ul>
      </div>
    </Style>
  )
})
