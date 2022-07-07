module.exports = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    swcMinify: true,
    experimental: {
        scrollRestoration: true,
        images: {
            allowFutureImage: true,
        },
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
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
}
