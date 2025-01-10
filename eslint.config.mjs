import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import next from "eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        parser: "@typescript-eslint/parser",
      },
    },
    plugins: {
      react,
      next,
    },
  },

  prettier,
];
