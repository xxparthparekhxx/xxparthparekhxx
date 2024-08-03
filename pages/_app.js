import { DefaultSeo } from 'next-seo'
import { EyeState } from '../context/EyeContext'
import '../styles/globals.css'
import SEO from "../next-seo.config"
export default function App({ Component, pageProps }) {
  return (

    <EyeState>
      <Component {...pageProps} />
    </EyeState>
  )
}
