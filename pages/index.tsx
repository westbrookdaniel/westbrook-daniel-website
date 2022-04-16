import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import getProjectData from '../lib/getProjectData'
import getBlogData from '../lib/getBlogData'
import { BlogData, ProjectData } from '../util/types'
import Layout from '../components/layout/Layout'
import BlogItems from '../components/sections/Items/BlogItems'
import SmallItem from '../components/sections/SmallItem'
import ProjectItems from '../components/sections/Items/ProjectItems'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'

export async function getStaticProps() {
    const projectData = await getProjectData()
    const blogData = await getBlogData()
    return {
        props: {
            projectData,
            blogData,
        },
    }
}

interface Props {
    projectData: ProjectData[]
    blogData: BlogData[]
}

const Home: React.FC<Props> = ({ projectData, blogData }) => {
    return (
        <Layout>
            <Hero />
            <div className="mt-12 mb-6">
                <About />
            </div>
            <div className="flex-grow mb-24">
                <BlogItems
                    title={<h2>Blog Posts</h2>}
                    data={blogData}
                    limitedWithMessage="See All Posts"
                />
                <ProjectItems
                    title={<h2>Projects</h2>}
                    render={p => <SmallItem data={p} />}
                    data={projectData}
                    ItemsLayout={SmallItemLayout}
                    limitedWithMessage="See All Projects"
                />
            </div>
        </Layout>
    )
}

export default Home
