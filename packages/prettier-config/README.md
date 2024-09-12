## @dozalex/prettier-config

To make use of this config, install this packages as a development dependency of your project:

```
yarn add --dev @dozalex/prettier-config prettier
```

Create a `.prettierrc` file in the root of your project directory (it should live where `package.json` does):
```
"@dozalex/prettier-config"
```

Create a `.prettierignore` file in the root of your project directory (it should live where `package.json` does):

```
gitlab-ci.yml
src/locales/**/messages.ts
```

Add this commands to `scripts` of root package.json:

```
"lint:prettier": "prettier 'src/**/*.{ts,tsx}' -c",
```

Add this command to `lint-staged` of root package.json:
```
"prettier --write"
```