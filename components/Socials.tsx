import React from 'react'
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillTwitterCircle,
} from 'react-icons/ai'
import { fastTransition } from '../util/constants'

interface Props {
    className?: string
    extras?: JSX.Element | null
    fontSize?: string
}

export default function Socials({
    className = '',
    extras = null,
    fontSize,
    ...props
}: Props) {
    const iconStyle = {
        fontSize: fontSize || '1.3em',
    }
    return (
        <div className={`flex items-center space-x-8 ${className}`} {...props}>
            <a
                href="mailto:westy12dan@gmail.com"
                className={`${fastTransition} color-hover`}
                aria-label="Email"
            >
                <AiFillMail {...iconStyle} />
            </a>
            <a
                href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fastTransition} color-hover`}
                aria-label="LinkedIn"
            >
                <AiFillLinkedin {...iconStyle} />
            </a>
            <a
                href="https://github.com/westbrookdaniel/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fastTransition} color-hover`}
                aria-label="Github"
            >
                <AiFillGithub {...iconStyle} />
            </a>
            <a
                href="https://twitter.com/DanielW29381255"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fastTransition} color-hover`}
                aria-label="Twitter"
            >
                <AiFillTwitterCircle {...iconStyle} />
            </a>
            {extras}
        </div>
    )
}
