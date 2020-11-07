export default function getPortfolioData() {
	const fs = require('fs')
	const path = require('path')
	const reorder = require('../util/reorder').reorder

	const files = fs.readdirSync(path.join(process.cwd(), 'pages', 'p'), 'utf-8')
	const fileNames = files.filter((fn) => fn.endsWith('.mdx'))

	const rawData = []
	fileNames.forEach((file) => {
		const data = require(`../pages/p/${file}`).metadata
		data.slug = '/p/' + file.substring(0, file.length - 4)
		rawData.push(data)
	})

	const portfolioData = reorder(rawData, 'order')

	return { props: { portfolioData } }
}

export async function getStaticProps() {
	return getPortfolioData()
}
