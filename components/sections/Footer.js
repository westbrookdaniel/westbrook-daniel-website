import Container from '../layout/Container'

export default function Footer() {
	return (
		<Container spaced>
			<div className="flex">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
                    <div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
					<p>Westbrook</p>
				</div>
				<div className="flex ml-32 space-x-8">
					<p>Side Projects</p>
				</div>
			</div>
		</Container>
	)
}
