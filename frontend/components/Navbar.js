import { useSession, signIn, signOut } from 'next-auth/react'


const Navbar = () => {
    const { data: session } = useSession();
    return <nav className="mb-8 flex flex-col gap-4  sm:flex-row items-center justify-between">
        <div>
            <h1 className="text-3xl font-black">Spotify Clone</h1>
        </div>
        <div>
            <h2 className="sm:text-lg font-medium ">👋 Hello {" "}
                <span tabIndex={0} className="text-secondary font-black">
                    {session?.user?.name}
                </span>
            </h2>
        </div>
    </nav>;
};
export default Navbar;