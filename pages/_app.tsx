import '../styles/fonts.css'
import '../styles/index.css'

import * as React from 'react'
import StickyNav from '../components/nav/StickyNav'
import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { MdxComponents } from '../components/mdx'
import ThemeHandler from '../components/ThemeHandler'
import Analytics from '../components/Analytics'

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        console.log(
            '%c Nothing to See Here...',
            'font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;'
        )
    }, [])

    return (
        <ThemeHandler>
            <MDXProvider components={MdxComponents}>
                <StickyNav />
                <Component {...pageProps} />
                <Analytics />
            </MDXProvider>
        </ThemeHandler>
    )
}

export default MyApp
