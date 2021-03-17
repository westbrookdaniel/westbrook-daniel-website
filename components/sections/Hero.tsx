import Container from '../layout/Container'
import Nav from '../parts/Nav'
import Image from '../Image'

export default function Hero() {
    return (
        <Container className="m-auto">
            <div className="w-full pb-10">
                <Nav className="pt-10" />
            </div>
            <h1 className="max-w-title">
                Full Stack Developer and Designer, Currently Working at{' '}
                <a
                    href="https://unearthed.solutions/"
                    className="hover:underline italic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Unearthed
                </a>
            </h1>
        </Container>
    )
}
