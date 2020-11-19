import Divider from '../Divider'
import Link from 'next/link'
import Logo from './Logo'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { CSSTransition } from 'react-transition-group'
import { useContext, useState } from 'react'
import Container from '../layout/Container'
import { LogoText, LogoShape, LogoSpacer, ShapeWrapper } from './Logo'
import { NavContext } from '../../pages/_app'
import { normal } from '../../util/transition'
import Socials from './Socials'

export default function Nav({ isSticky, className = '' }) {
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
				<LargeNav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
			</div>
			<Divider />
		</div>
	)
}

const LargeNav = ({ isOpen, setIsOpen }) => {
	const { data } = useContext(NavContext)

	return (
		<CSSTransition
			in={isOpen}
			addEndListener={(node, done) => {
				node.addEventListener('transitionend', done, false)
			}}
			unmountOnExit
			classNames="slide"
		>
			<div className="bg-white shadow-2xl pt-10 fixed w-nav max-w-full h-full flex flex-col top-0 bottom-0 right-0 z-50">
				<div className="w-full pb-10">
					<div className="px-8 md:px-16 lg:px-24">
						<div className="flex justify-end items-center mb-2">
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
				<Container spaced className="flex-grow flex flex-col">
					<p className="mb-2">Projects</p>
					<Divider />
					<ul className="py-10 space-y-6 list-none flex-grow">
						{data &&
							data.map((page, i) => (
								<li>
									<Link href={page.slug} key={i}>
										<a onClick={() => setIsOpen(false)}>
											<p
												className={`font-bold text-2xl lg:text-4xl text-black ${normal} transform hover:translate-x-2 active:translate-x-0`}
											>
												{page.title}
											</p>
										</a>
									</Link>
								</li>
							))}
					</ul>
					<Socials gridCol="grid-cols-6" />
				</Container>
			</div>
		</CSSTransition>
	)
}
