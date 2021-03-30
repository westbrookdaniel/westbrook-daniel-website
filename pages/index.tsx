import Head from 'next/head'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import { useContext, useEffect } from 'react'
import { NavContext } from './_app'
import getProjectData from '../util/getProjectData'
import { sideData } from '../data/sideData'
import getBlogData from '../util/getBlogData'

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
    projectData: any[]
    blogData: any[]
}

const Home: React.FC<Props> = ({ projectData, blogData }) => {
    const { setData, data } = useContext(NavContext)!
    useEffect(() => {
        if (!data) {
            setData(projectData)
        }
    }, [])

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

            <div className="mt-16 mb-8">
                <About />
            </div>
            <div className="mb-16">
                <ProjectSection
                    title={<h2>Blog Posts</h2>}
                    data={blogData}
                />
                <ProjectSection
                    title={<h3>Projects</h3>}
                    small
                    data={[...projectData, ...sideData]}
                />
            </div>

            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-32" />
                <Footer noSocials />
            </div>
        </div>
    )
}

export default Home
