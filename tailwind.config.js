/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3', // Azul corporativo sugerido para tecnologia
        secondary: '#00b4d8',
        dark: '#1a1a1a',
        light: '#f8f9fa'
      }
    },
  },
  plugins: [],
}