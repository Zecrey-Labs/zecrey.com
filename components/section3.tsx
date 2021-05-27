import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

const Style = styled.div`
  padding: 0 0.3rem;
  padding-bottom: 3rem;
  width: 100vw;
  width: 12.88rem;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;

  h2 {
    margin-bottom: 1.62rem;
    text-align: center;
    letter-spacing: 0px;
    color: #e4e4e4;
    text-shadow: 0px 3px 12px #00000040;
    white-space: normal;
    font: normal normal bold 0.8rem/1rem Lexend;
  }
  div.content {
    position: relative;
    div.textList {
      display: flex;
      flex-direction: column;
      position: relative;
      div.text {
        width: 4.43rem;
        &:nth-of-type(2) {
          align-self: flex-end;
        }
        h3 {
          text-align: left;
          letter-spacing: 0px;
          color: #e4e4e4;
          text-shadow: 0px 0.03rem 0.12rem #00000040;
          opacity: 1;
          margin-bottom: 0.3rem;
          font: normal normal bold 0.42rem/0.53rem Lexend;
          @media (max-width: 480px) {
            font: normal normal bold 28px/42px Lexend;
          }
        }
        p {
          text-align: left;
          font: normal normal normal 0.24rem/0.32rem IBM Plex Sans;
          letter-spacing: 0px;
          color: #e4e4e4;
          opacity: 1;
        }
      }
    }
    div.block {
      display: flex;
      flex-direction: column;
      width: 2.26rem;
      height: 5.82rem;
      position: absolute;
      left: calc(50% - 1.3rem);
      top: 0;
      z-index: 1;
      div.bg1 {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: rgba(56, 56, 56, 0.1);
        border-radius: 0.2rem;
        backdrop-filter: blur(3px) brightness(110%);
      }
      img.image1 {
        position: absolute;
        top: 0.42rem;
        left: -0.2rem;
        width: 1.43rem;
      }
      img.image2 {
        position: absolute;
        top: 2.41rem;
        right: -0.67rem;
        z-index: -2;
        width: 1.69rem;
      }
      img.image3 {
        position: absolute;
        bottom: -1.4rem;
        left: -0.57rem;
        z-index: 2;
        width: 2.48rem;
        box-sizing: border-box;
        background: rgba(56, 56, 56, 0.1);
        backdrop-filter: blur(0.03rem) brightness(110%);
        border-radius: 0.2rem;
        padding: 0.75rem 0.68rem;
      }
    }
  }

  div.anchor {
    position: absolute;
    top: 5.2rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 20px 30px;
    h2 {
      font: normal normal bold 42px/42px Lexend;
    }
    div.content {
      display: flex;
      flex-direction: row;
      align-items: flex;
      width: 100%;
      justify-content: center;
      div.block {
        width: 120px;
        height: 300px;
        position: relative;
        left: 0;
        z-index: 1;
        margin-right: 50px;
        img.image1 {
          width: 72px;
          top: 40px;
          left: -14px;
        }
        img.image2 {
          top: 130px;
          right: -34px;
          width: 78px;
        }
      }
      div.textList {
        flex: 1;
        max-width: 62em;
        div.text {
          width: auto;
          margin-bottom: 40px;
          h3 {
            font: normal normal bold 28px/28px Lexend;
          }
          p {
            font-size: 22px;
            line-height: 25px;
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    padding: 0 ${px2vw(20, 320)} 0 ${px2vw(32, 320)};
    h2 {
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(26, 320)};
      line-height: ${px2vw(32, 320)};
      text-align: center;
      color: #ffffff;
      margin-top: ${px2vw(40, 320)};
      margin-bottom: ${px2vw(30, 320)};
      width: ${px2vw(166, 320)};
    }
    div.content {
      div.block {
        width: ${px2vw(62, 320)};
        height: ${px2vw(360, 320)};
        margin-right: ${px2vw(35, 320)};
        img.image1 {
          height: ${px2vw(72, 320)};
          width: auto;
          left: ${px2vw(2.5, 320)};
          top: ${px2vw(7, 320)};
          transform: translate3d(0, 0, 200px) rotateY(180deg);
        }
        img.image2 {
          width: ${px2vw(84, 320)};
          height: auto;
          top: ${px2vw(142, 320)};
          right: ${px2vw(-31, 320)};
        }
        img.image3 {
          width: ${px2vw(48, 320)};
          height: auto;
          left: ${px2vw(5, 320)};
          bottom: ${px2vw(48, 320)};
          padding: ${px2vw(18, 320)} ${px2vw(14, 320)};
          box-sizing: content-box;
          background: #424242;
          mix-blend-mode: normal;
          opacity: 0.79;
          backdrop-filter: blur(3px) brightness(110%);
          border-radius: ${px2vw(5, 320)};
        }
        div.bg1 {
          width: ${px2vw(62, 320)};
          height: ${px2vw(360, 320)};
          background: rgba(56, 56, 56, 0.1);
          backdrop-filter: blur(3px) brightness(110%);
          border-radius: ${px2vw(2, 320)};
        }
      }
      div.textList {
        padding-top: ${px2vw(12, 320)};
        div.text {
          margin-bottom: ${px2vw(29, 320)};
          h3 {
            font-family: Lexend;
            font-style: normal;
            font-weight: 800;
            font-size: ${px2vw(16, 320)};
            line-height: ${px2vw(20, 320)};
            color: #2ad4d9;
            width: ${px2vw(110, 320)};
            padding-left: ${px2vw(11, 320)};
          }
          p {
            font-size: ${px2vw(10, 320)};
            line-height: ${px2vw(12, 320)};
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.6;
            border-left: 1px solid rgba(166, 166, 166, 0.3);
            padding-left: ${px2vw(11, 320)};
          }
        }
      }
    }
  }
`

export const Section3 = observer(() => {
  const store = useStore()
  const anchor2 = React.useRef(null)
  React.useEffect(() => {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      let observer1 = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y <= window.innerHeight) {
          store.setAnchor2Appear(true)
        } else {
          store.setAnchor2Appear(false)
        }
      })
      observer1.observe(anchor2.current)
    }
  }, [])
  return (
    <Style style={{ opacity: store.theme === 'dark' ? 1 : 0 }}>
      <h2>Why Zecrey?</h2>
      <div className='content'>
        <div className='block'>
          <Img className='image1' src={'/section3/image1.svg'} alt='' />
          <Img className='image2' src={'/section3/image2.svg'} alt='' />
          <div className='bg1'></div>
          <Img className='image3' src={'/section3/image3.svg'} alt='' />
        </div>
        <div className='textList'>
          <div className='text'>
            <h3>Confidential Assets</h3>
            <p>
              Make account balances and transaction amounts confidential. Only
              you know your own balances.
            </p>
          </div>
          <div className='text'>
            <h3>Anonymous Identity</h3>
            <p>
              Conceal the relationship between sender and receiver and make
              yourself anonymous in blockchain networks.
            </p>
          </div>
          <div className='text'>
            <h3>Privacy Bridges</h3>
            <p>
              Bridging different blockchain platforms to enable direct
              interactions between digital assets with complete privacy.
            </p>
          </div>
        </div>
      </div>
      <div ref={anchor2} className='anchor' />
    </Style>
  )
})
