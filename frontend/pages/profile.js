import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import { getCurrentUser, updateUser } from '../../fetchers/fetchUser'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import EditProfile from '../components/EditProfile'
import { useState } from 'react'

export default function Profile() {
    const { data: session } = useSession()
    const { data: user, mutate } = useSWR(() => session?.accessToken ?
        [`/me/`, session?.accessToken] : null, getCurrentUser);


    if (session) {
        return (
            <div className={styles.container}>
                <h3>{user?.gender ? "Edit" : "Create"} Profile</h3>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <br />
                <EditProfile
                    user={user}
                    mutate={mutate}
                    token={session?.accessToken}
                    editing={user?.gender ? true : false}
                />
                <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <p>Please Sign In</p>
            <button onClick={() => signIn('google')}>Sign IN with google</button>
        </div>
    )
}
