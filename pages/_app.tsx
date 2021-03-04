import Head from 'next/head';

import './global.css';

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useStore } from 'react-redux';

import { rootState, wrapper } from '../src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const store = useStore();
  const initialized = useSelector((state: rootState) => state.app.initialized);
  const rehydrated = useSelector(
    (state: rootState) => state._persist?.rehydrated
  );
  React.useEffect(() => {
    if (
      (router.pathname.includes('bodymap') ||
        router.pathname.includes('followup')) &&
      !initialized &&
      rehydrated
    ) {
      router.replace('/');
    }
  });
  if (typeof document !== 'undefined' && !document?.documentElement?.lang) {
    document.documentElement.lang = 'nb';
  }
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
      <PersistGate
        persistor={(store as any).__persistor}
        loading={() => <div>Laster inn</div>}
      >
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(App);
