import Container from './Container'
import Nav from '../parts/Nav'
import Divider from '../Divider'
import { Fade } from 'react-awesome-reveal'

export default function Portfolio({ data, children }) {
	return (
		<div>
			<Container spaced>
				<div className="row lg:items-end mb-6">
					<div className="max-w-6xl lg:mr-16">
						<Fade delay={200} triggerOnce>
							<h1 className="mb-4">{data.title}</h1>
						</Fade>
						<Fade triggerOnce>
							<p>{data.description}</p>
						</Fade>
					</div>
					<Fade triggerOnce>
						<div>
							<p>{data.date}</p>
						</div>
					</Fade>
				</div>
				<Divider />
			</Container>
			<Container spaced>
				<Fade delay={400}>
					<div className="max-w-4xl">{children}</div>
				</Fade>
			</Container>
		</div>
	)
}
