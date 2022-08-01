const HomePhase1 = () => {
    return (
        <section id="section-phase-1" className="sm:flex sm:gap-10 pt-28">
            <div className="flex-1">
                <div className="sm:sticky sm:top-24">
                    <div className="text-lg text-green-400">Phase 1</div>
                    <div className="lg:text-5xl text-3xl text-[#eeff40] font-archivo">THE DEBUT SINGLES & EP</div>
                    <div className="p-6 mt-10 text-center text-yellow-300 bg-blue-600 shadow-lg shadow-black rounded-2xl">
                        <div className="text-3xl font-bold">WOBBLEBUG DEBUT EP</div>
                        <div className="text-xl font-bold">6 SONGS</div>
                        <div className="pt-3 font-bold">Release Date: TBA</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-5 pt-10">
                <div className="p-5 reveal bg-green-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 1</div>
                    <div className="pt-3 text-lg font-bold">Title: </div>
                    <div className="text-lg font-bold">Release Date: </div>
                </div>
                <div className="p-5 reveal bg-green-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 2</div>
                    <div className="pt-3 text-lg font-bold">Title: </div>
                    <div className="text-lg font-bold">Release Date: </div>
                </div>
                <div className="p-5 reveal bg-green-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 3</div>
                    <div className="pt-3 text-lg font-bold">Title: </div>
                    <div className="text-lg font-bold">Release Date: </div>
                </div>
                <div className="p-5 reveal bg-teal-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 1</div>
                    <div className="pt-3 text-lg font-bold">REMIX BY WOB HOLDER</div>
                </div>
                <div className="p-5 reveal bg-teal-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 2</div>
                    <div className="pt-3 text-lg font-bold">REMIX BY WOB HOLDER</div>
                </div>
                <div className="p-5 reveal bg-teal-400 shadow-lg cursor-pointer hover:scale-[1.1] transition-all duration-300 shadow-black rounded-2xl text-stone-800">
                    <div className="text-2xl font-bold">SINGLE 3</div>
                    <div className="pt-3 text-lg font-bold">REMIX BY WOB HOLDER</div>
                </div>
            </div>
        </section>
    )
}

export default HomePhase1;