import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const config = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },
  ...nextVitals,
  ...nextTypeScript,
]

export default config
