# Code style configuration

## Includes:

- [Eslint](packages/lint/eslint/README.md)
- [Madge](packages/lint/madge/README.md)
- [Prettier](packages/lint/prettier/README.md)
- [Stylelint](packages/lint/stylelint/README.md)

Every tool is optional.

## Installation

To make use of this lint package, install it as a development dependency of your project:

### Yarn

```shell
yarn add --dev @dozalex/lint eslint prettier stylelint madge husky
```

### NPM

```shell
npm install @dozalex/lint eslint prettier stylelint madge husky --save-dev
```

## Usage

Example of `lint-staged` in your package.json:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["bash -c 'tsc --noEmit'"],
    "*.{css,ts,tsx}": ["stylelint --fix"],
    "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix --quiet"],
    "*": ["prettier -w --log-level error --ignore-unknown"]
  }
}
```

Example of `scripts` in your package.json:

```json
{
  "scripts": {
    "prepare": "husky",
    "lint:ts": "tsc --noEmit",
    "lint:eslint": "eslint . --fix",
    "lint:madge": "madge --circular .",
    "lint:prettier": "prettier . -w --log-level error --ignore-unknown",
    "lint:style": "stylelint . --fix",
    "lint": "yarn lint:madge && yarn lint:style && yarn lint:eslint && yarn lint:ts && yarn lint:prettier"
  }
}
```

Example of `husky/pre-commit`:

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn madge --circular .
yarn lint-staged
```

For more details and example configuration files, see the links above in the 'Includes' section.
