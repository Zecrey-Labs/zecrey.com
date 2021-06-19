/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import Img from './img'
import { px2vw } from '@/utils'

const Style = styled.div<{ theme: 'dark' | 'light' }>`
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
  &.light {
    background-color: rgba(239, 239, 239, 0.7);
    img.dark {
      display: none;
    }
    img.light {
      display: normal;
    }
    div.left {
      nav ul li {
        color: #222222;
        &:hover {
          color: #00acb1;
        }
      }
    }
    div.right {
      svg {
        color: #383838;
        &:hover {
          color: rgb(0, 162, 168);
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
  }

  div.left {
    > img {
      margin-right: ${px2vw(120, 1920)};
      margin-left: ${px2vw(200, 1920)};
      height: ${px2vw(66, 1920)};
      min-height: 40px;
    }
    nav ul li {
      font: 400 ${px2vw(26, 1920)} / ${px2vw(31, 1920)} Lexend;
      margin-right: ${px2vw(61, 1920)};
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
    &.light {
      background-color: white;
      border-bottom: 1px solid #eaeaea;
    }
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
      nav {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        transition: transform 0.2s ease-in-out;
        z-index: -1;
        width: 100%;
        background: ${({ theme }) => (theme === 'dark' ? '#2C2C2C' : 'white')};
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
            color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
            border-bottom: 1px solid
              ${({ theme }) =>
                theme === 'dark'
                  ? 'rgba(255,255,255,0.5)'
                  : 'rgba(10,10,10,0.5)'};
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

export const Header = observer(() => {
  const store = useStore()
  const [active, setActive] = React.useState(false)

  return (
    <Style theme={store.theme} className={store.theme}>
      <div className='left'>
        <Img className='dark' src={'/logo1.svg'} alt='logo' />
        <Img className='light' src={'/logo2.svg'} alt='logo' />
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
    </Style>
  )
})
