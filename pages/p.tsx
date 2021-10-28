import * as React from 'react'
import Container from '../components/layout/Container'
import Nav from '../components/nav/Nav'
import Footer from '../components/sections/Footer'
import Contact from '../components/sections/Contact'
import { ProjectData } from '../util/types'
import ProjectSection from '../components/sections/ProjectSection'
import { sideData } from '../lib/sideData'
import HeadWithGraph from '../components/HeadWithGraph'

export { getStaticProps } from '../lib/getProjectData'

interface Props {
    projectData: ProjectData[]
}

const Blog: React.FC<Props> = ({ projectData }) => {
    return (
        <>
            <HeadWithGraph
                title="Projects"
                image="/images/projects/space-of-the-day/space"
            />
            <Container className="m-auto">
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <div className="mb-24 flex-grow">
                <ProjectSection
                    title={
                        <>
                            <h1 className="max-w-title">Projects</h1>
                            <p className="my-4">
                                Read about some of the projects or experiments
                                I&apos;ve worked on.
                            </p>
                        </>
                    }
                    data={projectData}
                />
                <ProjectSection
                    title={<h2>Other Projects</h2>}
                    small
                    data={sideData}
                />
            </div>
            <div className="bg-subtle">
                <Contact className="pt-16 pb-32" />
                <Footer />
            </div>
        </>
    )
}

export default Blog
