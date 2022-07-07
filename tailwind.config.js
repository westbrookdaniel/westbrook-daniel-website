module.exports = {
    experimental: {
        optimizeUniversalDefaults: true,
    },
    content: [
        './pages/**/*.{js,ts,tsx,jsx}',
        './util/**/*.{js,ts,tsx,jsx}',
        './components/**/*.{js,ts,tsx,jsx}',
        './data/**/*.{js,ts,tsx,jsx,md,mdx}',
        './styles/**/*.css',
    ],
    theme: {
        extend: {
            typography: {
                sm: {
                    css: {
                        color: 'var(--on-background)',
                        h1: {
                            color: 'var(--heading-on-background)',
                        },
                        h2: {
                            color: 'var(--heading-on-background)',
                        },
                        h3: {
                            color: 'var(--heading-on-background)',
                        },
                        h4: {
                            color: 'var(--heading-on-background)',
                        },
                        'ul > li::before': {
                            backgroundColor: 'var(--on-background)',
                        },
                        lineHeight: '1.5em',
                        code: {
                            fontWeight: 'normal',
                            padding: '2px 4px',
                            borderRadius: '6px',
                            whitespace: 'pre',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        'a code': {
                            color: '#09181e',
                        },
                    },
                },
                DEFAULT: {
                    css: {
                        color: 'var(--on-background)',
                        h1: {
                            color: 'var(--heading-on-background)',
                        },
                        h2: {
                            color: 'var(--heading-on-background)',
                        },
                        h3: {
                            color: 'var(--heading-on-background)',
                        },
                        h4: {
                            color: 'var(--heading-on-background)',
                        },
                        'ul > li::before': {
                            backgroundColor: 'var(--on-background)',
                        },
                        lineHeight: '1.5em',
                        code: {
                            color: 'var(--on-background)',
                            backgroundColor: 'var(--subtle)',
                            fontWeight: 'normal',
                            padding: '3px 5px',
                            borderRadius: '6px',
                            whitespace: 'pre',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        'a code': {
                            color: '#09181e',
                        },
                        a: {
                            color: 'inherit',
                        },
                        'pre code::before': {
                            content: 'none',
                        },
                        'pre code::after': {
                            content: 'none',
                        },
                        img: {
                            // I could override this properly but oh well
                            margin: '0 !important',
                        },
                    },
                },
            },
            colors: {
                current: 'currentColor',
                brand: 'var(--brand)',
                'on-brand': 'var(--on-brand)',
                accent: 'var(--accent)',
                'accent-hover': 'var(--accent-hover)',
                'accent-focus': 'var(--accent-focus)',
                'on-accent': 'var(--on-accent)',
                background: 'var(--background)',
                'on-background': 'var(--on-background)',
                'heading-on-background': 'var(--heading-on-background)',
                subtle: 'var(--subtle)',
                'on-subtle': 'var(--on-subtle)',
                'heading-on-subtle': 'var(--heading-on-subtle)',
                lines: 'var(--lines)',
                selection: 'var(--selection)',
            },
            spacing: {
                line: '1px',
            },
            borderWidth: {
                line: '1px',
            },
        },
        fontFamily: {
            display: [
                'Rowan',
                'Georgia',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            body: [
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            mono: [
                'Hack',
                'Monaco',
                'Consolas',
                'Courier New',
                'Courier',
                'monospace',
            ],
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
