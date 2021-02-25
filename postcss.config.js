const path = require("path")

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: { config: path.resolve(__dirname, "./tailwind.config.js") },
    "postcss-nesting": {},
    autoprefixer: {},
    "postcss-csso": {},
  },
}
