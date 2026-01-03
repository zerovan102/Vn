/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Memantau file HTML di root
    "./src/**/*.{js,ts,jsx,tsx,html}", // Memantau semua file JS/HTML di dalam src
  ],
  theme: {
    extend: {
      // Di sini Anda bisa menambahkan warna, font, dll. kustom
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Font default Anda
        'orbitron': ['Orbitron', 'sans-serif'], // <-- FONT BARU DITAMBAHKAN DI SINI
      },
    },
  },
  plugins: [],
};