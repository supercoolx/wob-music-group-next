import { BiBookContent } from "react-icons/bi"

const HomeContent = () => {
    return (
        <section id="content-contest" className="flex gap-10 pt-20 lg:text-xl">
            <div className="flex-1">
                <div className="sticky flex gap-3 top-24 lg:text-5xl text-3xl font-archivo text-[#eeff40]">
                    <BiBookContent />
                    <div>CONTENT CONTESTS</div>
                </div>
            </div>
            <div className="flex-1">
                <p>
                    For our song releases to do well we are going to need a consistent stream of content that
                    feature the songs. That&apos;s where the community comes into play, we have one of the most
                    creative communities and we want to source consistent content around each song release
                    via fun and strategic contests. Any content that we end up choosing and using will win
                    various prizes and have their content featured on the Wobblebug channels.
                </p><br />
                <p>
                    Winners will receive 25 $WOB for each piece of content they create that we pick. 
                </p>
            </div>
        </section>
    )
}

export default HomeContent;