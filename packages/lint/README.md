# @dozalex/lint

## Includes:

- [Eslint](./eslint/README.md)
- [Madge](./madge/README.md)
- [Prettier](./prettier/README.md)
- [Stylelint](./stylelint/README.md)

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
    "lint:madge": "madge --circular src packages/*/src",
    "lint:prettier": "prettier . -w --log-level error --ignore-unknown",
    "lint:style": "stylelint \"{src,packages/*/src}/**/*.css\" --fix",
    "lint": "yarn lint:madge && yarn lint:style && yarn lint:eslint && yarn lint:ts && yarn lint:prettier"
  }
}
```

Example of `husky/pre-commit`:

```
yarn madge --circular src packages/*/src
yarn lint-staged
yarn lint:ts
```

For more details and example configuration files, see the links above in the 'Includes' section.
