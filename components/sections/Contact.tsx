import { useRouter } from 'next/router'
import Container, { ContainerProps } from '../common/Container'
import Socials from '../Socials'

interface ContactProps extends ContainerProps {
    blog?: boolean
}

export default function Contact({ blog, ...props }: ContactProps) {
    const router = useRouter()

    return (
        <Container {...props}>
            <h2 className="mb-2">
                {blog ? 'Questions and Corrections' : 'Get in Touch'}
            </h2>
            <div className="row">
                <div>
                    <p className="mb-8 max-w-md">
                        If you want to chat feel free to send me an email,
                        otherwise check out my socials.
                    </p>
                    <Socials fontSize="2em" />
                    {blog ? (
                        <p className="mt-10">
                            Or you can{' '}
                            <a
                                href={`https://github.com/westbrookdaniel/westbrook-daniel-website/edit/main/pages/blog/${router.pathname.substring(
                                    6
                                )}.mdx`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                edit this page
                            </a>
                        </p>
                    ) : null}
                </div>
            </div>
        </Container>
    )
}
