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
  height: 1.1rem;
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
          text-shadow: 0px 0.03rem 0.12rem #00000040;
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
      margin-right: 1.2rem;
      margin-left: 2rem;
      height: 0.66rem;
      min-height: 40px;
    }
    nav ul li {
      font: 400 0.26rem/0.31rem Lexend;
      margin-right: 0.61rem;
    }
  }
  div.right {
    font-size: 0.3rem;
    margin-right: 0.25rem;
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
    div.left {
      flex: 1;
    }
    div.right {
      display: none;
    }
  }
  @media (max-width: 560px) {
    div.left {
      justify-content: space-evenly;
      > img {
        flex: 1;
        margin: 0;
        margin-left: 10px;
      }
      nav {
        flex: 3;
        ul {
          flex: 1;
          justify-content: space-around;
          li {
            margin: 0;
          }
        }
      }
    }
  }
`

export const Header = observer(() => {
  const store = useStore()

  return (
    <Style className={store.theme}>
      <div className='left'>
        <Img className='dark' src={'/logo1.svg'} alt='logo' />
        <Img className='light' src={'/logo2.svg'} alt='logo' />
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
