import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const VerticalDivider: React.FC<Props> = ({ className = '', ...props }) => {
    return (
        <div
            className={`w-line bg-lines ${className}`}
            {...props}
        ></div>
    )
}

const Divider: React.FC<Props> = ({ className = '', ...props }) => {
    return (
        <div
            className={`h-line bg-lines ${className}`}
            {...props}
        ></div>
    )
}

export default Divider
