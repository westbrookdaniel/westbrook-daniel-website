import dynamic from 'next/dynamic'
import { useMediaQuery } from '../util/useMediaQuery'
import { Box, BoxContainer } from './Box'

// This component checks if the font has loaded before starting
// so it can't run on the server
const Typing = dynamic(() => import('./Typing'), {
    ssr: false,
    loading: () => (
        <BoxContainer>
            <Box />
        </BoxContainer>
    ),
})

interface Props {
    isSticky?: boolean
}

export default function Logo({ isSticky }: Props) {
    const [isMobile] = useMediaQuery('(max-width: 600px)')

    return isSticky || isMobile ? (
        <BoxContainer>
            <span className="leading-4">DW</span>
            <Box />
        </BoxContainer>
    ) : (
        <Typing />
    )
}
