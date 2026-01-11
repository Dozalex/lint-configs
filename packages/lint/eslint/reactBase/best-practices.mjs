import reactPlugin from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'react/no-danger': 'warn',
      'react/no-deprecated': ['error'],
      'react/no-unknown-property': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/jsx-no-comment-textnodes': 'error',
      'react/no-danger-with-children': 'error',
      'react/style-prop-object': 'error',
      'react/no-children-prop': 'error',
      'react/no-array-index-key': 'warn',
      'react/void-dom-elements-no-children': 'error',
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],
      'react/jsx-no-script-url': [
        'error',
        [
          {
            name: 'Link',
            props: ['to'],
          },
        ],
      ],
      'react/jsx-no-useless-fragment': 'error',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-invalid-html-attribute': 'error',
    },
  },
];
