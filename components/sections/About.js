import Container from '../layout/Container'
import Divider from '../Divider'

export default function About() {
	return (
		<Container spaced>
			<h2>About Me</h2>
			<Divider className="mt-4 mb-5" />
			<div className="row row-max">
				<p>
					I am a Front End Developer and Designer with a history of working in
					the web development and design industry building websites and web
					apps. I enjoy formulating efficient, innovative solutions for Perth
					businesses and agencies that utilise strategic design thinking.
				</p>
				<p>
					My experience extends through working with web agencies, direct client
					relations, agile workplaces, and more. Through this, I have developed
					many websites with unique branding and varying complexity. I always am
					seeking new challenges and developing my knowledge of the latest
					technologies.
				</p>
			</div>
		</Container>
	)
}
