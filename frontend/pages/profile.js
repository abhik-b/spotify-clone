import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import { getCurrentUser, updateUser } from '../fetchers/fetchUser'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import EditProfile from '../components/EditProfile'

export default function Profile() {
    const { data: session } = useSession()
    const { data: user, mutate } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);




    if (session) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h3>Edit Profile</h3>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <br />

                <EditProfile user={user} mutate={mutate} token={session?.accessToken} />


                <br />
                <button onClick={() => signOut()}>Sign Out</button>

            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Please Sign In</p>
            <button onClick={() => signIn("google")}>Sign in</button>


        </div>
    )
}