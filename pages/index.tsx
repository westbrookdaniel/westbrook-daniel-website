import Head from 'next/head'
import About from '../components/sections/About'
import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import { useContext, useEffect } from 'react'
import { NavContext } from './_app'
import getProjectData from '../util/getProjectData'

export async function getStaticProps() {
    return getProjectData()
}

interface Props {
    projectData: any
}

const Home: React.FC<Props> = ({ projectData }) => {
    const { setData, data } = useContext(NavContext)!
    useEffect(() => {
        if (!data) {
            setData(projectData)
        }
    }, [])

    const sideData = [
        {
            slug: 'https://img-board.netlify.app/',
            title: 'IMG Board',
        },
        {
            slug: 'https://color-maker.netlify.app/',
            title: 'Color Maker',
        },
        {
            slug: 'https://inspoapp.netlify.app/',
            title: 'Inspo App',
        },
    ]

    return (
        <div>
            <Head>
                <title>
                    Daniel Westbrook | Full Stack Developer and Designer
                </title>
                <meta
                    name="description"
                    content="I am a Full Stack Developer and Designer with a history of working in 
					the web development and design industry building websites and web apps. I enjoy 
					formulating efficient, innovative solutions for Perth businesses and agencies 
					that utalises strategic design thinking."
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <div className="mt-16 mb-8">
                <About />
            </div>
            <div className="mb-16">
                <ProjectSection title={<h2>Projects</h2>} data={projectData} />
                <ProjectSection
                    title={<h3>Side Projects</h3>}
                    small
                    data={sideData}
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
