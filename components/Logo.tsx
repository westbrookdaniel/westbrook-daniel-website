import * as React from 'react'
import useOnScreen from '../hooks/useOnScreen'
import Typed from 'typed.js'

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
                    strings: [
                        'Daniel<span style="margin-left: 6px"></span>Westbrook',
                    ],
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
        <div
            className="flex select-none items-center font-mono text-[1.3rem] font-bold uppercase text-brand"
            ref={ref}
        >
            {onScreen &&
                (isSticky ? (
                    <span className="leading-4">DW</span>
                ) : (
                    <>
                        <span
                            ref={logoText}
                            className="hidden leading-4 md:block"
                        ></span>
                        <span className="block leading-4 md:hidden">DW</span>
                    </>
                ))}
            <div className="flex h-[31px] items-center">
                <div className="ml-[4px] h-[15px] w-[8px] bg-brand" />
            </div>
        </div>
    )
}
