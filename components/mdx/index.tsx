import React from 'react'
import Code from './Code'

export const MdxComponents = {
    code: Code,
    pre: ({ children }: any) => children,
    a: ({ children, ...props }: any) => (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    ),
}
