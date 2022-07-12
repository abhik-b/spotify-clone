import * as React from 'react';
import Link from 'next/link';


const Songs = () => {
    return <section className='my-12 flex flex-col md:max-w-[320px]'>
        <h2 className='font-[600] text-xl'>Recent Songs</h2>
        <ul className='my-4'>
            <li className='song recent-song-element'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <p>Song 1</p>
                <p>Artist 1</p>
            </li>
            <li className='song recent-song-element'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/150/150/people" />
                    </div>
                </div>
                <p>Songabcdefghiu 2</p>
                <p>Artist 2</p>
            </li>
            <li className='song recent-song-element'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/459/457/people" />
                    </div>
                </div>
                <p>Song 3</p>
                <p>Artistabcdefghiu 3</p>
            </li>
            <li className='song recent-song-element'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/200/200/people" />
                    </div>
                </div>
                <p>Songabcdefghiu 4</p>
                <p>Artistabcdefghiu 4</p>
            </li>
        </ul>
        <div className='recent-song-element self-center md:self-stretch'>
            <Link href="/hello" passHref>
                <a className='btn btn-primary btn-wide hover:bg-zinc-800 hover:shadow-xl 
                md:btn-block text-white '>Add Songs</a>
            </Link>
        </div>
    </section>;
};
export default Songs;