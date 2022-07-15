import * as React from 'react';
import Link from 'next/link';

const truncate = (input) => input.length > 25 ? `${input.substring(0, 20)}...` : input;




const Songs = () => {
    const [songs, setSongs] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:8000/api/songs/?limit=2')
            .then(res => res.json())
            .then(data => {
                data.map(song => {
                    console.log(song);
                })
                setSongs(data)
            }).catch(err => console.error(err))
    }, []);


    return <section className='my-12 flex flex-col col-span-2'>
        <h2 className='font-[600] text-xl'>Recent Songs</h2>
        <ul className='my-8 flex gap-8'>
            {songs.map(song => {
                return <li key={song._id}>
                    <div className="card w-56 h-84 shadow-xl image-full hover:scale-105 transition ease-in">
                        <div>
                            <img src={song.coverImage} alt={song.title} className="h-72 object-cover" />
                        </div>

                        <div className="card-body px-4 gap-1 items-start self-end pb-3">
                            <h2 className="card-title text-white text-2xl">{truncate(song.title)}</h2>
                            <p className="text-gray-200 text-xs">{song.artist}</p>
                        </div>

                    </div>
                    {/* <div>
                        <audio
                            src={`http://localhost:8000/api/songs/file/${song.audio?.filename}`} controls autoPlay={false} />
                    </div> */}
                </li>
            })}



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