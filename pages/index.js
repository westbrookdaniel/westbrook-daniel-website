import Head from 'next/head'
import Nav from '../components/parts/Nav'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import PortfolioSection from '../components/sections/PortfolioSection'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import { useContext, useEffect } from 'react'
import { NavContext } from './_app'
import getPortfolioData from '../util/getPortfolioData'

export async function getStaticProps() {
	return getPortfolioData()
}

export default function Home({ portfolioData }) {
	const { setData, data } = useContext(NavContext)
	useEffect(() => {
		if (!data) {
			setData(portfolioData)
		}
	}, [])

	return (
		<div>
			<Head>
				<title>Daniel Westbrook | Front End Developer and Designer</title>
				<meta
					name="description"
					content="I am a Front End Developer and Designer with a history of working in 
					the web development and design industry building websites and web apps. I enjoy 
					formulating efficient, innovative solutions for Perth businesses and agencies 
					that utalises strategic design thinking."
				></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />

			<div className="mt-16 mb-8">
				<About />
			</div>
			<div className="mb-16">
				<PortfolioSection data={portfolioData} />
			</div>

			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
