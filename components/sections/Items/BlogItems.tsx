import * as React from 'react'
import type { ItemsProps } from './Items'
import Items from './Items'
import BlogItem from './BlogItem'
import type { BlogMetaWithExtras } from '../../../lib/blog.server'

interface Props extends Partial<ItemsProps<BlogMetaWithExtras>> {
    title: JSX.Element
    data: BlogMetaWithExtras[]
}

const BlogItems: React.FC<Props> = ({ title, data, ...props }) => {
    return (
        <Items
            title={title}
            render={p => <BlogItem data={p} />}
            data={data}
            {...props}
        />
    )
}

export default BlogItems
