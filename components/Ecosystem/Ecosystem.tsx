import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'
import Item from './Item'
import ImgBox from '../common/ImgBox'

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  margin-right: -9.2rem;
  margin-bottom: -6rem;
  height: 24rem;
  width: 96.6rem;
  .dashed {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    position: absolute;
    bottom: 8.7rem;
    left: 42rem;
  }
`
const LogoDot = styled.div`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  bottom: 5.9rem;
  left: 47.7rem;
  background: #2ad4d8;
  box-shadow: 0 0 0 0.3rem rgba(42, 212, 216, 0.4605);
`

const items: {
  name: string
  icon: ReactNode
  opacity: number
  bottom: string
  left: string
  smaller?: boolean
}[] = [
  {
    name: 'Multi-chain Wallet',
    icon: <Icon name='wallet' />,
    opacity: 1,
    bottom: '2.8rem',
    left: '15.5rem'
  },
  {
    name: 'Zecrey app chain',
    icon: <Icon name='app-chain' />,
    opacity: 0.6,
    bottom: '4.7rem',
    left: '24.8rem',
    smaller: true
  },
  {
    name: 'CEX/otc service',
    icon: <Icon name='service' />,
    opacity: 0.4,
    bottom: '5.6rem',
    left: '34.3rem',
    smaller: true
  },
  {
    name: 'private payment',
    icon: <Icon name='payment' />,
    opacity: 0.4,
    bottom: '5.6rem',
    left: '61.7rem',
    smaller: true
  },
  {
    name: 'Nft Manage',
    icon: <Icon name='nfts' />,
    opacity: 0.6,
    bottom: '4.7rem',
    left: '71.2rem',
    smaller: true
  },
  {
    name: 'Privacy protect',
    icon: <Icon name='shield-check' />,
    opacity: 1,
    bottom: '3rem',
    left: '80.5rem'
  }
]

const Ecosystem = () => {
  return (
    <Wrap>
      <ImgBox
        className='dashed'
        src='/Ecosystem/wire.png'
        alt='bg'
        width={955}
        height={66}
      />
      {items.map((i, index) => (
        <Item key={index} {...i} />
      ))}
      <LogoDot />
      <ImgBox
        className='logo'
        src='/Ecosystem/lizard.png'
        alt='logo'
        width={136}
        height={155}
      />
    </Wrap>
  )
}

export default Ecosystem
