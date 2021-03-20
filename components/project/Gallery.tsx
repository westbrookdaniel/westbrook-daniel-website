import React from 'react'

const Gallery: React.FC = ({ children }) => {
    return (
        <div className="grid lg:grid-flow-col gap-8 my-8 w-100">
            {children}
        </div>
    )
}

export default Gallery
