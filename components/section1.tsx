import React from 'react'
import styled from 'styled-components'
import logo1 from '@/public/logo1.svg'
import cute from '@/public/section1/cute.svg'
import circle from '@/public/section1/circle.svg'

const InputEmail = styled.input`
  display: block;
  width: 455px;
  height: 52px;
  background: #222222 0% 0% no-repeat padding-box;
  border: 2px solid #2ad4d9;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: left;
  font: normal normal normal 24px/32px IBM Plex Sans;
  letter-spacing: 0px;
  color: #e4e4e4;
  &:focus {
    outline: none;
  }
  &::selection {
    color: #222222;
    background-color: #2ad4d9;
  }
`

const Button = styled.button`
  background: #2ad4d9 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  text-align: left;
  font: normal normal bold 24px/29px Lexend;
  letter-spacing: 0px;
  color: #222222;
  width: 120px;
  height: 52px;
  text-align: center;
  border: none;
`

const Style = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.bee {
    margin-top: 128px;
    padding: 9px 69px 9px 51px;
    background: #2ad4d9 0% 0% no-repeat padding-box;
    border-radius: 5px;
    text-align: left;
    font: normal normal bold 32px/38px Lexend;
    letter-spacing: 0px;
    color: #222222;
    position: relative;
    img {
      font-size: 10px;
      position: absolute;
      right: 23px;
      top: -5px;
    }
  }
  div.banner {
    margin-top: 25px;
    text-align: center;
    font: normal normal bold 100px/120px Lexend;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    text-transform: uppercase;
  }
  div.email {
    margin-top: 69px;
    position: relative;
    display: flex;
    align-items: center;
    input {
      transition: transform 0.2s ease-out;
      z-index: 2;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 5px;
      height: 26px;
      z-index: 0;
      transition: transform 0.2s ease-out;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      transition: transform 0.2s ease-out;
      z-index: 0;
    }
    &:hover {
      input {
        transform: translateX(-20px);
        cursor: pointer;
      }
      img {
        transform: translateX(19px);
      }
      button {
        transform: translateX(-20px);
      }
    }
    &.active {
      input {
        transform: translateX(-20px);
      }
      img {
        visibility: hidden;
      }
      button {
        transform: translateX(100%);
      }
    }
  }
  > img {
    height: 52px;
    margin-top: 141px;
  }
`

// @TODO: 邮箱地址发送到服务器
export const Section1 = () => {
  const [email, setEmail] = React.useState('Send us your email address')
  const [inputFocus, setInputFocus] = React.useState(false)
  const inputElement = React.useRef(null)
  return (
    <Style>
      <div className='bee'>
        New Bee Product
        <img src={circle} />
      </div>
      <div className='banner'>
        Brings privacy
        <br />
        value for assets.
      </div>
      <div className={`email ${inputFocus ? 'active' : ''}`}>
        <InputEmail
          ref={inputElement}
          type='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          onFocus={() => {
            setInputFocus(true)
            inputElement.current.select()
          }}
        />
        <img src={cute} />
        <Button
          onClick={() => {
            setInputFocus(false)
          }}>
          Send
        </Button>
      </div>
      <img src={logo1} alt='logo' />
    </Style>
  )
}
