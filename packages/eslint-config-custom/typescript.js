const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  rules: {
    'class-methods-use-this': 'off',
    'prettier/prettier': ['error'],
  },
};
