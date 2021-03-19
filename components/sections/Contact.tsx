import Container, { ContainerProps } from '../layout/Container'
import Socials from '../Socials'

export default function Contact(props: ContainerProps) {
    return (
        <Container {...props}>
            <h2 className="mb-2">Get in Touch</h2>
            <div className="row">
                <div>
                    <p className="mb-8">
                        Contact me to discover how we can work together to
                        enhance your digital experience, or just have a chat.
                    </p>
                    <Socials fontSize="2em" />
                </div>
            </div>
        </Container>
    )
}
