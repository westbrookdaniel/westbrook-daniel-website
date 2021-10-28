import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
    const [isScrolling, setIsScrolling] = useState(false)
    const [scrollTopPos, setScrollTopPos] = useState(0)

    useEffect(() => {
        const onScroll = (e: Event) => {
            setScrollTopPos((e.target as Document).documentElement.scrollTop)
            setIsScrolling(
                (e.target as Document).documentElement.scrollTop > scrollTopPos
            )
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollTopPos])

    return { isScrolling, scrollTopPos }
}
