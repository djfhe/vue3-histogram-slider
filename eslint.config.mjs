/* eslint-env node */
import vueConfig from '@clickbar/eslint-config-vue'

import baseConfig from '../../eslint.config.mjs'

/** @type { import("eslint").Linter.Config[] } */
export default [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  ...vueConfig(),
  ...baseConfig,
  {
    files: ['src/**/*.ts', 'src/**/*.vue'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'unicorn/filename-case': 'off',
      'vue/no-root-v-if': 'off',
    },
  },
  {
    ignores: ['dist/', 'build/'],
  }
]
