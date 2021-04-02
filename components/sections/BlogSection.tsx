import Link from 'next/link'
import { BlogData } from '../../util/types'
import Divider from '../Divider'
import Container from '../layout/Container'
import BlogItem from './BlogItem'

interface Props {
    data: BlogData[]
    title: JSX.Element | string
    limit?: boolean
}

const BlogSection: React.FC<Props> = ({ data, title, limit }) => {
    const projectItems = data.map((p: BlogData) => () => {
        return <BlogItem data={p} />
    })

    const items = limit ? projectItems.slice(0, 3) : projectItems

    return (
        <Container spaced>
            {title}
            <div className="grid mt-6 gap-4">
                {items.map((Item: () => JSX.Element, i: number) => (
                    <>
                        <Divider className="mb-2" key={i + 'a'} />
                        <Item key={i + 'b'} />
                    </>
                ))}
            </div>
            {limit ? (
                <div className="flex mt-4 md:mt-1 items-center space-x-8 w-full">
                    <Divider className="flex-grow" />
                    <Link href="/blog" scroll={false}>
                        <a className="flex justify-center items-center">
                            See All Posts
                        </a>
                    </Link>
                </div>
            ) : null}
        </Container>
    )
}

export default BlogSection
