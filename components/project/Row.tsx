import React from 'react'

interface Props {
    side?: 'left' | 'right'
    slot?: JSX.Element
}

const Row: React.FC<Props> = ({ side = 'left', slot, children }) => {
    const colClass = 'flex-1'
    return (
        <div className="w-100 my-8 flex-row items-end space-x-0 space-y-8 xl:flex xl:space-x-8 xl:space-y-0">
            {side === 'left' && (
                <div className={colClass + ' max-w-lg'}>{children}</div>
            )}
            <div className={colClass}>{slot}</div>
            {side === 'right' && (
                <div className={colClass + ' max-w-lg'}>{children}</div>
            )}
        </div>
    )
}

export default Row
