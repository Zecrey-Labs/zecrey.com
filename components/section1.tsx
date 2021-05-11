import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { validateEmail } from '@/utils'

const InputEmail = styled.input`
  display: block;
  background: #222222 0% 0% no-repeat padding-box;
  text-align: left;
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
  opacity: 1;
  text-align: left;
  letter-spacing: 0px;
  color: #222222;
  text-align: center;
  border: none;
`

const Style = styled.div`
  width: 100vw;
  min-height: calc(100vh - 2rem);
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div.message {
    position: fixed;
    width: 100%;
    top: max(1.1rem, 64px);
    z-index: 100;
    font: bold 0.36rem/0.7rem Lexend;
    text-align: center;
    box-shadow: 0 0.3rem 1.2rem rgb(0 0 0 / 25%);
    color: #383838;
    background-color: #2ad4d9;
  }
  h2 {
    margin-top: 1.28rem;
    background: #2ad4d9 0% 0% no-repeat padding-box;
    height: 0.5rem;
    width: 3.83rem;
    font: normal normal bold 0.32rem/0.5rem Lexend;
    border-radius: 0.05rem;
    text-align: center;
    letter-spacing: 0px;
    color: #222222;
    position: relative;
    img {
      font-size: 0.1rem;
      position: absolute;
      right: 0.23rem;
      top: 0;
      transform: translateY(-50%);
    }
    @media (max-width: 1279px) {
      height: 33px;
      width: 255px;
      font: normal normal bold 21px/33px Lexend;
      border-radius: 3px;
      img {
        right: 15px;
      }
    }
  }
  div.banner {
    margin-top: 0.25rem;
    text-align: center;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 0.03rem 0.12rem #00000040;
    text-transform: uppercase;
    font: normal normal bold 1rem/1.2rem Lexend;
    @media (max-width: 999px) {
      font: normal normal bold 52px/63px Lexend;
    }
  }
  div.email {
    margin-top: 0.69rem;
    position: relative;
    display: flex;
    align-items: center;
    input {
      transition: transform 0.2s ease-out;
      z-index: 1;
      box-sizing: border-box;
      width: 4.55rem;
      height: 0.52rem;
      border: 0.02rem solid #2ad4d9;
      border-radius: 0.05rem;
      padding-left: 0.2rem;
      font: normal normal normal 0.24rem/0.32rem IBM Plex Sans;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 0.05rem;
      height: 0.26rem;
      z-index: 0;
      transition: transform 0.2s ease-out;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      transition: transform 0.2s ease-out;
      z-index: 0;
      font: normal normal bold 0.24rem/0.29rem Lexend;
      width: 1.2rem;
      height: 0.52rem;
      border-radius: 0.05rem;
    }
    &:hover {
      input {
        transform: translateX(-0.2rem);
        cursor: pointer;
      }
      img {
        transform: translateX(0.19rem);
      }
      button {
        transform: translateX(-0.2rem);
      }
    }
    &.active {
      input {
        transform: translateX(-0.2rem);
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
    height: 0.52rem;
    margin-top: 1.41rem;
  }
  @media (max-width: 1279px) {
    div.email {
      input {
        width: 303px;
        height: 35px;
        border: 1px solid #2ad4d9;
        border-radius: 3px;
        padding-left: 13.3px;
        font: normal normal normal 16px/21px IBM Plex Sans;
      }
      button {
        font: normal normal bold 16px/19px Lexend;
        width: 80px;
        height: 34px;
        border-radius: 3px;
      }
    }
    > img {
      height: 35px;
      margin-top: 94px;
    }
  }
  @media (max-width: 560px) {
    div.email {
      width: calc(100% - 20px);
      justify-content: center;
      input {
        flex: 1;
        max-width: 300px;
      }
      img {
        display: none;
      }
      button {
        position: static;
        margin-left: 10px;
      }
      &:hover {
        input {
          transform: none;
        }
        button {
          transform: none;
        }
      }
      &.active {
        input {
          transform: none;
        }
        button {
          transform: none;
        }
      }
    }
  }
`

// @TODO: 邮箱地址发送到服务器，对非法邮箱报错
export const Section1 = observer(() => {
  const store = useStore()

  const [email, setEmail] = React.useState('Send us your email address')
  const [active, setActive] = React.useState(false)
  const [message, setMessage] = React.useState(null)

  React.useEffect(() => {
    let timeoutID
    if (message) {
      timeoutID = setTimeout(() => {
        setMessage(null)
      }, 1000)
    }
    return () => {
      timeoutID && clearTimeout(timeoutID)
    }
  }, [message])

  const inputElement = React.useRef(null)
  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      {message && <div className='message'>{message}</div>}
      <h2>
        Zecrey Protocol
        <Img src={'/section1/circle.svg'} />
      </h2>
      <div className='banner'>
        Brings privacy
        <br />
        value for assets.
      </div>
      <div className={`email ${active ? 'active' : ''}`}>
        <InputEmail
          ref={inputElement}
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          onFocus={() => {
            setActive(true)
            inputElement.current.select()
          }}
        />
        <Img src={'/section1/cute.svg'} />
        <Button
          onClick={() => {
            if (validateEmail(email)) {
              setActive(false)
              setMessage('Send Successfully')
            } else {
              setMessage('Invalid Email')
            }
          }}>
          Send
        </Button>
      </div>
      <Img src={'/logo1.svg'} alt='logo' />
    </Style>
  )
})
