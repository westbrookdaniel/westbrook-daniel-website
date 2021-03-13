import Container from './Container'
import Nav from '../parts/Nav'
import Divider from '../Divider'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { CgArrowRight } from 'react-icons/cg'
import { useContext, useEffect, useState } from 'react'
import { NavContext } from '../../pages/_app'
import PortfolioItem from '../sections/PortfolioItem'
import Head from 'next/head'

export default function Portfolio({ data, children, portfolioData }) {
	const { setData, data: oldPortfolioData } = useContext(NavContext)
	useEffect(() => {
		if (!oldPortfolioData) {
			setData(portfolioData)
		}
	}, [])

	const [nextProject, setNextProject] = useState(null)
	useEffect(() => {
		if (!(portfolioData && data)) return
		const currentPort = portfolioData.find((port) => port.title === data.title)
		const i = portfolioData.indexOf(currentPort)
		let next = portfolioData[i + 1]
		if (next) {
			setNextProject(next)
		} else {
			setNextProject(portfolioData[0])
		}
	}, [portfolioData, data])

	return (
		<div>
			<Head>
				<title>{data.title} | Daniel Westbrook</title>
				<meta name="description" content={data.description}></meta>
			</Head>
			<Container>
				<div className="w-full pb-10">
					<Nav className="pt-10" />
				</div>
			</Container>
			<Container spaced>
				<div className="flex-row lg:items-end mb-6">
					<div className="max-w-6xl lg:mr-16">
						<h1 className="mb-4">{data.title}</h1>
						<p>{data.description}</p>
					</div>
					<div className="flex items-center space-x-10 text-themeRed-500">
						<div className="flex items-center space-x-2 hover-arrow">
							<a href={data.link} target="_blank" rel="noopener noreferrer">
								View Website
							</a>
							<CgArrowRight
								color="#d43c29"
								className="arrow"
								fontSize="1.2rem"
							/>
						</div>
						{data.source && (
							<div className="flex items-center space-x-2 hover-arrow">
								<a href={data.source} target="_blank" rel="noopener noreferrer">
									Source
								</a>
								<CgArrowRight
									color="#d43c29"
									className="arrow"
									fontSize="1.2rem"
								/>
							</div>
						)}
					</div>
				</div>
				<Divider />
			</Container>
			<Container className="pb-8 lg:pb-10">{children}</Container>
			<Container spaced className="mb-12">
				<div className="row">
					{nextProject && <PortfolioItem nextProject data={nextProject} />}
				</div>
			</Container>
			<div className="bg-themeGray-100">
				<Contact className="pt-16 pb-40" />
				<Footer />
			</div>
		</div>
	)
}
