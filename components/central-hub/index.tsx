import { vw } from '@/styles/global'
import { useMediaQuery } from 'react-responsive'
import CardWrap from '../common/card-wrap'
import Icon from '../common/Icon'
import MultiChain from './multi-chain-mobile.svg'
import Multichainbrand from '../multichainbrand/Multichainbrand'

const CentralHub = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return (
    <CardWrap
      title={
        isMobile ? (
          <>
            Central Hub for <br /> your Digital Assets
          </>
        ) : (
          'Central Hub for your Digital Assets'
        )
      }
      backgroundIcon={{
        svg: isMobile ? <MultiChain /> : <Icon name='multi-chain' />,
        size: {
          width: isMobile ? vw(117) : '32.7rem',
          height: isMobile ? vw(99) : '21.6rem'
        }
      }}
      text={[
        `You have at your finger tips the ability to view, manage and aggregate all your digital assets across various blockchains with Zecrey's wallet. Gone are the days where you need to go through different websites and wallets to see all of your digital assets.`
      ]}>
      <Multichainbrand />
    </CardWrap>
  )
}

export default CentralHub
