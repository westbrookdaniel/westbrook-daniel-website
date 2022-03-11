import Container from '../common/Container'
import Nav from '../nav/Nav'
import Divider from '../common/Divider'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { CgArrowRight } from 'react-icons/cg'
import { useMemo } from 'react'
import ProjectItem from '../sections/ProjectItem'
import { ProjectMeta, ProjectData } from '../../util/types'
import HeadWithGraph from '../HeadWithGraph'

interface Props {
    data: ProjectMeta
    projectData: ProjectData[]
}

const Project: React.FC<Props> = ({ data, children, projectData }) => {
    const nextProject = useMemo(() => {
        const currentPort = projectData.find(
            (port: ProjectMeta) => port.title === data.title
        )
        if (!currentPort) return projectData[0]
        const i = projectData.indexOf(currentPort)
        let next = projectData[i + 1]
        if (next) {
            return next
        } else {
            return projectData[0]
        }
    }, [data.title, projectData])

    return (
        <>
            <HeadWithGraph
                title={data.title}
                image={data.feature?.src}
                description={data.description}
            />
            <Container>
                <div className="w-full pb-10">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <Container spaced>
                <div className="flex flex-col mb-6 lg:flex-row space-y-2 lg:space-y-0 lg:items-end">
                    <div className="w-full">
                        <h1 className="mb-4">{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className="flex items-center space-x-10 text-brand">
                        <div className="flex items-center hover-arrow space-x-2">
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whitespace-nowrap"
                            >
                                View Website
                            </a>
                            <CgArrowRight
                                color="var(--brand)"
                                className="arrow"
                                fontSize="1.2rem"
                            />
                        </div>
                        {data.source && (
                            <div className="flex items-center hover-arrow space-x-2">
                                <a
                                    href={data.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source
                                </a>
                                <CgArrowRight
                                    color="var(--brand)"
                                    className="arrow"
                                    fontSize="1.2rem"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <Divider />
            </Container>
            <Container className="flex-grow pb-8 lg:pb-10">
                <div className="prose max-w-none lg:prose-lg">{children}</div>
            </Container>
            <Container spaced className="mb-12">
                <div className="row">
                    {nextProject && (
                        <ProjectItem nextProject data={nextProject} />
                    )}
                </div>
            </Container>
            <div className="bg-subtle">
                <Contact className="pt-16 pb-40" />
                <Footer />
            </div>
        </>
    )
}

export default Project
