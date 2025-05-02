/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
colors: {
 transparent: 'transparent',
 current: 'currentColor',
 'gul': {
    50: '#FFFEFA',     
    100: '#FFFDF5',
    200: '#FFFDF5',
    300: '#FEFAE6',
    400: '#FEF7DC',
    500: '#FFF6D6',
    600: '#FDE179',
    700: '#F9CE20',
    800: '#B89404',
    900: '#5A4802',
    950:'#2E2401',
},
'rod': {
    50: '#FBE9E9',     
    100: '#FAD8D8',
    200: '#F1ACAC',
    300: '#EB8485',
    400: '#E4595C',
    500: '#DD3032',
    600: '#B81E21',
    700: '#8C1719',
    800: '#5C0F10',
    900: '#300808',
    950:'#160404',
},
'blaa': {
    50: '#EEF6FF',     
    100: '#E0EFFF',
    200: '#BDDDFF',
    300: '#7ABAFF',
    400: '#3E9BFF',
    500: '#0279FA',
    600: '#0059B7',
    700: '#004794',
    800: '#003670',
    900: '#002346',
    950:'#001124',
},
'gron': {
    50: '#FAFBF8',     
    100: '#F4F6EE',
    200: '#E8EDDE',
    300: '#DFE6D0',
    400: '#D4DEBF',
    500: '#C9D5AF',
    600: '#A8BA7C',
    700: '#839A51',
    800: '#556435',
    900: '#2B321A',
    950:'#171B0D',
},
'white': '#fff',
'black': '#000',
},


spacing: {
    
 'XXXS': '5px',
 'XXS': '10px',
 'XS': '15px',
 'S': '30px',
 'M': '60px',
 'L': '120px',
 'XL': '240px',
 },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
fontFamily: {
worksans: ['WorkSans', 'sans-serif'],
 },

        /* Tilføj dit typografiske hierarki herunder */
        fontSize: {
            p_desk: ['20px', { lineHeight: '1.25rem' }],
            h4_desk: ['24px', { lineHeight: '2.25rem' }],
            h3_desk: ['31px', { lineHeight: '3rem' }],
            h2_desk: ['36px', { lineHeight: '3.75rem' }],
            h1_desk: ['64px', { lineHeight: '4.5rem' }],
            
            p_mobil: ['12px', { lineHeight: '1.25rem' }],
            h4_mobil: ['14px', { lineHeight: '2.25rem' }],
            h3_mobil: ['17px', { lineHeight: '3rem' }],
            h2_mobil: ['18px', { lineHeight: '' }],
            h1_mobil: ['32px', { lineHeight: '4.5rem' }],
             },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        fontWeight: {
            regular: '400',
            semibold: '600',
            bold: '800', 
        },

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
        // borderRadius: {
        //     DEFAULT: '1.25rem',
        //     none: '0px',
        // },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },

		extend: {
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    }