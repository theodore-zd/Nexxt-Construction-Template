import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin='true'/>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Spartan:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Html>
  )
}
