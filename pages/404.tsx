import Head from 'next/head'
import Container from '../components/layout/Container'
import Divider from '../components/Divider'
import Button from '../components/Button'
import Link from 'next/link'

export default function Error() {
    return (
        <div>
            <Head>
                <title>
                    Daniel Westbrook | Full Stack Developer and Designer
                </title>
                <meta
                    name="description"
                    content="I am a Full Stack Developer and Designer with a history of working in 
					the web development and design industry building websites and web apps. I enjoy 
					formulating efficient, innovative solutions for Perth businesses and agencies 
					that utalises strategic design thinking."
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="m-auto">
                <h1 className="max-w-title">404 Page Not Found</h1>
                <Divider className="mt-4 mb-5" />∫{' '}
                <Container spaced>
                    <div className="row">
                        <div className="max-w-xs space-y-4">
                            <p>
                                The page you are looking for either does not
                                exist or can not be found.
                            </p>
                            <Link href="/" scroll={false}>
                                <Button>Home</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
