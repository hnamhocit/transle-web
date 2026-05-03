import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "언어",
  },
  hero: {
    eyebrow: "더 빨리 배포하는 typed i18n",
    title: "무거운 i18n 스택 없이 6개 언어를 배포.",
    summary: "{name} 는 분리된 locale files 로 {count}개 언어를 더 적은 setup 으로 배포합니다",
    lede:
      "transle 는 developer experience 중심입니다. locale 파일 분리, 타입 키, 거의 0에 가까운 setup, 작고 배우기 쉬운 API를 제공합니다.",
    badges: {
      react: "core + react",
      files: "분리된 locale files",
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
    eyebrow: "왜 transle 인가",
    title: "DX, 개발 속도, 낮은 setup 비용에 집중.",
    lede:
      "보통의 i18n 스택은 모든 문제를 풀려고 하지만 그 대가로 config, runtime 무게, 팀 온보딩 비용이 커집니다. transle 는 자주 쓰는 흐름을 빠르게 만듭니다.",
    cards: {
      speed: {
        title: "첫날부터 빠른 통합",
        body: "import 하고 locale files 를 연결하면 끝입니다. routing layer 나 긴 초기 설정이 필요 없습니다.",
      },
      setup: {
        title: "작은 mental model",
        body: "API 는 createI18n, defineMessages, defineLocale, t, setLocale 정도로 작게 유지됩니다.",
      },
      files: {
        title: "큰 앱에도 맞는 구조",
        body: "언어별 파일을 나눠 관리하고, 거대한 단일 dictionary 로 몰아넣지 않아도 됩니다.",
      },
      runtime: {
        title: "typed keys, 작은 runtime",
        body: "개발 중 key 실수를 잡아주면서도 production runtime 은 단순하게 유지합니다.",
      },
      persist: {
        title: "실전 UX 기본 제공",
        body: "fallback locale 과 localStorage persist 가 기본으로 들어 있습니다.",
      },
    },
  },
  showcase: {
    eyebrow: "페이지 전체 전환",
    title: "드롭다운 하나로 전체 페이지가 바뀝니다.",
    body: "이 landing page 는 배포된 transle 패키지를 사용하고, 6개의 locale files 를 하나의 instance 에 연결합니다.",
    chips: {
      files: "6 locale files",
      package: "npm package test",
      state: "shared locale state",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "구조를 그대로 가져가면 됩니다.",
    labels: {
      install: "Install",
      react: "React",
      json: "JSON locale files",
    },
  },
  featureStrip: {
    eyebrow: "포함된 것",
    title: "불필요한 ceremony 대신 실용적인 runtime 기능.",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "키가 빠져도 안전한 기본 locale 로 되돌릴 수 있습니다.",
      },
      persistence: {
        title: "Locale persistence",
        body: "persist 로 새로고침 후에도 선택한 언어를 유지합니다.",
      },
      ai: {
        title: "AI 친화적 규칙",
        body: "명확한 locale files, typed keys, 작은 API 덕분에 coding agent 도 일관되게 적용하기 쉽습니다.",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "agent 용으로 이 내용을 복사하세요.",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
