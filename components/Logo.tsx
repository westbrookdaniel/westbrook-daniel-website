import dynamic from 'next/dynamic'
import * as React from 'react'
import useOnScreen from '../hooks/useOnScreen'
import Type from './Type'

// This component checks if the font has loaded before starting
// so it can't run on the server
const Typing = dynamic(() => import('./Typing'), {
    ssr: false,
    loading: () => <Type />,
})

interface Props {
    isSticky?: boolean
}

export default function Logo({ isSticky }: Props) {
    const ref = React.useRef(null)
    const onScreen = useOnScreen(ref)

    return (
        <div
            className="flex select-none items-center font-mono text-[1.3rem] font-bold uppercase text-brand"
            ref={ref}
        >
            {onScreen && (isSticky ? <Type>DW</Type> : <Typing />)}
        </div>
    )
}
