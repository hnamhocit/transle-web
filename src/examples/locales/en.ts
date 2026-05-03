import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "Locale",
  },
  hero: {
    eyebrow: "Typed i18n for shipping faster",
    title: "Ship 6 languages without shipping i18n baggage.",
    summary: "{name} ships {count} languages with split locale files and less setup",
    lede:
      "transle is built for developer experience: split locale files, typed keys, zero-framework setup, and a tiny API your team can learn in minutes.",
    badges: {
      react: "core + react",
      files: "split locale files",
      speed: "dev speed first",
      setup: "zero-cost setup",
      persist: "persist",
    },
    ctas: {
      quickstart: "Quickstart",
      prompt: "AI prompt",
    },
  },
  reasons: {
    eyebrow: "Why choose transle",
    title: "Built for DX, speed, and low setup cost.",
    lede:
      "Typical i18n stacks solve everything and make you pay for it in config, runtime weight, and team onboarding. transle keeps the common path fast.",
    cards: {
      speed: {
        title: "Faster day-one integration",
        body: "Import it, map locale files, and ship. No routing layer, plugin maze, or giant bootstrapping checklist.",
      },
      setup: {
        title: "Zero-cost mental model",
        body: "The API surface stays small: createI18n, defineMessages, defineLocale, t, setLocale.",
      },
      files: {
        title: "Scales with big apps",
        body: "Keep one file per locale and grow by feature folders instead of forcing everything into one monolith dictionary.",
      },
      runtime: {
        title: "Typed keys, tiny runtime",
        body: "Catch key mistakes in development while keeping production runtime simple and predictable.",
      },
      persist: {
        title: "Practical UX included",
        body: "Fallback locale and localStorage persistence are built in, so real product behavior does not need extra glue.",
      },
    },
  },
  showcase: {
    eyebrow: "Whole page switch",
    title: "One dropdown changes the entire page.",
    body: "This landing page is using the published transle package with six locale files wired into one shared instance.",
    chips: {
      files: "6 locale files",
      package: "npm package test",
      state: "shared locale state",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "Copy the structure and move.",
    labels: {
      install: "Install",
      react: "React",
      json: "JSON locale files",
    },
  },
  featureStrip: {
    eyebrow: "What you get",
    title: "Useful runtime features, not ceremony.",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "Missing keys can fall back to a safe default locale instead of silently breaking copy.",
      },
      persistence: {
        title: "Locale persistence",
        body: "Keep the selected language after reload with persist, no extra storage wrapper needed.",
      },
      ai: {
        title: "AI-ready conventions",
        body: "Locale files, typed keys, and a small API are easier for coding agents to apply consistently.",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "Copy this for agents.",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
