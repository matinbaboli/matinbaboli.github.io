import { defineConfig } from "vite";
import {resolve} from "path"
export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            contact: resolve(__dirname, 'contact-me.html'),
            official: resolve(__dirname, 'official-projects.html'),
            personal: resolve(__dirname, 'personal-projects.html'),
          },
        },
      },
})