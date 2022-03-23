import { CenterFlex } from '@/styles/global'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import BubbleButton from '../bubble-button'
import Icon from '../common/Icon'
import CornerLink from '../corner-link'

const Wrap = styled(CenterFlex)`
  width: 81.9rem;
  position: relative;
  height: 100%;
  .item-wrap {
    width: 77.5rem;
    justify-content: space-between;
  }
`
const items: {
  label: string
  icon: ReactNode
  size?: {
    width: string
    height: string
    marginLeft?: string
    marginRight?: string
  }
}[] = [
  {
    label: 'ethereum',
    icon: <Icon name='ethereum' />,
    size: { width: '4rem', height: '6rem', marginLeft: '24px' }
  },
  {
    label: 'polygon',
    icon: <Icon name='polygon' />,
    size: { width: '6rem', height: '6rem' }
  },
  {
    label: 'BNB Chain',
    icon: <Icon name='bnb' />,
    size: { width: '5.2rem', height: '6rem' }
  },
  {
    label: 'NEAR',
    icon: <Icon name='near' />,
    size: { width: '5rem', height: '6rem' }
  },
  {
    label: 'avalanche',
    icon: <Icon name='avalanche' />,
    size: { width: '6rem', height: '6rem', marginRight: '15px' }
  }
]

const Multichainbrand = () => {
  return (
    <Wrap>
      <CenterFlex className='item-wrap'>
        {items.map((i, index) => (
          <BubbleButton key={index} {...i}>
            {i.icon}
          </BubbleButton>
        ))}
      </CenterFlex>
      <CornerLink href='https://zecrey.medium.com/introduction-to-the-usage-of-zecrey-multi-chain-l1-wallet-48dd2b5ad132'>
        <Icon name='spinner' />
        <span>How to use Zecrey Multi-chain Wallet?</span>
      </CornerLink>
    </Wrap>
  )
}

export default Multichainbrand
