import '../styles/fonts.css'
import '../styles/index.css'
import { useEffect } from 'react'
import StickyNav from '../components/nav/StickyNav'
import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { MdxComponents } from '../components/mdx'
import ThemeHandler from '../components/ThemeHandler'
import Script from 'next/script'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log(
            '%c Nothing to See Here...',
            'font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;'
        )
        if (!window) return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push('js', new Date())
        window.dataLayer.push('config', 'G-L3S62B7X3T')
    }, [])

    return (
        <ThemeHandler>
            <MDXProvider components={MdxComponents}>
                <StickyNav />
                <div className="min-h-screen flex flex-col">
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"
                        strategy="afterInteractive"
                    />
                    <Component {...pageProps} />
                </div>
            </MDXProvider>
        </ThemeHandler>
    )
}

export default MyApp
