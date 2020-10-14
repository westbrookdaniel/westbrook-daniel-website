import { useRouter } from 'next/router'
import { getPortfolios, getPortfolio } from '../../util/get'
import ReactMarkdown from 'react-markdown'
import Nav from '../../components/parts/Nav'
import Head from 'next/head'
import Container from '../../components/layout/Container'

export async function getStaticPaths() {
	const pages = getPortfolios()
	const paths = pages.map(({ data }) => ({
		params: { id: data.id },
	}))
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const data = getPortfolio(params.id)
	return {
		props: { data },
	}
}

const PortfolioPage = ({ data: { data, content } }) => {
	// TODO: Setup Prose and use MDX
	return (
		<div>
			<Head>
				<title>{data.id}</title>
			</Head>

			<Container spaced>
				<p>Post: {data.id}</p>
				<div className="prose">
					<ReactMarkdown escapeHtml={true} source={content} />
				</div>
			</Container>
		</div>
	)
}

export default PortfolioPage
