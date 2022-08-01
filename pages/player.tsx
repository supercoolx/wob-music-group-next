import type { NextPage } from 'next'
import Script from 'next/script';
import Link from 'next/link';
import HTMLHeader from '@components/Player/HTMLHeader'
import { AiFillHome, AiFillFolderOpen, AiFillPlayCircle, AiFillPauseCircle, AiFillForward, AiFillBackward } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';

const Player: NextPage = () => {
	const [isPlay, setPlay] = useState(false);
	const audio = useRef<HTMLAudioElement>(null);
	const [time, setTime] = useState(0);

	const playAudio = () => audio.current && audio.current.play();
	const pauseAudio = () => audio.current && audio.current.pause();
	useEffect(() => {
		if (!audio.current) return;

		const interval = setInterval(() => {
			setTime(audio.current!.currentTime);
		}, 500);

		audio.current.onplay = () => setPlay(true);
		audio.current.onpause = () => setPlay(false);

		document.onselectstart = () => false;

		return () => clearInterval(interval);
	}, []);

	return (
		<div id='content'>
			<HTMLHeader />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js' />
            <Script src='https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/controls/OrbitControls.js' />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.3/dat.gui.min.js' />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.3.0/simplex-noise.min.js' />
            <Script src='/scripts/player.js' />
			<div className='fixed flex flex-col justify-between w-screen h-screen p-10 font-upheaval'>
				<div className='flex justify-between'>
					<div>
						<label htmlFor='thefile' className='inline-block p-3 text-3xl font-bold text-white transition-all duration-300 bg-green-600 rounded-full cursor-pointer file left-3 top-5 hover:-translate-y-1'>
							<AiFillFolderOpen />
							<input type='file' id='thefile' accept='audio/*' className='hidden' />
						</label>
					</div>
					<div className='text-5xl sm:block hidden bg-gradient-to-r from-fuchsia-500 via-red-500 to-fuchsia-500 text-transparent bg-clip-text animate-color bg-[length:1000px_100px]'>WOB MUSIC PLAYER</div>
					<div>
						<Link href='/'>
							<div className='inline-block p-3 text-3xl text-white transition-all duration-300 bg-green-600 rounded-full cursor-pointer file right-3 top-5 hover:-translate-y-1'>
								<AiFillHome />
							</div>
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-center justify-between gap-5 sm:flex-row'>
					<div className='flex-1 text-3xl'>
						<div className='text-gray-400'>SONG PLAYING</div>
						<div id='filename' />
					</div>
					<div className='flex-1 text-5xl text-center animate-zoom-in-out'>
						( o ^_^ o )
					</div>
					<div className='flex-1 text-2xl text-right'>PLAYTIME: {new Date(1000 * time).toISOString().substr(11, 8)}</div>
				</div>
				<div className='flex text-6xl justify-evenly'>
					<div id='backward-button' className='transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400'><AiFillBackward /></div>
					<div id='play-button' onClick={playAudio} className={`transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400 ${isPlay && 'hidden'}`}><AiFillPlayCircle /></div>
					<div id='pause-button' onClick={pauseAudio} className={`transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400 ${!isPlay && 'hidden'}`}><AiFillPauseCircle /></div>
					<div id='forward-button' className='transition-all duration-200 transform cursor-pointer hover:scale-110 hover:text-gray-400'><AiFillForward /></div>
				</div>
			</div>
			<audio id='audio' ref={audio} className='fixed hidden w-full px-5 bottom-3' controls />
			<div id='out' />
		</div>
	)
}

export default Player
