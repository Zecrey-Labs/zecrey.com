import React from 'react'
import styled from 'styled-components'
const icons = {
  logo: [require('@/public/logo1.svg'), require('@/public/logo2.svg')],
  twitter: require('@/public/logo2.svg')
}

const Style = styled.div`
  height: 110px;
  display: flex;
  flex-direction: row;
  div.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      box-sizing: content-box;
      height: 66px;
      padding: 26px 0 18px 0;
      margin: 0 120px 0 200px;
      opacity: 1;
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
          opacity: 1;
        }
      }
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
  }
`

export const Header = () => {
  return (
    <Style className='dark'>
      <div className='left'>
        <img className='dark' src={icons.logo[0]} alt='logo' />
        <img className='light' src={icons.logo[1]} alt='logo' />
        <nav>
          <ul>
            <li>Technology</li>
            <li>Community</li>
            <li>App</li>
          </ul>
        </nav>
      </div>
      <div className='right'></div>
    </Style>
  )
}
