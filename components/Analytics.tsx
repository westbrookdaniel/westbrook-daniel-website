import Script from 'next/script'
import * as React from 'react'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

export default function Analytics() {
    React.useEffect(() => {
        if (!window) return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push('js', new Date())
        window.dataLayer.push('config', 'G-L3S62B7X3T')
    }, [])

    // Global site tag (gtag.js) - Google Analytics
    return (
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"
            strategy="beforeInteractive"
        />
    )
}
