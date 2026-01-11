export default [
  {
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
          ignoreGlobals: true,
          ignoreImports: true,
        },
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: false,
          capIsNewExceptions: [
            'Immutable.Map',
            'Immutable.Set',
            'Immutable.List',
          ],
        },
      ],
      'no-array-constructor': 'error',
      'no-multi-assign': ['error'],
      'no-nested-ternary': 'error',
      'no-object-constructor': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in iterates over the entire prototype chain. Use Object.{keys,values,entries} or for..of.',
        },
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing.',
        },
      ],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-exponentiation-operator': 'error',
      'prefer-object-spread': 'error',
      'spaced-comment': 'warn',
      'unicode-bom': ['error', 'never'],
    },
  },
];
