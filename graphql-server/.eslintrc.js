module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'eol-last': 'error',
    'no-return-await': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error'
  },
  ignorePatterns: ['**/*.integ.test.ts', 'node_modules/**/*.ts', '**/apollo-graphql/generated.types.ts'],
  overrides: [
    {
      files: ['.prettierrc', 'src/lambda/**/*.json', 'src/**/*.ts', 'src/**/*.integ.test.ts']
    }
  ]
}
