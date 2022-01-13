import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="icon" href="/vercel.svg" />
        <link rel="apple-touch-icon" href="/vercel.svg" />
        <meta
          name="description"
          content="A boilerplate to starter to work with Typescript, React, NextJS and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
