import * as React from 'react'
import Items, { ItemsProps } from './Items'
import BlogItem from './BlogItem'
import { BlogMetaWithSlug } from '../../../lib/blog.server'

interface Props extends Partial<ItemsProps<BlogMetaWithSlug>> {
    title: JSX.Element
    data: BlogMetaWithSlug[]
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
