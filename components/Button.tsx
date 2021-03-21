import React, { ButtonHTMLAttributes } from 'react'
import { normal } from '../util/transition'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'gray' | 'yellow'
    className?: string
}

const Button: React.FC<Props> = ({
    children,
    theme = 'yellow',
    className,
    ...props
}) => {
    let themeString
    switch (theme) {
        case 'gray':
            themeString =
                'bg-themeGray-200 hover:bg-themeGray-300 active:bg-themeGray-400 border-line border-themeGray-2 hover:border-themeGray-300 active:border-themeGray-400  text-black'
        case 'yellow':
        default:
            themeString =
                'bg-themeYellow-300 hover:bg-themeYellow-400 active:bg-themeYellow-500 border-line border-themeYellow-300 hover:border-themeYellow-400 active:border-themeYellow-500 text-black'
            break
    }

    let classString = `${themeString} btn ${normal} `
    if (className) classString += `${className} `

    return (
        <button className={classString} {...props}>
            {children}
        </button>
    )
}

export default Button
