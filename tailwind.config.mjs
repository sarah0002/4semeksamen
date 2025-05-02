/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
colors: {
 transparent: 'transparent',
 current: 'currentColor',
 'brun': {
    50: '#F0E5E5',     
    100: '#DFC8C8',
    200: '#C29494',
    300: '#A35D5D',
    400: '#6F3F3F',
    500: '#382020',
    600: '#2D1A1A',
    700: '#201313',
    800: '#180D0D',
    900: '#0A0606',
    950:'#060404',
},
        //     'white': '#fff',
        //     'black': '#000',
        // },

         /* Tilføj din egen spacing nedenfor */
        // spacing: {
        //     'm': '40px',
        // },

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        // fontFamily: {
        //     sans: ['Prompt', 'sans-serif'],
        //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
        // },

        /* Tilføj dit typografiske hierarki herunder */
        // fontSize: {
        //     base: ['1rem', { lineHeight: '1.5rem' }],
        //     large: ['2.5rem', { lineHeight: '3.75rem' }],
        //   },

        /* Tilføj dit fontvægt-hierarki nedenfor */
        //   fontWeight: {
        //     regular: '400',
        //   },

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
    }}