import Link from "next/link"
import { useState } from "react"
import { FaMusic } from "react-icons/fa"
import Container from "./common/Container"

const Header = () => {
    const [isShow, setShow] = useState<boolean>(false);

    const toggleMenu = () => setShow(!isShow);
    const goToPlayer = () => { location.href = "/player" };

    return (
        <div className="sticky top-0 z-10 flex items-center justify-between w-full gap-5 py-5 bg-black sm:gap-20">
            <div onClick={goToPlayer} className={`p-3 transition-colors duration-200 border-2 border-green-500 rounded-full cursor-pointer hover:text-green-500`}>
                <FaMusic size={30} />
            </div>
            <div className="flex">
                <div className="z-10 flex items-center justify-center w-12 h-12">
                    <div onClick={toggleMenu} className={`w-12 h-12 transition-all duration-300 ease-in-out cursor-pointer hover:w-10 hover:h-10 ${isShow && 'rotate-[270deg] text-black'}`}>
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.7523 19.8828C39.7523 30.9906 30.8514 40 19.8754 40C8.89947 40 0 30.9936 0 19.8828C0 9.81389 7.29044 1.48154 16.8318 0V8.28253C14.2931 8.97937 12.0549 10.4934 10.4634 12.5903C8.87191 14.6873 8.01579 17.2503 8.02754 19.8828C8.02754 26.5064 13.3309 31.8743 19.8754 31.8743C26.42 31.8743 31.716 26.4991 31.716 19.8828C31.7255 17.252 30.8683 14.6914 29.277 12.5965C27.6856 10.5017 25.4487 8.98918 22.9118 8.29279V0.00292922C32.4487 1.47567 39.7523 9.81682 39.7523 19.8828Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className={`fixed w-screen left-0 h-screen transition-all duration-500 bg-green-500 ${isShow ? 'top-0' : 'rounded-b-[50%] -top-[100%]'}`}>
                        <Container>
                            <div className="flex flex-col gap-3 pt-5 text-4xl text-black font-archivo">
                                <Link href="#wob-music-group"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">WOBBLE</div></Link>
                                <Link href="#section-phase-1"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">PHASE</div></Link>
                                <Link href="#how-it-work"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">HOW IT WORK</div></Link>
                                <Link href="#community-remix-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">COMMUNITY</div></Link>
                                <Link href="#art-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">ART</div></Link>
                                <Link href="#content-contest"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">CONTENT</div></Link>
                                <Link href="#song-release"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">CREATIVE</div></Link>
                                <Link href="#song-sharing"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">ROYALTY</div></Link>
                                <Link href="#wobblelabs-overview"><div onClick={toggleMenu} className="transition-all duration-500 cursor-pointer hover:translate-x-20 hover:text-yellow-200">OVERVIEW</div></Link>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header