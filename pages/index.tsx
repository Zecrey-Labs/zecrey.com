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
          'Zecrey wallet is an all-in-one wallet that can manage multi-chain assets from various blockchains. Cross-chain bridge with privacy protection is the core function of Zecrey, which contains the "Deposit- Withdraw" module.',
          'As a layer 2 protocol based on zk-rollup, Zecrey gathers several functoins like transfer, swap and lock&unlock, etc. These functions show high efficiency on zk-rollup.'
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
      <CardWrap
        title='Partners'
        backgroundIcon={{
          svg: <Icon name='users' />, // todo: repace with svg element
          size: { width: '31.3rem', height: '24rem' }
        }}
        text={[
          `During the development of the project, each partner has given Zecrey generous help, which is a huge step for the advancement of the project. In the future, Zecrey will maintain a good relationship with them.`
        ]}>
        <Partners />
      </CardWrap>
      <Communtity />
      <Bottom />
    </Layout>
  )
}
