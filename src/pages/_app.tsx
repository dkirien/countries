import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import MainLayout from '@/components/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Information about countries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
