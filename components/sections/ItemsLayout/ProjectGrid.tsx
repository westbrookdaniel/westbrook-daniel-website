import * as React from 'react'
import useDividers from '../../../hooks/useDividers'
import Divider from '../../common/Divider'
import { ItemsLayout } from './types'

const divider = (
    <Divider className="hidden mt-6 mb-5 col-span-1 md:col-span-2 md:block" />
)

const ProjectGrid: ItemsLayout = ({ items }) => {
    const dividedItems = useDividers(items, divider)
    return (
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {dividedItems.map((element, i) => (
                <React.Fragment key={i}>{element}</React.Fragment>
            ))}
        </div>
    )
}

export default ProjectGrid
