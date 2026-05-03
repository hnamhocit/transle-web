import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "Langue",
  },
  hero: {
    eyebrow: "Un i18n type pour livrer plus vite",
    title: "Livrez 6 langues sans embarquer une pile i18n lourde.",
    summary: "{name} livre {count} langues avec des fichiers separes et moins de setup",
    lede:
      "transle met l'accent sur l'expérience développeur : fichiers de locale séparés, clés typées, configuration minimale et une API minuscule.",
    badges: {
      react: "core + react",
      files: "fichiers de locale separes",
      speed: "priorite a la vitesse dev",
      setup: "setup quasi nul",
      persist: "persist",
    },
    ctas: {
      quickstart: "Quickstart",
      prompt: "AI prompt",
    },
  },
  reasons: {
    eyebrow: "Pourquoi choisir transle",
    title: "Pense pour le DX, la vitesse, et un setup leger.",
    lede:
      "Les stacks i18n classiques veulent tout résoudre, mais vous font payer en configuration, poids runtime et temps d'onboarding.",
    cards: {
      speed: {
        title: "Intégration rapide",
        body: "Importez, mappez les fichiers de locale, puis livrez. Pas de couche de routing ni de checklist géante.",
      },
      setup: {
        title: "Modèle mental simple",
        body: "Une petite API : createI18n, defineMessages, defineLocale, t, setLocale.",
      },
      files: {
        title: "Tient la route sur gros projets",
        body: "Un fichier par langue, une structure qui grandit par fonctionnalité au lieu d'un dictionnaire monolithique.",
      },
      runtime: {
        title: "Clés typées, runtime léger",
        body: "Les erreurs de clé sont attrapées côté dev, tout en gardant un runtime prévisible.",
      },
      persist: {
        title: "UX pratique incluse",
        body: "Fallback locale et persistance localStorage sont déjà intégrés.",
      },
    },
  },
  showcase: {
    eyebrow: "Toute la page change",
    title: "Un seul menu change tout le contenu.",
    body: "Cette page tourne avec le package transle publié et six fichiers de locale reliés à une seule instance.",
    chips: {
      files: "6 fichiers de locale",
      package: "test via npm",
      state: "état partagé",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "Copiez la structure et avancez.",
    labels: {
      install: "Installation",
      react: "React",
      json: "Fichiers JSON",
    },
  },
  featureStrip: {
    eyebrow: "Ce que vous obtenez",
    title: "Des fonctions runtime utiles, pas du ceremoniel.",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "Les clés manquantes peuvent revenir à une locale de secours fiable.",
      },
      persistence: {
        title: "Persistance de langue",
        body: "La langue choisie reste après reload avec persist.",
      },
      ai: {
        title: "Conventions compatibles IA",
        body: "Fichiers de locale clairs, clés typées et petite API pour des agents plus cohérents.",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "Copiez ceci pour les agents.",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
