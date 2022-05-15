import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'
import SmallItem from '../components/sections/SmallItem'
import ProjectItems from '../components/sections/Items/ProjectItems'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'
import { BlogMetaWithSlug, getBlogsMeta } from '../lib/blog.server'
import { projects } from '../data/projects'

export async function getStaticProps() {
    const blogMetas = await getBlogsMeta()
    return { props: { blogMetas } }
}

interface Props {
    blogMetas: BlogMetaWithSlug[]
}

const Home: React.FC<Props> = ({ blogMetas }) => {
    return (
        <Layout>
            <Hero />
            <div className="mt-12 mb-6">
                <About />
            </div>
            <div className="flex-grow mb-24">
                <BlogItems
                    title={<h2>Blog Posts</h2>}
                    data={blogMetas}
                    limitedWithMessage="See All Posts"
                />
                <ProjectItems
                    title={<h2>Projects</h2>}
                    render={p => <SmallItem data={p} />}
                    data={projects}
                    ItemsLayout={SmallItemLayout}
                    limitedWithMessage="See All Projects"
                />
            </div>
        </Layout>
    )
}

export default Home
function getProjectData() {
    throw new Error('Function not implemented.')
}
