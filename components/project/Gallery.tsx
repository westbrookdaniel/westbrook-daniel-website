import React from 'react'

const Gallery: React.FC = ({ children }) => {
    return (
        <div className="xl:flex flex-row space-x-0 space-y-8 xl:space-y-0 xl:space-x-8 my-8 w-100">
            {children}
        </div>
    )
}

export default Gallery
