import React, { useEffect } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Divider from '../common/Divider'
import Container from '../common/Container'
import Nav from './Nav'

const defaultClasses =
    'w-full fixed z-10 transition-all duration-300 ease-in-out'

export default function StickyNav() {
    const { isScrolling, scrollTopPos } = useScrollPosition()

    const className =
        isScrolling || scrollTopPos < 700 ? 'top-[-100px]' : 'top-0'

    return (
        <div className={`${className} ${defaultClasses}`}>
            <div className="max-w-6xl mx-auto bg-background">
                <Container className="max-w-6xl">
                    <Nav isSticky withDivider={false} className="pt-3" />
                </Container>
                <Divider />
            </div>
        </div>
    )
}
