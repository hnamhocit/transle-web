import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "言語",
  },
  hero: {
    eyebrow: "より速く出せる typed i18n",
    title: "重い i18n スタックなしで 6 言語を公開。",
    summary: "{name} は分割 locale files で {count} 言語を少ない setup で出せます",
    lede:
      "transle は developer experience を優先します。locale ファイル分割、型付きキー、ほぼゼロ設定、小さく覚えやすい API です。",
    badges: {
      react: "core + react",
      files: "分割 locale files",
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
    eyebrow: "transle を選ぶ理由",
    title: "DX、実装速度、低コスト setup を重視。",
    lede:
      "一般的な i18n は多機能ですが、その代わりに設定、runtime の重さ、チームの学習コストが増えます。transle は日常的な実装フローを速くします。",
    cards: {
      speed: {
        title: "初日から導入が速い",
        body: "import して locale files をつなげばすぐ使えます。routing layer や巨大な初期設定は不要です。",
      },
      setup: {
        title: "小さい mental model",
        body: "API は createI18n, defineMessages, defineLocale, t, setLocale に絞られています。",
      },
      files: {
        title: "大きいアプリでも保守しやすい",
        body: "言語ごとに 1 ファイルで管理し、巨大な 1 ファイル辞書にしなくて済みます。",
      },
      runtime: {
        title: "typed keys と軽い runtime",
        body: "キーのミスを開発中に見つけつつ、本番 runtime は小さく保てます。",
      },
      persist: {
        title: "実用的な UX が最初からある",
        body: "fallback locale と localStorage persist が最初から入っています。",
      },
    },
  },
  showcase: {
    eyebrow: "ページ全体を切り替え",
    title: "1つのドロップダウンでページ全体が変わる。",
    body: "この landing page は公開済み transle パッケージを使い、6 つの locale files を 1 つの instance に接続しています。",
    chips: {
      files: "6 locale files",
      package: "npm package test",
      state: "shared locale state",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "構成をそのまま持っていけます。",
    labels: {
      install: "Install",
      react: "React",
      json: "JSON locale files",
    },
  },
  featureStrip: {
    eyebrow: "含まれているもの",
    title: "儀式ではなく、実用的な runtime 機能。",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "キーが欠けても安全な default locale に戻せます。",
      },
      persistence: {
        title: "Locale persistence",
        body: "persist で再読み込み後も言語選択を維持できます。",
      },
      ai: {
        title: "AI 向けの扱いやすい構成",
        body: "分かりやすい locale files、typed keys、小さい API で coding agent も安定しやすいです。",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "agent 用にこれをコピー。",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
