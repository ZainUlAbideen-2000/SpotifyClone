/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height:{
        '1/10': '10%',
        '9/10': '90%',
      },
      backgroundColor: {
        'app-black': '#121212',
        // 'gradient': 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(18,18,18,1) 100%)',
      },
    },
  },
  plugins: [],
}

