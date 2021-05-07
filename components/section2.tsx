import React from 'react'
import styled from 'styled-components'
import icon1 from '@/public/section2/icon1.svg'
import icon2 from '@/public/section2/icon2.svg'
import icon3 from '@/public/section2/icon3.svg'

import badge1 from '@/public/section2/badge1.svg'
import badge2 from '@/public/section2/badge2.svg'
import badge3 from '@/public/section2/badge3.svg'
import badge4 from '@/public/section2/badge4.svg'
import badge5 from '@/public/section2/badge5.svg'

import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const Style = styled.div`
  height: 2000px;
  z-index: 9;
  position: relative;
  padding: 273px 289px 179px 281px;
  div.content {
    h2 {
      width: 925px;
      height: 87px;
      text-align: center;
      font: normal normal bold 36px/36px Lexend;
      letter-spacing: 0px;
      color: #383838;
      padding: 23px 0 16px 0;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
    }
    div.text {
      padding-left: 164px;
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
  }
`

export const Section2 = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'light' ? 1 : 0 }}>
      <div className='content'>
        <h2>
          Keep Privacy in a Smart Contract World
          <img src={badge5} alt='' />
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
            <img src={icon1} alt='' />
            <span>Public Scenes</span>
          </li>
          <li>
            <img src={icon2} alt='' />
            <span>Inefficient</span>
          </li>
          <li>
            <img src={icon3} alt='' />
            <span>High Cost</span>
          </li>
        </ul>
      </div>
    </Style>
  )
})
