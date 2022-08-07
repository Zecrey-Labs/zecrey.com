/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import Layout from '@/components/layout'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('@/components/landing'), { ssr: false })
const Privacy = dynamic(() => import('@/components/Privacy/Privacy'), {
  ssr: false
})
const CentralHub = dynamic(() => import('@/components/central-hub'), {
  ssr: false
})
const MultiPurpose = dynamic(() => import('@/components/multi-purpose'), {
  ssr: false
})
const MultiLayerEcosystem = dynamic(
  () => import('@/components/multi-layer-ecosystem'),
  { ssr: false }
)
const WalletDownload = dynamic(
  () => import('@/components/Walletdownload/WalletDownload'),
  { ssr: false }
)
const Communtity = dynamic(() => import('@/components/Communtity/Communtity'), {
  ssr: false
})
const Partners = dynamic(() => import('@/components/Partners/Partners'), {
  ssr: false
})
const ZecreyMobile = dynamic(
  () => import('@/components/Zecreymobile/ZecreyMobile'),
  { ssr: false }
)
const ZecreyWebApp = dynamic(
  () => import('@/components/Zecreywebapp/ZecreyWebApp'),
  { ssr: false }
)
const RoadMap = dynamic(() => import('@/components/roadmap'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Privacy />
      <CentralHub />
      <MultiPurpose />
      <MultiLayerEcosystem />
      <WalletDownload />
      <ZecreyWebApp />
      <ZecreyMobile />
      <Partners />
      <RoadMap />
      <Communtity id='join' />
      <Footer dark={true} />
    </Layout>
  )
}
