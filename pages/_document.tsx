import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

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
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"
                    ></script>

                    {/* Fonts */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    {/* Preload stylesheet */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Work+Sans&display=swap"
                        rel="preload"
                        as="style"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Work+Sans&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"
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
