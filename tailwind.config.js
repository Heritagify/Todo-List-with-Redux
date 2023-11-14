/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          '1': '#FFA98C',
          '2': '#F89A90',
          '3': '#E4719C',
          '4': '#C430AF',
          '5': '#AD00BD',
        },
      }
    },
  },
  plugins: [],
}

