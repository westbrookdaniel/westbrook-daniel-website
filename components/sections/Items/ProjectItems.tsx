import * as React from 'react'
import Items, { ItemsProps } from './Items'
import ProjectItem from './ProjectItem'
import ProjectGrid from '../ItemsLayout/ProjectGrid'
import { Project } from '../../../data/projects'

interface Props extends Partial<ItemsProps<Project>> {
    title: JSX.Element
    data: Project[]
}

const ProjectItems: React.FC<Props> = ({ title, data, ...props }) => {
    return (
        <Items
            title={title}
            render={p => <ProjectItem data={p} />}
            data={data}
            ItemsLayout={ProjectGrid}
            {...props}
        />
    )
}

export default ProjectItems
