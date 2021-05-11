import React from 'react'
import styled from 'styled-components'
import Img from './img'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const Style = styled.div`
  z-index: 1;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.73rem;
  padding-bottom: 1.79rem;
  div.content {
    width: 13.3rem;
    padding-bottom: 1.86rem;
    position: relative;
    box-sizing: content-box;
    h2 {
      width: 9.25rem;
      height: 0.87rem;
      text-align: center;
      font: normal normal bold 0.36rem/0.87rem Lexend;
      letter-spacing: 0px;
      color: #383838;
      position: relative;
      background: #e4e4e4 0% 0% no-repeat padding-box;
      border-radius: 0.05rem;
      img {
        position: absolute;
        &.badge1,
        &.badge2 {
          left: -0.33rem;
          bottom: 0;
          height: 0.37rem;
        }
        &.badge1 {
          z-index: 0;
        }
        &.badge2 {
          z-index: -1;
        }
        &.badge3,
        &.badge4 {
          right: -0.18rem;
          bottom: 0;
        }
        &.badge3 {
          z-index: -1;
          height: 0.47rem;
        }
        &.badge4 {
          z-index: 1;
          height: 0.22rem;
        }
        &.circle1,
        &.halfcircle1 {
          top: 0;
          right: 0.62rem;
          width: 0.52rem;
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
          left: 0.62rem;
          width: 0.52rem;
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
      padding-top: 0.34rem;
      padding-left: 1.33rem;
      p {
        text-align: left;
        font: normal normal normal 0.24rem/0.32rem IBM Plex Sans;
        color: #222222;
        &:nth-of-type(1) {
          width: 7.28rem;
          margin-bottom: 0.29rem;
        }
        &:nth-of-type(2) {
          width: 5.25rem;
        }
      }
    }
    ul.features {
      position: absolute;
      right: 0;
      bottom: 0.38rem;
      li {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #e4e4e4 0% 0% no-repeat padding-box;
        border-radius: 0.05rem;
        width: 3rem;
        height: 1.86rem;
        padding: 0.25rem 0;
        margin: 0.1rem;
        img {
          height: 0.88rem;
          margin-bottom: 0.25rem;
        }
        span {
          text-align: left;
          font: normal normal bold 0.24rem/0.29rem Lexend;
          letter-spacing: 0px;
          color: rgba(150, 150, 150);
        }
        &:nth-of-type(1) {
          right: 0;
          bottom: 2.26rem;
        }
        &:nth-of-type(3) {
          right: 0;
          bottom: 0;
        }
        &:nth-of-type(2) {
          bottom: 0;
          right: 3.4rem;
        }
      }
    }
  }
  img.big {
    position: absolute;
    &:nth-of-type(1) {
      left: 0.5rem;
      bottom: 0;
      height: 3.31rem;
    }
    &:nth-of-type(2) {
      top: 0.65rem;
      height: 4.2rem;
      right: 0;
    }
  }
  div.anchor {
    position: absolute;
    top: 5.88rem;
  }
  @media (max-width: 750px) {
    div.content {
      width: 100%;
      box-sizing: border-box;
      padding-left: 30px;
      padding-right: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      h2 {
        width: 100%;
        max-width: 25em;
        font-size: 20px;
        line-height: 25px;
        height: auto;
        padding: 10px;
        img {
          &.badge1,
          &.badge2 {
            left: -16px;
            height: 30px;
          }
          &.badge3,
          &.badge4 {
            right: -12px;
          }
          &.badge3 {
            height: 30px;
          }
          &.badge4 {
            height: 14px;
          }
          &.circle1,
          &.halfcircle1,
          &.circle2,
          &.halfcircle2 {
            width: 45px;
          }
          &.circle1,
          &.halfcircle1 {
            right: 24px;
          }
          &.circle2,
          &.halfcircle2 {
            left: 62px;
          }
        }
      }
      div.text {
        padding: 20px;
        p:nth-of-type(1),
        p:nth-of-type(2) {
          width: 100%;
          font-size: 16px;
          line-height: 20px;
        }
      }
      ul.features {
        position: static;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        li {
          position: static;
          box-sizing: content-box;
          width: 200px;
          height: 90px;
          padding: 16px 0;
          img {
            height: 58px;
            margin-bottom: 16px;
          }
          span {
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
    img.big {
      display: none;
    }
    div.anchor {
      position: absolute;
      top: 10rem;
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
          <span>Keep Privacy in a Smart Contract World</span>
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
            Problems of the privacy of blockchain right now are that used only
            as privacy cash, in other words, it's non-programmable. In addition,
            if the user wants to achieve asset privacy, it's not easy to use and
            will cost a lot.
          </p>
          <p>
            Zecrey is such a protocol that makes it easy to bring your assets
            into a private world with high efficiency and low cost.
          </p>
        </div>
        <ul className='features'>
          <li>
            <Img src={'/section2/icon1.svg'} alt='' />
            <span>Public Scenes</span>
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
