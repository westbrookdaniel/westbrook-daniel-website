import Head from 'next/head'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import BlogSection from '../components/sections/BlogSection'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import getProjectData from '../util/getProjectData'
import getBlogData from '../util/getBlogData'
import { BlogData, ProjectData } from '../util/types'

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
        <div>
            <Head>
                <title>Daniel Westbrook | Full Stack Developer</title>
                <meta
                    name="description"
                    content="I am a Full Stack Developer and Designer primarily working
                    with React building web apps. I enjoy formulating
                    performant, innovative solutions and exploring new tools and
                    technologies."
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <div className="mt-12 mb-6">
                <About />
            </div>
            <div className="mb-24">
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

            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-32" />
                <Footer />
            </div>
        </div>
    )
}

export default Home
