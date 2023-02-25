import {useState} from "react";
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client';

const createApolloClient = (authToken: string) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'https://zecrey-medium-porter.hasura.app/v1/graphql',
            headers: {
                "x-hasura-admin-secret": `${authToken}`
            }
        }),
        cache: new InMemoryCache(),
    });
};
export default function App({Component, pageProps}: AppProps) {
    const [client] = useState(createApolloClient("rglbwYg3UEOEICktoimwHNDad7CSmSTHhgKeJIwpWZ8c3NOgBr2tMAfjT1q99EUg"));
    return <ApolloProvider client={client}>
        <Head>
            <title>Zecrey</title>
            <meta name="viewport"
                  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
            <meta name="charset" content="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content="Zecrey"/>
            <link rel="shortcut icon" href="/favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
    </ApolloProvider>
}
