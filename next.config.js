const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
})

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx'],
	devIndicators: {
		autoPrerender: false,
	},
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 1800],
		imageSizes: [320, 420, 768, 1024, 1200, 1800],
		iconSizes: [],
		domains: [],
		path: '/_next/image',
		loader: 'default',
	},
})
