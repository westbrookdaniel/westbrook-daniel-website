import '../styles/fonts.css'
import '../styles/index.css'

import * as React from 'react'
import StickyNav from '../components/nav/StickyNav'
import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { MdxComponents } from '../components/mdx'
import ThemeHandler from '../components/theme/ThemeHandler'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        console.log(
            '%c Nothing to See Here...',
            'font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;'
        )
    }, [])

    // Setup for google analytics
    React.useEffect(() => {
        if (!window) return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push('js', new Date())
        window.dataLayer.push('config', 'G-L3S62B7X3T')
    }, [])

    return (
        <ThemeHandler>
            <MDXProvider components={MdxComponents}>
                <StickyNav />
                {/* @ts-ignore Will fix this in rebuild */}
                <Component {...pageProps} />
            </MDXProvider>
        </ThemeHandler>
    )
}

export default MyApp
