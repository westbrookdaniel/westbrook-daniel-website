import Container from '../layout/Container'
import Image from '../Image'

export default function Hero({ nav }) {
	return (
		<div className="md:h-screen flex flex-col">
			<div>
				<Container spaced>{typeof nav === 'function' && nav()}</Container>
				<Container className="m-auto">
					<h1
						className="text-5xl md:text-6xl font-bold"
						style={{ lineHeight: '1.2em' }}
					>
						Front End Developer in Perth working on building practical and fast
						websites
					</h1>
				</Container>
			</div>
			<div className="flex-grow relative flex items-stretch">
				<Container className="relative z-10" spaced>
					<Image contain src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" />
				</Container>
				<div
					className="absolute bottom-0 left-0 bg-themeGray-100 w-full"
					style={{ height: '50%' }}
				></div>
			</div>
		</div>
	)
}
