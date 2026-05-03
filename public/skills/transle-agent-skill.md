# transle agent skill

Use this when implementing internationalization with `@hnamhocit/transle`.

## Rules

- Use `createI18n` from `@hnamhocit/transle` for vanilla JavaScript or TypeScript.
- Use `createI18n` from `@hnamhocit/transle/react` for React apps.
- Keep locale messages nested and access them with dot-path keys like `auth.signIn`.
- Always define `defaultLocale`.
- Prefer defining `fallbackLocale` when product copy must not disappear on missing keys.
- Use `persist: true` or `persist: { key: "..." }` when locale should survive reloads.
- Use `t(key, params)` for interpolation.
- Avoid heavier i18n frameworks unless the user explicitly needs advanced ICU formatting, routing-aware locales, or remote translation loading.
- When adding a new translation key, add the same key path across all supported locales.

## Starter

```ts
import { createI18n } from "@hnamhocit/transle";

export const i18n = createI18n({
  defaultLocale: "en",
  fallbackLocale: "en",
  persist: true,
  messages: {
    en: {
      common: {
        hello: "Hello {name}",
      },
    },
    vi: {
      common: {
        hello: "Xin chao {name}",
      },
    },
  },
});
```
