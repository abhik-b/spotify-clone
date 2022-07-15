import * as React from 'react';
import Link from 'next/link';


const Playlists = () => {
    const [playLists, setPlayLists] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:8000/api/playlists/?limit=3')
            .then(res => res.json())
            .then(data => {
                setPlayLists(data)
            }).catch(err => console.error(err))
    }, []);
    return <section className='my-12 flex flex-col '>
        <h2 className='font-[600] text-xl'>Recent Playlists</h2>
        <ul className='my-2'>
            {playLists.map(playlist => {
                return <li key={playlist._id}
                    className='playlist recent-playlist-element'>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={playlist.coverImage} />
                        </div>
                    </div>
                    <p>{playlist.name}</p>
                    <p>Songs : {playlist.songs.length}</p>
                </li>
            })}

        </ul>
        <div className='recent-playlist-element self-center md:self-stretch'>
            <Link href="/add-playlists" passHref>
                <a className='btn btn-primary btn-wide hover:bg-zinc-800 hover:shadow-xl 
                md:btn-block text-white '>Add Playlists</a>
            </Link>
        </div>
    </section>;
};
export default Playlists;