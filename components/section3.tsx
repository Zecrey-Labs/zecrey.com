import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'

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

  @media (max-width: 685px) {
    h2 {
      font: normal normal bold 40px/40px Lexend;
    }
    div.content {
      div.block {
        display: none;
      }
      div.textList {
        div.text {
          margin: 20px;
        }
      }
    }
  }

  @media (max-width: 443px) {
    h2 {
      font: normal normal bold 36px/39px Lexend;
    }
    div.text {
      width: 100%;
      max-width: 62em;
    }
    div.anchor {
      top: 8rem;
    }
  }
  @media (max-width: 800px) and (min-height: 1000px) {
    div.anchor {
      top: 10rem;
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
      <h2>Why Zecrey special</h2>
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
              Make account balance and transaction amount confidential. Nobody
              will know your balance have except yourself.
            </p>
          </div>
          <div className='text'>
            <h3>Anonymous Identity</h3>
            <p>
              Conceal the relationship between sender and receiver and make
              yourself anonymous in the blockchain network.
            </p>
          </div>
          <div className='text'>
            <h3>Privacy Bridges</h3>
            <p>
              Bridge different blockchains assets that can make them interact
              with each other in a private way.
            </p>
          </div>
        </div>
      </div>
      <div ref={anchor2} className='anchor' />
    </Style>
  )
})
