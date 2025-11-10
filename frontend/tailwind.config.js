/** @type {import('tailwindcss').Config} */
export default {
  // Aqui dizemos ao Tailwind para "assistir" a todos os arquivos
  // .js, .jsx, .ts, e .tsx dentro da pasta 'src', e também o index.html
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}