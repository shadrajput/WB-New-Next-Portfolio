import { Head } from 'next/document'
import { Html, Main, NextScript } from 'next/document'
import clsx from 'clsx'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
      
        <title>Wellbenix</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
        <link
          rel="icon"
          href="/favicon.png"
        />
        
      </Head>
      <body className="flex h-full flex-col" id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
