import { FC } from 'react'
import { BlogMeta } from '../../util/types'
import Image from '../common/Image'
import Container from '../common/Container'
import { formatDate } from '../../util/formatDate'
import Layout from './Layout'

interface Props {
    prefix: string
    meta: BlogMeta
}

const BlogLayout: FC<Props> = ({ meta, children }) => {
    return (
        <Layout
            title={meta.title}
            image={meta.feature.src}
            description={meta.snippet}
        >
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
                                className="transform object-cover"
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
        </Layout>
    )
}

export default BlogLayout
