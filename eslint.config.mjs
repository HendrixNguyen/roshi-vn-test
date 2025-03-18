import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

/** @type {import('eslint').Linter.Config[]} */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-sort-props": [
        "error",
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: "last",
          reservedFirst: true,
        },
      ],
    },
  },
];

export default eslintConfig;
