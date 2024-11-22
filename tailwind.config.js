import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    
    content: [
      "*.{html,js}",
    ],

    theme: {
        extend: {

            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'song-scroll' : 'song-scroll 10s linear infinite',
                iBeam: 'iBeam .4s ease-in-out infinite alternate',
                glow: 'glow 1s ease-in-out infinite alternate'
            },

        },
    },
};
