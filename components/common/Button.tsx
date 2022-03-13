import { ButtonHTMLAttributes } from 'react'
import { normalTransition } from '../../util/constants'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'yellow'
    className?: string
}

const btn =
    'px-6 py-2 rounded-md select-none flex flex-row items-center text-base'

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
    const themeString =
        'bg-on-background hover:bg-accent-hover active:bg-accent-focus border-line border-on-background hover:border-accent-hover active:border-accent-focus text-on-accent'
    let classString = `${themeString} ${btn} ${normalTransition} `
    if (className) classString += `${className} `
    return (
        <button className={classString} {...props}>
            {children}
        </button>
    )
}
