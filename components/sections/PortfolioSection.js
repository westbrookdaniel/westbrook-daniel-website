import Link from 'next/link'
import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'
import PortfolioItem from './PortfolioItem'
import SmallItem from './SmallItem'

export default function PortfolioSection({ data, small, title }) {
	const portfolioItems = data.map((p) => () => {
		if (small) {
			return <SmallItem data={p} />
		}
		return <PortfolioItem data={p} />
	})
	// if (small) {
	// 	console.log(portfolioItems);
	// }

	return (
		<Container spaced>
			{title}
			{small ? (
				<div className="mt-4 flex md:space-x-16 flex-col md:flex-row">
					{portfolioItems.map((Item, i) => (
						<Item key={i} />
					))}
				</div>
			) : (
				<PortfolioGrid array={portfolioItems} />
			)}
		</Container>
	)
}
