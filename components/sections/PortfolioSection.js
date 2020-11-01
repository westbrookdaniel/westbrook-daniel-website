import Link from 'next/link'
import { useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import Image from '../Image'
import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'
import { CgArrowRight } from 'react-icons/cg'

export default function PortfolioSection({ data }) {
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
						<h3 className="mr-4">{data.title}</h3>
						<CgArrowRight color="#66767d" fontSize="1.2rem" />
					</div>
					<Image
						className="my-3"
						src={data.src}
					/>
				</a>
			</Link>
		</Fade>
	)
}
