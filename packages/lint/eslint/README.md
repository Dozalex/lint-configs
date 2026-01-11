# @dozalex/lint/eslint

Provides [ESLint](https://eslint.org/) configuration.

## Installation

To use this config, install this packages as a development dependency of your project:

### Yarn

```shell
yarn add --dev @dozalex/lint eslint
```

### NPM

```shell
npm install @dozalex/lint eslint
```

## Configuration

Create a `eslint.config.mjs` file in the root of your project directory (it should live where `package.json` does).

Your `eslint.config.mjs` file should look like this:

```js
import react from '@dozalex/lint/eslint/react';
import webpack from '@dozalex/lint/eslint/webpack';

export default [...react, ...webpack];
```

Separate modules help to include only required config rules.

Some formatting rules have been skipped in favor of Prettier.

## Usage

Add this command to `scripts` of root package.json:

```
"lint:eslint": "eslint . --fix",
```

Add this command to `lint-staged` of root package.json:

```
 "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix --quiet"],
```

## Contribution

Avoid using "recommended" configurations from plugins as they contain outdated recommendations or formatting rules (trust Prettier).
Just copy the rules you need.
