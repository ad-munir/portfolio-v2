/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tailwind: {
          1: '#0d172e',
          2:"#314967",
          3:"#a3aec2",
          4:"#43a2d2"
        }
      },
    },
  },
  plugins: [],
}

