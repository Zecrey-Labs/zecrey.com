/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import Bottom from '@/components/bottom/Bottom'
import BubbleCard from '@/components/BubbleCard/BubbleCard'
import CardWrap from '@/components/card-wrap'
import Icon from '@/components/common/Icon'
import Communtity from '@/components/Communtity/Communtity'
import Landing from '@/components/landing'
import Layout from '@/components/layout'
import Partners from '@/components/Partners/Partners'
import WalletDownload from '@/components/Walletdownload/WalletDownload'
import ZecreyMobile from '@/components/Zecreymobile/ZecreyMobile'
import ZecreyWebApp from '@/components/Zecreywebapp/ZecreyWebApp'
import Multichainbrand from '@/components/multichainbrand/Multichainbrand'
import Ecosystem from '@/components/Ecosystem/Ecosystem'
import Privacy from '@/components/Privacy/Privacy'

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Privacy />
      <CardWrap
        title='Multifunctional Support'
        backgroundIcon={{
          svg: <Icon name='boxes' />,
          size: { width: '35.2rem', height: '25.2rem' }
        }}
        text={[
          'Not just a wallet. With Zecrey you can transfer, swap, stake, and much more across different blockchains with a high level of privacy and transaction speed thanks to a layer-2 architecture based on zk-rollup.'
        ]}>
        <BubbleCard />
      </CardWrap>
      <CardWrap
        title='Multif-chain Support'
        backgroundIcon={{
          svg: <Icon name='multi-chain' />,
          size: { width: '32.7rem', height: '21.6rem' }
        }}
        text={[
          `Zecrey is an early adopter of integrated multi-chain networks. In Zecrey multi-chain ecosystem, you can experience features such as multi-chain wallets, assets aggregation and cross-chain bridges, which will greatly improve assets utilization efficiency in the crypto world. At present, the Zecrey multi-chain ecosystem supports five blockchains. In the future, more blockchains will join the Zecrey multi-chain ecosystem.`
        ]}>
        <Multichainbrand />
      </CardWrap>
      <CardWrap
        title='Multi-layer Ecosystem'
        backgroundIcon={{
          svg: <Icon name='planet' />,
          size: { width: '33.3rem', height: '21.1rem' }
        }}
        text={[
          `Zecrey protocol supports Layer 1 and Layer 2 networks, which determines that Zecrey will have an integrated network structure and prosperous ecosystem in the future. Whether the management and aggregation of multi-chain assets, or the access of NFTs and the integration of blockchain games, even DEX/OTC services, these will all be realized in Zecrey ecosystem. In addition, Zecrey Layer 2 will build an abundant payment scene, which will cover most aspects of future life.`
        ]}>
        <Ecosystem />
      </CardWrap>
      <WalletDownload />
      <ZecreyWebApp />
      <ZecreyMobile />
      <Partners />
      <Communtity id='join' />
      <Bottom />
    </Layout>
  )
}
