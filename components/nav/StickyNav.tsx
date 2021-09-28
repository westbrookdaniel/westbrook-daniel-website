import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useScrollPosition } from '../../util/useScrollPosition'
import Divider from '../Divider'
import Container from '../layout/Container'
import Nav from './Nav'

interface Props {
    isScrolling: boolean
    scrollTopPos: number
}

const Wrapper = styled.div<Props>`
    top: ${props =>
        props.isScrolling || props.scrollTopPos < 700 ? '-100px' : '0'};
`

export default function StickyNav() {
    const scrollProps = useScrollPosition()

    return (
        <Wrapper
            className="w-full fixed z-10 transition-all duration-300 ease-in-out"
            {...scrollProps}
        >
            <div className="max-w-[1200px] mx-auto bg-background">
                <Container className="max-w-[1200px]">
                    <Nav isSticky withDivider={false} className="pt-3" />
                </Container>
                <Divider />
            </div>
        </Wrapper>
    )
}
