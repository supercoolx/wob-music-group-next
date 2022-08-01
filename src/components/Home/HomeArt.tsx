import { GiMusicalNotes } from "react-icons/gi"

const HomeArt = () => {
    return (
        <section id="art-contest" className="flex gap-10 pt-20 lg:text-xl">
            <div className="flex-1">
                <div className="sticky flex gap-3 items-center top-24 lg:text-5xl text-3xl font-archivo text-[#eeff40]">
                    <GiMusicalNotes />
                    <div>ART CONTESTS</div>
                </div>
            </div>
            <div className="flex-1">
                <p>
                    The remix artwork for each song will be sourced from the community. MegaWob
                    holders can submit their remix art to us and the team will choose the top 3
                    submissions to be put on the website for a vote. The community will then have 24
                    hours to vote on the best artwork and the one with the most votes will win and be
                    the art we use for the release. 
                </p><br />
                <p>
                    The winner will have their artwork used for the song and will get a Rare Megawob
                    NFT and a Merch Pack. 
                </p>
            </div>
        </section>
    )
}

export default HomeArt;