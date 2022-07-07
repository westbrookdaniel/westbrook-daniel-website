import * as React from 'react'
import WebFont from 'webfontloader'
import Typed from 'typed.js'
import { Box, BoxContainer } from './Box'

export default function Typing() {
    const [typed, setTyped] = React.useState<Typed | null>(null)

    const logoText = React.useCallback((el: HTMLSpanElement) => {
        if (el !== null) {
            setTyped(
                new Typed(el, {
                    strings: [
                        'Daniel<span style="margin-left: 6px"></span>Westbrook',
                    ],
                    typeSpeed: 50,
                    showCursor: false,
                })
            )
        }
    }, [])

    React.useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Hack'],
            },
            fontactive: () => setTimeout(() => typed?.start(), 200),
            fontinactive: () => setTimeout(() => typed?.start(), 200),
        })
    }, [typed])

    React.useEffect(() => {
        return () => typed?.destroy()
    }, [typed])

    return (
        <BoxContainer>
            <span ref={logoText} className="hidden leading-4 md:block"></span>
            <Box />
        </BoxContainer>
    )
}
