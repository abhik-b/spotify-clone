import '../styles/globals.css'

import { SessionProvider } from "next-auth/react"
import ProtectedRouteHOC from '../components/ProtectedRouteHOC'
import Navbar from '../components/Navbar'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router
}) {
  return (
    <SessionProvider session={session} basePath='/artist/api/auth'>
      <ProtectedRouteHOC router={router}>
        <div className='px-8 sm:px-12 md:px-16 py-5'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ProtectedRouteHOC>
    </SessionProvider>
  )
}
