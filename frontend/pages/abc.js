import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react';
import useSWR from 'swr'
import { getCurrentUser } from '../fetchers/fetchUser'


const Abc = () => {
    const { data: session } = useSession()
    const { data: user, mutate } = useSWR(() => session?.accessToken ? [`/me/`, session?.accessToken] : null, getCurrentUser);
    if (user) console.log(user)
    return <div>hi</div>;
};
export default Abc;