/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        figtree:[ "Figtree", "sans-serif"],
        albert:["Albert Sans", "sans-serif"],
      },
      colors:{
         primarycolor:'#EE2C4C',
         secondarycolor:'#100028',
         thirdcolor:'#9F9E9E',
      },


    },
  },
  plugins: [],
}

