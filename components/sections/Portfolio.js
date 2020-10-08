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
			<div className="flex w-full items-center mb-4">
				<h3 className="mr-6">Lorem Ipsum</h3>
				<div>arr</div>
			</div>
			<p className="bg-gray-400 mb-3">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
				eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
				molestias.
			</p>
		</div>
	)
}
