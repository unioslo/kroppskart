import Head from 'next/head';

import './global.css';

import React from 'react';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { rootState, wrapper } from '../src/store/store';

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
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
        loading={<div>Laster inn</div>}
      >
        <Provider store={store}>
          <StateComponent />
          <Component {...props.pageProps} />
        </Provider>
      </PersistGate>
    </>
  );
};

const StateComponent = () => {
  const router = useRouter();
  const initialized = useSelector((state: rootState) => state.app.initialized);
  const rehydrated = useSelector(
    (state: rootState) => state._persist?.rehydrated
  );
  const language = useSelector(
    (state: rootState) => state.app.urlParameters.language
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
    if (language === 'en') {
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.lang = 'nb';
    }
  }
  return null;
};

export default App;
