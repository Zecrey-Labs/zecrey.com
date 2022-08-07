import { vw } from '@/styles/global'
import { useMediaQuery } from 'react-responsive'
import CardWrap from '../common/card-wrap'
import Icon from '../common/Icon'
import Ecosystem from '../Ecosystem/Ecosystem'
import Planet from './planet-mobile.svg'

const MultiLayerEcosystem = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  return (
    <CardWrap
      title={
        isMobile ? (
          <>
            Multi-Layer <br /> Ecosystem
          </>
        ) : (
          'Multi-Layer Ecosystem'
        )
      }
      backgroundIcon={{
        svg: isMobile ? <Planet /> : <Icon name='planet' />,
        size: {
          width: isMobile ? vw(140) : '33.3rem',
          height: isMobile ? vw(76) : '21.1rem'
        }
      }}
      styles={{ overflow: 'hidden' }}
      text={[
        `Supporting both Layer 1 & 2 Networks, users taking advantage of Zecrey's robust ecosystem will have all of their bases covered. Managing & aggregating multi-chain assets, NFTs, Blockchain games, DEX/OTC services, and Payment solutions are just a few clicks away.`
      ]}>
      <Ecosystem />
    </CardWrap>
  )
}

export default MultiLayerEcosystem
