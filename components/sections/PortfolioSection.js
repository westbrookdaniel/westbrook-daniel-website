import Link from 'next/link'
import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'
import PortfolioItem from './PortfolioItem'

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