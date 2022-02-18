const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    swcMinify: true,
    experimental: {
        scrollRestoration: true,
        reactRoot: 'concurrent',
        concurrentFeatures: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        iconSizes: [],
        domains: [],
        path: '/_next/image',
        loader: 'default',
    },
    future: {
        strictPostcssConfiguration: true,
    },
})
