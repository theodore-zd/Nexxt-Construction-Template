/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-prefer-function-component',
    'prettier'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // Rule to flag statements that use != and == instead of !== and ===
    eqeqeq: 'error',
    // close emtpy components
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    // enforces the use of the shorthand syntax
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],

    // react props per line
    'react/jsx-max-props-per-line': ['error',
      // { when: 'always' }
      { maximum: { single: 2, multi: 1 } }
    ],

    'react-prefer-function-component/react-prefer-function-component': 'error',

    // camelcase
    camelcase: ['error', {
      properties: 'never',
      ignoreImports: true,
      ignoreDestructuring: true
    }]
  }
}
