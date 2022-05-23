import '../styles/fonts.css'
import '../styles/index.css'
import '../styles/prism.css'

import * as React from 'react'
import StickyNav from '../components/nav/StickyNav'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import ThemeHandler from '../components/theme/ThemeHandler'
import { GoogleAnalytics, usePagesViews, event } from 'nextjs-google-analytics'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

export function reportWebVitals({
    id,
    name,
    label,
    value,
}: NextWebVitalsMetric) {
    event(name, {
        category:
            label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        label: id, // id unique to current page load
        nonInteraction: true, // avoids affecting bounce rate.
    })
}

function MyApp({ Component, pageProps }: AppProps) {
    usePagesViews()

    React.useEffect(() => {
        console.log(
            '%c Nothing to See Here...',
            'font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;'
        )
    }, [])

    return (
        <ThemeHandler>
            <GoogleAnalytics />
            <StickyNav />
            {/* @ts-ignore Will fix this in rebuild */}
            <Component {...pageProps} />
        </ThemeHandler>
    )
}

export default MyApp
