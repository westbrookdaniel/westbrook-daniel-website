import Container from '../components/layout/Container'
import Nav from '../components/nav/Nav'
import Footer from '../components/sections/Footer'
import Contact from '../components/sections/Contact'
import React from 'react'
import { ProjectData } from '../util/types'
import ProjectSection from '../components/sections/ProjectSection'
import { sideData } from '../data/sideData'

export { getStaticProps } from '../util/getProjectData'

interface Props {
    projectData: ProjectData[]
}

const Blog: React.FC<Props> = ({ projectData }) => {
    return (
        <div>
            <Container className="m-auto">
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <div className="mb-24">
                <ProjectSection
                    title={
                        <>
                            <h1 className="max-w-title">Projects</h1>
                            <p className="mt-4 mb-8">
                                Read about some of the projects or experiments
                                I've worked on.
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
            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-32" />
                <Footer />
            </div>
        </div>
    )
}

export default Blog
