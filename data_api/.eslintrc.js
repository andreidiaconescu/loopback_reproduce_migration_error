module.exports = {
  extends: '@loopback/eslint-config',
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['objectLiteralProperty'],
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
      },
    ],
  },
};
