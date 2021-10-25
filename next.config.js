const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    experimental: {
        esmExternals: true,
        reactRoot: 'concurrent',
        scrollRestoration: true,
    },
    images: {
        deviceSizes: [320, 420, 768, 1024],
        imageSizes: [320, 420, 768, 1024],
        iconSizes: [],
        domains: [],
        path: '/_next/image',
        loader: 'default',
    },
    future: {
        strictPostcssConfiguration: true,
    },
})
