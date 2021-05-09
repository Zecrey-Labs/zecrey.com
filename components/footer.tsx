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
  div.row1 {
    width: 1519px;
    margin: 0 auto;
    border-bottom: rgb(228, 228, 228);
    display: flex;
    flex-direction: row;
    img {
      width: 267px;
      margin-left: 16px;
      margin-right: 130px;
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
`

export const Footer = observer(() => {
  return (
    <Style>
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
    </Style>
  )
})
