import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    emptyOutDir: false,
    rollupOptions:{
      input:{
        content: "./scripts/youtube.js",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})