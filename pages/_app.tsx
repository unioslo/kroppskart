import Head from 'next/head';

import './global.css';

import { wrapper } from '../src/store/store';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kroppskart - smerteundersøkelse</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
