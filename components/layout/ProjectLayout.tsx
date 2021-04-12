import Container from './Container'
import Nav from '../nav/Nav'
import Divider from '../Divider'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { CgArrowRight } from 'react-icons/cg'
import { useContext, useEffect, useState } from 'react'
import ProjectItem from '../sections/ProjectItem'
import Head from 'next/head'
import { ProjectMeta, ProjectData } from '../../util/types'
import HeadWithGraph from '../../util/HeadWithGraph'

interface Props {
    data: ProjectMeta
    projectData: ProjectData[]
}

const Project: React.FC<Props> = ({ data, children, projectData }) => {
    const [nextProject, setNextProject] = useState<null | ProjectData>(null)
    useEffect(() => {
        if (!(projectData && data)) return
        const currentPort = projectData.find(
            (port: ProjectMeta) => port.title === data.title
        )
        if (!currentPort) return setNextProject(projectData[0])
        const i = projectData.indexOf(currentPort)
        let next = projectData[i + 1]
        if (next) {
            setNextProject(next)
        } else {
            setNextProject(projectData[0])
        }
    }, [projectData, data])

    return (
        <>
            <HeadWithGraph
                title={data.title}
                image={data.feature}
                description={data.description}
            />
            <Container>
                <div className="w-full pb-10">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <Container spaced>
                <div className="flex-row lg:items-end mb-6">
                    <div className="max-w-6xl lg:mr-16">
                        <h1 className="mb-4">{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className="flex items-center space-x-10 text-themeRed-500">
                        <div className="flex items-center space-x-2 hover-arrow">
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Website
                            </a>
                            <CgArrowRight
                                color="#d43c29"
                                className="arrow"
                                fontSize="1.2rem"
                            />
                        </div>
                        {data.source && (
                            <div className="flex items-center space-x-2 hover-arrow">
                                <a
                                    href={data.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source
                                </a>
                                <CgArrowRight
                                    color="#d43c29"
                                    className="arrow"
                                    fontSize="1.2rem"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <Divider />
            </Container>
            <Container className="pb-8 lg:pb-10 flex-grow">
                <div className="prose lg:prose-lg" style={{ maxWidth: 'none' }}>
                    {children}
                </div>
            </Container>
            <Container spaced className="mb-12">
                <div className="row">
                    {nextProject && (
                        <ProjectItem nextProject data={nextProject} />
                    )}
                </div>
            </Container>
            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-40" />
                <Footer />
            </div>
        </>
    )
}

export default Project
