import type { DocumentContext } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Rowan-Semibold.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Rowan-SemiboldItalic.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Roboto-Regular.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"
                        strategy="beforeInteractive"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
