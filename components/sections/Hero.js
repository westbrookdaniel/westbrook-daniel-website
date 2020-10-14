import Container from '../layout/Container'
import Image from '../Image'
import { Fade } from 'react-awesome-reveal'
import { TailwindCSS } from '../../TailwindProvider'
import { useContext, useEffect, useState } from 'react'
import { NavContext } from '../../pages/_app'

export default function Hero() {
	const height = useContext(NavContext)
	const tailwind = useContext(TailwindCSS)

	useEffect(() => {
		console.log(tailwind?.theme.screens.md)
	}, [tailwind])

	return (
		<div
			className="flex flex-col"
			style={{ height: `calc(100vh - ${height}px)` }}
		>
			<div>
				<Container className="m-auto">
					<Fade delay={200}>
						<h1
							className="text-5xl md:text-6xl font-bold"
							style={{ lineHeight: '1.2em' }}
						>
							Front End Developer in Perth working on building practical and
							fast websites
						</h1>
					</Fade>
				</Container>
			</div>
			<Fade className="flex-grow" triggerOnce={true}>
				<div className="h-full relative flex items-stretch">
					<Container className="relative z-10" spaced>
						<Image
							contain
							src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
						/>
					</Container>
					<div
						className="absolute bottom-0 left-0 bg-themeGray-100 w-full"
						style={{ height: '50%' }}
					></div>
				</div>
			</Fade>
		</div>
	)
}
