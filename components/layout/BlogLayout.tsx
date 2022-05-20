import * as React from 'react'
import Image from '../common/Image'
import Container from '../common/Container'
import { formatDate } from '../../util/formatDate'
import Layout from './Layout'
import Divider from '../common/Divider'
import type { BlogMetaWithExtras } from '../../lib/blog.server'

interface Props {
    meta: BlogMetaWithExtras
    children: React.ReactNode
}

const BlogLayout: React.FC<Props> = ({ meta, children }) => {
    return (
        <Layout
            title={meta.title}
            image={meta.feature.href}
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
                                className="object-cover transform"
                                loading="eager"
                                alt={meta.title}
                                {...meta.imageProps}
                                width={500}
                                height={300}
                            />
                        </div>
                    ) : null}
                </div>
            </Container>
            <Container className="pb-24 grow">
                <div className="blog-wrapper prose lg:prose-lg">
                    <p>
                        Photo by{' '}
                        <a href={meta.feature.author.referral}>
                            {meta.feature.author.name}
                        </a>{' '}
                        on{' '}
                        <a href="https://unsplash.com/s/photos/paint?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </p>
                    <Divider />
                    {children}
                </div>
            </Container>
        </Layout>
    )
}

export default BlogLayout
