import Head from 'next/head'
import Nav from '../components/parts/Nav'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero nav={Nav} />

			<About />

			<Portfolio />
		</div>
	)
}
