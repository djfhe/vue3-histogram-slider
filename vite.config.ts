/* eslint-env node */

import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({
    staticImport: true,
    cleanVueFileName: true,
    outDir: 'dist/types',
    entryRoot: 'src/lib',
    exclude: ["vite.config.ts"],
  })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: '',
    },
    rollupOptions: {
      plugins: [],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src/lib',
          format: 'esm',
          // Provide global variables to use in the UMD build
          // for externalized deps
        },
      ],
    },
  },
})
