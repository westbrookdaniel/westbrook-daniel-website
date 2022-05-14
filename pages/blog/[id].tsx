import * as React from 'react'
import { BlogMeta } from '../../util/types'
import BlogLayout from '../../components/layout/BlogLayout'
import { useMDXComponent } from '../../lib/mdx'
import { MDXComponents } from '../../components/mdx'

interface Props {
    code: string
    meta: BlogMeta
}

export { getStaticProps, getStaticPaths } from '../../lib/test.server'

const BlogPost: React.FC<Props> = ({ code, meta }) => {
    const Component = useMDXComponent(code)
    return (
        <BlogLayout meta={meta}>
            <Component components={MDXComponents} />
        </BlogLayout>
    )
}

export default BlogPost
