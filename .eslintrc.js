module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/recommended', 'plugin:import/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules', 'scripts'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/prop-types': 'off',
        'react/prefer-stateless-function': 'warn',
        'max-len': ['error', { code: 120 }],
        'import/prefer-default-export': 'off',
        'import/no-cycle': [2, { maxDepth: 1 }],
        'import/namespace': 'off',
        'import/first': 'error',
        'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
        'import/newline-after-import': 'error',
        'import/no-shadow': 'off',
        'react-hooks/exhaustive-deps': 'off',
        curly: 'off',
      },
    },
  ],
}
