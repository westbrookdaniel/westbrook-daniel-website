import Container from '../layout/Container'
import Image from '../Image'
import { Fade } from 'react-awesome-reveal'
import { TailwindCSS } from '../../TailwindProvider'
import { useContext, useEffect, useState } from 'react'
import { NavContext } from '../../pages/_app'
import styled from '@emotion/styled'

const Wrapper = styled.div`
	@media (min-width: ${(props) => props.break}) {
		min-height: calc(100vh - ${(props) => props.h || 0}px);
	}
`

const Half = styled.div`
	height: 50%;
`

export default function Hero() {
	const height = useContext(NavContext)
	const tailwind = useContext(TailwindCSS)

	return (
		<Wrapper
			className="flex flex-col"
			h={height}
			break={tailwind?.theme.screens.md}
		>
			<div>
				<Container className="m-auto">
					<Fade delay={200}>
						<h1>
							Front End Developer and Designer in Perth Building
							Modernistic Digital Solutions
						</h1>
					</Fade>
				</Container>
			</div>
			<Fade className="flex-grow flex" triggerOnce>
				<div className="flex-grow relative flex items-stretch">
					<Container className="relative z-10" spaced>
						<Image
							contain
							src="/images/projects/xps-yNvVnPcurD8-unsplash.jpg"
						/>
					</Container>
					<Half className="absolute bottom-0 left-0 bg-themeGray-100 w-full"></Half>
				</div>
			</Fade>
		</Wrapper>
	)
}
