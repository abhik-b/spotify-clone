import { useContext } from "react";
import { AuthContext } from "./ProtectedRouteHOC";

const Navbar = () => {
    const [user,] = useContext(AuthContext)
    console.log(user)
    return <nav className="flex flex-col gap-4  sm:flex-row items-center justify-between">
        <div>
            <h1 className="text-3xl font-black">Spotify Clone</h1>
            <p className="text-right w-full text-sm sm:pr-2">For Artists</p>
        </div>
        <div>
            <h2 className="sm:text-lg font-medium ">👋 Hello {" "}
                <div class="dropdown dropdown-hover">
                    <span tabIndex={0} className="text-secondary font-black">
                        {user?.name}
                    </span>
                    <ul tabIndex="0" class="dropdown-content text-xs  p-2 shadow bg-base-100 rounded w-52">
                        <li><p>Gender: {user?.gender}</p></li>
                        <li><p>Email : {user?.email}</p></li>
                    </ul>
                </div>


            </h2>
        </div>
    </nav>;
};
export default Navbar;