export type CaseSection = {
  h: string;
  p: string[];
};

export type Case = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year?: string;
  external?: string;
  cover?: string;
  images?: string[];
  sections: CaseSection[];
};

export const site = {
  name: "Владимир Павлов",
  roleLine: "Product Owner",
  //location: "Germany",
  intro:
    "Senior Product Owner с техническим бэкграундом и сильной экспертизой в управлении digital-продуктами, включая финтех-направление. Веду продукты от гипотез и кастдева до MVP, пилотов и масштабирования. Опыт в интеграциях с банками и платёжными сервисами, автоматизации финансовых процессов, работе с API и кросс-функциональными командами.",

  hero: {
    background: "/images/hero/background.png",
    avatar: "/images/hero/avatar.jpg",
  },

  cv: {
    label: "Скачать CV",
    href: "https://disk.yandex.ru/i/9AzZC3xea9Cnbw",
  },

  links: {
    telegram: "",
    github: "",
    linkedin: "",
    email: "mailto:vladimir.pavlov812@gmail.com",
  },

  caseGroups: [
    {
      title: "Продуктовые кейсы",
      items: [
        {
          slug: "yasha",
          title: 'Сервис "Яша". Интеграция маркетплейса и шиномонтажа',
          subtitle:
            "Сервис решает задачу замкнутого цикла онлайн-покупки шин с установкой через проверенные шиномонтажи.",
          tags: ["Product", "Marketplace", "Integrations"],
          cover: "/cases/yasha/cover.png",
          images: [
            "/cases/yasha/1.jpg",
            "/cases/yasha/2.jpg",
            "/cases/yasha/3.jpg",
            "/cases/yasha/4.jpg",
            "/cases/yasha/5.jpg",
          ],
          sections: [],
        },  
        {
          slug: "sdare",
          title: "Sdare - аренда квартир без посредников",
          subtitle:
            "B2C digital-продукт для аренды жилья напрямую от собственников, без агентов и переплат.",
          tags: ["Product", "B2C", "Real Estate"],
          cover: "/cases/sdare/cover1.png",
          images: [
            "/cases/sdare/1.jpg",
            "/cases/sdare/2.jpg",
            "/cases/sdare/3.jpg",
            "/cases/sdare/4.jpg",
            "/cases/sdare/5.jpg",
            "/cases/sdare/6.jpg",
            "/cases/sdare/7.jpg",
            "/cases/sdare/8.jpg",
          ],
          sections: [],
        },
      ] as Case[],
    },
    {
      title: "AI кейсы",
      items: [
        {
          slug: "custdev",
          title: "AI CustDev Assistant",
          subtitle:
            "Кейс автоматизации анализа B2B-интервью в проекте «Сервис Яша» — революционное решение для обработки интервью с владельцами шиномонтажей и партнёрами.",
          tags: ["AI", "CustDev", "Automation"],
          cover: "/cases/custdev/cover.png",
          images: [
            "/cases/custdev/1.jpg",
            "/cases/custdev/2.jpg",
            "/cases/custdev/3.jpg",
            "/cases/custdev/4.jpg",
            "/cases/custdev/5.jpg",
            "/cases/custdev/6.jpg",
          ],
          sections: [],
        },
        {
          slug: "textdocs",
          title: "Google docs automation",
          subtitle: "Кейс: Автоматизация создания тестовой документации с помощью AI.",
          tags: ["AI", "Docs", "Automation"],
          cover: "/cases/textdocs/cover.jpg",
          images: [
            "/cases/textdocs/1.png",
            "/cases/textdocs/2.png",
            "/cases/textdocs/3.png",
            "/cases/textdocs/4.png",
            "/cases/textdocs/5.png",
          ],
          sections: [],
        },
        {
          slug: "metrictree",
          title: "MetricTree",
          subtitle: "Кейс: Создание дерева метрик с помощью AI.",
          tags: ["AI", "Metrics", "Product Analytics"],
          cover: "/cases/metrictree/cover.png",
          images: [
            "/cases/metrictree/1.jpg",
            "/cases/metrictree/2.jpg",
            "/cases/metrictree/3.jpg",
            "/cases/metrictree/4.jpg",
            "/cases/metrictree/5.jpg",
            "/cases/metrictree/6.jpg",
            "/cases/metrictree/7.jpg",
          ],
          sections: [],
        },
      ] as Case[],
    },
    {
      title: "Проектные кейсы",
      items: [
        {
          slug: "seb",
          title: "Rollout SAP (финансовый блок) в Латвии для завода Kärcher",
          subtitle: "Проект внедрения и rollout финансового блока SAP.",
          tags: ["SAP", "Finance", "Enterprise"],
          cover: "/cases/seb/cover.png",
          images: [
            "/cases/seb/1.png",
            "/cases/seb/2.png",
            "/cases/seb/3.png",
            "/cases/seb/4.png",
            "/cases/seb/5.png",
            "/cases/seb/6.png",
          ],
          sections: [],
        },
        {
          slug: "edi",
          title: "Внедрение юридически значимого электронного документооборота (ЭДО) с дилерской сетью",
          subtitle: "Проект внедрения юридически значимого ЭДО с дилерской сетью.",
          tags: ["EDI", "B2B", "Integration"],
          cover: "/cases/edi/cover.png",
          images: [
            "/cases/edi/1.jpg",
            "/cases/edi/2.jpg",
            "/cases/edi/3.jpg",
            "/cases/edi/4.jpg",
            "/cases/edi/5.jpg",
            "/cases/edi/6.jpg",
          ],
          sections: [],
        },
        {
          slug: "conf",
          title:
            "Интеграция с автомобильным конфигуратором (DE): автоматическая генерация персонализированных PDF-брошюр для клиентов через API",
          subtitle:
            "Интеграция с автомобильным конфигуратором и автоматическая генерация PDF-брошюр.",
          tags: ["API", "PDF", "Integration"],
          cover: "/cases/conf/cover.png",
          images: [
            "/cases/conf/1.png",
            "/cases/conf/2.png",
            "/cases/conf/3.png",
            "/cases/conf/4.png",
            "/cases/conf/5.png",
            "/cases/conf/6.png",
          ],
          sections: [],
        },
      ] as Case[],
    },
  ],

  experience: [
    {
      title: "Zoi TechCon GmbH",
      period: "08.2021 - настоящее время",
      bullets: ["Finance Tribe Lead"],
    },
    {
      title: 'Сервис "Яша". Интеграция маркетплейса и шиномонтажа',
      period: "06.2024 - 08.2025",
      bullets: ["Product Owner (проектная работа)"],
    },
    {
      title: "Sdare - аренда квартир без посредников",
      period: "01.2016 - 05.2018",
      bullets: ["Product Owner (проектная работа)"],
    },
    {
      title: "Мерседес-Бенц РУС, АО",
      period: "11.2012 - 07.2021",
      bullets: ["Project Manager / Senior Consultant (B2B финсервисы)"],
    },
  ],

  courses: [
    "Симулятор управления продуктом на основе данных — GoPractice 2025",
    "Юнит-экономика и метрики продукта — SkillBox 2025",
    "Professional Scrum Product Owner™ II (PSPO II) — Scrum 2025",
    "Professional Scrum Product Owner™ I (PSPO I) — Scrum 2025",
  ],

  skills: [
    "Product management в финтехе и e-commerce",
    "Customer Development, продуктовая аналитика, UX-исследования",
    "Запуск MVP, API-интеграции, управление roadmap и бэклогом",
    "Agile / Scrum, работа с кросс-функциональными командами",
    "SAP, ЭДО, интеграции с банковскими системами",
  ],

  sport: [
    "Сноуборд. Каждый сезон хотя бы неделю в горах",
    "Тренажерный зал. 2–3 раза в неделю для свежести головы и тонуса",
    "Стрельба из пистолета (тир). Для концентрации внимания на главном",
  ],

  sportImage: "/images/sport/sport.jpg",

  seo: {
    title: "Vladimir Pavlov",
    description: "Портфолио Павлова Владимира. Product Owner",
    canonical: "https://vladimirpavlov.tech",
    ogTitle: "Vladimir Pavlov",
    ogDescription: "Портфолио Павлова Владимира. Product Owner",
    ogImage: "/images/og/og-image.png",
  },

  analytics: {
    yandexMetrikaId: "103973469",
  },
};