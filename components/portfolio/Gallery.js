import React from 'react'

export default function Gallery({ children }) {
    return (
        <div className="flex flex-row space-x-8 my-8 w-100">
            {children}
        </div>
    )
}
