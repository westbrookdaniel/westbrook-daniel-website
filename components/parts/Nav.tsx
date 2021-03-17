import Divider from '../Divider'
import Link from 'next/link'
import Logo from './Logo'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { CSSTransition } from 'react-transition-group'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import Container from '../layout/Container'
import { NavContext } from '../../pages/_app'
import { normal } from '../../util/transition'
import Socials from './Socials'

interface Props {
    isSticky?: boolean
    className?: string
}

export default function Nav({ isSticky, className = '' }: Props) {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <div className={` ${className}`}>
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

interface LargeProps {
    isOpen?: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const LargeNav = ({ isOpen, setIsOpen }: LargeProps) => {
    const { data } = useContext(NavContext)!

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
                <Container spaced className="flex-grow flex flex-col">
                    <div className="w-full pb-10">
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
                    <p className="mb-2">Projects</p>
                    <Divider />
                    <ul className="py-10 space-y-6 list-none flex-grow">
                        {data &&
                            data.map((page, i) => (
                                <li key={i}>
                                    <Link href={page.slug}>
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
