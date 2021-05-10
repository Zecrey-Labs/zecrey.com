import 'nprogress/nprogress.css'
import 'react-typist/dist/Typist.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'antd/dist/antd.css'
import '@/global.css'
import { observer } from 'mobx-react-lite'
import { Provider } from '@/store'
import Head from 'next/head'
import { META } from '@/constant'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

type Props = {
  Component: any
  pageProps: any
}

const App = observer(function App({ Component, pageProps }: Props) {
  const { statusCode } = pageProps
  useEffect(() => {
    const onResize = () => {
      const screenWidth = window.innerWidth
      document.documentElement.style.fontSize =
        Math.max(screenWidth / 19.2, 40) + 'px'
    }
    window.addEventListener('resize', onResize)
    onResize()

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    Aos.init({
      mirror: true
    })
  }, [])

  if (statusCode) {
    return <Component {...pageProps} />
  }

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
