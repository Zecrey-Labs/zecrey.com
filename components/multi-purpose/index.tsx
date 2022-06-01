import { vw } from '@/styles/global'
import { useMediaQuery } from 'react-responsive'
import BubbleCard from '../BubbleCard/BubbleCard'
import CardWrap from '../common/card-wrap'
import Icon from '../common/Icon'
import Boxes from './boxes-mobile.svg'

export const MultiPurpose = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return (
    <CardWrap
      title={`Multiple Purposes`}
      backgroundIcon={{
        svg: isMobile ? <Boxes /> : <Icon name='boxes' />,
        size: {
          width: isMobile ? vw(95) : '35.2rem',
          height: isMobile ? vw(106) : '25.2rem'
        }
      }}
      text={[
        'Not just a wallet. With Zecrey you can transfer, swap, stake, and much more across different blockchains with a high level of privacy and transaction speed thanks to a layer-2 architecture based on zk-rollup.'
      ]}>
      <BubbleCard />
    </CardWrap>
  )
}

export default MultiPurpose
