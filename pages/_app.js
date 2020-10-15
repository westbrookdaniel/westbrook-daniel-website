import '../styles/index.css'
import TailwindProvider from '../TailwindProvider'
import { useRouter } from 'next/router'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Container from '../components/layout/Container'
import Nav from '../components/parts/Nav'
import { createContext, useEffect, useRef, useState } from 'react'

export const NavContext = createContext(null)

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const NavRef = useRef(null)
	const [height, setHeight] = useState(null)

	useEffect(() => {
		setHeight(NavRef.current?.clientHeight)
	}, [NavRef.current])

	return (
		<TailwindProvider>
			<div className="px-8 md:px-16 lg:px-24 w-full py-10" ref={NavRef}>
				<Nav />
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
