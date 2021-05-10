import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import Img from './img'

const Style = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  backdrop-filter: blur(2px);
  transition: background-color 0.3s ease-out;
  box-shadow: 0px 3px 12px #00000040;
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
      padding: 36px 0 34px 0;
      ul {
        display: flex;
        flex-direction: row;
        li {
          font: 400 26px/31px Lexend;
          text-align: left;
          letter-spacing: 0px;
          margin-right: 61px;
          cursor: pointer;
          transition: color 0.3s ease-out;
          text-shadow: 0px 3px 12px #00000040;
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
      transition: color 0.3s ease-out;
      cursor: pointer;
    }
  }
  &.dark {
    background-color: rgba(47, 47, 47, 0.7);
    div.left {
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
  @media (max-width: 1330px) {
    div.right {
      display: none;
    }
  }
  @media (max-width: 1040px) {
    div.left {
      flex: 1;
      display: flex;
      justify-content: space-around;
      img {
        margin: 0 10px;
      }
    }
  }
`

export const Header = observer(() => {
  const store = useStore()

  return (
    <Style className={store.theme}>
      <div className='left'>
        {store.theme === 'dark' ? (
          <Img className='dark' src={'/logo1.svg'} alt='logo' />
        ) : (
          <Img className='light' src={'/logo2.svg'} alt='logo' />
        )}
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
})
