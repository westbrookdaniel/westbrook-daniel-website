import * as React from 'react'
import type { GetStaticPaths } from 'next'
import { BlogMeta } from '../../util/types'
import BlogLayout from '../../components/layout/BlogLayout'
import { useMDXComponent } from '../../lib/mdx'

interface Props {
    code: string
    meta: BlogMeta
}

export { getStaticProps } from '../../lib/test.server'

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: 'website-rebuild' } }],
        fallback: true,
    }
}

const BlogPost: React.FC<Props> = ({ code, meta }) => {
    const Component = useMDXComponent(code)
    return (
        <BlogLayout meta={meta}>
            <Component />
        </BlogLayout>
    )
}

export default BlogPost
