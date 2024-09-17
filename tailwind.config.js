/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom1:'#1a2042',
        custom2:'#1d1830',
        custom3:'#210f18',
        custom4:'#414141',
      },
    },
  },
  plugins: [],
}