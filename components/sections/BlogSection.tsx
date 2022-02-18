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
            <div className="mt-6 grid gap-2">
                {items.map((Item: () => JSX.Element, i: number) => (
                    <Item key={i} />
                ))}
            </div>
            {limit ? (
                <div className="mt-4 flex w-full items-center space-x-8 md:mt-1">
                    <Divider className="flex-grow" />
                    <Link href="/blog">
                        <a className="link-style flex items-center justify-center">
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
