import Head from 'next/head'
import Nav from '../components/parts/Nav'
import Hero from '../components/sections/Hero'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero nav={Nav} />
      
		</div>
	)
}
