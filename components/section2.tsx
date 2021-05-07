import React from 'react'
import styled from 'styled-components'
import icon1 from '@/public/section2/icon1.svg'
import icon2 from '@/public/section2/icon2.svg'
import icon3 from '@/public/section2/icon3.svg'

import badge1 from '@/public/section2/badge1.svg'
import badge2 from '@/public/section2/badge2.svg'
import badge3 from '@/public/section2/badge3.svg'
import badge4 from '@/public/section2/badge4.svg'

const Style = styled.div`
  height: 2000px;
  z-index: 9;
  position: relative;
  div.keep {
    position: relative;
    width: 925px;
    height: 75px;
    h2 {
      border-radius: 5px;
      background: #e4e4e4 0% 0% no-repeat padding-box;
      text-align: center;
      font: normal normal bold 36px/36px Lexend;
      letter-spacing: 0px;
      color: #383838;
      padding: 23px 0 16px 0;
      z-index: 2;
    }
    img {
      position: absolute;
      &:nth-of-type(1) {
        right: -18px;
        top: 25px;
      }
      &:nth-of-type(2) {
        right: -18px;
        top: 51px;
      }
    }
  }
`

export const Section2 = () => {
  return (
    <Style>
      <div className='keep'>
        <h2>Keep Privacy in a Smart Contract World</h2>
        <img src={badge1} alt='' />
        <img src={badge2} alt='' />
      </div>
      <p>
        Problems of the privacy of blockchain right now are that used only as
        privacy cash, in other words, it's non-programmable. In addition, if the
        user wants to achieve asset privacy, it's not easy to use and will cost
        a lot.
      </p>
      <p>
        Zecrey is such a protocol that makes it easy to bring your assets into a
        private world with high efficiency and low cost.
      </p>
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
    </Style>
  )
}
