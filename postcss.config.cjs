// CommonJS PostCSS config to ensure compatibility with tools that expect CJS.
module.exports = {
  plugins: [require("@tailwindcss/postcss")(), require("autoprefixer")()],
};
