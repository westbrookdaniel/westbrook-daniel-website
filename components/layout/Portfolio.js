import Container from './Container'
import Nav from '../parts/Nav'
import Divider from '../Divider'
import { Fade } from 'react-awesome-reveal'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { CgArrowRight } from 'react-icons/cg'
import { useContext, useEffect } from 'react'
import { NavContext } from '../../pages/_app'

export default function Portfolio({ data, children, portfolioData }) {
	const { setData, data: oldPortfolioData } = useContext(NavContext)
	useEffect(() => {
		if (!oldPortfolioData) {
			setData(portfolioData)
		}
	}, [])

	return (
		<div>
			<Container spaced>
				<div className="row lg:items-end mb-6">
					<div className="max-w-6xl lg:mr-16">
						<Fade delay={200} triggerOnce>
							<h1 className="mb-4">{data.title}</h1>
						</Fade>
						<Fade triggerOnce>
							<p>{data.description}</p>
						</Fade>
					</div>
					<Fade triggerOnce>
						<div className="flex items-center space-x-2 hover-arrow text-themeRed-500">
							<a href={data.link} target="_blank" rel="noopener noreferrer">
								View Website
							</a>
							<CgArrowRight
								color="#d43c29"
								className="arrow"
								fontSize="1.2rem"
							/>
						</div>
					</Fade>
				</div>
				<Divider />
			</Container>
			<Container spaced className="mb-12">
				<Fade delay={400}>
					<div>{children}</div>
				</Fade>
			</Container>
			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
