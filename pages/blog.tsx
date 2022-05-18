import * as React from 'react'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'
import type { GetStaticProps } from 'next'
import type { BlogMetaWithExtras } from '../lib/blog.server'
import { getBlogsMeta } from '../lib/blog.server'

export const getStaticProps: GetStaticProps = async () => {
    return { props: { blogMeta: await getBlogsMeta() } }
}

interface Props {
    blogMeta: BlogMetaWithExtras[]
}

const Blog: React.FC<Props> = ({ blogMeta }) => {
    return (
        <Layout title="Blog">
            <div className="mb-16 flex-grow">
                <BlogItems
                    title={
                        <>
                            <h1 className="max-w-title">Blog</h1>
                            <p className="mt-4 mb-10">
                                Read my latest posts where I write about what
                                I&apos;m finding interesting
                            </p>
                        </>
                    }
                    data={blogMeta}
                />
            </div>
        </Layout>
    )
}

export default Blog
