/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        twitterDim: "#15202b"
      },
      fontFamily:{
        tweet: ['-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}