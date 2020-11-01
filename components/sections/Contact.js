import Container from '../layout/Container'
import Form from '../parts/Form'

export default function Contact(props) {
	return (
		<Container {...props}>
			<h2 className="mb-2">Get in Touch</h2>
			<div className="row row-max mb-6">
				<p>
					Contact me to discover how we can work together to enhance your digital experience, or just have a chat.
				</p>
			</div>
			<Form />
		</Container>
	)
}
