import * as React from 'react'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'
import { GetStaticProps } from 'next'
import { BlogMetaWithSlug, getBlogsMeta } from '../lib/blog.server'

export const getStaticProps: GetStaticProps = async context => {
    return { props: { blogMeta: await getBlogsMeta() } }
}

interface Props {
    blogMeta: BlogMetaWithSlug[]
}

const Blog: React.FC<Props> = ({ blogMeta }) => {
    return (
        <Layout title="Blog">
            <div className="flex-grow mb-16">
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
