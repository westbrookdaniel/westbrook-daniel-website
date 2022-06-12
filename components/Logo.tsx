import dynamic from 'next/dynamic'
import * as React from 'react'
import { useMediaQuery } from '../util/useMediaQuery'
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
    const [isMobile] = useMediaQuery('(max-width: 600px)')

    return (
        <div
            className="flex select-none items-center font-mono text-[1.3rem] font-bold uppercase text-brand"
            ref={ref}
        >
            {isSticky || isMobile ? <Type>DW</Type> : <Typing />}
        </div>
    )
}
