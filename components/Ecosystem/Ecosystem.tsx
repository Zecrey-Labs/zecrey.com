import React, { ReactNode } from 'react'
import Icon from '../common/Icon'
import Item from './Item'
import ImgBox from '../common/ImgBox'
import Modal from '../modal'
import { LogoDot, Wrap } from './styles'
import { useMediaQuery } from 'react-responsive'
import EcosystemIcon from './ecosystem.svg'

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
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return (
    <>
      {!isMobile && <Modal />}
      <Wrap>
        {!isMobile && (
          <ImgBox
            className='dashed'
            src='/Ecosystem/wire.png'
            alt='bg'
            width={955}
            height={66}
          />
        )}
        {isMobile ? (
          <EcosystemIcon className='ecosystem-icon' />
        ) : (
          items.map((i, index) => <Item key={index} {...i} index={index} />)
        )}
        {!isMobile && <LogoDot />}
        <ImgBox
          className='logo'
          src='/Ecosystem/lizard.png'
          alt='logo'
          width={136}
          height={155}
        />
      </Wrap>
    </>
  )
}

export default Ecosystem
