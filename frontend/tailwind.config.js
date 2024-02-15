/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif']
        },
        extend: {
            colors: {
                'gray': '#aba8ae',
                'light-gray': 'rgba(168,168,174,0.25)',
                'primary': '#8dd3bb',
                'secondary': '#FF8682',
                'blackish-green': '#112211',
                'light-text': '#11221140',
                'background': '#fafbfc',
                'light-green': '#CDEAE1',
                'gray-border': '#79747E',
                'secondary-background': "#EBF6F2"
            }
        },
    },
    plugins: [
        require('@vueform/slider/tailwind'),
    ]
}