export type CaseSection = { h: string; p: string[] };

export type Case = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year?: string;
  external?: string;

  cover?: string;      // обложка на главной
  images?: string[];   // картинки внутри кейса

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
          cover: "/cases/yasha/1.jpg",
          title: 'Сервис "Яша". Интеграция маркетплейса и шиномонтажа',
          subtitle:
            "Замкнутый цикл онлайн-покупки шин с установкой через проверенные шиномонтажи.",
          tags: ["Product", "Integrations", "B2B2C"],
          images: [
          "/cases/yasha/1.jpg",
          "/cases/yasha/2.jpg",
          "/cases/yasha/3.jpg",
          "/cases/yasha/4.jpg",
          "/cases/yasha/5.jpg",     
          ],
          sections: [
          //  { h: "Контекст", p: ["(добавим)"] },
          ],
        },
        {
          slug: "sdare",
          cover: "/cases/sdare/1.jpg",
          title: "Sdare — аренда квартир без посредников",
          subtitle:
            "B2C digital-продукт для аренды жилья напрямую от собственников, без агентов и переплат.",
          tags: ["Product", "B2C", "MVP"],
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
          sections: [
           // { h: "Описание", p: ["Кейс оформлен изображениями ниже."] },
          ],
        },
      ] as Case[],   // <-- ВАЖНО
    },
    {
      title: "AI cases",
      items: [
        {
          slug: "custdev",
          cover: "/cases/custdev/1.jpg",
          title: "AI CustDev Assistant",
          subtitle:
            "Автоматизация анализа B2B-интервью в проекте «Сервис Яша».",
          tags: ["AI", "Research", "Automation"],
          images: [
          "/cases/custdev/1.jpg",
          "/cases/custdev/2.jpg",
          "/cases/custdev/3.jpg",
          "/cases/custdev/4.jpg",
          "/cases/custdev/5.jpg",
          "/cases/custdev/6.jpg",   
          ],
          sections: [
           // { h: "Проблема", p: ["(добавим)"] },
          ],
        },
        {
          slug: "textdocs",
          cover: "/cases/textdocs/1.png",
          title: "Google docs automation",
          subtitle: "Автоматизация создания тестовой документации с помощью AI.",
          tags: ["AI", "Docs", "Automation"],
          images: [
          "/cases/textdocs/1.png",
          "/cases/textdocs/2.png",
          "/cases/textdocs/3.png",
          "/cases/textdocs/4.png",
          "/cases/textdocs/5.png",
          ],
          sections: [
          //  { h: "Проблема", p: ["(добавим)"] },
          ],
        },
        {
          slug: "metrictree",
          cover: "/cases/metrictree/1.jpg",
          title: "MetricTree",
          subtitle: "Создание дерева метрик с помощью AI.",
          tags: ["AI", "Metrics"],
          images: [
          "/cases/metrictree/1.jpg",
          "/cases/metrictree/2.jpg",
          "/cases/metrictree/3.jpg",
          "/cases/metrictree/4.jpg",
          "/cases/metrictree/5.jpg",
          "/cases/metrictree/6.jpg",
          "/cases/metrictree/7.jpg",
          ],
          sections: [
          //  { h: "Задача", p: ["(добавим)"] },
          ],
        },
      ] as Case[],   // <-- ВАЖНО
    },
    {
      title: "Project cases",
      items: [
        {
          slug: "seb",
          cover: "/cases/seb/1.png",
          title: "Rollout SAP (финансовый блок) в Латвии для завода Kärcher",
          subtitle: "Проект внедрения/роллаута финансового блока.",
          tags: ["SAP", "Finance", "Rollout"],
          images: [
          "/cases/seb/1.png",
          "/cases/seb/2.png",
          "/cases/seb/3.png",
          "/cases/seb/4.png",
          "/cases/seb/5.png",
          "/cases/seb/6.png",
          ],
          sections: [
          //  { h: "Контекст", p: ["(добавим)"] },
          ],
        },
        {
          slug: "edi",
          cover: "/cases/edi/1.jpg",
          title: "Внедрение юридически значимого ЭДО с дилерской сетью",
          subtitle: "Электронный документооборот с дилерами.",
          tags: ["EDI/EDO", "Integrations", "B2B"],
          images: [
          "/cases/edi/1.jpg",
          "/cases/edi/2.jpg",
          "/cases/edi/3.jpg",
          "/cases/edi/4.jpg",
          "/cases/edi/5.jpg",
          "/cases/edi/6.jpg",
          ],
          sections: [
          //  { h: "Контекст", p: ["(добавим)"] },
          ],
        },
        {
          slug: "conf",
          cover: "/cases/conf/1.png",
          title:
            "Интеграция с авто-конфигуратором (DE): генерация PDF-брошюр через API",
          subtitle: "Автоматическая генерация персонализированных PDF для клиентов.",
          tags: ["API", "PDF", "Integration"],
          images: [
          "/cases/conf/1.png",
          "/cases/conf/2.png",
          "/cases/conf/3.png",
          "/cases/conf/4.png",
          "/cases/conf/5.png",
          "/cases/conf/6.png",
          ],
          sections: [
          //  { h: "Контекст", p: ["(добавим)"] },
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