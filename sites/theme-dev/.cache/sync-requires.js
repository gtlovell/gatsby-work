const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/garrettlovell/_codes/_GASTBY/gatsby-intermediate/sites/theme-dev/.cache/dev-404-page.js"))),
  "component---packages-gatsby-theme-docs-src-templates-docs-page-template-js": hot(preferDefault(require("/Users/garrettlovell/_codes/_GASTBY/gatsby-intermediate/packages/gatsby-theme-docs/src/templates/docs-page-template.js")))
}

