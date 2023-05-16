/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--bg) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
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
                    color: theme('colors.text'),
                    fontWeight: 'normal',
                }
                return {
                    DEFAULT: {
                        css: {
                            color: theme('colors.text'),
                            a: {
                                color: theme('colors.text'),
                                '&:hover': {
                                    color: theme('colors.text'),
                                },
                            },
                            code: {
                                color: theme('colors.text'),
                                fontWeight: 'normal',
                            },
                            'ul > li::marker': {
                                color: theme('colors.text'),
                            },
                            pre: {
                                border: '2px solid',
                                borderColor: 'rgb(var(--text) / 0.1)',
                                backgroundColor: 'transperant',
                            },
                            'pre code': {
                                color: 'rgb(var(--text) / 1)',
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
