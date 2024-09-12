# Code style configuration

Includes:
- [@dozalex/eslint-config](packages/eslint-config/README.md)
- [@dozalex/prettier-config](packages/prettier-config/README.md)
- [@dozalex/stylelint-config](packages/stylelint-config/README.md)

## Configuration

Example of `lint-staged` in your package.json:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "bash -c tsc --noEmit",
      "stylelint --fix",
      "eslint --fix --quiet",
      "prettier --write"
    ]
  }
}
```

Example of `scripts` in your package.json:

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint:ts": "tsc --noEmit",
    "lint:eslint": "eslint 'src/**/*.{ts,tsx}' --fix",
    "lint:prettier": "prettier 'src/**/*.{ts,tsx}' -c",
    "lint:style": "stylelint 'src/**/styled.ts' --fix",
    "lint": "yarn lint:eslint && yarn lint:prettier && yarn lint:style && yarn lint:ts"
  }
}
```