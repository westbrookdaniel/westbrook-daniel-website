import Head from 'next/head'
import Container from '../components/layout/Container'
import Divider from '../components/Divider'
import Button from '../components/Button'
import Link from 'next/link'
import Nav from '../components/parts/Nav'

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
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
                <h1 className="max-w-title">404 Page Not Found</h1>
                <Container spaced>
                    <div className="row">
                        <div className="max-w-xs">
                            <p className="mb-4">
                                The page you are looking for either does not
                                exist or can not be found.
                            </p>
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
