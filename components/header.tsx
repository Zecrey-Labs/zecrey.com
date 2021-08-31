/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import Img from './img'
import { desktopPx2vw, px2vw } from '@/utils'
import { DOCS_URL, DOWNLOAD_URL } from '@/constant'

const Style = styled.div`
  width: 100vw;
  height: ${px2vw(110, 1920)};
  min-height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  backdrop-filter: blur(2px);
  transition: background-color 0.3s ease-out;
  box-shadow: 0px 3px 12px #00000040;

  div.hamburger {
    display: none;
  }

  &.dark {
    background-color: rgba(47, 47, 47, 0.7);
    div.left {
      img.dark {
        display: normal;
      }
      img.light {
        display: none;
      }
      nav ul li {
        color: #ffffff;
        &:hover {
          color: #2ad4d9;
        }
      }
    }
    div.right {
      svg {
        color: #cdcdcd;
        &:hover {
          color: rgb(37, 206, 212);
        }
      }
    }
  }
  div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    > img {
      box-sizing: content-box;
      margin-right: ${px2vw(35, 1920)};
      margin-left: ${px2vw(200, 1920)};
      height: ${px2vw(66, 1920)};
      min-height: 40px;
    }
    span.bar {
      width: 1px;
      height: 31px;
      background: white;
    }
    a.download {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
      border-radius: ${px2vw(35, 1920)};
      width: ${desktopPx2vw(170)};
      height: ${desktopPx2vw(47)};
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(24, 1920)};
      line-height: ${px2vw(30, 1920)};
      text-align: center;
      letter-spacing: 0.289412px;
      color: #000000;
      border: none;
      margin-left: ${px2vw(35, 1920)};
      &:hover {
        box-shadow: 0 0 ${desktopPx2vw(40)} #00b6ba;
      }
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-direction: row;
        li {
          text-align: left;
          letter-spacing: 0px;
          cursor: pointer;
          transition: color 0.3s ease-out;
          text-shadow: 0px ${px2vw(3, 1920)} ${px2vw(12, 1920)} #00000040;
          font: 400 ${px2vw(26, 1920)} / ${px2vw(31, 1920)} Lexend;
          margin-right: ${px2vw(61, 1920)};
        }
      }
    }
  }
  div.right {
    height: 100%;
    display: flex;
    align-items: center;
    svg {
      margin-right: 25px;
      transition: color 0.3s ease-out;
      cursor: pointer;
    }
    a.docs {
      font-family: Lexend;
      font-style: normal;
      font-weight: 300;
      font-size: ${px2vw(26, 1862)};
      line-height: ${px2vw(32, 1862)};
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      &:hover {
        text-decoration: none;
        color: rgba(42, 212, 217, 1);
      }
    }
    span.bar {
      width: ${px2vw(1, 1862)};
      height: ${px2vw(31, 1862)};
      background: white;
      margin-left: ${px2vw(23, 1862)};
      margin-right: ${px2vw(23, 1862)};
    }
  }

  div.right {
    font-size: ${px2vw(30, 1920)};
    margin-right: ${px2vw(25, 1920)};
  }
  @media (max-width: 1279px) {
    div.left {
      nav ul li {
        font: 400 17px/20px Lexend;
        margin-right: 40px;
      }
    }
    div.right {
      font-size: 20px;
      margin-right: 25px;
    }
  }

  @media (max-width: 760px) {
    height: 40px;
    min-height: auto;
    box-shadow: none;
    &.dark {
      background-color: #2c2c2c;
    }
    div.right {
      margin: 0;
      font-size: ${px2vw(16, 320)};
    }
    div.left {
      height: 40px;
      flex: 1;
      display: block;
      img {
        display: block;
        height: 24px;
        display: block;
        min-height: auto;
        margin: 8px 0 8px 20px;
      }
      a.download {
        display: none !important;
      }
      nav {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        transition: transform 0.2s ease-in-out;
        z-index: -1;
        width: 100%;
        background: #2c2c2c;
        display: block;
        ul {
          top: 0;
          display: block;
          padding: 54px 29px 11px 35px;
          li {
            text-shadow: none;
            box-sizing: border-box;
            height: 33px;
            line-height: 15px;
            padding: 7px 0 10px 0;
            font-family: Lexend;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            display: block;
            color: white;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            &:last-of-type {
              border-bottom: none;
            }
            margin: 0;
          }
        }
        &.active {
          transform: translateY(0);
        }
      }
    }
  }
`

export const Header = () => {
  return (
    <Style className='dark'>
      <div className='left'>
        <Img className='dark' src={'/logo1.svg'} alt='logo' />
        <Img className='light' src={'/logo2.svg'} alt='logo' />
        <span className='bar' />
        <a className='download' href={DOWNLOAD_URL} rel='noreferrer'>
          Download
        </a>
      </div>
      <div className='right'>
        <a target='_blank' className='docs' href={DOCS_URL} rel='noreferrer'>
          Docs
        </a>
        <span className='bar' />
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
    </Style>
  )
}
