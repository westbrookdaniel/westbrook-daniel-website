import React from 'react'
import Code from './Code'

const Anchor = ({ children, ...props }: any) => (
    <a target="_blank" rel="noopener noreferrer" {...props}>
        {children}
    </a>
)
export const MdxComponents = {
    code: (props: any) => <Code {...props} />,
    pre: ({ children }: any) => <>{children}</>,
    a: (props: any) => <Anchor {...props} />,
}
