import Container from '../layout/Container'

export default function Footer() {
	return (
		<Container spaced>
			<div className="md:flex">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
                    <div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
					<p>Westbrook</p>
				</div>
				<div className="flex mt-8 md:mt-0 md:ml-32 space-x-8">
					<p>Side Projects</p>
				</div>
			</div>
		</Container>
	)
}
