import Head from 'next/head'
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

interface Props {
	portfolioData: any
}

const Home: React.FC<Props> = ({ portfolioData }) => {
	const { setData, data } = useContext(NavContext)!
	useEffect(() => {
		if (!data) {
			setData(portfolioData)
		}
	}, [])

	const sideData = [
		{
			slug: 'https://img-board.netlify.app/',
			title: 'IMG Board',
		},
		{
			slug: 'https://color-maker.netlify.app/',
			title: 'Color Maker',
		},
		{
			slug: 'https://inspoapp.netlify.app/',
			title: 'Inspo App',
		},
	]

	return (
		<div>
			<Head>
				<title>Daniel Westbrook | Full Stack Developer and Designer</title>
				<meta
					name="description"
					content="I am a Full Stack Developer and Designer with a history of working in 
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
				<PortfolioSection title={<h2>Portfolio</h2>} data={portfolioData} />
				<PortfolioSection
					title={<h3>Side Projects</h3>}
					small
					data={sideData}
				/>
			</div>

			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}

export default Home
