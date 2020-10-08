import Row from '../Row'
import Container from '../Container'
import Divider from '../Divider'

export default function About() {
	return (
		<Container spaced>
			<h2 className="text-4xl font-bold">About Me</h2>
			<Divider className="mt-4 mb-5" />
			<Row>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
					eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
					molestias.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
					eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
					molestias.
				</p>
			</Row>
		</Container>
	)
}
