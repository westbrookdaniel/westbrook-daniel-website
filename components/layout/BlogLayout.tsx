import dayjs from 'dayjs'
import { FC } from 'react'
import HeadWithGraph from '../HeadWithGraph'
import { BlogMeta } from '../../util/types'
import Divider from '../Divider'
import Image from '../Image'
import Nav from '../nav/Nav'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Container from './Container'

interface Props {
    prefix: string
    meta: BlogMeta
}

const BlogLayout: FC<Props> = ({ meta, children }) => {
    return (
        <>
            <HeadWithGraph
                title={meta.title}
                image={meta.feature.src}
                description={meta.snippet}
            />
            <Container>
                <div className="w-full pb-10">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <Container spaced>
                <div className="space-y-8 items-end">
                    <div className="max-w-6xl">
                        <h1 className="mb-4">{meta.title}</h1>
                        <p>
                            {dayjs(meta.date).format('DD/MM/YYYY')} -{' '}
                            {meta.description}
                        </p>
                    </div>
                    {meta.feature ? (
                        <div className="max-w-lg">
                            <Image
                                width={500}
                                height={300}
                                className="object-cover transform"
                                loading="eager"
                                src={meta.feature}
                                alt={meta.title}
                            />
                        </div>
                    ) : null}
                </div>
            </Container>
            <Container className="pb-24 flex-grow">
                <div className="blog-wrapper prose lg:prose-lg">{children}</div>
            </Container>
            <div className="bg-subtle">
                <Contact blog className="pt-16 pb-40" />
                <Footer />
            </div>
        </>
    )
}

export default BlogLayout
