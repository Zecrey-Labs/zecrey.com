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
      'Create a Swap transaction in a private AMM DEX. Option to add liquidity as staking for rewards. ( Any assets on Layer 2 can be used as gas fee. )'
  },
  {
    label: 'transfer',
    icon: <Icon name='transfer' />,
    tip:
      'Conduct transfers to multiple accounts in a single encrypted transaction with a high level of privacy and security.'
  },
  {
    label: 'deFi',
    icon: <Icon name='defi' />,
    tip: 'Earn rewards through Staking and Farming.'
  },
  {
    label: 'Lock&Unlock',
    icon: <Icon name='lock' />,
    tip:
      'Get rewarded by providing liquidity to bridges amongst various Layer 1 blockchains. Unlock assets with a few clicks.'
  },
  {
    label: 'withdraw',
    icon: <Icon name='withdraw' />,
    tip: 'Securely reposition your digital assets from Layer 2 to 1.'
  },
  {
    label: 'deposit',
    icon: <Icon name='deposit' />,
    tip:
      "Migrate digital assets from Layer 1 to Zecrey's Layer 2 to aggregate assets and benefit from lightining fast transactions, privacy features and much more while still retaining ownership of your digital assets."
  },
  {
    label: 'NFT',
    icon: <Icon name='nft' />,
    tip:
      'Manage your myriad collection of NFTs in one easy to use interface. Can be set as an avatar for your account.'
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
