export default [
  {
    rules: {
      'block-scoped-var': 'error',
      'no-shadow-restricted-names': 'error',
      'no-unassigned-vars': 'error',
      'no-undef-init': 'error',
      'no-use-before-define': [
        'error',
        { functions: true, classes: true, variables: true },
      ],
    },
  },
];
