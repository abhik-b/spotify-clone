import * as React from 'react';
import Link from 'next/link';


const Songs = () => {
    return <section className='my-12 flex flex-col col-span-2'>
        <h2 className='font-[600] text-xl'>Recent Songs</h2>
        <ul className='my-12 flex gap-8'>
            <li>
                <div className="card w-56 h-72 shadow-xl image-full hover:scale-105 transition ease-in">
                    <figure><img src="https://placeimg.com/400/225/songs" alt="Song1" />
                    </figure>
                    <div className="card-body px-4 gap-0 items-start self-end pb-3">
                        <h2 className="card-title text-white text-2xl">Song 1</h2>
                        <p className="text-gray-200 text-xs">Artist 1</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card w-56 h-72 shadow-xl image-full hover:scale-105 transition ease-in">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Song1" />
                    </figure>
                    <div className="card-body px-4 gap-0 items-start self-end pb-3">
                        <h2 className="card-title text-white text-2xl">Song 2</h2>
                        <p className="text-gray-200 text-xs">Artist 2</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card w-56 h-72 shadow-xl image-full hover:scale-105 transition ease-in">
                    <figure><img src="https://placeimg.com/400/225/people" alt="Song1" />
                    </figure>
                    <div className="card-body px-4 gap-0 items-start self-end pb-3">
                        <h2 className="card-title text-white text-2xl">Song 3</h2>
                        <p className="text-gray-200 text-xs">Artist 3</p>
                    </div>
                </div>
            </li>


            <li>
                <Link href="/add-songs" passHref>
                    <div className="card  w-56 h-72  outline outline-offset-2 outline-1 hover:cursor-pointer hover:scale-105 transition ease-in">
                        <div className="card-body px-2 grid place-items-center">

                            + Add Songs
                        </div>
                    </div>
                </Link>
            </li>
        </ul>





    </section>;
};
export default Songs;