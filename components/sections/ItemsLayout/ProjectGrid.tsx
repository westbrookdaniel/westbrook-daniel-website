import useDividers from '../../../hooks/useDividers'
import Divider from '../../common/Divider'
import { ItemsLayout } from './types'

const divider = (
    <Divider className="col-span-1 mt-6 mb-5 hidden md:col-span-2 md:block" />
)

const ProjectGrid: ItemsLayout = ({ items }) => {
    const dividedItems = useDividers(items, divider)
    return (
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {dividedItems.map(element => element)}
        </div>
    )
}

export default ProjectGrid
