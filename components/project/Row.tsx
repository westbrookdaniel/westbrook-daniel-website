import React from 'react'

interface Props {
    side?: 'left' | 'right'
    slot?: JSX.Element
}

const Row: React.FC<Props> = ({ side = 'left', slot, children }) => {
    const colClass = 'w-full'
    return (
        <div className="flex flex-col my-8 w-100 space-y-8 lg:flex-row lg:space-x-8">
            {side === 'left' && <div className={colClass}>{children}</div>}
            <div className={colClass}>{slot}</div>
            {side === 'right' && <div className={colClass}>{children}</div>}
        </div>
    )
}

export default Row
