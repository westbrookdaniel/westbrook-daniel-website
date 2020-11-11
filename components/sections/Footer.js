import Container from '../layout/Container'
import Socials from '../parts/Socials'
import { normal } from '../../util/transition'

export default function Footer() {
	return (
		<Container spaced>
			<div className="lg:flex h-full">
				<div className="flex flex-grow items-baseline">
					<p>Daniel</p>
					<div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
					<p>Westbrook</p>
				</div>
				<Socials
					className="lg:ml-16"
					extras={
						<a
							href="images/static/daniel-westbrook-resume.pdf"
							className={`${normal} color-hover`}
							download
						>
							<p>Resume</p>
						</a>
					}
				/>
			</div>
		</Container>
	)
}
