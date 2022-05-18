import * as React from 'react'
import type { ItemsProps } from './Items'
import Items from './Items'
import ProjectItem from './ProjectItem'
import ProjectGrid from '../ItemsLayout/ProjectGrid'
import type { DetailedProjectWithImage } from '../../../lib/projects.server'

interface Props extends Partial<ItemsProps<DetailedProjectWithImage>> {
    title: JSX.Element
    data: DetailedProjectWithImage[]
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
