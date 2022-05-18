import * as React from 'react'
import BlogLayout from '../../components/layout/BlogLayout'
import { useMDXComponent } from '../../lib/mdx'
import { MDXComponents } from '../../components/mdx'
import type { BlogMetaWithExtras } from '../../lib/blog.server'

interface Props {
    code: string
    meta: BlogMetaWithExtras
}

export { getStaticProps, getStaticPaths } from '../../lib/blog.server'

const BlogPost: React.FC<Props> = ({ code, meta }) => {
    const Component = useMDXComponent(code)
    return (
        <BlogLayout meta={meta}>
            <Component components={MDXComponents} />
        </BlogLayout>
    )
}

export default BlogPost
