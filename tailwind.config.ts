import type { Config } from 'tailwindcss'
// import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        opensans: ['var(--font-opensans)', 'sans-serif'],
      },
    },
  },
  // plugins: [forms],

}

export default config
