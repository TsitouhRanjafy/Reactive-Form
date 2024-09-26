/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors :{
        'primary' : '#f4f5f4',
        'title-xl' : '#0f1425',
        'paragraphe' : '#8d8d91',
        'weak-smok' : "#c2c2c2"
      },
      borderWidth : {
        '1' : '1px'
      },
    },
  },
  plugins: [],
}

