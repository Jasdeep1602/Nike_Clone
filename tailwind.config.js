/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xl: { max: '1200px' },
      lg: { max: '991px' },
      md: { max: '769px' },
      sm: { max: '550px' },
      xsm: { max: '375px' },
    },
  },
  plugins: [],
}
