/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'phudu': ['Phudu', 'cursive'],
        'vollkorn': ['Vollkorn', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Customize the duration and timing function as needed
      },
      screens: {
        // xs: '500px',    // Custom extra-small breakpoint
        sm: '750px',
        'max-sm': {'max': '750px'}, // Custom small breakpoint
        md: '900px',    // Custom medium breakpoint
        lg: '1050px',   // Custom large breakpoint
        // xl: '1300px',   // Custom extra-large breakpoint
        // '2xl': '1600px' // Custom 2x-large breakpoint
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
}
