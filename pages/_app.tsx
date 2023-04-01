import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import { useRouter } from "next/router";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  if(router.pathname === '/about') return <Component {...pageProps} />;

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
