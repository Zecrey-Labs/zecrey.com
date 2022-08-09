/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { META } from '@/constant'

const ZecreyHead = () => (
  <Head>
    <meta name='charset' content='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='keywords' content={META.content} />
    <meta name='description' content={META.description} />
    <meta name='copyright' content='LambdaCal, Inc' />
    <meta name='Robots' content='all' />
    <link rel='shortcut icon' href='/favicon.svg' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;700;800&display=swap'
      rel='stylesheet'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap'
      rel='stylesheet'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap'
      rel='stylesheet'
    />
    <link rel='preload' href='/fonts/LeelawUI.ttf' as='font' crossOrigin='' />
    {/* Tell the browser to never restore the scroll position on load */}
    <script
      dangerouslySetInnerHTML={{
        __html: `history.scrollRestoration = "manual"`
      }}
    />
  </Head>
)

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <ZecreyHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
