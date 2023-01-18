import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import type { AppProps } from 'next/app'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
