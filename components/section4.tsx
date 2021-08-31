/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import React from 'react'
import styled from 'styled-components'
import { desktopPx2vw } from '@/utils'
import Image from 'next/image'

const BlockStyle = styled.div`
  width: ${desktopPx2vw(222)};
  display: flex;
  flex-direction: column;
  align-items: center;
  > div.square {
    width: ${desktopPx2vw(166)};
    height: ${desktopPx2vw(167)};
    background: rgba(58, 58, 58, 0.6);
    mix-blend-mode: normal;
    border-radius: 20px;
    margin-bottom: ${desktopPx2vw(11)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div.text {
    width: 100%;
    height: ${desktopPx2vw(62)};
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-family: Lexend;
      font-style: normal;
      font-weight: 600;
      font-size: ${desktopPx2vw(21)};
      line-height: ${desktopPx2vw(26)};
      text-align: center;
      color: white;
    }
  }
`

const Block = ({ text, children }) => (
  <BlockStyle>
    <div className='square'>{children}</div>
    <div className='text'>
      <span>{text}</span>
    </div>
  </BlockStyle>
)

const Style = styled.div`
  z-index: 1;
  width: 100vw;
  overflow: hidden;
  position: relative;
  align-items: center;
  padding-top: ${desktopPx2vw(273)};
  padding-bottom: ${desktopPx2vw(179)};
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-family: Lexend;
    font-style: normal;
    font-weight: 800;
    max-width: ${desktopPx2vw(869)};
    font-size: ${desktopPx2vw(80)};
    line-height: ${desktopPx2vw(100)};
    text-align: center;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  > p {
    margin-top: ${desktopPx2vw(120)};
    font-family: Lexend;
    font-style: normal;
    font-weight: normal;
    font-size: ${desktopPx2vw(24)};
    line-height: ${desktopPx2vw(30)};
    text-align: center;
    color: #dadada;
    max-width: ${desktopPx2vw(1182)};
  }
  > div.feature {
    margin-top: ${desktopPx2vw(200)};
    width: ${desktopPx2vw(1300)};
    height: ${desktopPx2vw(190)};
    background: rgba(51, 51, 51, 0.5);
    mix-blend-mode: normal;
    border-radius: ${desktopPx2vw(20)};
    > ul {
      top: -${desktopPx2vw(80)};
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li:nth-of-type(2) {
        position: relative;
        bottom: ${desktopPx2vw(40)};
      }
    }
  }

  > div.row3 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: ${desktopPx2vw(159)};
    > div.left {
      h2 {
        margin-top: ${desktopPx2vw(60)};
        font-family: Lexend;
        font-style: normal;
        font-weight: 800;
        font-size: ${desktopPx2vw(36)};
        line-height: ${desktopPx2vw(45)};
        color: #ffffff;
        padding-left: ${desktopPx2vw(28)};
        border-left: ${desktopPx2vw(5)} solid rgba(255, 255, 255, 0.3);
        max-width: ${desktopPx2vw(404)};
      }
      p {
        max-width: ${desktopPx2vw(445)};
        margin-left: ${desktopPx2vw(33)};
        margin-top: ${desktopPx2vw(33)};
        font-family: Lexend;
        font-style: normal;
        font-weight: normal;
        font-size: ${desktopPx2vw(24)};
        line-height: ${desktopPx2vw(30)};
        color: #dadada;
      }
      div.button {
        margin-left: ${desktopPx2vw(33)};
        margin-top: ${desktopPx2vw(33)};
        width: ${desktopPx2vw(277)};
        height: ${desktopPx2vw(48)};
        border: ${desktopPx2vw(3)} solid #01abb2;
        border-radius: ${desktopPx2vw(24)};
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        div.circle {
          position: relative;
          margin: 0 ${desktopPx2vw(15)};
          display: inline-block;
          width: ${desktopPx2vw(28)};
          height: ${desktopPx2vw(28)};
          display: flex;
          justify-content: center;
          align-items: center;
          > span {
            border-radius: 50%;
            display: inline-block;
            background: #01abb2;
            &.inner {
              z-index: 3;
              position: absolute;
              width: ${desktopPx2vw(11)};
              height: ${desktopPx2vw(11)};
            }
            &.medium {
              z-index: 2;
              position: absolute;
              width: ${desktopPx2vw(15)};
              height: ${desktopPx2vw(15)};
              background: rgba(1, 171, 178, 0.2);
            }
            &.outer {
              z-index: 1;
              width: ${desktopPx2vw(28)};
              height: ${desktopPx2vw(28)};
              filter: blur(${desktopPx2vw(7)});
            }
          }
        }
        > span {
          padding-left: ${desktopPx2vw(5)};
          font-family: Lexend;
          font-style: normal;
          font-weight: 600;
          font-size: ${desktopPx2vw(21)};
          line-height: ${desktopPx2vw(26)};
          color: #ffffff;
        }
        > img.triangle {
          display: inline-block;
          padding-left: ${desktopPx2vw(17)};
          width: ${desktopPx2vw(11)};
          height: ${desktopPx2vw(11)};
          color: #ffffff;
        }
        > img.pointer {
          position: absolute;
          top: ${desktopPx2vw(38)};
          right: ${desktopPx2vw(12)};
          width: ${desktopPx2vw(24)};
        }
      }
    }
    > div.right {
    }
  }
`

