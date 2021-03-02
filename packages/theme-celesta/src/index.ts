import { path } from "@vuepress/utils"
import type { Theme } from "@vuepress/core"
import { assignDefaultOptions, extendsPageData, onInitialized } from "./node"

export const theme: Theme = (themeOptions, app) => {
  assignDefaultOptions(themeOptions, app.options.lang)

  return {
    name: "vuepress-theme-celesta",

    plugins: [
      "@vuepress/plugin-debug",
      [
        "@vuepress/plugin-active-header-links",
        { headerLinkSelector: ".catalog__link" },
      ],
      ["@vuepress/theme-data", { themeData: themeOptions }],
      "vuepress-plugin-post-filter",
    ],

    layouts: path.resolve(__dirname, "./layouts"),

    clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.ts"),

    clientAppSetupFiles: path.resolve(__dirname, "./clientAppSetup.ts"),

    extendsPageData,

    onInitialized,
  }
}

export default theme
export * from "./types"