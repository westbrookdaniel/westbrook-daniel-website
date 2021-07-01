import React, { useRef } from 'react'
import styled from '@emotion/styled'
import Typist from 'react-typist'
import useOnScreen from '../util/useOnScreen'
import { codeFont } from '../util/codeFont'

export const LogoText = styled.div`
    font-family: ${codeFont};
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    color: var(--brand);
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
    background-color: var(--brand);
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
                    <>
                        <Typist
                            className="hidden md:block"
                            cursor={{ show: false }}
                        >
                            Daniel
                            <LogoSpacer />
                            Westbrook
                        </Typist>
                        <span className="Typist block md:hidden">DW</span>
                    </>
                ))}
            <ShapeWrapper>
                <LogoShape />
            </ShapeWrapper>
        </LogoText>
    )
}
