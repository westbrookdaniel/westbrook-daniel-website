/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#514810',
                text: '#aef4e2',
            },
            fontFamily: {
                body: ['GeneralSans-Regular', 'sans-serif'],
                heading: ['Gambarino-Regular', 'serif'],
            },
            screens: {
                xs: '400px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
