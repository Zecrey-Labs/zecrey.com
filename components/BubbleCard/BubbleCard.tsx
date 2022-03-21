import { CenterFlex } from '@/styles/global'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import BubbleButton from '../bubble-button'
import Icon from '../common/Icon'
import CornerLink from '../corner-link'

const Wrap = styled(CenterFlex)`
  position: relative;
  height: 100%;
  .items-wrap {
    width: 80rem;
    justify-content: space-between;
  }
`

const items: {
  label: string
  icon: ReactNode
  tip?: string
  link?: string
  linkLabel?: string
  size?: { width: string; height: string }
}[] = [
  {
    label: 'swap',
    icon: <Icon name='swap' />,
    tip:
      'Make an exchange in Zecrey native AMM DEX and add liquidity of a token-pair. Tokens burned for gas fee can be selected among mainstream tokens like ETH, REY, BNB, etc.'
  },
  {
    label: 'transfer',
    icon: <Icon name='transfer' />,
    tip:
      'Besides usual transfer, Zecrey develops a unique one-to-many transfer function with privacy protection, which improves capital efficiency and has high security.'
  },
  {
    label: 'deFi',
    icon: <Icon name='defi' />
  },
  {
    label: 'Lock/Unlock',
    icon: <Icon name='lock' />,
    tip:
      'Gain interest with your idle funds by helping balance assets among different layer 1 blockchains. The locked funds will generate rewards with time. '
  },
  {
    label: 'withdraw',
    icon: <Icon name='withdraw' />,
    tip:
      'Take assets from layer 2 back to any layer 1 that Zecrey supports. Thereby, aggregated assets are distributed to layer 1 blockchains.'
  },
  {
    label: 'deposit',
    icon: <Icon name='deposit' />,
    tip:
      'Put layer 1 assets into layer 2 for cross-chain transactions. Assets deposited to layer 2 are aggregated and only sorted by token types.'
  },
  {
    label: 'NFT Manage',
    icon: <Icon name='nft' />,
    tip:
      'View the NFT collections of a wallet address, set a NFT as account avatar and gain rewards from NFT staking in Zecrey.'
  }
]

const BubbleCard = () => {
  return (
    <Wrap>
      <CenterFlex className='items-wrap'>
        {items.map((i, index) => (
          <BubbleButton key={index} {...i}>
            {i.icon}
          </BubbleButton>
        ))}
      </CenterFlex>
      <CornerLink href=''>
        <Icon name='shield-check' />
        <span>How Zecrey protects user privacy?</span>
      </CornerLink>
    </Wrap>
  )
}

export default BubbleCard
