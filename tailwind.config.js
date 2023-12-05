/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgba(15, 15, 15, 1)',
                secondary: 'rgba(38, 38, 38, 1)',
                lightwhite: 'rgba(255, 255, 255, 1)',
                lightgrey: 'rgba(153, 153, 153, 1)',
                lightred: 'rgba(229, 0, 0, 1)',

            },
            backgroundImage: {
                'home': "url('./assets/home.jpg')"
            }
        },
        screens: {
            xs: '390px',
            ss: '',
            sm: '',
            md: '',
            xs: '1440px ',
            xl: '1920px',
        },
    },
    plugins: [],
}