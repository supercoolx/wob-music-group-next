import type { NextPage } from 'next'
import Script from 'next/script';
import Link from 'next/link';
import HTMLHeader from '@components/Player/HTMLHeader'
import { AiFillHome } from 'react-icons/ai'

const Player: NextPage = () => {
	return (
		<div id='content' className='w-full'>
			<HTMLHeader />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js' />
            <Script src='https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/controls/OrbitControls.js' />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.3/dat.gui.min.js' />
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.3.0/simplex-noise.min.js' />
            <Script src='/scripts/player.js' />
			<label htmlFor='thefile' className='absolute inline-block px-8 py-2 text-xl font-bold text-white transition-all duration-300 bg-green-600 rounded-full cursor-pointer file left-3 top-5 hover:-translate-y-1'>
				Choose an audio file
				<input type='file' id='thefile' accept='audio/*' className='hidden' />
			</label>
			<Link href='/'>
				<div className='absolute inline-block p-3 text-white transition-all duration-300 bg-green-600 rounded-full cursor-pointer file right-3 top-5 hover:-translate-y-1'>
					<AiFillHome size={22} />
				</div>
			</Link>
			<audio id='audio' className='fixed w-full px-5 bottom-3' controls />
			<div id='out' />
		</div>
	)
}

export default Player
