/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import '@/styles/global.css'
import Head from 'next/head'
import { META } from '@/constant'
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
