import Head from 'next/head';

import './global.css';

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { rootState, wrapper } from '../src/store/store';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const initialized = useSelector((state: rootState) => state.app.initialized);
  React.useEffect(() => {
    if (router.pathname.includes('bodymap') && !initialized) {
      router.replace('/');
    }
  });
  return (
    <>
      <Head>
        <title>Kroppskart - smerteundersøkelse</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href={'/kroppskart/favicon.ico'} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
