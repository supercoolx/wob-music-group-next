import type { NextPage } from 'next'
import Container from '@components/common/Container'
import HTMLHeader from '@components/Home/HTMLHeader'
import Header from '@components/Header'
import HomeTop from '@components/Home/HomeTop'
import HomePhase1 from '@components/Home/HomePhase1'
import HomePhase2 from '@components/Home/HomePhase2'
import HomePhase3 from '@components/Home/HomePhase3'
import HomeHow from '@components/Home/HomeHow'
import HomeCommunity from '@components/Home/HomeCommunity'
import HomeArt from '@components/Home/HomeArt'
import HomeContent from '@components/Home/HomeContent'
import HomeRelease from '@components/Home/HomeRelease'
import HomeSharing from '@components/Home/HomeSharing'
import HomeOverview from '@components/Home/HomeOverview'
import ScrollToTop from '@components/common/ScrollToTop'
import { useEffect } from 'react'

const Home: NextPage = () => {
	const reveal = () => {
		const reveals = document.querySelectorAll(".reveal:not(.animate-fade-in)");
		for (let i = 0; i < reveals.length; i++) {
			let windowHeight = window.innerHeight;
			let elementTop = reveals[i].getBoundingClientRect().top;

			if (elementTop < windowHeight) reveals[i].classList.add("animate-fade-in");
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", reveal);
		return () => window.removeEventListener("scroll", reveal);
	}, [])

	return (
		<Container>
			<main>
				<HTMLHeader />
				<Header />
				<HomeTop />
				<HomePhase1 />
				<HomePhase2 />
				<HomePhase3 />
				<HomeHow />
				<HomeCommunity />
				<HomeArt />
				<HomeContent />
				<HomeRelease />
				<HomeSharing />
				<HomeOverview />
				<ScrollToTop />
			</main>
		</Container>
	)
}

export default Home
