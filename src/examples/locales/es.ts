import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "Idioma",
  },
  hero: {
    eyebrow: "i18n tipado para salir mas rapido",
    title: "Publica 6 idiomas sin cargar una pila i18n pesada.",
    summary: "{name} publica {count} idiomas con archivos separados y menos setup",
    lede:
      "transle está hecho para developer experience: archivos por locale, claves tipadas, setup casi cero y una API pequeña que se aprende rápido.",
    badges: {
      react: "core + react",
      files: "archivos por locale",
      speed: "prioridad a velocidad dev",
      setup: "setup casi cero",
      persist: "persist",
    },
    ctas: {
      quickstart: "Quickstart",
      prompt: "AI prompt",
    },
  },
  reasons: {
    eyebrow: "Por que elegir transle",
    title: "Hecho para DX, velocidad y bajo costo de setup.",
    lede:
      "Las soluciones i18n típicas intentan resolverlo todo y te cobran con más config, más peso runtime y más onboarding.",
    cards: {
      speed: {
        title: "Integración rápida desde el día uno",
        body: "Importa, conecta archivos locale y publica. Sin capa de routing ni checklist enorme.",
      },
      setup: {
        title: "Modelo mental pequeño",
        body: "La API es corta: createI18n, defineMessages, defineLocale, t, setLocale.",
      },
      files: {
        title: "Sirve para apps grandes",
        body: "Un archivo por idioma y crecimiento por feature folders, no un diccionario monolítico imposible de mantener.",
      },
      runtime: {
        title: "Claves tipadas, runtime pequeño",
        body: "Captura errores de claves en desarrollo y mantiene un runtime simple en producción.",
      },
      persist: {
        title: "UX práctica incluida",
        body: "Fallback locale y persistencia con localStorage ya vienen incluidos.",
      },
    },
  },
  showcase: {
    eyebrow: "Toda la página cambia",
    title: "Un dropdown cambia todo el contenido.",
    body: "Esta landing usa el paquete transle publicado con seis archivos locale conectados a una sola instancia.",
    chips: {
      files: "6 archivos locale",
      package: "prueba con npm",
      state: "estado compartido",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "Copia la estructura y sigue.",
    labels: {
      install: "Instalacion",
      react: "React",
      json: "Archivos JSON",
    },
  },
  featureStrip: {
    eyebrow: "Lo que obtienes",
    title: "Funciones runtime utiles, no ceremonias.",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "Las claves faltantes pueden volver a un idioma seguro por defecto.",
      },
      persistence: {
        title: "Persistencia de idioma",
        body: "La selección se mantiene después de recargar con persist.",
      },
      ai: {
        title: "Convenciones para IA",
        body: "Archivos locale claros, claves tipadas y API pequeña para agentes más consistentes.",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "Copia esto para agentes.",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
