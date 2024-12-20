/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "3xl":" 1px 4px 10px -1px rgba(71, 147, 255, 0.2)"
      }
    },
    screens: {
      phone:"520px"
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['light','dark']
  }
}