import '../styles/index.css'
import TailwindProvider from '../TailwindProvider'
import { useRouter } from 'next/router'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Container from '../components/layout/Container'
import Nav from '../components/parts/Nav'
import { createContext, useEffect, useRef, useState } from 'react'
import { useScrollPosition } from '../util/useScrollPosition'
import styled from '@emotion/styled'
import StickyNav from '../components/parts/StickyNav'

export const NavContext = createContext(null)

function MyApp({ Component, pageProps, portfolioData }) {
	const router = useRouter()
	const NavRef = useRef(null)
	const [height, setHeight] = useState(null)

	useEffect(() => {
		setHeight(NavRef.current?.clientHeight)
	}, [NavRef.current])

	return (
		<TailwindProvider>
			<StickyNav />
			<div className="w-full pb-10" ref={NavRef}>
				<Nav className="pt-10" />
			</div>
			<SwitchTransition>
				<CSSTransition
					key={router.pathname}
					addEndListener={(node, done) => {
						node.addEventListener('transitionend', done, false)
					}}
					classNames="fade"
					onExited={() => {
						window.scrollTo(0, 0)
					}}
				>
					<NavContext.Provider value={height}>
						<Component {...pageProps} />
					</NavContext.Provider>
				</CSSTransition>
			</SwitchTransition>
		</TailwindProvider>
	)
}

export default MyApp
