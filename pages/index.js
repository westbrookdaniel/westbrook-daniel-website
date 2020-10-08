import Head from 'next/head'
import Nav from '../components/parts/Nav'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'
import Contact from '../components/sections/Contact'

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

			<div className="bg-gray-400">
				<Contact />
			</div>
		</div>
	)
}
