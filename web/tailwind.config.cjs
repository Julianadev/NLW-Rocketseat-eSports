/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.tsx", 
      "./src/**/*.ts",
      "./index.html"
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
      },
      backgroundImage:{
        galaxy: "url('/src/assets/background-galaxy.png')",
        nlwgradient: 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 63.94%, #E1D55D 98.57%)',
        gamegradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
