import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Opsi ini bagus jika Anda berencana hosting di GitHub Pages
  // base: '/nama-repositori-anda/', 
  build: {
    outDir: 'dist', // Folder output saat build
    assetsDir: 'assets', // Folder aset di dalam dist
  },
  server: {
    port: 3000, // Port untuk development server
    open: true, // Otomatis buka browser
  },
});
