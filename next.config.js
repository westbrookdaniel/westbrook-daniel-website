const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
})

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx'],
	devIndicators: {
		autoPrerender: false,
	},
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 2400],
		imageSizes: [320, 420, 768, 1024, 1200, 1200],
		iconSizes: [],
		domains: [],
		path: '/_next/image',
		loader: 'default',
	},
})
