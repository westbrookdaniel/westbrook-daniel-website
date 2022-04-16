import * as React from 'react'
import Items, { ItemsProps } from './Items'
import ProjectItem from './ProjectItem'
import { ProjectData } from '../../../util/types'
import { reorder } from '../../../util/reorder'
import ProjectGrid from '../ItemsLayout/ProjectGrid'

interface Props extends Partial<ItemsProps<ProjectData>> {
    title: JSX.Element
    data: ProjectData[]
}

const ProjectItems: React.FC<Props> = ({ title, data, ...props }) => {
    return (
        <Items
            title={title}
            render={p => <ProjectItem data={p} />}
            data={reorder(data, 'order')}
            ItemsLayout={ProjectGrid}
            {...props}
        />
    )
}

export default ProjectItems
