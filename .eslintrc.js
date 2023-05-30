module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "sort-keys-custom-order",
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
    "react/prop-types": "off",
    "no-undef": "error",
    "no-var": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
