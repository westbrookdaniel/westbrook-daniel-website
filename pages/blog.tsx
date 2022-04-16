import * as React from 'react'
import { BlogData } from '../util/types'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'

export { getStaticProps } from '../lib/getBlogData'

interface Props {
    blogData: BlogData[]
}

const Blog: React.FC<Props> = ({ blogData }) => {
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
                    data={blogData}
                />
            </div>
        </Layout>
    )
}

export default Blog
