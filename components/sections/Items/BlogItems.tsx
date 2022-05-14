import * as React from 'react'
import Items, { ItemsProps } from './Items'
import BlogItem from './BlogItem'
import { BlogData } from '../../../util/types'
import { reorder } from '../../../util/reorder'

interface Props extends Partial<ItemsProps<BlogData>> {
    title: JSX.Element
    data: BlogData[]
}

const BlogItems: React.FC<Props> = ({ title, data, ...props }) => {
    return (
        <Items
            title={title}
            render={p => <BlogItem data={p} />}
            data={reorder(data, 'date')}
            {...props}
        />
    )
}

export default BlogItems
