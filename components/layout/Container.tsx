import { CSSProperties } from 'react'

export interface ContainerProps {
    spaced?: boolean
    className?: string
    style?: CSSProperties
    [key: string]: any
}

export default function Container({
    children,
    spaced,
    className = '',
    ...props
}: ContainerProps) {
    let classString = `w-full mx-auto`
    if (spaced) classString += ` py-8 lg:py-10`
    if (className) classString += ` ${className}`

    return (
        <div className={classString + ' px-8'} {...props}>
            {children}
        </div>
    )
}
