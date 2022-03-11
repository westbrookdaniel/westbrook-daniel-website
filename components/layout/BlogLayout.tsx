import { FC } from 'react'
import HeadWithGraph from '../HeadWithGraph'
import { BlogMeta } from '../../util/types'
import Image from '../common/Image'
import Nav from '../nav/Nav'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Container from '../common/Container'
import { formatDate } from '../../util/formatDate'

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
                <div className="items-end space-y-8">
                    <div className="max-w-6xl">
                        <h1 className="mb-4">{meta.title}</h1>
                        <p>
                            {formatDate(meta.date)} - {meta.description}
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
            <Container className="flex-grow pb-24">
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
