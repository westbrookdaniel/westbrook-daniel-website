import * as React from 'react'
import Container from '../components/common/Container'
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
                <div className="mb-12 w-full">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <div className="flex-grow mb-24">
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
