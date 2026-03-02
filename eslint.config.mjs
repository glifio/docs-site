import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores(['**/.next/**', '**/node_modules/**', '**/next-env.d.ts']),
  {
    settings: {
      react: { version: '19' },
      next: { rootDir: ['apps/www/', 'apps/icn/'] },
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
