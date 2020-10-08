import Head from 'next/head'
import Container from '../components/layout/Container'
import Divider from '../components/Divider'
import Nav from '../components/parts/Nav'
import PortfolioGrid from '../components/layout/PortfolioGrid'
import Row from '../components/layout/Row'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero nav={Nav} />

			<About />

			<Container spaced>
				<h2 className="text-4xl font-bold">Portfolio</h2>
				<PortfolioGrid />
			</Container>
		</div>
	)
}
