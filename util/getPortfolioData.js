export default function getPortfolioData() {
	const fs = require('fs')
	const path = require('path')

	const files = fs.readdirSync(path.join(process.cwd(), 'pages', 'p'), 'utf-8')
	const fileNames = files.filter((fn) => fn.endsWith('.mdx'))

	const portfolioData = []
	fileNames.forEach((file) => {
		const data = require(`../pages/p/${file}`).metadata
		data.slug = '/p/' + file.substring(0, file.length - 4)
		portfolioData.push(data)
	})

	return { props: { portfolioData } }
}

export async function getStaticProps() {
	return getPortfolioData()
}
