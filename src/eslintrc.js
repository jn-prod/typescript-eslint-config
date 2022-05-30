module.exports = ({ ts = false, jest = false } = {}) => {
  const config = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      jest: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jsdoc/recommended'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['import', 'jsdoc'],
    rules: {
      'import/extensions': ['error', { ts: 'never' }],
      'import/no-unresolved': 'error',
    },
    settings: {},
  };

  // typscript
  if (ts) {
    config.extends = [...config.extends, 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'];
    config.parser = '@typescript-eslint/parser';
    config.parserOptions = {
      ...config.parserOptions,
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    };
    config.plugins = [...config.plugins, '@typescript-eslint'];
    (config.rules = {
      ...config.rules,
      '@typescript-eslint/explicit-function-return-type': ['error', { allowTypedFunctionExpressions: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    }),
      (config.settings = {
        ...config.settings,
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          },
        },
      });
  }

  // jest
  if (jest) {
    config.extends = [...config.extends, 'plugin:jest/recommended'];
    config.plugins = [...config.plugins, 'jest'];
  }

  return config;
};
