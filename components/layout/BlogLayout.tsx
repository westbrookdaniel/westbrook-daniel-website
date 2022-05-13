import { FC } from 'react'
import { BlogMeta } from '../../util/types'
import Image from '../common/Image'
import Container from '../common/Container'
import { formatDate } from '../../util/formatDate'
import Layout from './Layout'
import Divider from '../common/Divider'

interface Props {
    meta: BlogMeta
    children: React.ReactNode
}

const BlogLayout: FC<Props> = ({ meta, children }) => {
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
                                width={500}
                                height={300}
                                className="object-cover transform"
                                loading="eager"
                                src={meta.feature.href}
                                alt={meta.title}
                            />
                        </div>
                    ) : null}
                </div>
            </Container>
            <Container className="flex-grow pb-24">
                <div className="blog-wrapper prose lg:prose-lg">
                    Photo by{' '}
                    <a href={meta.feature.author.referral}>
                        {meta.feature.author.name}
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/s/photos/paint?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash
                    </a>
                    <Divider />
                    {children}
                </div>
            </Container>
        </Layout>
    )
}

export default BlogLayout
