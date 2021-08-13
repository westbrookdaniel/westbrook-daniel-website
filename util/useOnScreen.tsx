import { RefObject, useEffect, useState } from 'react'

const useOnScreen = (ref: RefObject<any>, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const currentRef = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            { rootMargin }
        )
        if (currentRef) observer.observe(currentRef)

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [ref, rootMargin])

    return isIntersecting
}
export default useOnScreen
