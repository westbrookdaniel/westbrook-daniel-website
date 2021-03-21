import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Divider: React.FC<Props> = ({ className = '', ...props }) => {
    return (
        <div
            className={`h-line bg-themeGray-200 ${className}`}
            {...props}
        ></div>
    )
}

export default Divider
