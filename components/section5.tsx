import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

const investors = [
  {
    name: '1loopring',
    image: '/section5/1loopring.png',
    link: 'https://loopring.org/#/'
  },
  {
    name: '7dorahacks',
    image: '/section5/7dorahacks.png',
    link: 'http://hackerlink.io/en'
  },
  {
    name: '4block0',
    image: '/section5/4block0.png',
    link: 'https://www.block0.ai/'
  },
  {
    name: '5cmccglobal',
    image: '/section5/5cmccglobal.png',
    link: 'https://www.cmcc.vc'
  },
  {
    name: '2bybit',
    image: '/section5/2bybit.png',
    link: 'https://www.bybit.com/zh-CN/'
  },
  {
    name: '8crasolum',
    image: '/section5/8crasolum.png',
    link: 'https://crasolum.com/'
  },
  {
    name: '6stakecapital',
    image: '/section5/6stakecapital.png',
    link: 'https://www.stake.capital/'
  },
  {
    name: 'sevenx',
    image: '/section5/9sevenx.png',
    link: 'http://www.7xvc.com/'
  },
  {
    name: 'SNZ',
    image: '/section5/10snz.png',
    link: 'https://snzholding.com/'
  }
]

const Style = styled.div`
  padding: ${px2vw(90, 1437)} ${px2vw(201, 1437)} ${px2vw(200, 1437)}
    ${px2vw(201, 1437)};
  h2 {
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(48, 1437)};
    line-height: ${px2vw(60, 1437)};
    text-align: center;
    color: #ffffff;
    margin-bottom: ${px2vw(30, 1437)};
  }
  p {
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: ${px2vw(24, 1437)};
    line-height: ${px2vw(30, 1437)};
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: ${px2vw(90, 1437)};
  }
  div.investors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    img {
      cursor: pointer;
      margin-bottom: ${px2vw(101, 1437)};
      margin-right: ${px2vw(50, 1437)};
      width: auto;
      &:nth-of-type(1) {
        height: ${px2vw(67, 1437)};
      }
      &:nth-of-type(2) {
        height: ${px2vw(95, 1437)};
      }
      &:nth-of-type(3) {
        height: ${px2vw(59, 1437)};
      }
      &:nth-of-type(4) {
        height: ${px2vw(38, 1437)};
      }
      &:nth-of-type(5) {
        height: ${px2vw(70, 1437)};
      }
      &:nth-of-type(6) {
        height: ${px2vw(43, 1437)};
      }
      &:nth-of-type(7) {
        height: ${px2vw(71, 1437)};
      }
      &:nth-of-type(8) {
        height: ${px2vw(60, 1437)};
      }
      &:nth-of-type(9) {
        height: ${px2vw(75, 1437)};
      }
    }
  }
  @media (max-width: 760px) {
    padding: ${px2vw(10, 320)} ${px2vw(45, 320)} 0 ${px2vw(50, 320)};
    h2 {
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(26, 320)};
      line-height: 32px;
      text-align: center;
      color: #ffffff;
      margin-bottom: ${px2vw(10, 320)};
    }
    p {
      font-family: Lexend;
      font-size: ${px2vw(10, 320)};
      line-height: ${px2vw(12, 320)};
      text-align: center;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.6;
      margin-bottom: ${px2vw(30, 320)};
    }
    div.investors {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      img {
        margin-bottom: ${px2vw(23, 320)};
        width: auto;
        &:nth-of-type(1) {
          height: ${px2vw(18, 320)};
        }
        &:nth-of-type(2) {
          height: ${px2vw(33, 320)};
        }
        &:nth-of-type(3) {
          height: ${px2vw(16, 320)};
        }
        &:nth-of-type(4) {
          height: ${px2vw(13, 320)};
        }
        &:nth-of-type(5) {
          height: ${px2vw(20, 320)};
        }
        &:nth-of-type(6) {
          height: ${px2vw(20, 320)};
        }
        &:nth-of-type(7) {
          height: ${px2vw(20, 320)};
        }
        &:nth-of-type(8) {
          height: ${px2vw(20, 320)};
        }
        &:nth-of-type(9) {
          height: ${px2vw(20, 320)};
        }
      }
    }
  }
`

export const Section5 = observer(() => {
  const store = useStore()
  return (
    <Style>
      <h2>Partners</h2>
      <p>Join us and help advance digital privacy together</p>
      <div className='investors'>
        {investors.map(investor => (
          <Img
            src={investor.image}
            key={investor.name}
            onClick={() => {
              window.open(investor.link, '_blank')
            }}
          />
        ))}
      </div>
    </Style>
  )
})
