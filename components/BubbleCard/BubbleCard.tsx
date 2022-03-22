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
      'Make a swap and add liquidity in Zecrey native private AMM DEX. Any assets on Layer 2 could be used as gas fee.'
  },
  {
    label: 'transfer',
    icon: <Icon name='transfer' />,
    tip:
      'Besides usual transfer, Zecrey develops a unique one-to-many transfer feature with privacy protection, which improves capital efficiency and has high security.'
  },
  {
    label: 'deFi',
    icon: <Icon name='defi' />,
    tip: 'Stake and Farm to earn rewards.'
  },
  {
    label: 'Lock/Unlock',
    icon: <Icon name='lock' />,
    tip:
      'Gain rewards by providing liquidity to bridges among different layer 1 blockchains. Unlock assets to Layer 2 with one click.'
  },
  {
    label: 'withdraw',
    icon: <Icon name='withdraw' />,
    tip:
      'Quickly move assets to any Layer 1 to complete the cross-chain function with high security level.'
  },
  {
    label: 'deposit',
    icon: <Icon name='deposit' />,
    tip:
      'Move assets from different Layer 1s to Zecrey Layer 2 to aggregate assets and enjoy privacy protection.'
  },
  {
    label: 'NFT Manage',
    icon: <Icon name='nft' />,
    tip:
      'Easy way to manage your NFT collections within one interface and use them as account avatar.'
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
