import Link from 'next/link'
import { reorder } from '../../util/reorder'
import { BlogData } from '../../util/types'
import Divider from '../common/Divider'
import Container from '../common/Container'
import BlogItem from './BlogItem'

interface Props {
    data: BlogData[]
    title: JSX.Element | string
    limit?: boolean
}

const BlogSection: React.FC<Props> = ({ data, title, limit }) => {
    const sortedData = reorder(data, 'date', true) || []

    const projectItems = sortedData.map(
        (p: BlogData) =>
            function Item() {
                return <BlogItem data={p} />
            }
    )

    const items = limit ? projectItems.slice(0, 3) : projectItems

    return (
        <Container spaced>
            {title}
            <Divider className="mt-6" />
            <div className="flex flex-col mt-6 space-y-6 md:space-y-2">
                {items.map((Item: () => JSX.Element, i: number) => (
                    <Item key={i} />
                ))}
            </div>
            {limit ? (
                <div className="flex items-center w-full mt-4 space-x-8 md:mt-1">
                    <Divider className="flex-grow" />
                    <Link href="/blog">
                        <a className="flex items-center justify-center link-style">
                            See All Posts
                        </a>
                    </Link>
                </div>
            ) : (
                <Divider className="mt-6" />
            )}
        </Container>
    )
}

export default BlogSection
