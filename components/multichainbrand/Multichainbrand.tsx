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
  size?: { width: string; height: string }
}[] = [
  {
    label: 'ethereum',
    icon: <Icon name='ethereum' />,
    size: { width: '4rem', height: '6rem' }
  },
  {
    label: 'polygon',
    icon: <Icon name='polygon' />,
    size: { width: '6rem', height: '5.5rem' }
  },
  {
    label: 'BNB Chain',
    icon: <Icon name='bnb' />,
    size: { width: '5.2rem', height: '6rem' }
  },
  {
    label: 'NEAR',
    icon: <Icon name='near' />,
    size: { width: '5rem', height: '5rem' }
  },
  {
    label: 'avalanche',
    icon: <Icon name='avalanche' />,
    size: { width: '6rem', height: '6rem' }
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
      <CornerLink href=''>
        <Icon name='shield-check' />
        <span>How Zecrey Multi-chain support works?</span>
      </CornerLink>
    </Wrap>
  )
}

export default Multichainbrand
