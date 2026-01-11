# @dozalex/lint/madge

Provides [Madge](https://github.com/pahen/madge) configuration.

## Installation

To use this config, install this packages as a development dependency of your project:

### Yarn

```shell
yarn add --dev madge husky
```

### NPM

```shell
npm install madge husky --save-dev
```

## Configuration

Create a `.madgerc` file in the root of your project directory (it should live where `package.json` does).

Your `.madgerc` file should look like this:

```json
{
  "detectiveOptions": {
    "ts": {
      "skipTypeImports": true
    }
  },
  "fileExtensions": ["ts", "tsx"],
  "tsConfig": "./tsconfig.json"
}
```

## Usage

Add this command to `scripts` of root package.json:

```
"lint:madge": "madge --circular .",
```

Add this command to `husky/pre-commit`:

```
yarn madge --circular .
```

It's important to use it here to trigger it once for the whole project.
