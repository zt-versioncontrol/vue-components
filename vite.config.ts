import { fileURLToPath, URL } from 'node:url'
import  { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    react()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'zt-vue-library',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      // TODO: is this necessary?
      // output: {
      //   // TODO: check if this is needed
      //   // intro: 'import "./style.css";',
      //   //todo: is this necessary
      //   globals: {
      //     // TODO: should it be upper case?
      //     vue: 'vue',
      //   }
      // }
    }
  }
})
