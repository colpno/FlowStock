/**
 * A base Prettier configuration for the repository.
 *
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  objectWrap: "preserve",
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  plugins: ["prettier-plugin-tailwindcss"],
  jsxSingleQuote: false,
  htmlWhitespaceSensitivity: "css",
  singleAttributePerLine: false,
  tailwindStylesheet: "./src/app/assets/styles/globals.css",
  tailwindFunctions: ["cva", "cn"],
};

export default config;
