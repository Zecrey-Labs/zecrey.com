import { CenterFlex } from '@/styles/global'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import BubbleButton from '../bubble-button'
import Icon from '../common/Icon'
import Card from './card'

const Wrap = styled.div`
  .communtity {
    width: 128rem;
    height: 41rem;
    background: rgba(56, 56, 56, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(2.71828rem);
    border-radius: 1rem;
    position: relative;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .headline {
    width: 21.8rem;
    height: 3rem;
    position: absolute;
    left: 41.48%;
    right: 41.48%;
    top: calc(50% - 3rem / 2 - 16rem);
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3rem;
    letter-spacing: 0.0289412rem;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .introduce {
    width: 99.2rem;
    height: 8.6rem;
    position: absolute;
    left: 11.25%;
    right: 11.25%;
    top: 21.95%;
    bottom: 55.37%;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 2.1rem;
    text-align: center;
    letter-spacing: 0.0192941rem;
    color: #ffffff;
  }
  .circle {
    width: 38.398rem;
    height: 38.385rem;
    position: absolute;
    left: 35%;
    right: 35%;
    top: 58.05%;
    bottom: -51.67%;
    /* background: rgba(255, 255, 255, 0.05); */
  }
  .circle img {
    display: block;
    width: 38.398rem;
  }
  .software-p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: 0.0168824rem;
    color: #ffffff;
    text-align: center;
    margin-top: 1.5rem;
  }
`
const Media = styled(CenterFlex)`
  position: absolute;
  bottom: 5.7rem;
  left: 50%;
  transform: translateX(-50%);
  .bubble-button {
    width: 13rem;
    height: 13rem;
    margin-right: 3.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

const items: {
  icon: ReactNode
  label: string
  tip?: string
  linkLabel?: string
  link?: string
  size?: { width: string; height: string }
}[] = [
  {
    label: 'twitter',
    icon: <Icon name='twitter' />,
    tip:
      'Understand the latest progress of the project and browse the technical details of the project in depth.',
    linkLabel: 'View',
    link: 'https://twitter.com/zecreyprotocol',
    size: { width: '6.7rem', height: '5.4rem' }
  },
  {
    label: 'telegram',
    icon: <Icon name='telegram' />,
    tip:
      'Understand the latest progress of the project and browse the technical details of the project in depth.',
    linkLabel: 'View',
    link: 'https://t.me/zecrey',
    size: { width: '6.7rem', height: '5.6rem' }
  },
  {
    label: 'medium',
    icon: <Icon name='medium' />,
    tip:
      'Understand the latest progress of the project and browse the technical details of the project in depth.',
    linkLabel: 'View',
    link: 'https://medium.com/@zecrey',
    size: { width: '5.6rem', height: '5.6rem' }
  },
  {
    label: 'discord',
    icon: <Icon name='discord' />,
    tip:
      'Understand the latest progress of the project and browse the technical details of the project in depth.',
    linkLabel: 'View',
    link: 'https://discord.com/invite/U98ghQsJE5',
    size: { width: '5.6rem', height: '6.4rem' }
  }
]

const Communtity = () => {
  return (
    <>
      <Wrap>
        <div className='communtity'>
          <div className='headline'>
            <p>Join Communtity</p>
          </div>
          <div className='introduce'>
            <p>
              Zecrey is committed to promoting the globalization of projects. To
              this end, we have established communities on different platforms.
              In the community, you can communicate with zecrey users all over
              the world, get the latest progress of the project progress,
              understand the technical principles, and even discuss the
              technical details with the development team.
            </p>
          </div>
          <div className='circle'>
            <img src='/communtity/circle.png' alt='' />
          </div>
          <Media>
            {items.map((i, index) => (
              <BubbleButton key={index} {...i}>
                {i.icon}
              </BubbleButton>
            ))}
          </Media>
        </div>
      </Wrap>
    </>
  )
}

export default Communtity
