import Container from '../layout/Container'

export default function Footer() {
	return (
		<Container spaced>
			<div className="lg:flex">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
					<div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
					<p>Westbrook</p>
				</div>
				<div className="flex mt-6 lg:mt-0 lg:ml-16 space-x-8">
					<a href="images/static/daniel-westbrook-resume.pdf" download>
						<p>Resume</p>
					</a>
				</div>
			</div>
		</Container>
	)
}
