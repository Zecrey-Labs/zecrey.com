import { CenterFlex } from '@/styles/global'
import classNames from 'classnames'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
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
    .jump {
      width: 100%;
      height: 20px;
      position: absolute;
      top: -177px;
    }
  }
  .headline {
    opacity: 0;
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
    opacity: 0;
    width: 89rem;
    height: 8.6rem;
    position: absolute;
    left: 50%;
    margin-left: -44.5rem;
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
    opacity: 0;
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
  &.visible {
    .headline {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) forwards;
    }
    .introduce {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.2s forwards;
    }
    .circle {
      animation: move3 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
    }
  }
  @keyframes move22 {
    0% {
      transform: translateY(1.3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes move3 {
    0% {
      transform: translateY(0.6rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const Media = styled(CenterFlex)`
  position: absolute;
  bottom: 5.7rem;
  left: 50%;
  transform: translateX(-50%);
  .visible & {
    .bubble-button {
      animation: move22 1.2s cubic-bezier(0.44, 0.01, 0.23, 0.97) 0.3s forwards;
    }
  }
  .bubble-button {
    width: 13rem;
    height: 13rem;
    margin-right: 3.5rem;
    opacity: 0;
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
    tip: 'Follow @zecreyprotocol for latest annoucements.',
    linkLabel: 'Join',
    link: 'https://twitter.com/zecreyprotocol',
    size: { width: '6.7rem', height: '5.4rem' }
  },
  {
    label: 'telegram',
    icon: <Icon name='telegram' />,
    tip: 'Join Zecrey community for discussion.',
    linkLabel: 'Join',
    link: 'https://t.me/zecrey',
    size: { width: '6.7rem', height: '5.6rem' }
  },
  {
    label: 'medium',
    icon: <Icon name='medium' />,
    tip: 'Learn Zecrey news, progress and technological paper.',
    linkLabel: 'Join',
    link: 'https://medium.com/@zecrey',
    size: { width: '5.6rem', height: '5.6rem' }
  },
  {
    label: 'discord',
    icon: <Icon name='discord' />,
    tip: 'Chat with Zecrey members, surf in the privacy world.',
    linkLabel: 'Join',
    link: 'https://discord.com/invite/U98ghQsJE5',
    size: { width: '5.6rem', height: '6.4rem' }
  }
]

const Communtity = (props: { id: string }) => {
  const [visible, setVisible] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let handleScroll = e => {
      if (dom.current && dom.current.getBoundingClientRect()) {
        let domTop = dom.current.getBoundingClientRect().top
        let domHeight = dom.current.getBoundingClientRect().height
        let height = window.innerHeight
        if (domTop > 0 && height - domTop >= domHeight / 5) {
          setVisible(true)
          document.removeEventListener('scroll', handleScroll)
        }
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Wrap ref={dom} className={classNames({ visible })}>
        <div className='communtity'>
          <div className='jump' id={props.id}></div>
          <div className='headline'>
            <p>Join Community</p>
          </div>
          <div className='introduce'>
            <p>
              Zecrey team is dedicated to globalization development of the
              project. In our communities, developers and users are at liberty
              to communicate with each other about Zecrey, acquire the latest
              progress of the project, get knowledge of the technology
              background, and even discuss the technical details with the
              development team.
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
