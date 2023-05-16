/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--bg) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
            },
            fontFamily: {
                body: ['GeneralSans-Regular', 'sans-serif'],
                heading: ['Gambarino-Regular', 'serif'],
            },
            screens: {
                xs: '400px',
            },
            typography: theme => {
                const heading = {
                    color: 'rgb(var(--accent) / 1)',
                    fontWeight: 'normal',
                }
                return {
                    DEFAULT: {
                        css: {
                            // maxWidth: '65ch',
                            maxWidth: 'unset',
                            '> :not(pre)': {
                                maxWidth: '65ch',
                            },
                            color: 'rgb(var(--text) / 1)',
                            a: {
                                color: 'rgb(var(--accent) / 1)',
                                '&:hover': {
                                    color: 'rgb(var(--accent) / 1)',
                                },
                            },
                            code: {
                                color: 'rgb(var(--text) / 1)',
                                fontWeight: 'normal',
                            },
                            'ul > li::marker': {
                                color: 'rgb(var(--text) / 0.1)',
                            },
                            'ol > li::marker': {
                                color: 'rgb(var(--text) / 0.1)',
                            },
                            pre: {
                                backgroundColor: theme('colors.neutral.900'),
                            },
                            'pre code': {
                                color: 'rgb(var(--text) / 1)',
                                display: 'grid',
                            },
                            h1: heading,
                            h2: heading,
                            h2: heading,
                            h3: heading,
                            h4: heading,
                            h5: heading,
                            h6: heading,
                        },
                    },
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
