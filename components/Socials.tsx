import React from 'react'
import {
    AiFillBehanceCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillTwitterCircle,
} from 'react-icons/ai'
import { normalTransition } from '../util/constants'

interface Props {
    className?: string
    extras?: JSX.Element | null
    gridCol?: string
    fontSize?: string
}

export default function Socials({
    className = '',
    extras = null,
    gridCol = 'grid-cols-4',
    fontSize,
    ...props
}: Props) {
    const iconStyle = {
        fontSize: fontSize || '1.3em',
    }
    return (
        <div
            className={`grid xs:flex ${gridCol} mt-6 items-center gap-8 xs:gap-0 xs:space-x-8 lg:mt-0 ${className}`}
            {...props}
        >
            <a
                href="mailto:westy12dan@gmail.com"
                className={`${normalTransition} color-hover`}
            >
                <AiFillMail {...iconStyle} />
            </a>
            <a
                href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normalTransition} color-hover`}
            >
                <AiFillLinkedin {...iconStyle} />
            </a>
            <a
                href="https://github.com/westbrookdaniel/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normalTransition} color-hover`}
            >
                <AiFillGithub {...iconStyle} />
            </a>
            <a
                href="https://twitter.com/DanielW29381255"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normalTransition} color-hover`}
            >
                <AiFillTwitterCircle {...iconStyle} />
            </a>
            {extras}
        </div>
    )
}
