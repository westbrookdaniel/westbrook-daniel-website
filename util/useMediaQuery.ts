import * as React from 'react'

export type UseMediaQueryOptions = {
    fallback?: boolean | boolean[]
    ssr?: boolean
}

/**
 * Adapted from chakra-ui
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/media-query/src/use-media-query.ts
 *
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 * @param options the mediq query options { fallback, ssr }
 */
export function useMediaQuery(
    query: string | string[],
    options: UseMediaQueryOptions = {}
): boolean[] {
    const { ssr = true, fallback } = options

    const queries = React.useMemo(
        () => (Array.isArray(query) ? query : [query]),
        [query]
    )

    let fallbackValues = Array.isArray(fallback) ? fallback : [fallback]
    fallbackValues = fallbackValues.filter(v => v != null) as boolean[]

    const [value, setValue] = React.useState(() => {
        return queries.map((query, index) => ({
            media: query,
            matches: ssr
                ? !!fallbackValues[index]
                : window.matchMedia(query).matches,
        }))
    })

    React.useLayoutEffect(() => {
        // set initial matches
        if (ssr) {
            setValue(
                queries.map(query => ({
                    media: query,
                    matches: window.matchMedia(query).matches,
                }))
            )
        }

        const mql = queries.map(query => window.matchMedia(query))

        const handler = (evt: MediaQueryListEvent) => {
            setValue(prev => {
                return prev.slice().map(item => {
                    if (item.media === evt.media)
                        return { ...item, matches: evt.matches }
                    return item
                })
            })
        }

        mql.forEach(mql => {
            if (typeof mql.addListener === 'function') mql.addListener(handler)
            else mql.addEventListener('change', handler)
        })

        return () => {
            mql.forEach(mql => {
                if (typeof mql.removeListener === 'function')
                    mql.removeListener(handler)
                else mql.removeEventListener('change', handler)
            })
        }
    }, [queries, ssr])

    return value.map(item => item.matches)
}
