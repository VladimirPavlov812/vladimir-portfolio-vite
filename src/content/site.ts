export type CaseSection = { h: string; p: string[] };

export type Case = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year?: string;
  external?: string;
  sections: Array<{ h: string; p: string[] }>;
};

export const site = {
  name: "Vladimir Pavlov",
  roleLine: "Portfolio",
  location: "Berlin, DE",
  intro: "Портфолио: кейсы, опыт, навыки и контакты.",

  cv: { label: "Скачать CV", href: "https://disk.yandex.ru/..." },

  links: {
    telegram: "https://t.me/USERNAME",
    github: "https://github.com/USERNAME",
    linkedin: "https://linkedin.com/in/USERNAME",
    email: "mailto:you@email.com",
  },

    caseGroups: [
    {
      title: "Product cases",
      items: [
        {
          slug: "yasha",
          title: 'Сервис "Яша". Интеграция маркетплейса и шиномонтажа',
          subtitle:
            "Замкнутый цикл онлайн-покупки шин с установкой через проверенные шиномонтажи.",
          tags: ["Product", "Integrations", "B2B2C"],
          sections: [
            { h: "Контекст", p: ["(добавим)"] },
            { h: "Задача", p: ["(добавим)"] },
            { h: "Моя роль", p: ["(добавим)"] },
            { h: "Решение", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
        {
          slug: "sdare",
          title: "Sdare — аренда квартир без посредников",
          subtitle:
            "B2C digital-продукт для аренды жилья напрямую от собственников, без агентов и переплат.",
          tags: ["Product", "B2C", "MVP"],
          sections: [
            { h: "Контекст", p: ["(добавим)"] },
            { h: "Задача", p: ["(добавим)"] },
            { h: "Моя роль", p: ["(добавим)"] },
            { h: "Решение", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
      ] as Case[],   // <-- ВАЖНО
    },
    {
      title: "AI cases",
      items: [
        {
          slug: "custdev",
          title: "AI CustDev Assistant",
          subtitle:
            "Автоматизация анализа B2B-интервью в проекте «Сервис Яша».",
          tags: ["AI", "Research", "Automation"],
          sections: [
            { h: "Проблема", p: ["(добавим)"] },
            { h: "Подход", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
        {
          slug: "textdocs",
          title: "Google docs automation",
          subtitle: "Автоматизация создания тестовой документации с помощью AI.",
          tags: ["AI", "Docs", "Automation"],
          sections: [
            { h: "Проблема", p: ["(добавим)"] },
            { h: "Решение", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
        {
          slug: "metrictree",
          title: "MetricTree",
          subtitle: "Создание дерева метрик с помощью AI.",
          tags: ["AI", "Metrics"],
          sections: [
            { h: "Задача", p: ["(добавим)"] },
            { h: "Решение", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
      ] as Case[],   // <-- ВАЖНО
    },
    {
      title: "Project cases",
      items: [
        {
          slug: "seb",
          title: "Rollout SAP (финансовый блок) в Латвии для завода Kärcher",
          subtitle: "Проект внедрения/роллаута финансового блока.",
          tags: ["SAP", "Finance", "Rollout"],
          sections: [
            { h: "Контекст", p: ["(добавим)"] },
            { h: "Моя роль", p: ["(добавим)"] },
            { h: "Что сделали", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
        {
          slug: "edi",
          title: "Внедрение юридически значимого ЭДО с дилерской сетью",
          subtitle: "Электронный документооборот с дилерами.",
          tags: ["EDI/EDO", "Integrations", "B2B"],
          sections: [
            { h: "Контекст", p: ["(добавим)"] },
            { h: "Моя роль", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
        {
          slug: "conf",
          title:
            "Интеграция с авто-конфигуратором (DE): генерация PDF-брошюр через API",
          subtitle: "Автоматическая генерация персонализированных PDF для клиентов.",
          tags: ["API", "PDF", "Integration"],
          sections: [
            { h: "Контекст", p: ["(добавим)"] },
            { h: "Решение", p: ["(добавим)"] },
            { h: "Результат", p: ["(добавим)"] },
          ],
        },
      ] as Case[],   // <-- ВАЖНО
    },
  ],

  experience: [
    {
      title: "Company / Role",
      period: "2024 — now",
      bullets: [
        "Коротко про результат (цифры/метрики).",
        "Что делал: discovery/delivery/аналитика/коммуникации.",
      ],
    },
  ],

  courses: ["(добавим при переносе)"],
  skills: ["Product discovery", "CustDev", "Roadmap", "SQL", "AI tools"],
  sport: ["(добавим при переносе)"],
};