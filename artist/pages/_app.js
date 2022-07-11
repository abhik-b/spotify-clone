import '../styles/globals.css'

import { SessionProvider } from "next-auth/react"
import ProtectedRouteHOC from '../components/ProtectedRouteHOC'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router
}) {
  return (
    <SessionProvider session={session} basePath='/artist/api/auth'>
      <ProtectedRouteHOC router={router}>
        <Component {...pageProps} />
      </ProtectedRouteHOC>
    </SessionProvider>
  )
}
