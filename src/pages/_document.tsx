import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={"h-full bg-gray-100"}>
      <Head />

      <body className={"h-full"}>
        <div className="min-h-full">
          <Main />
        </div>

        <NextScript />
      </body>
    </Html>
  )
}
