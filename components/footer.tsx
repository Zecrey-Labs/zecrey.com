/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { px2vw } from '@/utils'
import { DOCS_URL, DOWNLOAD_URL } from '@/constant'

const Style = styled.div`
  position: relative;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  > img.wave {
    width: calc(100% + ${px2vw(224, 1920)});
    z-index: -1;
    position: absolute;
    left: -${px2vw(94, 1920)};
    top: ${px2vw(163, 1920)};
  }
  > div.content {
    &.mobile {
      display: none;
    }
    max-width: ${px2vw(1519, 1920)};
    margin: 0 auto;
    padding-top: ${px2vw(296, 1920)};
    position: relative;
    div.section1 {
      z-index: 1;
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      flex-direction: row;
      img {
        width: ${px2vw(267, 1920)};
        height: ${px2vw(109, 1920)};
        margin-left: ${px2vw(16, 1920)};
        margin-right: ${px2vw(130, 1920)};
        position: relative;
        top: -${px2vw(32, 1920)};
      }
      > div.subsection {
        margin-right: ${px2vw(103, 1920)};
        display: flex;
        flex-direction: column;
        padding-bottom: ${px2vw(10, 1920)};
        > a,
        > span {
          margin-bottom: ${px2vw(20, 1920)};
          text-align: left;
          font: normal normal bold ${px2vw(28, 1920)} / ${px2vw(37, 1920)}
            Roboto;
          color: #e4e4e4;
          cursor: pointer;
        }
        > span {
          color: gray;
          cursor: not-allowed;
        }
      }
    }
    div.section2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: rgb(34, 34, 34);
      align-items: center;
      padding: ${px2vw(30, 1920)} 0;
      div.subsection1 {
        display: flex;
        align-items: center;
        font-size: ${px2vw(30, 1920)};
        svg {
          font-size: ${px2vw(38, 1920)};
          color: #00acb1;
          margin: 0 ${px2vw(17, 1920)};
        }
      }
      div.subsection2 {
        text-align: right;
        font: normal normal normal ${px2vw(20, 1920)} / ${px2vw(27, 1920)}
          Leelawadee UI;
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
          margin: 0 ${px2vw(36, 320)};
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: ${px2vw(12, 320)};
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          div.left {
            width: ${px2vw(97, 320)};
            img {
              width: 100%;
              height: auto;
              margin-bottom: ${px2vw(16, 320)};
            }
            div.nav {
              > a,
              > span {
                display: block;
                font-family: Lexend;
                font-style: normal;
                font-weight: 800;
                font-size: ${px2vw(12, 320)};
                line-height: ${px2vw(15, 320)};
                color: #00adb1;
                margin-bottom: ${px2vw(10, 320)};
                &:last-of-type {
                  margin-bottom: ${px2vw(2, 320)};
                }
              }
              > span {
                cursor: not-allowed;
                color: gray;
              }
            }
          }
          div.right {
            display: flex;
            flex-direction: row;
            font-size: ${px2vw(16, 320)};
            svg {
              font-size: ${px2vw(38, 1920)};
              color: #00acb1;
              margin-left: ${px2vw(20, 320)};
            }
          }
        }
      }
      div.row2 {
        font-family: Lexend;
        text-align: center;
        font-size: ${px2vw(9, 320)};
        line-height: ${px2vw(11, 320)};
        color: rgba(255, 255, 255, 0.6);
        padding: ${px2vw(9, 320)} ${px2vw(36, 320)} ${px2vw(40, 320)}
          ${px2vw(36, 320)};
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
            <a href='https://docsend.com/view/ntcsmt7meu84gcqk' target='_blank'>
              White paper
            </a>
            <a
              href='https://zecrey.obs.ap-southeast-3.myhuaweicloud.com:443/Zecrey%20Testnet%20Chrome%20Extension.zip?AccessKeyId=BEEB9AHVC2WCDCOIOETF&Expires=1632673207&Signature=xP%2BvTHtSvIv8SbIgA6udJ0y4zug%3D'
              className='downloadapp'
              download='zecrey'>
              App
            </a>
            <a href='https://docs.zecrey.com/' target='_blank'>
              Document
            </a>
          </div>
        </div>
        <div className='section2'>
          <div className='subsection1'>
            <a href='https://twitter.com/zecreyprotocol' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href='https://medium.com/@zecrey' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </a>
            <a href='https://github.com/Zecrey-Labs' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href='https://t.me/zecrey' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'telegram']} />
            </a>
            <a href='https://discord.com/invite/U98ghQsJE5' target='_blank'>
              <FontAwesomeIcon icon={['fab', 'discord']} />
            </a>
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
              <div className='nav'>
                <a
                  href='https://docsend.com/view/ntcsmt7meu84gcqk'
                  target='_blank'>
                  White paper
                </a>
                <a
                  href={DOWNLOAD_URL}
                  className='downloadapp'
                  download='zecrey'>
                  App
                </a>
                <a href={DOCS_URL} target='_blank'>
                  Document
                </a>
              </div>
            </div>
            <div className='right'>
              <a href='https://twitter.com/zecreyprotocol' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href='https://medium.com/@zecrey' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </a>
              <a href='https://github.com/Zecrey-Labs' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href='https://t.me/zecrey' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'telegram']} />
              </a>
              <a href='https://discord.com/invite/U98ghQsJE5' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'discord']} />
              </a>
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
