import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import * as manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build:{
    target:"esnext",
    rollupOptions:{
      input:{
        popup: "index.html",
      },
      // output:{
      //   entryFileNames: "assets/[name].js"
      // }
    },
  },
});