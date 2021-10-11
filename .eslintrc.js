module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-undef': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'no-lonely-if': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'react/jsx-no-bind': 0,
    'no-param-reassign': 0,
  },
};
