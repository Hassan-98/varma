import { useEffect } from 'react';
import type { AppProps } from 'next/app';
//= Global Styles
import '@/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    new WOW().init();
  }, []);

  return (
    <Component {...pageProps} />
  )
}
