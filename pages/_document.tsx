import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"
                        strategy="afterInteractive"
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
