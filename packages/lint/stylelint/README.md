# @dozalex/lint/stylelint

Provides [Stylelint](https://stylelint.io/) configuration.

## Installation

To use this config, install this packages as a development dependency of your project:

### Yarn

```shell
yarn add --dev @dozalex/lint stylelint
```

### NPM

```shell
npm install @dozalex/lint stylelint --save-dev
```

## Configuration

Create a `stylelint.config.js` file in the root of your project directory (it should live where `package.json` does):

```js
module.exports = {
  extends: ['@dozalex/lint/stylelint'],
};
```

Default value of files pattern is

```js
files: ['**/*.css'];
```

Feel free to use your own pattern, e.g.

```js
files: ['**/*styled.ts'];
```

## Usage

Add this commands to `scripts` of root package.json (use your own file mask):

```
""lint:style": "stylelint \"{src,packages/*/src}/**/*.css\" --fix",",
```

Add this command to `lint-staged` of root package.json:

```
"*.{css,ts,tsx}": ["stylelint --fix"],
```
