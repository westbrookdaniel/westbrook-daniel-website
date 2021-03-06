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
	const [data, setData] = useState(null)

	useEffect(() => {
		setHeight(NavRef.current?.clientHeight)
	}, [NavRef.current])

	useEffect(() => {
		console.log('%c Nothing to See Here...', "font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;")
		if (!window) return
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())
		gtag('config', 'G-L3S62B7X3T')
	}, [])

	return (
		<TailwindProvider>
			<NavContext.Provider value={{ height, data, setData }}>
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
						<Component {...pageProps} />
					</CSSTransition>
				</SwitchTransition>
			</NavContext.Provider>
		</TailwindProvider>
	)
}

export default MyApp
