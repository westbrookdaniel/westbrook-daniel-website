import Container from '../layout/Container'

export default function Footer() {
	return (
		<Container spaced>
			<div className="flex">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
                    <div className="flex-grow h-1 mx-4 bg-gray-600"></div>
					<p>Westbrook</p>
				</div>
				<div className="flex ml-32 space-x-8">
					<p>Attributions</p>
					<p>Side Projects</p>
				</div>
			</div>
		</Container>
	)
}
