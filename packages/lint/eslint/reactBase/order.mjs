export default [
  {
    rules: {
      'import/order': [
        2,
        {
          groups: [
            ['builtin', 'external'],
            'unknown',
            'internal',
            'parent',
            ['sibling', 'index'],
          ],
          pathGroups: [
            // Order main external deps to do a code more clear.
            // With this order developer can focus only for specific deps.
            {
              pattern: 'react{,/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-redux{,/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always',
          distinctGroup: false,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
