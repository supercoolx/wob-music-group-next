import { BsFillGearFill } from "react-icons/bs";

const HomeHow = () => {
    return (
        <section id="how-it-work" className="flex gap-10 pt-40 lg:text-xl">
            <div className="flex-1">
                <div className="sticky top-24">
                    <div className="lg:text-5xl flex items-center gap-3 text-3xl font-archivo text-[#eeff40]">
                        <BsFillGearFill />
                        HOW IT WIL WORK
                    </div>
                    <img src="/imgs/howitworks.png" className="w-[70%] pt-10" alt="" />
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-10">
                <div className="p-10 bg-gray-800 rounded-lg ">
                    <div className="text-3xl font-bold text-green-500">Song Releases:</div>
                    <div className="pt-3">For each song release we will provide the below
                    opportunities for the community to essentially be our label partner and help make decisions about
                    the artwork and music and what gets released officially.
                    </div>
                </div>
                <div className="p-10 bg-gray-800 rounded-lg ">
                    <div className="text-3xl font-bold text-green-500">Remixes:</div>
                    <div className="pt-3">The community will be provided with stems for each
                    song and all wob holders will have the opportunity to remix the song and submit it for consideration
                    for an official release on WL&apos;s. The top 2 remixes will be chosen by the WL team and put them up
                    for vote in the discord. The winning remix will be released officially and the winner will be
                    compensated and share in the royalties from the song.
                    </div>
                </div>
                <div className="p-10 bg-gray-800 rounded-lg ">
                    <div className="text-3xl font-bold text-green-500">Remix Art:</div>
                    <div className="pt-3">PSD of original art is provided so that the community
                    can make their own remix art and submit to the WL team for considering. WL team will choose 2
                    pieces of art to go up for vote in discord.
                    </div>
                </div>
                <div className="p-10 bg-gray-800 rounded-lg ">
                    <div className="text-3xl font-bold text-green-500">Social Content:</div>
                    <div className="pt-3">For every release the community will have the
                    opportunity to submit fun and creative content that we can help promote the songs we release. For
                    each piece of content that we utilize we will compensated the user with X
                    </div>
                </div>
                <div className="p-10 bg-gray-800 rounded-lg ">
                    <div className="text-3xl font-bold text-green-500">Song Royalties:</div>
                    <div className="pt-3">Every month there will be royalties that will
                    be paid out from the WL&apos;s music distributor into the community Solana wallet. Part of those
                    royalties will be shared with various artists that helped to make the song and the remaining
                    royalties are going to back into the project so we can invest in the project in various ways with
                    the number one goal being to benefit the WB Holders.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHow;