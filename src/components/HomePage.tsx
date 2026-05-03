import { createI18n } from "@hnamhocit/transle/react";
import { defineMessages } from "@hnamhocit/transle";
import { startTransition, useState } from "react";
import InViewMotion from "./InViewMotion";
import en from "../examples/locales/en";
import es from "../examples/locales/es";
import fr from "../examples/locales/fr";
import ja from "../examples/locales/ja";
import ko from "../examples/locales/ko";
import vi from "../examples/locales/vi";

const packageName = "@hnamhocit/transle";
const installCommand = "npm install @hnamhocit/transle";
const reactInstallCommand = "npm install @hnamhocit/transle react";
const heroCopyCommand = `${installCommand}\n${reactInstallCommand}`;
const coreExample = `import { createI18n, defineMessages } from "@hnamhocit/transle";
import en from "./locales/en";
import vi from "./locales/vi";

const i18n = createI18n({
  defaultLocale: "en",
  fallbackLocale: "en",
  persist: true,
  messages: defineMessages({ en, vi })
});

i18n.t("hero.summary", { name: "Nam" });`;

const reactExample = `import { createI18n } from "@hnamhocit/transle/react";
import en from "./locales/en";
import vi from "./locales/vi";

const useI18n = createI18n({
  defaultLocale: "en",
  persist: true,
  messages: { en, vi }
});

export function Greeting() {
  const i18n = useI18n();
  return <p>{i18n.t("hero.summary", { name: "Nam", count: 2 })}</p>;
}`;

const jsonExample = `import { createI18n, defineMessages } from "@hnamhocit/transle";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

const i18n = createI18n({
  defaultLocale: "en",
  fallbackLocale: "en",
  messages: defineMessages({ en, vi })
});`;

const aiSkillPrompt = `You are implementing i18n with @hnamhocit/transle.

Rules:
- Use "@hnamhocit/transle" for vanilla JS/TS.
- Use "@hnamhocit/transle/react" for React.
- Use defineMessages({ en, vi, ... }) when locales come from separate files.
- Use defineLocale(...) inside per-locale TS files when you want strong typing at the source.
- Keep messages nested and use dot-path keys.
- JSON locale files should contain one locale object per file.
- Define defaultLocale and prefer fallbackLocale.
- Use persist when locale should survive reloads.
- Keep the same key paths across locales.
- Do not add a heavier i18n framework unless asked.`;

const locales = [
  { code: "en", label: "English" },
  { code: "vi", label: "Vietnamese" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];
type CopyKey = "hero" | "core" | "react" | "json" | "prompt";

const useSiteI18n = createI18n({
  defaultLocale: "en",
  fallbackLocale: "en",
  persist: {
    key: "transle_site_locale",
  },
  messages: defineMessages({
    en,
    vi,
    fr,
    es,
    ja,
    ko,
  }),
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderCode(code: string, type: "ts" | "bash" | "txt" = "ts") {
  const lines = escapeHtml(code).split("\n");

  return lines
    .map((line, index) => {
      let html = line;
      const stashed: string[] = [];

      function wrap(pattern: RegExp, className: string) {
        html = html.replace(pattern, (match) => {
          const token = `__TOK_${stashed.length}__`;
          stashed.push(`<span class="${className}">${match}</span>`);
          return token;
        });
      }

      if (type === "bash") {
        html = html.replace(/^(npm)(.*)$/u, (_, command, rest) => {
          const highlightedRest = rest.replace(
            /(@hnamhocit\/transle(?:\/react)?)/gu,
            '<span class="tok-string">$1</span>',
          );

          return `<span class="tok-cmd">${command}</span><span class="tok-base">${highlightedRest}</span>`;
        });
      }

      if (type === "txt") {
        wrap(/(@hnamhocit\/transle(?:\/react)?)/gu, "tok-string");
        wrap(/^(Rules:)/u, "tok-key");
      }

      if (type === "ts") {
        wrap(/("@hnamhocit\/transle(?:\/react)?")/gu, "tok-string");
        wrap(/("(?:[^"\\]|\\.)*")/gu, "tok-string");
        wrap(/\b(createI18n|defineMessages|defineLocale)\b/gu, "tok-fn");
        wrap(
          /\b(defaultLocale|fallbackLocale|persist|messages|hero|title|summary|common|hello)\b/gu,
          "tok-prop",
        );
        wrap(/\b(import|const|export|function|return)\b/gu, "tok-key");
        wrap(/\b(true)\b/gu, "tok-num");
      }

      html = html.replace(/__TOK_(\d+)__/gu, (_, tokenIndex) => stashed[Number(tokenIndex)]);

      return `<span class="code-line"><span class="line-no">${index + 1}</span><span class="line-code">${html}</span></span>`;
    })
    .join("");
}

export default function HomePage() {
  const i18n = useSiteI18n();
  const [copyState, setCopyState] = useState<Partial<Record<CopyKey, string>>>({});

  const locale = i18n.getLocale() as LocaleCode;
  const copyIdle = i18n.t("copy.idle");

  async function handleCopy(key: CopyKey, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState((current) => ({ ...current, [key]: i18n.t("copy.success") }));
      window.setTimeout(() => {
        setCopyState((current) => ({ ...current, [key]: copyIdle }));
      }, 1200);
    } catch {
      setCopyState((current) => ({ ...current, [key]: i18n.t("copy.failed") }));
      window.setTimeout(() => {
        setCopyState((current) => ({ ...current, [key]: copyIdle }));
      }, 1200);
    }
  }

  return (
    <main className="shell">
      <div className="site-topbar">
        <a className="site-brand" href="/">
          <span className="site-brand-mark">T</span>
          <span className="site-brand-text">transle</span>
        </a>

        <label className="locale-toolbar">
          <span className="locale-toolbar-label">{i18n.t("topbar.label")}</span>
          <select
            className="locale-select"
            value={locale}
            onChange={(event) => {
              const nextLocale = event.target.value as LocaleCode;
              startTransition(() => {
                i18n.setLocale(nextLocale);
              });
            }}
          >
            {locales.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className="hero">
        <InViewMotion className="hero-copy">
          <p className="eyebrow">{i18n.t("hero.eyebrow")}</p>
          <div className="package-lockup">
            <h1>transle</h1>
            <p className="package-name">{packageName}</p>
          </div>
          <p className="lede">{i18n.t("hero.lede")}</p>

          <div className="hero-meta">
            <span>{i18n.t("hero.badges.react")}</span>
            <span>{i18n.t("hero.badges.files")}</span>
            <span>{i18n.t("hero.badges.speed")}</span>
            <span>{i18n.t("hero.badges.setup")}</span>
            <span>{i18n.t("hero.badges.persist")}</span>
          </div>

          <div className="mini-terminal">
            <div className="mini-head">
              <span>{i18n.t("quickstart.labels.install")}</span>
              <button
                className="copy-button"
                type="button"
                onClick={() => handleCopy("hero", heroCopyCommand)}
              >
                {copyState.hero ?? copyIdle}
              </button>
            </div>
            <pre className="editor compact">
              <code dangerouslySetInnerHTML={{ __html: renderCode(heroCopyCommand, "bash") }} />
            </pre>
          </div>

          <div className="cta-row">
            <a className="button primary" href="#quickstart">
              {i18n.t("hero.ctas.quickstart")}
            </a>
            <a className="button ghost" href="#ai-skill">
              {i18n.t("hero.ctas.prompt")}
            </a>
          </div>
        </InViewMotion>

        <InViewMotion className="hero-panel" delay={0.08}>
          <div className="panel-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span>core.ts</span>
            <button
              className="copy-button subtle"
              type="button"
              onClick={() => handleCopy("core", coreExample)}
            >
              {copyState.core ?? copyIdle}
            </button>
          </div>
          <pre className="editor">
            <code dangerouslySetInnerHTML={{ __html: renderCode(coreExample) }} />
          </pre>
        </InViewMotion>
      </section>

      <section className="bento" id="features">
        <InViewMotion className="card feature-main">
          <p className="eyebrow">{i18n.t("reasons.eyebrow")}</p>
          <h2>{i18n.t("reasons.title")}</h2>
          <p>{i18n.t("reasons.lede")}</p>
        </InViewMotion>

        <InViewMotion className="card stat-card" delay={0.06}>
          <span className="metric-value">0</span>
          <h2>{i18n.t("hero.badges.setup")}</h2>
          <p>{i18n.t("reasons.cards.setup.body")}</p>
        </InViewMotion>

        <InViewMotion className="card quote-card" delay={0.12}>
          <p className="quote">{i18n.t("reasons.cards.files.title")}</p>
          <p className="quote-sub">{i18n.t("reasons.cards.files.body")}</p>
        </InViewMotion>

        <InViewMotion className="card tiny-card" delay={0.18}>
          <h3>{i18n.t("reasons.cards.speed.title")}</h3>
          <p>{i18n.t("reasons.cards.speed.body")}</p>
        </InViewMotion>

        <InViewMotion className="card tiny-card" delay={0.24}>
          <h3>{i18n.t("reasons.cards.setup.title")}</h3>
          <p>{i18n.t("reasons.cards.setup.body")}</p>
        </InViewMotion>

        <InViewMotion className="card tiny-card" delay={0.3}>
          <h3>{i18n.t("reasons.cards.persist.title")}</h3>
          <p>{i18n.t("reasons.cards.persist.body")}</p>
        </InViewMotion>
      </section>

      <section className="section" id="quickstart">
        <div className="section-heading">
          <p className="eyebrow">{i18n.t("quickstart.eyebrow")}</p>
          <h2>{i18n.t("quickstart.title")}</h2>
        </div>

        <div className="split quickstart-split">
          <InViewMotion className="card code-card short-code-card">
            <div className="card-top">
              <h3>{i18n.t("quickstart.labels.install")}</h3>
              <button
                className="copy-button"
                type="button"
                onClick={() => handleCopy("hero", heroCopyCommand)}
              >
                {copyState.hero ?? copyIdle}
              </button>
            </div>
            <pre className="editor">
              <code dangerouslySetInnerHTML={{ __html: renderCode(heroCopyCommand, "bash") }} />
            </pre>
          </InViewMotion>

          <InViewMotion className="card code-card" delay={0.08}>
            <div className="card-top">
              <h3>{i18n.t("quickstart.labels.react")}</h3>
              <button
                className="copy-button"
                type="button"
                onClick={() => handleCopy("react", reactExample)}
              >
                {copyState.react ?? copyIdle}
              </button>
            </div>
            <pre className="editor">
              <code dangerouslySetInnerHTML={{ __html: renderCode(reactExample) }} />
            </pre>
          </InViewMotion>
        </div>

        <InViewMotion className="card code-card quickstart-wide" delay={0.12}>
          <div className="card-top">
            <h3>{i18n.t("quickstart.labels.json")}</h3>
            <button
              className="copy-button"
              type="button"
              onClick={() => handleCopy("json", jsonExample)}
            >
              {copyState.json ?? copyIdle}
            </button>
          </div>
          <pre className="editor">
            <code dangerouslySetInnerHTML={{ __html: renderCode(jsonExample) }} />
          </pre>
        </InViewMotion>
      </section>

      <section className="section muted-section">
        <div className="section-heading">
          <p className="eyebrow">{i18n.t("featureStrip.eyebrow")}</p>
          <h2>{i18n.t("featureStrip.title")}</h2>
        </div>

        <div className="starter-grid">
          <InViewMotion className="card tiny-card">
            <h3>{i18n.t("featureStrip.cards.fallback.title")}</h3>
            <p>{i18n.t("featureStrip.cards.fallback.body")}</p>
          </InViewMotion>
          <InViewMotion className="card tiny-card" delay={0.06}>
            <h3>{i18n.t("featureStrip.cards.persistence.title")}</h3>
            <p>{i18n.t("featureStrip.cards.persistence.body")}</p>
          </InViewMotion>
          <InViewMotion className="card tiny-card" delay={0.12}>
            <h3>{i18n.t("featureStrip.cards.ai.title")}</h3>
            <p>{i18n.t("featureStrip.cards.ai.body")}</p>
          </InViewMotion>
        </div>
      </section>

      <section className="section" id="ai-skill">
        <div className="section-heading">
          <p className="eyebrow">{i18n.t("aiPrompt.eyebrow")}</p>
          <h2>{i18n.t("aiPrompt.title")}</h2>
        </div>

        <InViewMotion className="card code-card">
          <div className="card-top">
            <h3>{i18n.t("aiPrompt.label")}</h3>
            <button
              className="copy-button"
              type="button"
              onClick={() => handleCopy("prompt", aiSkillPrompt)}
            >
              {copyState.prompt ?? copyIdle}
            </button>
          </div>
          <pre className="editor">
            <code dangerouslySetInnerHTML={{ __html: renderCode(aiSkillPrompt, "txt") }} />
          </pre>
        </InViewMotion>
      </section>
    </main>
  );
}
