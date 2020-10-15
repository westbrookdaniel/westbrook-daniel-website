import Container from './Container'
import Nav from '../parts/Nav'
import Divider from '../Divider'
import { Fade } from 'react-awesome-reveal'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

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
			<Container spaced className='mb-12'>
				<Fade delay={400}>
					<div className="max-w-4xl">{children}</div>
				</Fade>
			</Container>
			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
