module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsonc/recommended-with-jsonc",
  ],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    type: "module"
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        quotes: ["warn", "double"],
        "quote-props": ["warn", "consistent-as-needed"],
        "comma-dangle": ["warn", "always"],
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "warn",
          {
            pathPattern: "^$",
            order: [
              "name",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "keywords",
              "license",
              "author",
              "repository",
              "funding",
              "main",
              "module",
              "types",
              "unpkg",
              "jsdelivr",
              "exports",
              "files",
              "bin",
              "sideEffects",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "husky",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      files: ["*.*js"],
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-eval": "warn",
        "no-empty": "warn",
        "no-extra-semi": "warn",
      },
    },
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
