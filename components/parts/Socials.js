import React from 'react'
import {
	AiFillBehanceCircle,
	AiOutlineTwitter,
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
} from 'react-icons/ai'

export default function Socials({ className, extras, gridCol = 'grid-cols-4', ...props }) {
	const iconStyle = {
		fontSize: '1.3em',
	}
	return (
		<div className={`xs:flex grid ${gridCol} gap-8 xs:gap-0 mt-6 lg:mt-0 xs:space-x-8 items-center ${className}`} {...props} >
			<a
				href="https://twitter.com/DanielW29381255"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineTwitter {...iconStyle} />
			</a>
			<a
				href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillLinkedin {...iconStyle} />
			</a>
			<a
				href="https://github.com/westbrookdaniel/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillGithub {...iconStyle} />
			</a>
			<a
				href="https://www.instagram.com/bywestbrookdaniel/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillInstagram {...iconStyle} />
			</a>
			<a
				href="https://www.behance.net/westbrookdaniel/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillBehanceCircle {...iconStyle} />
			</a>
			{extras}
		</div>
	)
}
