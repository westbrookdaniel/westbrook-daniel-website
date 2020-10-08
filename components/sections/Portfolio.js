import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'

export default function Portfolio() {
	return (
		<Container spaced>
			<h2>Portfolio</h2>
			<PortfolioGrid
				array={[
					PortfolioItem,
					PortfolioItem,
					PortfolioItem,
					PortfolioItem,
					PortfolioItem,
				]}
			/>
		</Container>
	)
}

function PortfolioItem() {
	return (
		<div>
			<h3>Lorem Ipsum</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
				eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
				molestias.
			</p>
		</div>
	)
}
