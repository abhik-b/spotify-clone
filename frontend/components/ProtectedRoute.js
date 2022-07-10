import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react';
import useSWR from 'swr'
import { getCurrentUser } from '../fetchers/fetchUser'

let profileEssesntials = ['gender', 'age'];
let unprotectedRoutes = [
    '/profile', '/', '/404'
];
//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
    const { data: session } = useSession()
    const { data: user } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);
    let isProtectedPath = false
    let profileCompleted = false;

    if (router.pathname !== "/_error") {
        isProtectedPath = unprotectedRoutes.indexOf(router.pathname) === -1;
    }

    useEffect(() => {
        if (user) {
            profileCompleted = profileEssesntials.every(r => Object.keys(user).includes(r))
            console.log(profileCompleted)
            if (isBrowser() && !profileCompleted && isProtectedPath) {
                console.log('hi', !profileCompleted && isProtectedPath)
                router.push('/profile');
            }
        }
    }, [user])

    return children;
};
export default ProtectedRoute;