import Link from 'next/link'
import Image from '../common/Image'
import React from 'react'

const Anchor = ({ children, ...props }: any) => {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        )
    }

    return (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

export const MDXComponents = {
    a: (props: any) => <Anchor {...props} />,
    Image,
}
