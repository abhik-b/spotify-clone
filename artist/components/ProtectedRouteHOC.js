import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';
import { createContext, useEffect } from 'react';
import useSWR from 'swr'
import { getCurrentUser } from '../../fetchers/fetchUser'

export const AuthContext = createContext(null)

const ProtectedRouteHOC = ({ children, router }) => {
    const { data: session } = useSession()
    const { data: user, mutate } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);

    useEffect(() => {
        if (user) {
            if (user.isAdmin === false || user.isAdmin === undefined) {
                router.push('/profile')
            }
        }

    }, [user])

    return <AuthContext.Provider value={[user, mutate]}>{children}</AuthContext.Provider>;
};
export default ProtectedRouteHOC;