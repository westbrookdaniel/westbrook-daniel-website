import Container from '../components/common/Container'
import Button from '../components/common/Button'
import Link from 'next/link'
import Nav from '../components/nav/Nav'
import HeadWithGraph from '../components/HeadWithGraph'

export default function Error() {
    return (
        <>
            <HeadWithGraph title="Page Not Found" />

            <Container className="m-auto flex-grow">
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
                <h1 className="max-w-title">404 Page Not Found</h1>
                <Container spaced>
                    <div className="row">
                        <div className="max-w-sm">
                            <p className="mb-8">
                                The page you are looking for either does not
                                exist or can not be found.
                            </p>
                            <Link href="/">
                                <a>
                                    <Button>Take me home</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}
