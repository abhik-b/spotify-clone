import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import ProtectedRoute from '../components/ProtectedRoute'

export default function App({
  Component,
  pageProps: { session, ...pageProps }, router
}) {
  return (
    <SessionProvider session={session}>
      <ProtectedRoute router={router}>
        <Component {...pageProps} />
      </ProtectedRoute>
    </SessionProvider>
  )
}