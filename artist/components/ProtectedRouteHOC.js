import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr'
import { getCurrentUser } from '../../fetchers/fetchUser'



const ProtectedRouteHOC = ({ children, router }) => {
    const { data: session } = useSession()
    const { data: user } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);
    useEffect(() => {
        if (user) {
            if (user.isAdmin === false || user.isAdmin === undefined) {
                router.push('/profile')
            }
        }

    }, [user])

    return children;
};
export default ProtectedRouteHOC;