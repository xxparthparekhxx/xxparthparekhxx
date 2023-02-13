import { EyeState } from '../context/EyeContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <EyeState>

      <Component {...pageProps} />
    </EyeState>
  )
}
