import Document, { Html, Head, Main, NextScript } from 'next/document'
import { META } from '@/constant'
const YSHead = () => (
  <Head>
    <meta name='charset' content='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='keywords' content={META.content} />
    <meta name='description' content={META.description} />
    <meta name='copyright' content='LambdaCal, Inc' />
    <meta name='author' content={META.companyFullName} />
    <meta name='Robots' content='all' />
    <title>{META.title}</title>
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
