import React from 'react'
import styled from 'styled-components'
import Img from './img'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { px2vw } from '@/utils'

const Style = styled.div`
  z-index: 1;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${px2vw(273, 1920)};
  padding-bottom: ${px2vw(179, 1920)};
  div.content {
    width: ${px2vw(1330, 1920)};
    padding-bottom: ${px2vw(186, 1920)};
    position: relative;
    box-sizing: content-box;
    h2 {
      width: ${px2vw(925, 1920)};
      height: ${px2vw(87, 1920)};
      text-align: center;
      font: normal normal bold ${px2vw(36, 1920)} / ${px2vw(87, 1920)} Lexend;
      letter-spacing: 0px;
      color: #383838;
      position: relative;
      background: #e4e4e4 0% 0% no-repeat padding-box;
      border-radius: ${px2vw(5, 1920)};
      img {
        position: absolute;
        &.badge1,
        &.badge2 {
          left: -${px2vw(33, 1920)};
          bottom: 0;
          height: ${px2vw(37, 1920)};
        }
        &.badge1 {
          z-index: 0;
        }
        &.badge2 {
          z-index: -1;
        }
        &.badge3,
        &.badge4 {
          right: -${px2vw(18, 1920)};
          bottom: 0;
        }
        &.badge3 {
          z-index: -1;
          height: ${px2vw(47, 1920)};
        }
        &.badge4 {
          z-index: 1;
          height: ${px2vw(22, 1920)};
        }
        &.circle1,
        &.halfcircle1 {
          top: 0;
          right: ${px2vw(62, 1920)};
          width: ${px2vw(52, 1920)};
        }
        &.circle1 {
          z-index: -1;
          transform: translateY(-50%);
        }
        &.halfcircle1 {
          z-index: 1;
        }
        &.circle2,
        &.halfcircle2 {
          bottom: 0;
          left: ${px2vw(62, 1920)};
          width: ${px2vw(52, 1920)};
        }
        &.circle2 {
          z-index: -1;
          transform: translateY(50%);
        }
        &.halfcircle2 {
          z-index: 1;
          transform: rotateX(180deg);
        }
      }
    }
    div.text {
      padding-top: ${px2vw(34, 1920)};
      padding-left: ${px2vw(133, 1920)};
      p {
        text-align: left;
        font: normal normal normal ${px2vw(24, 1920)} / ${px2vw(32, 1920)} IBM
          Plex Sans;
        color: #222222;
        &:nth-of-type(1) {
          width: ${px2vw(728, 1920)};
          margin-bottom: ${px2vw(29, 1920)};
        }
        &:nth-of-type(2) {
          width: ${px2vw(525, 1920)};
        }
      }
    }
    ul.features {
      position: absolute;
      right: 0;
      bottom: ${px2vw(38, 1920)};
      li {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: #e4e4e4 0% 0% no-repeat padding-box;
        border-radius: ${px2vw(5, 1920)};
        width: ${px2vw(300, 1920)};
        height: ${px2vw(186, 1920)};
        padding: ${px2vw(25, 1920)} 0;
        margin: ${px2vw(10, 1920)};
        img {
          height: ${px2vw(88, 1920)};
          margin-bottom: ${px2vw(25, 1920)};
        }
        span {
          text-align: left;
          font: normal normal bold ${px2vw(24, 1920)} / ${px2vw(29, 1920)}
            Lexend;
          letter-spacing: 0px;
          color: rgba(150, 150, 150);
        }
        &:nth-of-type(1) {
          right: 0;
          bottom: ${px2vw(270, 1920)};
        }
        &:nth-of-type(3) {
          right: 0;
          bottom: 0;
        }
        &:nth-of-type(2) {
          bottom: 0;
          right: ${px2vw(340, 1920)};
        }
      }
    }
  }
  img.big {
    position: absolute;
    &:nth-of-type(1) {
      left: ${px2vw(50, 1920)};
      bottom: 0;
      height: ${px2vw(331, 1920)};
    }
    &:nth-of-type(2) {
      top: ${px2vw(65, 1920)};
      height: ${px2vw(420, 1920)};
      right: 0;
    }
  }
  div.anchor {
    position: absolute;
    top: ${px2vw(588, 1920)};
  }
  @media (max-width: 760px) {
    width: 100%;
    box-sizing: border-box;
    min-height: calc(100vh - 40px);
    padding: ${px2vw(80, 320)} ${px2vw(33, 320)} ${px2vw(97, 320)}
      ${px2vw(33, 320)};
    div.content {
      width: 100%;
      padding-bottom: 0;
      h2 {
        width: 100%;
        height: auto;
        margin: 0;
        margin-bottom: ${px2vw(33, 320)};
        font-family: Lexend;
        font-style: normal;
        font-weight: bold;
        font-size: ${px2vw(26, 320)};
        line-height: ${px2vw(32, 320)};
        text-align: center;
        color: #171717;
        background: none;
        img {
          display: none;
        }
      }
      div.text {
        padding: 0;
        p {
          font-size: ${px2vw(10, 320)};
          line-height: ${px2vw(16, 320)};
          color: #000000;
          border-left: 5px solid #cceeef;
          padding-left: ${px2vw(11, 320)};
          margin-bottom: ${px2vw(31, 320)};
          width: auto !important;
        }
      }
      ul.features {
        display: block;
        position: relative;
        height: ${px2vw(262, 320)};
        li {
          position: absolute;
          width: ${px2vw(115, 320)};
          height: ${px2vw(126, 320)};
          background: #f4f4f4;
          border: 1px solid #d7d7d7;
          border-radius: ${px2vw(5, 320)};
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          img {
            height: ${px2vw(70, 320)};
            width: auto;
            margin-top: ${px2vw(16, 320)};
            margin-bottom: ${px2vw(15, 320)};
          }
          span {
            font-family: Lexend;
            font-style: normal;
            font-weight: bold;
            font-size: ${px2vw(12, 320)};
            line-height: ${px2vw(15, 320)};
            color: #949494;
          }
          &:nth-of-type(1) {
            top: ${px2vw(20, 320)};
            right: unset;
            left: 0;
            bottom: unset;
            z-index: 1;
          }
          &:nth-of-type(2) {
            top: 0;
            right: 0;
            left: unset;
            bottom: unset;
          }
          &:nth-of-type(3) {
            top: unset;
            right: ${px2vw(35, 320)};
            left: unset;
            bottom: 0;
          }
        }
      }
    }
    img.big {
      &:nth-of-type(1) {
        width: ${px2vw(160, 320)};
        height: auto;
        left: -${px2vw(26, 320)};
      }
      &:nth-of-type(2) {
        width: auto;
        height: ${px2vw(127, 320)};
        top: ${px2vw(66, 320)};
      }
    }
  }
`

