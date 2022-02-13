const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {

    content: [

        'src/*.{html,js,jsx}',
        'src/**/*.{html,js,jsx}',

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Gill Sans'", ...defaultTheme.fontFamily.sans],
                cormorant: ["'Cormorant Garamond'", ...defaultTheme.fontFamily.sans],
                dancing: ["'Dancing Script'", ...defaultTheme.fontFamily.sans],
            },
            colors: {

                'color': {
                    DEFAULT: '#0D3A5C',
                    '1': '#980b2c',
                    '2': '#3c3c3b',
                    '3': '#252525',
                    '4': '#4b4b4b',
                    '5': '#5a7c84',
                    '6': '#987b48',
                    '7': '#02497E',
                    '8': '#f6f6f6',
                    '9': '#969696',
                    '11': '#bcbcbc',
                    '12': '#efefef',
                    '13': '#4e4e4e',
                    '14': '#73866d',
                    '15': '#5a7b84',
                    '16': '#a28244',
                    '17': '#9e5a4d',
                    '18': '#eaeaea',
                    '19': '#3b3b3a',



                },
            },

            boxShadow: {
                '1': '0 0 30px 5px rgba(0, 0, 0, 0.09)',
                '2': '1px 5px 7px rgba(0, 0, 0, 0.05)',
                '3': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
                '4': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                '5': 'inset rgba(0, 0, 0, 0.09) 0 0 40px, rgba(0, 0, 0, 0.10) 0 0 50px',

            },

            spacing: {
                '15': '3.75rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
                '46': '11.5rem',
                '50': '12.5rem',
                '54': '13.5rem',
                '58': '14.5rem',
                '62': '15.5rem',
                '66': '16.5rem',
                '70': '17.5rem',
                '74': '18.5rem',
                '78': '19.5rem',
                '82': '20.5rem',
                '86': '21.5rem',
                '90': '22.5rem',
                '94': '23.5rem',
                '98': '24.5rem',
                '102': '25.5rem',
                '106': '26.5rem',
                '110': '27.5rem',
                'xs': '28rem',
                'sm': '32rem',
                'md': '36rem',
                'ml': '40rem',
                'mxg': '44rem',
                'mlg': '48rem',
                'lg': '52rem',
                'xl': '60rem',
                '2xl': '72rem',
                '3xl': '80rem',
                '4xl': '96rem',
            },


            minWidth: (theme) => ({
                ...theme('spacing'),
            }),

            minHeight: (theme) => ({
                ...theme('spacing'),
            }),



            borderWidth: {
                '3': '3px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
            },
            fontSize: {
                mi: '.75rem',
                xs: '.814rem',
                md: '.9375rem',
                '2.5xl': '1.75rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem',
                '5.5xl': '3.5rem',
                '6.5xl': ['4rem', '1.10'],

                '8.5xlxl': '5rem',
                '7xl': '4.5rem',
                '7.5xl': '4.8rem',
                '8xl': '3.8rem',
            },

        },
        screens: {
            'mv': '360px',
            // => @media (min-width: 480px) { ... }

            'xs': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'ml': '992px', // Medium Large
            // => @media (min-width: 992px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'sl': '1199px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }    

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... } 

            'wrap': '1020px',
            // => @media (min-width: 1020px) { ... }    

        },
    },

    variants: {
        extend: {},
    },
    plugins: [
        plugin(function({ addBase, components, theme }) {
            addBase({
                'body': {
                    backgroundColor: theme('colors.ml-gray.1'),
                },

                '.trnstsn, a, input, textarea, select': {
                    transition: 'all 0.35s ease-in-out',

                },

                '.filters': {
                    '.filter-qualiopi': {
                        display: 'none!important'
                    },
                    '&.filters-on': {
                        '.filter-qualiopi': {
                            display: 'flex!important'
                        },
                        '.filter-btn': {
                            display: 'none!important'
                        },
                        '.filter-training': {
                            display: 'none!important'
                        }
                    }
                },


                'input[type="radio"] + label .c-box': {
                    transition: 'all 0.35s ease-in-out',
                },

                // 'input[type="radio"] + label .c-box:hover': {
                //     transform: 'scale(1.2)'
                // },
                // 'input[type="radio"] + label:hover .c-box': {
                //     transform: 'scale(1.2)'
                // },

                'input[type="radio"]:checked + label .c-box': {
                    backgroundColor: theme('colors.ml-blue.1'),
                    boxShadow: '0px 0px 0px 3px #F0F1FA inset'
                },

                // 'input[type="radio"]:checked + label': {
                //     color: '#3490DC' //text-blue
                // },





            })
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}