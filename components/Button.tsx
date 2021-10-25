import { ButtonHTMLAttributes } from 'react'
import { normal } from '../util/transition'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'yellow'
    className?: string
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
    const themeString =
        'bg-accent betterhover:hover:bg-accent-hover active:bg-accent-focus border-line border-accent betterhover:hover:border-accent-hover active:border-accent-focus text-on-accent'
    let classString = `${themeString} btn ${normal} `
    if (className) classString += `${className} `

    return (
        <button className={classString} {...props}>
            {children}
        </button>
    )
}

export default Button
