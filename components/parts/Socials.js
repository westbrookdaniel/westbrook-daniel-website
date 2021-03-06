import React from 'react'
import {
	AiFillBehanceCircle,
	AiOutlineTwitter,
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
} from 'react-icons/ai'
import { normal } from '../../util/transition'

export default function Socials({
	className,
	extras,
	gridCol = 'grid-cols-4',
	...props
}) {
	const iconStyle = {
		fontSize: '1.3em',
	}
	return (
		<div
			className={`xs:flex grid ${gridCol} gap-8 xs:gap-0 mt-6 lg:mt-0 xs:space-x-8 items-center ${className}`}
			{...props}
		>
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
			{extras}
		</div>
	)
}
