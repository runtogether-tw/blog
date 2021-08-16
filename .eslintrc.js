module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'airbnb-base',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 0,
    "indent": ["error", 2]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
