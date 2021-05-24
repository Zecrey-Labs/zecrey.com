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
  > img.wave {
    width: calc(100% + 2.24rem);
    z-index: -1;
    position: absolute;
    left: -0.94rem;
    top: 1.63rem;
  }
  > div.content {
    &.mobile {
      display: none;
    }
    max-width: 15.19rem;
    margin: 0 auto;
    padding-top: 2.96rem;
    position: relative;
    div.section1 {
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
      > div.subsection {
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
    div.section2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: rgb(34, 34, 34);
      align-items: center;
      padding: 0.3rem 0;
      div.subsection1 {
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        svg {
          font-size: 0.38rem;
          color: #00acb1;
          margin: 0 0.17rem;
        }
      }
      div.subsection2 {
        text-align: right;
        font: normal normal normal 0.2rem/0.27rem Leelawadee UI;
        color: #e4e4e4;
      }
    }
  }
  @media (max-width: 760px) {
    div.content {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
      }
      div.row1 {
        background-color: rgb(34, 34, 34);
        > div {
          margin: 0 36px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          div.left {
            width: 97px;
            img {
              width: 100%;
              height: auto;
              margin-bottom: 16px;
            }
            ul.nav {
              li {
                font-family: Lexend;
                font-style: normal;
                font-weight: 800;
                font-size: 12px;
                line-height: 15px;
                color: #00adb1;
                margin-bottom: 10px;
                &:last-of-type {
                  margin-bottom: 2px;
                }
              }
            }
          }
          div.right {
            display: flex;
            flex-direction: row;
            font-size: 16px;
            svg {
              font-size: 0.38rem;
              color: #00acb1;
              margin-left: 20px;
            }
          }
        }
      }
      div.row2 {
        font-family: Lexend;
        text-align: center;
        font-size: 9px;
        line-height: 11px;
        color: rgba(255, 255, 255, 0.6);
        padding: 9px 36px 40px 36px;
        background-color: rgb(34, 34, 34);
      }
    }
  }
`

export const Footer = observer(() => {
  const store = useStore()

  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <Img className='wave' src='/footer/wave.svg' />
      <div className='content desktop'>
        <div className='section1'>
          <Img className='icon' src={'/logo1.svg'} alt='' />
          <div className='subsection'>
            <span>White paper</span>
            <span>App</span>
          </div>
          <div className='subsection'>
            <span>Team</span>
            <span>About</span>
          </div>
        </div>
        <div className='section2'>
          <div className='subsection1'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon icon={['fab', 'github']} />
            <FontAwesomeIcon icon={['fab', 'discord']} />
          </div>
          <div className='subsection2'>
            Copyright © 2021 Zecrey. All rights reserved.
          </div>
        </div>
      </div>
      <div className='content mobile'>
        <div className='row1'>
          <div>
            <div className='left'>
              <Img className='icon' src={'/logo1.svg'} alt='' />
              <ul className='nav'>
                <li>White paper</li>
                <li>App</li>
                <li>Team</li>
                <li>About</li>
              </ul>
            </div>
            <div className='right'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              <FontAwesomeIcon icon={['fab', 'instagram']} />
              <FontAwesomeIcon icon={['fab', 'github']} />
              <FontAwesomeIcon icon={['fab', 'discord']} />
            </div>
          </div>
        </div>
        <div className='row2'>
          Copyright © 2021 Zecrey. All rights reserved.
        </div>
      </div>
    </Style>
  )
})
