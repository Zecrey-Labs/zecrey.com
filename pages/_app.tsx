import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zecrey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="charset" content="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Zecrey" />
        <link rel="shortcut icon" href="/favicon.svg"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
