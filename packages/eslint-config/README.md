## @dozalex/eslint-config

This package provides [ESLint](http://eslint.org/) configuration.

### Installation

To make use of this config, install this packages as a development dependency of your project:

```
yarn add --dev @dozalex/eslint-config @rushstack/eslint-patch
```

Create a `.eslintrc.js` file in the root of your project directory (it should live where `package.json` does). 

Your `.eslintrc.js` file should look like this:
```js
require('@rushstack/eslint-patch/modern-module-resolution');
require('@rushstack/eslint-patch/custom-config-package-names');

module.exports = {
  extends: ['./node_modules/@dozalex/eslint-config'],
};
```

Add this commands to `scripts` of root package.json:

```
"lint:eslint": "eslint 'src/**/*.{ts,tsx}' --fix",
```

Add this command to `lint-staged` of root package.json:
```
"eslint --fix",
```

or

```
"stylelint --fix --quiet",
```

if you don't need to see a warnings.