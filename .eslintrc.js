module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    expect: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'no-unused-vars': 0,
    'vue/no-unused-components': 0,
    'vue/valid-template-root': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
};
