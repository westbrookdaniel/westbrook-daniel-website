import Container from '../layout/Container'
import PortfolioGrid from '../layout/PortfolioGrid'

export default function Portfolio() {
	return (
		<Container spaced>
			<h2 className="text-4xl font-bold">Portfolio</h2>
			<PortfolioGrid array={[El, El, El, El, El]} />
		</Container>
	)
}

const El = () => {
	return (
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
			eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
			molestias.
		</p>
	)
}
