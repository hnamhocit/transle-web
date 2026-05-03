import { defineLocale } from "@hnamhocit/transle";

export default defineLocale({
  topbar: {
    label: "Ngôn ngữ",
  },
  hero: {
    eyebrow: "Typed i18n để ship nhanh hơn",
    title: "Ship 6 ngôn ngữ mà không phải gánh thêm cả một stack i18n.",
    summary: "{name} ship {count} ngôn ngữ với locale files tách riêng và setup ít hơn",
    lede:
      "transle được làm ra để developer làm việc sướng hơn: tách file locale, typed keys, setup gần như bằng 0, và API nhỏ để cả team vào việc nhanh.",
    badges: {
      react: "core + react",
      files: "tách file locale",
      speed: "ưu tiên tốc độ dev",
      setup: "setup gần như bằng 0",
      persist: "persist",
    },
    ctas: {
      quickstart: "Quickstart",
      prompt: "AI prompt",
    },
  },
  reasons: {
    eyebrow: "Vì sao chọn transle",
    title: "Tập trung vào DX, tốc độ, và chi phí setup thấp.",
    lede:
      "Nhiều thư viện i18n cố giải quyết mọi thứ, nhưng đổi lại là config dày, runtime nặng, và onboarding lâu. transle giữ cho luồng dùng phổ biến thật nhanh.",
    cards: {
      speed: {
        title: "Tích hợp nhanh ngay từ đầu",
        body: "Import vào, map locale files, rồi ship. Không cần routing layer, plugin maze hay checklist setup dài dòng.",
      },
      setup: {
        title: "Mental model rất nhẹ",
        body: "Bề mặt API nhỏ: createI18n, defineMessages, defineLocale, t, setLocale.",
      },
      files: {
        title: "Hợp với app lớn",
        body: "Mỗi locale một file, lớn lên theo feature folders thay vì dồn hết vào một dictionary khổng lồ khó bảo trì.",
      },
      runtime: {
        title: "Typed keys, runtime gọn",
        body: "Bắt lỗi key sớm trong lúc dev, còn runtime production vẫn đơn giản và dễ đoán.",
      },
      persist: {
        title: "UX cần thiết đã có sẵn",
        body: "Fallback locale và localStorage persistence đã có sẵn, không cần dán thêm logic phụ.",
      },
    },
  },
  showcase: {
    eyebrow: "Đổi cả trang",
    title: "Một dropdown đổi toàn bộ text của page.",
    body: "Landing page này đang dùng chính package transle đã publish, với 6 locale files nối vào cùng một instance.",
    chips: {
      files: "6 file locale",
      package: "test bằng package npm",
      state: "shared locale state",
    },
  },
  quickstart: {
    eyebrow: "Quickstart",
    title: "Copy cấu trúc rồi làm tiếp.",
    labels: {
      install: "Cài đặt",
      react: "React",
      json: "JSON locale files",
    },
  },
  featureStrip: {
    eyebrow: "Có gì sẵn",
    title: "Tính năng runtime đủ dùng, không rườm rà.",
    cards: {
      fallback: {
        title: "Fallback locale",
        body: "Khi thiếu key thì có thể rơi về locale mặc định an toàn thay vì làm vỡ phần copy.",
      },
      persistence: {
        title: "Lưu ngôn ngữ đã chọn",
        body: "Reload vẫn giữ được ngôn ngữ với persist, không cần tự bọc storage.",
      },
      ai: {
        title: "Hợp cho AI coding",
        body: "Locale files rõ ràng, typed keys và API nhỏ giúp coding agent áp dụng nhất quán hơn.",
      },
    },
  },
  aiPrompt: {
    eyebrow: "AI prompt",
    title: "Copy đoạn này cho agent.",
    label: "transle agent prompt",
  },
  copy: {
    idle: "Copy",
    success: "Copied",
    failed: "Failed",
  },
});
