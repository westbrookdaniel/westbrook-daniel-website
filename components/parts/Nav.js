import Divider from '../Divider'
import Link from 'next/link'
import Logo from './Logo'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import Container from '../layout/Container'
import { LogoText, LogoShape, LogoSpacer, ShapeWrapper } from './Logo'

export default function Nav({ isSticky, className = '', portfolioData }) {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<div className={`px-8 md:px-16 lg:px-24 ${className}`}>
			<div className="flex justify-between items-center mb-2">
				<Link href="/" scroll={false}>
					<a>
						<Logo isSticky={isSticky} />
					</a>
				</Link>
				<div className="flex space-x-8 items-center">
					<CgMenuRightAlt
						className="cursor-pointer"
						onClick={() => setIsNavOpen(true)}
						color="#66767d"
						fontSize="1.5rem"
					/>
				</div>
				<LargeNav
					isOpen={isNavOpen}
					data={portfolioData}
					setIsOpen={setIsNavOpen}
				/>
			</div>
			<Divider />
		</div>
	)
}

const LargeNav = ({ isOpen, setIsOpen, data }) => {
	console.log(data);
	return (
		<CSSTransition
			in={isOpen}
			addEndListener={(node, done) => {
				node.addEventListener('transitionend', done, false)
			}}
			unmountOnExit
			classNames="fade"
		>
			<div className="bg-gray-400 pt-10 fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50">
				<div className="w-full pb-10">
					<div className="px-8 md:px-16 lg:px-24">
						<div className="flex justify-between items-center mb-2">
							<Link href="/" scroll={false}>
								<a>
									<LogoText>
										<span>DW</span>
										<ShapeWrapper>
											<LogoShape />
										</ShapeWrapper>
									</LogoText>
								</a>
							</Link>
							<div className="flex space-x-8 items-center">
								<CgClose
									className="cursor-pointer"
									onClick={() => setIsOpen(false)}
									color="#66767d"
									fontSize="1.5rem"
								/>
							</div>
						</div>
					</div>
				</div>
				<Container spaced>
					<p>Nav Content</p>
					<button onClick={() => setIsOpen(false)}>Close</button>
				</Container>
			</div>
		</CSSTransition>
	)
}