const ArrowStyle = styled.div`
  position: relative;
  width: ${desktopPx2vw(133)};
  height: ${desktopPx2vw(55)};
`

const ScreenshotStyle = styled.div`
  position: relative;
  width: ${desktopPx2vw(500)};
  height: ${desktopPx2vw(523)};
`

const Image1 = styled.div`
  position: relative;
  width: ${desktopPx2vw(80)};
  height: ${desktopPx2vw(80)};
`
const Image2 = styled.div`
  position: relative;
  width: ${desktopPx2vw(73)};
  height: ${desktopPx2vw(98)};
`
const Image3 = styled.div`
  position: relative;
  width: ${desktopPx2vw(88)};
  height: ${desktopPx2vw(88)};
`
const Image4 = styled.div`
  position: relative;
  width: ${desktopPx2vw(108)};
  height: ${desktopPx2vw(65)};
`

export const Section4 = () => {
  return (
    <Style>
      <h2>Privacy for a smart contract world</h2>
      <p>
        Blockchains today are not protecting user privacy. Privacy protocols
        have enabled private cash transactions but these systems lack
        programmability. It is difficult and expensive for users to achieve
        complete digital asset privacy.
      </p>
      <div className='feature'>
        <ul>
          <li>
            <Block text='Most Privacy Protocols'>
              <Image1>
                <Image
                  src='/section4/image1.svg'
                  alt='Most Privacy Protocols'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image1>
            </Block>
          </li>
          <li>
            <ArrowStyle>
              <Image
                src='/section4/arrow.svg'
                alt='arrow'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </ArrowStyle>
          </li>
          <li>
            <Block text='Not Generalized'>
              <Image2>
                <Image
                  src='/section4/image2.svg'
                  alt='Not Generalized'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image2>
            </Block>
          </li>
          <li>
            <Block text='High Cost'>
              <Image3>
                <Image
                  src='/section4/image3.svg'
                  alt='High Cost'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image3>
            </Block>
          </li>
          <li>
            <Block text='Inefficient'>
              <Image4>
                <Image
                  src='/section4/image4.svg'
                  alt='Inefficient'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                />
              </Image4>
            </Block>
          </li>
        </ul>
      </div>
      <div className='row3'>
        <div className='left'>
          <h2>The Zecrey protocol makes it easy.</h2>
          <p>
            Efficient and cheap to move digital assets into a private setting.
          </p>
          <div className='button'>
            <div className='circle'>
              <span className='inner' />
              <span className='medium' />
              <span className='outer' />
            </div>
            <span>Zecrey Mainnet</span>
            <img
              className='triangle'
              src='/section4/triangle.svg'
              alt='triangle'
            />
            <img
              className='pointer'
              src='/section4/pointer.svg'
              alt='pointer'
            />
          </div>
        </div>
        <div className='right'>
          <ScreenshotStyle>
            <Image
              src='/section4/screenshot.png'
              alt='screenshot'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </ScreenshotStyle>
        </div>
      </div>
    </Style>
  )
}
