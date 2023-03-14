import { DefaultSeo } from 'next-seo'
import { Html, Head, Main, NextScript } from 'next/document'
import SEO from "../next-seo.config";
export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
