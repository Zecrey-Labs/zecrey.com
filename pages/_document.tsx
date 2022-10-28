import Document, {
  // Html,
  // Head,
  // Main,
  // NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocutent extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // render() {
  //   return (
  //     <Html>
  //       <Head>
  //         <meta name="charset" content="utf-8" />
  //         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  //         <meta name="description" content="Zecrey" />
  //         <meta name="Robots" content="all" />
  //         <link rel="shortcut icon" href="/favicon.svg"></link>
  //       </Head>
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}
