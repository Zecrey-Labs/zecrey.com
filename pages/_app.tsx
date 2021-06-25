/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import '@/styles/global.css'
import { observer } from 'mobx-react-lite'
import { Provider } from '@/store'
import Head from 'next/head'
import { META } from '@/constant'

type Props = {
  Component: any
  pageProps: any
}

const App = observer(function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
})

const AppWithStore = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Head>
        <title>{META.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default AppWithStore
