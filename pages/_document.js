import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					{/* Global site tag (gtag.js) - Google Analytics */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-L3S62B7X3T"></script>
					
					
					<link
						href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
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
