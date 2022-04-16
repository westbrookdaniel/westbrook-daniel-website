import { ItemsLayout } from './types'

const DefaultLayout: ItemsLayout = ({ items }) => {
    return (
        <div className="flex flex-col space-y-6 md:space-y-2">
            {items.map(element => element)}
        </div>
    )
}

export default DefaultLayout
