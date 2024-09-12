## @dozalex/stylelint-config

To make use of this config, install this packages as a development dependency of your project:

```
yarn add --dev @dozalex/stylelint-config
```

Create a `stylelint.config.js` file in the root of your project directory (it should live where `package.json` does):

```js
module.exports = {
  extends: ['./node_modules/@dozalex/stylelint-config'],
};
```

Add this commands to `scripts` of root package.json:

```
"lint:style": "stylelint 'src/**/styled.ts' --fix",
```

Add this command to `lint-staged` of root package.json:
```
"stylelint --fix",
```
