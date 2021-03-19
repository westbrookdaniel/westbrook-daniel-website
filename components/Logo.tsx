import React, { useRef } from 'react'
import styled from '@emotion/styled'
import Typist from 'react-typist'
import useOnScreen from '../util/useOnScreen'

export const LogoText = styled.div`
    font-family: 'Hack';
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    color: #d43c29;
    text-transform: uppercase;
    user-select: none;
    .Typist {
        line-height: 1em;
    }
`

export const LogoSpacer = styled.span`
    margin-right: 6px;
`

export const LogoShape = styled.div`
    height: 15px;
    width: 8px;
    margin-left: 4px;
    background-color: #d43c29;
`

export const ShapeWrapper = styled.div`
    height: 31px;
    display: flex;
    align-items: center;
`

interface Props {
    isSticky?: boolean
}

export default function Logo({ isSticky }: Props) {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref)

    return (
        <LogoText ref={ref}>
            {onScreen &&
                (isSticky ? (
                    <span>DW</span>
                ) : (
                    <Typist cursor={{ show: false }}>
                        Daniel
                        <LogoSpacer />
                        <Typist.Delay ms={100} />
                        Westbrook
                    </Typist>
                ))}
            <ShapeWrapper>
                <LogoShape />
            </ShapeWrapper>
        </LogoText>
    )
}