export const Section2 = observer(() => {
  const store = useStore()
  const anchor1 = React.useRef(null)
  React.useEffect(() => {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer1 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y <= window.innerHeight) {
          store.setAnchor1Appear(true)
        } else {
          store.setAnchor1Appear(false)
        }
      })
      observer1.observe(anchor1.current)
    }
  }, [])

  return (
    <Style style={{ opacity: store.theme === 'light' ? 1 : 0 }}>
      <div className='content'>
        <h2>
          <span>Privacy for a smart contract world</span>
          <Img className='badge1' src={'/section2/badge1.svg'} alt='' />
          <Img className='badge2' src={'/section2/badge2.svg'} alt='' />
          <Img className='badge3' src={'/section2/badge3.svg'} alt='' />
          <Img className='badge4' src={'/section2/badge4.svg'} alt='' />
          <Img className='circle1' src={'/section2/circle.svg'} alt='' />
          <Img className='circle2' src={'/section2/circle.svg'} alt='' />
          <Img
            className='halfcircle1'
            src={'/section2/halfcircle.svg'}
            alt=''
          />
          <Img
            className='halfcircle2'
            src={'/section2/halfcircle.svg'}
            alt=''
          />
        </h2>
        <div className='text'>
          <p>
            Blockchains today are not protecting user privacy. Privacy protocols
            have enabled private cash transactions but these systems lack
            programmability. It is difficult and expensive for users to achieve
            complete digital asset privacy.
          </p>
          <p>
            The Zecrey protocol makes it easy, efficient and cheap to move
            digital assets into a private setting
          </p>
        </div>
        <ul className='features'>
          <li>
            <Img src={'/section2/icon1.svg'} alt='' />
            <span>Public transactions</span>
          </li>
          <li>
            <Img src={'/section2/icon2.svg'} alt='' />
            <span>Inefficient</span>
          </li>
          <li>
            <Img src={'/section2/icon3.svg'} alt='' />
            <span>High Cost</span>
          </li>
        </ul>
      </div>
      <Img className='big' src='/section2/bigimage1.svg' />
      <Img className='big' src='/section2/bigimage2.svg' />
      <div ref={anchor1} className='anchor' />
    </Style>
  )
})
