import Container from '../components/layout/Container'
import Button from '../components/Button'
import Link from 'next/link'
import Nav from '../components/nav/Nav'

export default function Projects() {
    return (
        <div>
            <Container className="m-auto">
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
                <h1 className="max-w-title">Projects</h1>
                <Container spaced>
                    <div className="row">
                        <div className="max-w-xs">
                            <Link href="/" scroll={false}>
                                <a>
                                    <Button>Home</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
