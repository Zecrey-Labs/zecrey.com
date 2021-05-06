import React from 'react'
import styled from 'styled-components'
const logo1 = require('@/public/logo1.svg')
const logo2 = require('@/public/logo2.svg')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Style = styled.div`
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      box-sizing: content-box;
      height: 66px;
      padding: 26px 0 18px 0;
      margin: 0 120px 0 200px;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 50px 0 34px 0;
      ul {
        display: flex;
        flex-direction: row;
        li {
          font-size: 26px;
          text-align: left;
          letter-spacing: 0px;
          font-weight: 300;
          margin-right: 61px;
        }
      }
    }
  }
  div.right {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-right: 25px;
    svg {
      margin-right: 25px;
    }
  }
  &.dark {
    background-color: rgba(47, 47, 47, 0.7);
    box-shadow: 0px 3px 12px #00000040;
    div.left {
      img {
        &.dark {
          display: block;
        }
        &.light {
          display: none;
        }
      }
      nav ul li {
        color: #ffffff;
        text-shadow: 0px 3px 12px #00000040;
      }
    }
    div.right {
      svg {
        color: #cdcdcd;
      }
    }
  }
  &.light {
    background-color: rgba(239, 239, 239, 0.7);
    box-shadow: 0px 3px 12px #00000040;
    div.left {
      img {
        &.dark {
          display: none;
        }
        &.light {
          display: block;
        }
      }
      nav ul li {
        color: #222222;
        text-shadow: 0px 3px 12px #00000040;
      }
    }
    div.right {
      svg {
        color: #383838;
      }
    }
  }
`

export const Header = () => {
  return (
    <Style className='dark'>
      <div className='left'>
        <img className='dark' src={logo1} alt='logo' />
        <img className='light' src={logo2} alt='logo' />
        <nav>
          <ul>
            <li>Technology</li>
            <li>Community</li>
            <li>App</li>
          </ul>
        </nav>
      </div>
      <div className='right'>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
        <FontAwesomeIcon icon={['fab', 'github']} />
        <FontAwesomeIcon icon={['fab', 'discord']} />
      </div>
    </Style>
  )
}
