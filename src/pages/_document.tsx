import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="React TypeScript Varma Website" />
        <meta
          name="description"
          content="Varma - The Heart And Science Of Medicate Test"
        />
        <meta name="author" content="Hassan Ali" />
        <link rel="shortcut icon" href="/images/logo.svg" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <title>Varma</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/wow.js" strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
