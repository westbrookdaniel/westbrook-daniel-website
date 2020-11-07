import Container from '../layout/Container'
import {
	AiFillBehanceCircle,
	AiOutlineTwitter,
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
} from 'react-icons/ai'

export default function Footer() {
	const iconStyle = {
		fontSize: '1.3em',
	}

	return (
		<Container spaced>
			<div className="lg:flex">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
					<div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
					<p>Westbrook</p>
				</div>
				<div className="flex mt-6 lg:mt-0 lg:ml-16 space-x-8 items-center">
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
					<a href="images/static/daniel-westbrook-resume.pdf" download>
						<p>Resume</p>
					</a>
				</div>
			</div>
		</Container>
	)
}
