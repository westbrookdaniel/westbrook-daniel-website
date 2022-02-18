import React from 'react'

const Gallery: React.FC = ({ children }) => {
    return (
        <div className="w-100 my-8 grid gap-8 lg:grid-flow-col">{children}</div>
    )
}

export default Gallery
