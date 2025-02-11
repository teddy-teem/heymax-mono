import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    ignores: [
      "babel.config.js",
      "tailwind.config.js",
      "metro.config.js",
      "postcss.config.js",
      "node_modules/",
      "scripts/",
      "dist/",
      "build/",
      ".next/",
      ".turbo/",
      ".expo/"
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
      "react": react,
      "react-hooks": reactHooks,
      "import": importPlugin,
    },
    rules: {
      "semi": ["warn", "always"],
      "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
      "no-var": "warn",
      "eqeqeq": "warn",
      "default-case": "warn",
      "default-case-last": "warn",
      "consistent-return": "warn",
      "require-await": "warn",
      "no-mixed-operators": "warn",
      "jsx-quotes": ["warn", "prefer-double"],
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/order": [
        "error",
        {
          "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
          "newlines-between": "ignore",
          "alphabetize": { "order": "asc", "caseInsensitive": true },
        }
      ]
    },
  }
];
