import Link from "next/link"
import { FaMusic } from "react-icons/fa"

const Header = () => {
    const goToPlayer = () => { location.href = "/player" };

    return (
        <div className="flex items-center justify-between w-full gap-5 py-3 bg-black sm:gap-20">
            <div className="flex gap-5 overflow-y-auto text-xl font-bold text-green-500">
                <Link href="#wob-music-group"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">WOBBLE</div></Link>
                <Link href="#section-phase-1"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">PHASE</div></Link>
                <Link href="#how-it-work"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">HOWITWORK</div></Link>
                <Link href="#community-remix-contest"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">COMMUNITY</div></Link>
                <Link href="#art-contest"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">ART</div></Link>
                <Link href="#content-contest"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">CONTENT</div></Link>
                <Link href="#song-release"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">CREATIVE</div></Link>
                <Link href="#song-sharing"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">ROYALTY</div></Link>
                <Link href="#wobblelabs-overview"><div className="transition-all duration-200 cursor-pointer hover:text-yellow-200">OVERVIEW</div></Link>
            </div>
            <div onClick={goToPlayer} className="p-3 transition-colors duration-200 border-2 border-green-500 rounded-full cursor-pointer hover:text-green-500">
                <FaMusic size={30} />
            </div>
        </div>
    )
}

export default Header