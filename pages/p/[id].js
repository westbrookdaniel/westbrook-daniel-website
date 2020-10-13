import { useRouter } from 'next/router'
import { getPortfolios, getPortfolio } from '../../util/get'
import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
	const pages = getPortfolios()
	const paths = pages.map((page) => ({
		params: { id: page.data.id },
	}))
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const data = getPortfolio(params.id)
	return {
		props: { data },
	}
}

const CodeBlock = ({ language, value }) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language}>
			{value}
		</SyntaxHighlighter>
	)
}

const PortfolioPage = ({ data: { data, content } }) => {
  // TODO: Setup Prose
	return (
		<>
			<p>Post: {data.id}</p>
			<div className="prose"> 
				<ReactMarkdown escapeHtml={true} source={content} />
			</div>
		</>
	)
}

export default PortfolioPage
