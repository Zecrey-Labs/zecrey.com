/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import styled from 'styled-components'
import { desktopPx2vw, px2vw } from '@/utils'

export const Style = styled.div`
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
      height: ${px2vw(86)};
      z-index: 1;
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      align-items: center;
      padding-bottom: ${px2vw(50)};
      img {
        width: ${px2vw(267, 1920)};
        height: ${px2vw(109, 1920)};
        margin-left: ${px2vw(25, 1920)};
        margin-right: ${px2vw(96, 1920)};
        position: relative;
      }
      > div.subsection {
        margin-right: ${px2vw(191, 1920)};
        display: flex;
        flex-direction: column;
        > a {
          height: ${px2vw(30)};
          margin-bottom: ${px2vw(25, 1920)};
          text-align: left;
          font: normal normal bold ${px2vw(24, 1920)} / ${px2vw(30, 1920)}
            Roboto;
          color: #e4e4e4;
          cursor: pointer;
          &:hover {
            text-decoration: none;
            color: rgba(42, 212, 217, 1);
          }
        }
        > a:last-child {
          margin: 0;
        }
        > span {
          color: gray;
          cursor: not-allowed;
        }
      }
      div.email-subscribe {
        position: relative;
        flex: 1;
        height: 100%;
      }
    }
    div.section2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: rgb(34, 34, 34);
      align-items: center;
      padding: ${px2vw(30, 1920)} 0 ${px2vw(78)} 0;
      div.subsection1 {
        display: flex;
        align-items: center;
        font-size: ${px2vw(30, 1920)};
        padding-left: ${px2vw(28)};
        a {
          font-size: ${px2vw(38, 1920)};
          color: #00acb1;
          margin-right: ${px2vw(33, 1920)};
        }
        a.twitter {
          transform: translateY(-${px2vw(1)});
        }
        a.discord {
          transform: translateY(${px2vw(2)});
        }
      }
      > div.subsection2 {
        text-align: right;
        font: normal normal normal ${px2vw(20, 1920)} / ${px2vw(27, 1920)}
          Leelawadee UI;
        color: #e4e4e4;
        > div.contact {
          display: inline-block;
          em {
            font-family: Lexend;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #e4e4e4;
            margin-right: ${desktopPx2vw(6)};
          }
          span {
            font-family: sans-serif;
            font-size: 21px;
            font-weight: 300;
            line-height: 25px;
            text-decoration-line: underline;
            color: #e4e4e4;
          }
        }
        > span.bar {
          display: inline-block;
          width: ${desktopPx2vw(1)};
          height: ${desktopPx2vw(20)};
          margin: 0 ${desktopPx2vw(21)};
          background-color: #e4e4e4;
          vertical-align: text-bottom;
          margin-bottom: ${desktopPx2vw(2)};
        }
        > div.copyright {
          display: inline-block;
          font-family: sans-serif;
          font-weight: 300;
          font-size: 21px;
          line-height: 25px;
          color: #e4e4e4;
        }
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
        div.email-subscribe {
          position: relative;
          height: ${px2vw(17, 320)};
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
export const Message = styled.div`
  position: fixed;
  width: 100%;
  top: max(${px2vw(110, 1920)}, 64px);
  z-index: 100;
  font: bold ${px2vw(36, 1920)} / ${px2vw(70, 1920)} Lexend;
  text-align: center;
  box-shadow: 0 ${px2vw(30, 1920)} ${px2vw(120, 1920)} rgb(0 0 0 / 25%);
  color: #383838;
  background-color: #2ad4d9;
  @media (max-width: 760px) {
    top: 40px;
  }
`
export const EmailSubscribe = styled.div<{ ac: boolean }>`
  position: absolute;
  bottom: 0;
  display: flex;
  label {
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(24, 1920)};
    color: #e4e4e4;
    margin-right: ${px2vw(13, 1920)};
  }
  input {
    width: ${px2vw(250, 1920)};
    border: none;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(18, 1920)};
    color: #e4e4e4;
    margin-right: ${px2vw(13, 1920)};
    outline: none;
  }
  input::placeholder {
    opacity: 0.5;
  }
  input:focus {
    border-color: #fff;
  }
  button {
    opacity: ${props => (props.ac ? 1 : 0)};
    width: ${px2vw(80, 1920)};
    height: ${px2vw(25, 1920)};
    border: none;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    border-radius: ${px2vw(37, 1920)};
    font-family: Lexend;
    font-style: normal;
    font-weight: 600;
    font-size: ${px2vw(16, 1920)};
    letter-spacing: 0.29px;
    color: #000000;
    transform: translateX(${props => (props.ac ? '0' : '-30%')});
    transition: all 120ms ease-out;
  }
  @media (max-width: 760px) {
    align-items: center;
    width: 100%;
    input {
      flex: 1;
    }
    button {
      width: auto;
      height: auto;
    }
  }
`
