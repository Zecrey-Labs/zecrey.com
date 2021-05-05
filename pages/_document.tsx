/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { META } from '@/constant'
const YSHead = () => (
  <Head>
    <meta name='charset' content='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='keywords' content={META.content} />
    <meta name='description' content={META.description} />
    <meta name='copyright' content='LambdaCal, Inc' />
    <meta name='author' content={META.companyFullName} />
    <meta name='Robots' content='all' />
    <link rel='shortcut icon' href={'/intelligent/logo.svg'} />
    <title>{META.title}</title>
    <script
      type='text/javascript'
      src='https://s9.cnzz.com/z_stat.php?id=1279347593&web_id=1279347593'
    />
  </Head>
)

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <YSHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
