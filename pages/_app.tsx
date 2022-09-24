import '../styles/globals.scss';
import { AppPropsWithLayout } from '../models';
import EmptyLayout from '@/components/layout/empty';
import { SWRConfig } from 'swr';
import axiosClient from '@/api/axios-client';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
