const HomeTop = () => {
    const goToPlayer = () => location.href = '/player';

    return (
        <section id="wob-music-group" className="pt-32">
            <div className="text-3xl lg:text-7xl sm:text-5xl font-monument">WOB MUSIC<br />GROUP.</div>
            <div className="pt-5 lg:text-3xl sm:text-2xl">AN INNOVATIVE WEB3 RECORD LABEL BY<br />WOBBLEBUG</div>
            <div className="pt-10 font-bold sm:text-lg">WOBBLE LABS WILL BE THE CENTRAL HOME THAT WILL RELEASE THE MUSIC CREATED BY WOBBLEBUG
                AND IT&apos;S COMMUNITY MEMBERS. WE PLAN TO ROLLOUT SINGLES, EP&apos;S AND ALBUMS JUST LIKE ANY
                OTHER ARTIST WOULD. THE MUSIC WILL BE AVAILABLE ON THE TRADITIONAL PLATFORMS INCLUDING
                SPOTIFY, APPLE, AMAZON, YOUTUBE, AUDIUS AND MORE. 
            </div>
            <div className="pt-28">
                <button onClick={goToPlayer} className="px-5 py-3 text-black rounded-2xl bg-rose-600 hover:bg-rose-500 font-monument">ENTER WOB MUSIC PLAYER</button>
            </div>
        </section>
    )
}

export default HomeTop;