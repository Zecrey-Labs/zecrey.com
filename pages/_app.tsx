import { ThemeProvider } from 'styled-components'
import 'nprogress/nprogress.css'
import 'react-typist/dist/Typist.css'
import 'aos/dist/aos.css'
import theme from '@/themes'
import { useEffect } from 'react'
import Aos from 'aos'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'antd/dist/antd.css'
import '@/global.css'
import { observer } from 'mobx-react-lite'

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

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
})

export default App
