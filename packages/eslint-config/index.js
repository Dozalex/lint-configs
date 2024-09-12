module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "import", "babel"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    "react/jsx-fragments": [1, "element"],
    "react/jsx-curly-brace-presence": 0,
    "react/forbid-prop-types": 0,
    "react/no-children-prop": 0,
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-indent": 0,
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "import/no-unresolved": 0,
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 2,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    indent: 0,
    "arrow-body-style": [1, "as-needed"],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "no-plusplus": 0,
    "no-shadow": 0,
    "spaced-comment": 1,
    "max-len": 1,
    "class-methods-use-this": 0,
    "no-mixed-operators": [
      0,
      {
        allowSamePrecedence: 1,
      },
    ],
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": 0,
    "babel/object-curly-spacing": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "template-tag-spacing": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "react/no-danger": 0,
    "global-require": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-non-null-assertion": 0,
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    // We re-export default in many places (https://github.com/eslint/eslint/issues/15617)
    "no-restricted-exports": "off",
    "react/no-unstable-nested-components": 0,
    "import/order": [
      2,
      {
        "groups": [
          ["builtin", "external"],
          "unknown", // use this group to move internal deps here (@/**)
          "internal",
          "parent", // split parent imports to understand code paths
          ["sibling", "index"]
        ],
        "pathGroups": [
          // Order main external deps to do a code more clear.
          // With this order developer can focus only for specific deps.
          {
            "pattern": "react/**",
            "patternOptions": { "partial": true },
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "react-redux/**",
            "patternOptions": { "partial": true },
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@lingui/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@linaria/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "found/**",
            "patternOptions": { "partial": true },
            "group": "external",
            "position": "before"
          },
          // project packages (can locate in a separate repositories, but it's still project code)
          /*
          {
            "pattern": "@projectName/!**",
            "group": "unknown",
            "position": "after"
          },
          */
          {
            "pattern": "@/**",
            "group": "unknown",
            "position": "after"
          },
          // project root paths
          {
            "pattern": "assets/**",
            "patternOptions": { "partial": true },
            "group": "internal"
          },
          {
            "pattern": "theme",
            "group": "internal"
          },
          {
            "pattern": "icons/**",
            "patternOptions": { "partial": true },
            "group": "internal"
          },
          {
            "pattern": "core/**",
            "patternOptions": { "partial": true },
            "group": "internal"
          },
          {
            "pattern": "types",
            "group": "internal"
          },
          {
            "pattern": "locales",
            "group": "internal"
          },
          {
            "pattern": "modules/**",
            "patternOptions": { "partial": true },
            "group": "internal"
          },
          {
            "pattern": "utils/**",
            "patternOptions": { "partial": true },
            "group": "internal"
          },
          {
            "pattern": "screens/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "components/**",
            "group": "internal",
            "position": "after"
          },
          // do these imports last to keep the developer's focus
          // on the different imports between these and the main deps
          {
            "pattern": "./components",
            "group": "sibling",
            "position": "after"
          },
          {
            "pattern": "./styled",
            "group": "sibling",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [],
        "newlines-between": "always",
        "distinctGroup": false,
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
};
