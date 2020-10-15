import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import Image from '../Image'
import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'

export default function Portfolio({ data }) {
	const portfolioItems = data.map((p) => () => {
		return <PortfolioItem data={p} />
	})

	return (
		<Container spaced>
			<h2>Portfolio</h2>
			<PortfolioGrid array={portfolioItems} />
		</Container>
	)
}

export function PortfolioItem({ data }) {
	return (
		<Fade fraction={0.5} triggerOnce>
			<Link href={data.slug} scroll={false}>
				<a>
					<div className="flex w-full items-center">
						<h3 className="mr-6">{data.title}</h3>
						<div>arr</div>
					</div>
					<Image
						className="my-3"
						src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
					/>
				</a>
			</Link>
		</Fade>
	)
}
