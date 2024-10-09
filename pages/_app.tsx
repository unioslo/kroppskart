import Head from 'next/head';

import './global.css';

import React from 'react';
import { useRouter } from 'next/router';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { rootState, wrapper } from '../src/store/store';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages as messagesEn } from '../locales/en/messages.js';
import { messages as messagesNb } from '../locales/nb/messages.js';

i18n.load({
  en: messagesEn,
  nb: messagesNb,
});
i18n.activate('nb');

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
          <I18nProvider i18n={i18n}>
            <Component {...props.pageProps} />
          </I18nProvider>
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
    i18n.activate(language as string);
  }, [language]);

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
  if (
    typeof document !== 'undefined' &&
    document?.documentElement?.lang !== language
  ) {
    (document as any).i18n = i18n;
    if (language === 'en') {
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.lang = 'nb';
    }
  }
  return null;
};

export default App;
