/* eslint-env node */

import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [vue(), dts({
    staticImport: true,
    cleanVueFileName: true,
    outDir: 'dist/types',
    entryRoot: 'src',
    exclude: ["vite.config.ts"],
  })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Columbus Vue',
    },
    rollupOptions: {
      plugins: [],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'mapbox-gl', '@clickbar/columbus-core'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'esm',
          // Provide global variables to use in the UMD build
          // for externalized deps
        },
      ],
    },
  },
})
