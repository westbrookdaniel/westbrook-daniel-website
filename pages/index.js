import Head from 'next/head'
import Nav from '../components/parts/Nav'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export async function getStaticProps() {
	const fs = require('fs')
	const path = require('path')

	const files = fs.readdirSync(path.join(process.cwd(), 'pages', 'p'), 'utf-8')
	const fileNames = files.filter((fn) => fn.endsWith('.mdx'))

	const portfolioData = []
	fileNames.forEach((file) => {
		const data = require(`./p/${file}`).metadata
		data.slug = '/p/' + file.substring(0, file.length - 4)
		portfolioData.push(data)
	})

	return { props: { portfolioData } }
}

export default function Home({ portfolioData }) {
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
				<Portfolio data={portfolioData} />
			</div>

			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
