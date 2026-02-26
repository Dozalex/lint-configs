import globals from 'globals';

import coreConfig from './core/index.mjs';
import tsConfig from './typescript.mjs';

export default [
  ...coreConfig,
  {
    files: ['**/*.{ts,tsx,js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tsConfig,
];
