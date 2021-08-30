/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { validateEmail, px2vw } from '@/utils'
import { DOWNLOAD_URL } from '@/constant'

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
  &::placeholder {
    text-align: center;
  }
`

const Button = styled.button`
  background: #2ad4d9 0% 0% no-repeat padding-box;
  width: auto;
  opacity: 1;
  text-align: left;
  letter-spacing: 0px;
  color: #222222;
  text-align: center;
  border: none;
`

const Style = styled.div<{ active: boolean }>`
  width: 100vw;
  min-height: calc(100vh - ${px2vw(200, 1920)});
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div.message {
    position: fixed;
    width: 100%;
    top: max(${px2vw(110, 1920)}, 64px);
    z-index: 100;
    font: bold ${px2vw(36, 1920)} / ${px2vw(70, 1920)} Lexend;
    text-align: center;
    box-shadow: 0 ${px2vw(30, 1920)} ${px2vw(120, 1920)} rgb(0 0 0 / 25%);
    color: #383838;
    background-color: #2ad4d9;
  }
  h2 {
    margin-top: ${px2vw(128, 1920)};
    background: #2ad4d9 0% 0% no-repeat padding-box;
    height: ${px2vw(50, 1920)};
    width: ${px2vw(383, 1920)};
    font: normal normal bold ${px2vw(32, 1920)} / ${px2vw(50, 1920)} Lexend;
    border-radius: ${px2vw(5, 1920)};
    text-align: center;
    letter-spacing: 0;
    color: #222222;
    position: relative;
    img {
      font-size: ${px2vw(10, 1920)};
      position: absolute;
      right: ${px2vw(23, 1920)};
      top: 0;
      transform: translateY(-50%);
    }
  }
  div.banner {
    margin-top: ${px2vw(25, 1920)};
    text-align: center;
    letter-spacing: 0;
    color: #e4e4e4;
    text-shadow: 0px ${px2vw(3, 1920)} ${px2vw(12, 1920)} #00000040;
    font: normal normal bold ${px2vw(100, 1920)} / ${px2vw(120, 1920)} Lexend;
    @media (max-width: 999px) {
      font: normal normal bold 52px/63px Lexend;
    }
  }
  div.email {
    margin-top: ${px2vw(69, 1920)};
    position: relative;
    display: flex;
    align-items: center;
    input {
      transition: transform 0.2s ease-out;
      z-index: 1;
      box-sizing: border-box;
      width: ${px2vw(455, 1920)};
      height: ${px2vw(52, 1920)};
      border: ${px2vw(2, 1920)} solid #2ad4d9;
      border-radius: ${px2vw(5, 1920)};
      padding: 0 ${px2vw(20, 1920)};
      font: normal normal normal ${px2vw(24, 1920)} / ${px2vw(32, 1920)} IBM
        Plex Sans;
    }
    img {
      position: absolute;
      bottom: 0;
      right: ${px2vw(5, 1920)};
      height: ${px2vw(26, 1920)};
      z-index: 0;
      transition: transform 0.2s ease-out;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      transition: transform 0.2s ease-out;
      z-index: 0;
      font: normal normal bold ${px2vw(24, 1920)} / ${px2vw(29, 1920)} Lexend;
      height: ${px2vw(52, 1920)};
      border-radius: ${px2vw(5, 1920)};
    }
    &:hover {
      input {
        transform: translateX(-${px2vw(20, 1920)});
      }
      img {
        transform: translateX(${px2vw(19, 1920)});
      }
      button {
        transform: translateX(-${px2vw(20, 1920)});
      }
    }
    &.active {
      input {
        transform: translateX(-${px2vw(20, 1920)});
      }
      img {
        visibility: hidden;
      }
      button {
        transform: translateX(100%);
      }
    }
  }

  > .links {
    display: flex;
    margin: ${px2vw(64, 1437)} auto;
  }
  > .links a {
    text-decoration: none;
    height: ${px2vw(30, 1437)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff;
    border-radius: ${px2vw(5, 1437)};
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: ${px2vw(16, 1437)};
    line-height: ${px2vw(20, 1437)};
    color: #ffffff;
    cursor: pointer;
    margin-right: ${px2vw(16, 1437)};
    &:hover {
      color: #0b0b0b;
      background: #2ad4d9;
      border: 1px solid #2ad4d9;
    }
  }
  > .links a:last-child {
    margin: 0;
  }
  > .links a.whitepaper {
    width: ${px2vw(124, 1437)};
  }
  > .links a.downloadapp {
    width: ${px2vw(134, 1437)};
  }
  > img {
    height: ${px2vw(52, 1920)};
  }
  div.nextSectionGuide {
    display: none;
  }

  @media (max-width: 760px) {
    padding-top: ${px2vw(102, 320)};
    position: relative;
    height: calc(100vh - 40px);
    box-sizing: border-box;
    h2,
    div.banner,
    div.email {
      transform: ${({ active }) => (active ? 'translateY(-40px)' : 'none')};
    }
    div.message {
      top: 40px;
    }
    transition: transform 0.2s ease-in-out;
    h2 {
      margin-top: 0;
      width: ${px2vw(181, 320)};
      height: ${px2vw(23, 320)};
      box-sizing: border-box;
      padding-top: ${px2vw(3, 320)};
      font-size: ${px2vw(16, 320)};
      line-height: ${px2vw(16, 320)};
    }
    div.banner {
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(22, 320)};
      line-height: ${px2vw(27, 320)};
      text-align: center;
      color: #ffffff;
      margin-top: ${px2vw(11, 320)};
    }
    div.email {
      display: block;
      margin-top: ${px2vw(11, 320)};
      input {
        width: ${px2vw(181, 320)};
        height: ${px2vw(24, 320)};
        border: 1px solid #2ad4d9;
        ${px2vw(14, 320)};
        font-size: ${px2vw(12, 320)};
        line-height: ${px2vw(14, 320)};
        color: #e4e4e4;
        transform: none;
      }
      img {
        display: none;
      }
      button {
        width: auto;
        height: ${px2vw(20, 320)};
        display: block;
        transition: opacity 0.2s ease;
        opacity: ${({ active }) => (active ? '1' : '0')};
        transform: none;
        display: block;
        position: relative;
        margin: ${px2vw(11, 320)} auto 0;
        background: #2ad4d9;
        border-radius: ${px2vw(5, 320)};
        font-family: Lexend;
        font-style: normal;
        font-weight: 800;
        font-size: ${px2vw(12, 320)};
        line-height: ${px2vw(15, 320)};
        text-transform: uppercase;
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
    > .links {
    }
    > .links a {
      height: ${px2vw(25, 320)};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ffffff;
      border-radius: ${px2vw(5, 320)};
      font-family: Lexend;
      font-style: normal;
      font-weight: 500;
      font-size: ${px2vw(10, 320)};
      line-height: ${px2vw(12, 320)};
      color: #ffffff;
    }
    > .links a.whitepaper {
      width: ${px2vw(75, 320)};
    }
    > .links a.downloadapp {
      width: ${px2vw(85, 320)};
    }
    > img {
      height: ${px2vw(20, 320)};
    }
    div.nextSectionGuide {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: ${px2vw(40, 320)};
      align-items: center;
      justify-content: center;
      p {
        font-family: Lexend;
        font-size: ${px2vw(12, 320)};
        font-weight: bold;
      }
      @keyframes slideshow {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(${px2vw(5, 320)});
        }
      }
      div.triangle {
        display: block;
        &::before {
          content: '';
          display: block;
          margin-top: ${px2vw(10, 320)};
          width: 0;
          height: 0;
          border: ${px2vw(8, 320)} solid transparent;
          border-top-color: #ddd;
          animation: slideshow 0.5s ease-in-out alternate infinite;
        }
      }
    }
  }
  @media (max-height: 500px) {
    div.nextSectionGuide {
      display: none;
    }
  }
`

export const Section1 = observer(() => {
  const store = useStore()

  const [email, setEmail] = React.useState('')
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
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }} active={active}>
      {message && <div className='message'>{message}</div>}
      <h2>
        Zecrey Protocol
        <Img src={'/section1/circle.svg'} />
      </h2>
      <div className='banner'>
        Bringing Cross-chain
        <br />
        Privacy to Digital Assets
      </div>
      <div className={`email ${active ? 'active' : ''}`}>
        <InputEmail
          placeholder={active ? '' : 'Email me updates'}
          ref={inputElement}
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          onFocus={() => {
            setActive(true)
            inputElement.current.select()
          }}
          onBlur={() => {
            setTimeout(() => {
              setActive(false)
            }, 100)
          }}
        />
        <Img src={'/section1/cute.svg'} />
        <Button
          onClick={async () => {
            if (validateEmail(email)) {
              try {
                const response = await fetch('/api/subscribe?address=' + email)
                const result = await response.json()
                setMessage(
                  result.message === 'subscribed'
                    ? 'Subscribe Successfully'
                    : result.error
                )
              } catch (error) {
                setMessage('Failed to subscribe')
              } finally {
                setActive(false)
              }
            } else {
              setMessage('Invalid Email')
            }
          }}>
          Subscribe
        </Button>
      </div>
      <div className='links'>
        <a
          href='https://docsend.com/view/ntcsmt7meu84gcqk'
          target='_blank'
          className='whitepaper'>
          White Paper
        </a>
        <a href={DOWNLOAD_URL} className='downloadapp' download='zecrey'>
          Download App
        </a>
      </div>
      <Img src={'/section1/appcoming.png'} alt='logo' />
      <div className='nextSectionGuide'>
        <p>Slide to View More</p>
        <div className='triangle'></div>
      </div>
    </Style>
  )
})
