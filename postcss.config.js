
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');
const postcssimport = require('postcss-import');

module.exports = {
  plugins: [postcsspresetenv, postcssimport, tailwindcss('./tailwind.config.js'), autoprefixer],
};
