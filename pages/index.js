import Head from 'next/head'
import Nav from '../components/parts/Nav'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Daniel Westbrook</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />

			<div className="mt-16 mb-8">
					<About />
			</div>
			<div className="mb-16">
					<Portfolio />
			</div>

			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
