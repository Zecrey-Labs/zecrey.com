/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import { ThemeProvider } from 'styled-components'
import 'nprogress/nprogress.css'
import 'react-typist/dist/Typist.css'
import 'aos/dist/aos.css'
import { Layout } from '@/components/Layout'
import theme from '@/themes'
import { useEffect } from 'react'
import Aos from 'aos'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'antd/dist/antd.css'
import '@/global.css'
import { observer } from 'mobx-react-lite'
import { buryPoint } from '@/utils'

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
    // @ts-ignore

    try {
      buryPoint({ category: '首页', action: '加载', label: '' })
    } catch (e) {}
  }, [])

  if (statusCode) {
    return <Component {...pageProps} />
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
})

export default function AppWithStore({ Component, pageProps }) {
  return <App Component={Component} pageProps={pageProps} />
}
