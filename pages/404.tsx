import Container from '../components/common/Container'
import { Button } from '../components/common/Button'
import Link from 'next/link'
import Layout from '../components/layout/Layout'

export default function Error() {
    return (
        <Layout title="Page Not Found" withoutFooter>
            <Container spaced className="space-y-8">
                <h1>404 Page Not Found</h1>
                <div className="row">
                    <div className="max-w-sm">
                        <p className="mb-8">
                            The page you are looking for either does not exist
                            or can not be found.
                        </p>
                        <Link href="/">
                            <a>
                                <Button>Take me home</Button>
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
