import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import GlobalStyles from 'globalStyles';
import theme from 'theme';
import 'assets/font.css';
import routes from 'routes';

import Header from 'components/Header/Header';

const pagesWithoutHeader = [routes.MEETING];

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="Zoom clone" />
        <meta name="keywords" content="Keywords" />
        <title>Zoom Clone</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        {!pagesWithoutHeader.includes(router.pathname) && <Header />}
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
