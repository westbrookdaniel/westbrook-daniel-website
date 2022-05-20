import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'
import SmallItem from '../components/sections/SmallItem'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'
import type { BlogMetaWithExtras } from '../lib/blog.server'
import { getBlogsMeta } from '../lib/blog.server'
import { projects } from '../data/projects'
import type { ImageProps } from '../lib/getImageProps.server'
import { getImageProps } from '../lib/getImageProps.server'
import type { GetStaticProps } from 'next'
import Items from '../components/sections/Items/Items'

export const getStaticProps: GetStaticProps = async () => {
    const blogMetas = await getBlogsMeta()
    const imageProps = await getImageProps('/images/me.jpg')
    return { props: { blogMetas, imageProps } }
}

interface Props {
    blogMetas: BlogMetaWithExtras[]
    imageProps: ImageProps
}

const Home: React.FC<Props> = ({ blogMetas, imageProps }) => {
    return (
        <Layout>
            <Hero imageProps={imageProps} />
            <div className="mt-12 mb-6">
                <About />
            </div>
            <div className="mb-24 grow">
                <BlogItems
                    title={<h2>Blog Posts</h2>}
                    data={blogMetas}
                    limited={{
                        message: 'See All Posts',
                        url: '/blog',
                    }}
                />
                <Items
                    title={<h2>Projects</h2>}
                    render={p => <SmallItem data={p} />}
                    data={projects}
                    ItemsLayout={SmallItemLayout}
                    limited={{
                        message: 'See All Projects',
                        url: '/projects',
                    }}
                />
            </div>
        </Layout>
    )
}

export default Home
