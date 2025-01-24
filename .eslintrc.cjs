/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": false,
        "ts-expect-error": true,
        "ts-nocheck": true,
        "ts-check": true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off", // Disable rule for explicit `any`
    "@typescript-eslint/no-unsafe-assignment": "off", // Disable unsafe assignment checks
    "@typescript-eslint/no-unsafe-member-access": "off", // Disable unsafe member access checks
    "@typescript-eslint/no-unsafe-argument": "off", // Disable unsafe argument checks
  },
};
module.exports = config;
