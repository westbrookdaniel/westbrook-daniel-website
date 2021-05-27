import React, { useRef } from 'react'
import styled from '@emotion/styled'
import Typist from 'react-typist'
import useOnScreen from '../util/useOnScreen'
import { LogoShape, LogoSpacer, LogoText, ShapeWrapper } from './Logo'

interface Props {
    isSticky?: boolean
}

const BlogText = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    user-select: none;
    .Typist {
        line-height: 1em;
    }
`

const BlogType = styled.div`
    font-family: 'Hack', 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 1.28rem;
    line-height: 1em;
`

const LogoType = styled.div`
    font-family: 'Hack', 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 1.3rem;
    color: #d43c29;
`

export default function BlogLogo({ isSticky }: Props) {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref)

    return (
        <BlogText ref={ref}>
            {onScreen &&
                (isSticky ? (
                    <span>DW</span>
                ) : (
                    <>
                        <BlogType className="text-black">
                            Blog
                            <LogoSpacer />
                            {'>'}
                        </BlogType>
                        <Typist cursor={{ show: false }}>
                            <LogoType>
                                <LogoText ref={ref}>
                                    <LogoSpacer />D
                                    <span className="hidden md:block">
                                        aniel
                                        <LogoSpacer />
                                    </span>
                                    W
                                    <span className="hidden md:block">
                                        estbrook
                                    </span>
                                </LogoText>
                            </LogoType>
                        </Typist>
                    </>
                ))}
            <ShapeWrapper>
                <LogoShape />
            </ShapeWrapper>
        </BlogText>
    )
}
