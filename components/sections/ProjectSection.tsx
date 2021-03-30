import Link from 'next/link'
import Container from '../layout/Container'
import ProjectGrid from '../layout/ProjectGrid'
import ProjectItem from './ProjectItem'
import SmallItem from './SmallItem'

interface Props {
    data: any
    small?: boolean
    title: JSX.Element | string
}

const ProjectSection: React.FC<Props> = ({ data, small, title }) => {
    const projectItems = data.map((p: any) => () => {
        if (small) {
            return <SmallItem data={p} />
        }
        return <ProjectItem data={p} />
    })
    // if (small) {
    // 	console.log(projectItems);
    // }

    return (
        <Container spaced>
            {title}
            {small ? (
                <div className="grid mt-4 gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    {projectItems.map((Item: any, i: number) => (
                        <Item key={i} />
                    ))}
                </div>
            ) : (
                <ProjectGrid array={projectItems} />
            )}
        </Container>
    )
}

export default ProjectSection
