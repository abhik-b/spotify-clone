import { MdDoubleArrow } from 'react-icons/md';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { convertTime } from '../../utility/time';
const AudioPlayer = ({ duration, url }) => {
    // states
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [song, setSong] = useState(null);
    // references
    const audioRef = useRef(null)
    const progressBar = useRef(null)
    const animationRef = useRef(null)

    const togglePause = () => {
        if (isPlaying) {
            audioRef.current.pause()
            cancelAnimationFrame(animationRef.current)
            setIsPlaying(false)
        } else {
            console.log('play')
            audioRef.current.play()
            setIsPlaying(true)
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
    }
    const changeRange = () => {
        audioRef.current.currentTime = parseInt(progressBar.current.value)
        updateCurrentTime(parseInt(progressBar.current.value))
    }
    const whilePlaying = () => {
        progressBar.current.value = audioRef.current.currentTime
        updateCurrentTime(parseInt(progressBar.current.value))
        animationRef.current = requestAnimationFrame(whilePlaying)
    }
    const updateCurrentTime = (value) => {
        console.log(value)
        progressBar.current.style.setProperty('--seek-before-width', `${value / duration * 100}%`)
        setCurrentTime(value)
    }

    useEffect(() => {
        progressBar.current.max = duration
    }, [])

    useEffect(() => {
        if (currentTime === duration) {
            setIsPlaying(false)
            // audioRef.current.currentTime = 0
            // cancelAnimationFrame(animationRef.current)
            // progressBar.current.value = audioRef.current.currentTime
            // progressBar.current.style.setProperty('--seek-before-width', `0%`)
            progressBar.current.value = 0
            changeRange()
            audioRef.current.load()
        }
    }, [currentTime])


    return <div className='w-56 flex flex-col justify-center items-center'>
        <audio
            ref={audioRef}
            className="hidden"
            src={url}
            type="audio/mpeg"
            preload="auto"
        />
        <div className="flex w-full justify-center py-4">
            <button className='w-full 
                                flex justify-center items-center 
                                hover:text-pink-500'>
                <MdDoubleArrow className='rotate-180' />
                30
            </button>
            <button
                onClick={togglePause}
                className='grid place-items-center 
                           rounded-full p-2
                            bg-gray-200
                            hover:text-pink-500'>
                {isPlaying ?
                    <BsPauseFill className='hover:scale-150' />
                    :
                    <BsFillPlayFill className='hover:scale-150' />}
            </button>
            <button className='w-full 
                    flex justify-center items-center 
                    hover:text-pink-500'>
                <MdDoubleArrow />
                30
            </button>
        </div>
        <div className="flex w-64">
            <span className='w-full'>{convertTime(currentTime)}</span>
            <input
                type="range"
                className='progressBar'
                defaultValue={0}
                ref={progressBar}
                onChange={changeRange}
            />
            <span className='w-full'>{convertTime(duration)}</span>
        </div>
    </div>;
};
export default AudioPlayer;





// var getDuration = function (url, next) {
//     var _player = new Audio(url);
//     _player.addEventListener("durationchange", function (e) {
//         if (e.target.duration != Infinity) {
//             var duration = e.target.duration
//             _player.remove();
//             next(duration);
//         };
//     }, false);
//     _player.load();
//     _player.currentTime = 24 * 60 * 60; //fake big time
// };

