import { normalize } from "./utils"
import type { App } from "@vuepress/core"
import type { ThemeOptions } from "../types"

const normalizeTranslations = (raw: Record<string, string> = {}) =>
  Object.keys(raw).reduce((map, key) => {
    map[normalize(key)] = raw[key]
    return map
  }, {})

export const writeTranslations = async (options: ThemeOptions, app: App) => {
  const defaultTranslations = normalizeTranslations(options.translations)

  const localeTranslations: Record<string, Record<string, string>> = {}
  for (const key in options.locales) {
    localeTranslations[key] = normalizeTranslations(
      options.locales?.[key].translations
    )
  }

  await app.writeTemp(
    "celesta/translations.js",
    [
      `export const defaultTranslations = ${JSON.stringify(
        defaultTranslations
      )}`,
      `export const localeTranslations = ${JSON.stringify(localeTranslations)}`,
    ].join(";")
  )
}
