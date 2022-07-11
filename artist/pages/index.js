import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Artist App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>👋 Artist {session.user.email}</h1>

      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  )

}
