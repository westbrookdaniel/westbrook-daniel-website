import matter from 'gray-matter'

export const getPortfolios = () => {
	const fs = require('fs')
	const path = require('path')

	const files = fs.readdirSync(
		path.join(process.cwd(), 'content', 'portfolio'),
		'utf-8'
	)
	const fileNames = files.filter((fn) => fn.endsWith('.md'))

	const data = fileNames.map((file) => {
		const pt = path.join(process.cwd(), 'content', 'portfolio', file)
		const rawContent = fs.readFileSync(pt, {
			encoding: 'utf-8',
		})
		return rawContent
	})

	const parsedData = data.map((d) => matter(d))
	return parsedData.map(({ content, data }) => ({content, data}))
}

export const getPortfolio = (id) => {
	const pages = getPortfolios()
	const page = pages.find((page) => page.data.id === id)
	return page
}
