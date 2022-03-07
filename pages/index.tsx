/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import Bottom from '@/components/bottom/Bottom'
import BubbleCard from '@/components/BubbleCard/BubbleCard'
import CardWrap from '@/components/card-wrap'
import { FunctionalIcons } from '@/components/card-wrap/CardContents'
import Icon from '@/components/common/Icon'
import Communtity from '@/components/Communtity/Communtity'
import Landing from '@/components/landing'
import Layout from '@/components/layout'
import Partners from '@/components/Partners/Partners'
import WalletDownload from '@/components/Walletdownload/WalletDownload'
import ZecreyMobile from '@/components/Zecreymobile/ZecreyMobile'
import ZecreyWebApp from '@/components/Zecreywebapp/ZecreyWebApp'
import Multifunctional from './multifunctional'
import Multichainbrand from '@/components/multichainbrand/Multichainbrand'
import Ecosystem from '@/components/Ecosystem/Ecosystem'
import Privacy from '@/components/Privacy/Privacy'

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Privacy/>
      <CardWrap
        title='Multifunctional Support'
        backgroundIcon={{
          svg: <Icon name='boxes' />, // todo: repace with svg element
          size: { width: '39.5rem', height: '35.2rem' },
          positon: { left: '-4.3rem', bottom: '-10rem' }
        }}
        text={[
          'Zecrey supports an all-in-one private wallet which helps the users to manage their assets in multiple blockchains.',
          'As an layer 2 privacy cross-chain protocol based on zk-rollup, Zecrey brings cross-chain privacy to the public chain ecology, with the core characteristics of universal cross-chain bridge, high security cross-chain swap and efficient privacy.'
        ]}>
        <BubbleCard />
      </CardWrap>
      <CardWrap
        title='Multif-chain Support'
        backgroundIcon={{
          svg: <Icon name='boxes' />, // todo: repace with svg element
          size: { width: '39.5rem', height: '35.2rem' },
          positon: { left: '-4.3rem', bottom: '-10rem' }
        }}
        text={[
          `Zecrey was an early adopter of multi-chain networks. In Zecrey's multi-chain ecosystem, you can experience features such as multi-chain wallets, aggregated assets, and cross-chain bridges, which will greatly improve your application efficiency in the decentralized world. At present, the zecrey multi-chain ecosystem supports five blockchains. In the future, more blockchains will join the zecrey multi-chain ecosystem.`
        ]}>
        {/* <FunctionalIcons /> */}
        <Multichainbrand/>
      </CardWrap>
      <CardWrap
        title='Multi-layer Ecosystem'
        backgroundIcon={{
          svg: <Icon name='boxes' />, // todo: repace with svg element
          size: { width: '39.5rem', height: '35.2rem' },
          positon: { left: '-4.3rem', bottom: '-10rem' }
        }}
        text={[
          `The Zecrey protocol supports Layer1 and Layer2 networks, which determines that Zecrey will have a complete and rich network ecosystem in the future. In addition, Zecrey's Layer2 network will build a rich payment scene, which will include all aspects of future life.`
        ]}>
        {/* <FunctionalIcons /> */}
        <Ecosystem/>
      </CardWrap>
      <WalletDownload />
      <ZecreyWebApp />
      <ZecreyMobile />
      <CardWrap
        title='Partners'
        backgroundIcon={{
          svg: <Icon name='boxes' />, // todo: repace with svg element
          size: { width: '39.5rem', height: '35.2rem' },
          positon: { left: '-4.3rem', bottom: '-10rem' }
        }}
        text={[
          `During the development of the project, each partner has given Zecrey generous help, which is a huge step for the advancement of the project. In the future, Zecrey will maintain a good relationship with them.`
        ]}>
        <Partners />
      </CardWrap>
      {/* <Partners /> */}
      <Communtity />
      <Bottom />
    </Layout>
  )
}
