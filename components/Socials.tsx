import React from 'react'
import {
    AiFillBehanceCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillTwitterCircle,
} from 'react-icons/ai'
import { normal } from '../util/transition'

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
            className={`xs:flex grid ${gridCol} gap-8 xs:gap-0 mt-6 lg:mt-0 xs:space-x-8 items-center ${className}`}
            {...props}
        >
            <a
                href="mailto:westy12dan@gmail.com"
                className={`${normal} color-hover`}
            >
                <AiFillMail {...iconStyle} />
            </a>
            <a
                href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normal} color-hover`}
            >
                <AiFillLinkedin {...iconStyle} />
            </a>
            <a
                href="https://github.com/westbrookdaniel/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normal} color-hover`}
            >
                <AiFillGithub {...iconStyle} />
            </a>
            <a
                href="https://www.behance.net/westbrookdaniel/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normal} color-hover`}
            >
                <AiFillBehanceCircle {...iconStyle} />
            </a>
            <a
                href="https://twitter.com/DanielW29381255"
                target="_blank"
                rel="noopener noreferrer"
                className={`${normal} color-hover`}
            >
                <AiFillTwitterCircle {...iconStyle} />
            </a>
            {extras}
        </div>
    )
}
