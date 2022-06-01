/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import BubbleCard from '@/components/BubbleCard/BubbleCard'
import CardWrap from '@/components/card-wrap'
import Icon from '@/components/common/Icon'
import Communtity from '@/components/Communtity/Communtity'
import Layout from '@/components/layout'
import Partners from '@/components/Partners/Partners'
import WalletDownload from '@/components/Walletdownload/WalletDownload'
import ZecreyMobile from '@/components/Zecreymobile/ZecreyMobile'
import ZecreyWebApp from '@/components/Zecreywebapp/ZecreyWebApp'
import Multichainbrand from '@/components/multichainbrand/Multichainbrand'
import Ecosystem from '@/components/Ecosystem/Ecosystem'
import Privacy from '@/components/Privacy/Privacy'
import RoadMap from '@/components/roadmap'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('@/components/landing'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Privacy />
      <CardWrap
        title='Central Hub for your Digital Assets'
        backgroundIcon={{
          svg: <Icon name='multi-chain' />,
          size: { width: '32.7rem', height: '21.6rem' }
        }}
        text={[
          `You have at your finger tips the ability to view, manage and aggregate all your digital assets across various blockchains with Zecrey's wallet. Gone are the days where you need to go through different websites and wallets to see all of your digital assets.`
        ]}>
        <Multichainbrand />
      </CardWrap>
      <CardWrap
        title={`Multiple Purposes`}
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
        title='Multi-Layer Ecosystem'
        backgroundIcon={{
          svg: <Icon name='planet' />,
          size: { width: '33.3rem', height: '21.1rem' }
        }}
        styles={{ overflow: 'hidden' }}
        text={[
          `Supporting both Layer 1 & 2 Networks, users taking advantage of Zecrey's robust ecosystem will have all of their bases covered. Managing & aggregating multi-chain assets, NFTs, Blockchain games, DEX/OTC services, and Payment solutions are just a few clicks away.`
        ]}>
        <Ecosystem />
      </CardWrap>
      <WalletDownload />
      <ZecreyWebApp />
      <ZecreyMobile />
      <Partners />
      <CardWrap
        title='Roadmap'
        backgroundIcon={{
          svg: <Icon name='roadmap' />,
          size: { width: '29rem', height: '25.3rem' }
        }}
        text={[
          `The Zecrey roadmap indicates our major milestones, including a summary of Zecrey development, a set of functionalities to be delivered.`
        ]}>
        <RoadMap />
      </CardWrap>
      <Communtity id='join' />
      <Footer dark={true} />
    </Layout>
  )
}
