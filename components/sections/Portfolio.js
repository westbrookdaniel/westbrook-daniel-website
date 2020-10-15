import { Fade } from 'react-awesome-reveal'
import Image from '../Image'
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
		<Fade fraction={0.5} triggerOnce>
			<div>
				<div className="flex w-full items-center">
					<h3 className="mr-6">Lorem Ipsum</h3>
					<div>arr</div>
				</div>
				<Image
					className="my-3"
					src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
				/>
			</div>
		</Fade>
	)
}
