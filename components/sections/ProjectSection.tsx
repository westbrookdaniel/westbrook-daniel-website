import Link from 'next/link'
import { ProjectData } from '../../util/types'
import Divider from '../Divider'
import Container from '../layout/Container'
import ProjectGrid from '../layout/ProjectGrid'
import ProjectItem from './ProjectItem'
import SmallItem from './SmallItem'

interface Props {
    data: ProjectData[]
    small?: boolean
    title: JSX.Element | string
    seeAll?: boolean
}

const ProjectSection: React.FC<Props> = ({ data, small, title, seeAll }) => {
    const projectItems = data.map((p: any) => function Item() {
        if (small) {
            return <SmallItem data={p} />
        }
        return <ProjectItem data={p} />
    })

    return (
        <Container spaced>
            {title}
            {small ? (
                <>
                    <Divider className="mt-6 mb-8" />
                    <div className="grid mt-4 gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                        {projectItems.map((Item: any, i: number) => (
                            <Item key={i} />
                        ))}
                    </div>
                </>
            ) : (
                <ProjectGrid array={projectItems} />
            )}
            {seeAll ? (
                <div className="flex mt-4 items-center space-x-8 w-full">
                    <Divider className="flex-grow" />
                    <Link href="/p" scroll={false}>
                        <a className="flex link-style justify-center items-center">
                            See All Projects
                        </a>
                    </Link>
                </div>
            ) : (
                <Divider className="mt-8 hidden md:block" />
            )}
        </Container>
    )
}

export default ProjectSection
