# @dozalex/lint/prettier

Provides [Prettier](https://prettier.io/) configuration.

## Installation

To use this config, install this packages as a development dependency of your project:

### Yarn

```shell
yarn add --dev @dozalex/lint prettier
```

### NPM

```shell
npm install @dozalex/lint prettier --save-dev
```

## Configuration

Create a `.prettierrc` file in the root of your project directory (it should live where `package.json` does):

```
"@dozalex/lint/prettier"
```

Create (if required) a `.prettierignore` file in the root of your project directory (it should live where `package.json` does):

```
**/ignoreThisFile.js
```

## Usage

Add this commands to `scripts` of root package.json:

```
"lint:prettier": "prettier . -w --log-level error --ignore-unknown",
```

Add this rule to the end of `lint-staged` of root package.json:

```
"*": ["prettier -w --log-level error --ignore-unknown"]
```
