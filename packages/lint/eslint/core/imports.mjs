import importPlugin from 'eslint-plugin-import';

export default [
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
      'import/ignore': ['node_modules', '\\.(scss|css|less|svg|json)$'],
    },
    rules: {
      'import/named': 'error',
      'import/export': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/test/**',
            '**/tests/**',
            '**/*.{test,spec}.ts',
            '**/*.config.{ts,js,mjs,mts}',
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-mutable-exports': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        { groups: [['builtin', 'external', 'internal']] },
      ],
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': ['error', { maxDepth: Infinity }],
      'import/no-useless-path-segments': ['error', { commonjs: true }],
      'import/no-import-module-exports': 'error',
      'import/no-relative-packages': 'error',
    },
  },
];
