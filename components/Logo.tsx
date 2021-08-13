import * as React from 'react'
import styled from '@emotion/styled'
import useOnScreen from '../util/useOnScreen'
import { codeFont } from '../util/codeFont'
import Typed from 'typed.js'

export const LogoText = styled.div`
    font-family: ${codeFont};
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    color: var(--brand);
    text-transform: uppercase;
    user-select: none;
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
    const ref = React.useRef(null)
    const onScreen = useOnScreen(ref)

    const [typed, setTyped] = React.useState<Typed | null>(null)

    const logoText = React.useCallback((node: HTMLSpanElement) => {
        if (node !== null) {
            setTyped(
                new Typed(node, {
                    strings: ['Daniel<span style="margin-left: 6px"></span>Westbrook'],
                    startDelay: 50,
                    typeSpeed: 50,
                    showCursor: false,
                })
            )
        }
    }, [])

    React.useEffect(() => {
        return () => typed?.destroy()
    }, [typed])

    return (
        <LogoText ref={ref}>
            {onScreen &&
                (isSticky ? (
                    <span className="leading-4">DW</span>
                ) : (
                    <>
                        <span ref={logoText} className="hidden leading-4 md:block"></span>
                        <span className="leading-4 block md:hidden">DW</span>
                    </>
                ))}
            <ShapeWrapper>
                <LogoShape />
            </ShapeWrapper>
        </LogoText>
    )
}
