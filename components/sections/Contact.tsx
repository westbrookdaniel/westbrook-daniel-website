import Container, { ContainerProps } from '../layout/Container'
import Socials from '../Socials'

export default function Contact(props: ContainerProps) {
    return (
        <Container {...props}>
            <h2 className="mb-2">Get in Touch</h2>
            <div className="row">
                <div>
                    <p className="mb-8 max-w-md">
                        If you want to chat feel free to send me an email,
                        otherwise check out my socials.
                    </p>
                    <Socials fontSize="2em" />
                </div>
            </div>
        </Container>
    )
}
