/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0B193E',
        light: {
          100: '#0B193E',
        },
        error: '#E20505',
        blue: '#0446BF',
        primaryText: '#1E1F21',
        textGray: '#1E1F21',
        gray: '#A3ACBB',
        lightPrimary: '#A3ACBB'
      }
    },
  },
  plugins: [],
}