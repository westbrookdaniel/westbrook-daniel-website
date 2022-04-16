import React from 'react'

interface Props {
    side?: 'left' | 'right'
    slot?: JSX.Element
}

const Row: React.FC<Props> = ({ side = 'left', slot, children }) => {
    const colClass = 'w-full'
    return (
        <div className="w-100 my-8 flex flex-col space-y-8 lg:flex-row lg:space-x-8">
            {side === 'left' && <div className={colClass}>{children}</div>}
            <div className={colClass}>{slot}</div>
            {side === 'right' && <div className={colClass}>{children}</div>}
        </div>
    )
}

export default Row
