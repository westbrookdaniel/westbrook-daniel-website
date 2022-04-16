import Container from '../common/Container'
import Divider from '../common/Divider'
import { CgArrowRight } from 'react-icons/cg'
import { useMemo } from 'react'
import ProjectItem from '../sections/Items/ProjectItem'
import { ProjectMeta, ProjectData } from '../../util/types'
import Layout from './Layout'

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
        <Layout
            title={data.title}
            image={data.feature?.src}
            description={data.description}
        >
            <Container spaced>
                <div className="mb-6 flex flex-col space-y-2 lg:flex-row lg:items-end lg:space-y-0">
                    <div className="w-full">
                        <h1 className="mb-4">{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className="flex items-center space-x-10 text-brand">
                        <div className="hover-arrow flex items-center space-x-2">
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
                            <div className="hover-arrow flex items-center space-x-2">
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
        </Layout>
    )
}

export default Project
