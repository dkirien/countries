import 'material-icons/iconfont/material-icons.css'
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
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
