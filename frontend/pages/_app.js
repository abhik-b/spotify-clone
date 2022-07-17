import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Navbar from '../components/Navbar'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className='px-8 sm:px-12 md:px-16 py-5 font-Montserrat'>
        <Navbar />
        <Component {...pageProps} />
      </div>

    </SessionProvider>
  )
}