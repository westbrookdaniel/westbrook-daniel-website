import React from 'react'

interface Props {
    children?: React.ReactNode
}

const Gallery: React.FC<Props> = ({ children }) => {
    return (
        <div className="my-8 w-100 grid gap-8 lg:grid-flow-col">{children}</div>
    )
}

export default Gallery
