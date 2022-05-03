import * as React from 'react'
import { ItemsLayout } from './types'

const DefaultLayout: ItemsLayout = ({ items }) => {
    return (
        <div className="flex flex-col space-y-6 md:space-y-2">
            {items.map((element, i) => (
                <React.Fragment key={i}>{element}</React.Fragment>
            ))}
        </div>
    )
}

export default DefaultLayout
