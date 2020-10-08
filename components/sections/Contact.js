import Container from "../layout/Container";
import Form from "../parts/Form";

export default function Contact(props) {
	return (
		<Container {...props}>
			<h2 className="mb-2">Get in Touch</h2>
			<div className="row mb-6">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
					soluta? Consequuntur facere omnis sapiente hic!
				</p>
			</div>
			<Form />
		</Container>
	)
}
