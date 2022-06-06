import type { DocumentContext } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const noFlash = `(function() { try {
  const store = localStorage.getItem('dw-theme');
  if (!store) return
  const key = JSON.parse(store).state.themeKey
  document.body.className = key
} catch (e) {} })();`

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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        id="theme-no-flash"
                        dangerouslySetInnerHTML={{ __html: noFlash }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument
