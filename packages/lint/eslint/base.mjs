import globals from 'globals';

import coreConfig from './core/index.mjs';
import tsConfig from './typescript.mjs';

export default [
  ...coreConfig,
  ...tsConfig,
  {
    files: ['**/*.{ts,tsx,js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
