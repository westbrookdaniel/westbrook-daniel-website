import '../styles/index.css'
import TailwindProvider from '../TailwindProvider'

function MyApp({ Component, pageProps }) {
	return (
		<TailwindProvider>
			<Component {...pageProps} />
		</TailwindProvider>
	)
}

export default MyApp
