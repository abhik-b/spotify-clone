import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import useSWR from 'swr'
import { getCurrentUser } from '../fetchers/fetchUser'

export default function User() {
    const { data: session } = useSession()
    const useUser = (session) => {
        return useSWR(() => {
            if (session) {
                return [`/me/`, session?.accessToken];
            }
            return null;
        }, getCurrentUser);
    }

    const { data: user, mutate } = useUser(session);
    // const { data: user, mutate } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);

    return (
        <>
            <div>{user?.name},{user?.gender},{user?.email}</div>
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    )
}
