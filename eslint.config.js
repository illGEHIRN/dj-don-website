import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  // { files: ["**/*.astro"], plugins: { astro: eslintPluginAstro.configs.recommended }, language: "astro/astro", extends: ["astro/recommended"] },
  ...eslintPluginAstro.configs.recommended,
  globalIgnores([
    "AGENTS.md",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "pnpm-lock.yaml",
    "node_modules/**",
    "dist/**",
    ".astro/**",
    ".cache/**",
    ".svelte-kit/**",
  ]),
]);
