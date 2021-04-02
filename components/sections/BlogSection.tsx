import Link from 'next/link'
import { BlogData } from '../../util/types'
import Divider from '../Divider'
import Container from '../layout/Container'
import BlogItem from './BlogItem'

interface Props {
    data: BlogData[]
    title: JSX.Element | string
}

const BlogSection: React.FC<Props> = ({ data, title }) => {
    const projectItems = data.map((p: BlogData) => () => {
        return <BlogItem data={p} />
    })

    return (
        <Container spaced>
            {title}
            <div className="grid mt-6 gap-4">
                {projectItems
                    .slice(0, 3)
                    .map((Item: () => JSX.Element, i: number) => (
                        <>
                            <Divider />
                            <Item key={i} />
                        </>
                    ))}
            </div>
            <div className="flex items-center space-x-8 w-full">
                <Divider className="flex-grow" />
                <Link href="/blog" scroll={false}>
                    <a className="flex justify-center items-center">
                        Read More
                    </a>
                </Link>
            </div>
        </Container>
    )
}

export default BlogSection
