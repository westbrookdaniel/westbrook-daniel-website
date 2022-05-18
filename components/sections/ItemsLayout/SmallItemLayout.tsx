import * as React from 'react'
import type { ItemsLayout } from './types'

const SmallItemLayout: ItemsLayout = ({ items }) => {
    return (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((element, i) => (
                <React.Fragment key={i}>{element}</React.Fragment>
            ))}
        </div>
    )
}

export default SmallItemLayout
