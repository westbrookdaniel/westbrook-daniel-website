import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import BlogSection from '../components/sections/BlogSection'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import getProjectData from '../lib/getProjectData'
import getBlogData from '../lib/getBlogData'
import { BlogData, ProjectData } from '../util/types'
import HeadWithGraph from '../components/HeadWithGraph'
import Divider from '../components/common/Divider'

export async function getStaticProps() {
    const projectData = getProjectData()
    const blogData = getBlogData()
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
        <>
            <HeadWithGraph />

            <Hero />

            <div className="mt-12 mb-6">
                <About />
            </div>
            <div className="mb-24 flex-grow">
                <BlogSection
                    title={<h2>Blog Posts</h2>}
                    limit
                    data={blogData}
                />
                <ProjectSection
                    title={<h2>Projects</h2>}
                    small
                    data={projectData}
                    seeAll
                />
            </div>

            <div className="bg-subtle">
                <Contact className="pt-16 pb-32" />
                <Footer />
            </div>
        </>
    )
}

export default Home
