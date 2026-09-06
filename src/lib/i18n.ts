export type Locale = "bg" | "en";

export const defaultLocale: Locale = "bg";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    process: string;
    consult: string;
    bookCall: string;
  };
  hero: {
    brand: string;
    headline: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    support: string;
    items: { title: string; body: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    support: string;
    imageAlt: string;
    steps: { number: string; title: string; body: string }[];
  };
  consult: {
    eyebrow: string;
    title: string;
    support: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    goal: string;
    goalPlaceholder: string;
    submit: string;
    submitting: string;
    error: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
  };
  footer: {
    disclaimer: string;
  };
  lang: {
    label: string;
    bg: string;
    en: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  bg: {
    meta: {
      title: "Meridian Credit — Кредитни консултации с фокус върху жилищен кредит",
      description:
        "Безплатна кредитна консултация за всички видове кредити. Основен фокус — жилищни кредити. Независим съвет при избор на оферта.",
    },
    nav: {
      services: "Кредити",
      process: "Процес",
      consult: "Консултация",
      bookCall: "Безплатна консултация",
    },
    hero: {
      brand: "Meridian Credit",
      headline: "Жилищен кредит — с ясен план от първия разговор.",
      support:
        "Работим с всички видове кредити, а основният ни фокус е жилищното финансиране. Консултацията за вас е безплатна.",
      ctaPrimary: "Заяви безплатна консултация",
      ctaSecondary: "Виж видовете кредити",
      imageAlt:
        "Финансови документи и калкулатор на бюро, които подсказват внимателен преглед на кредит",
    },
    services: {
      eyebrow: "Кредити",
      title: "Всички видове кредити. Най-силен фокус — жилищните.",
      support:
        "Помагаме ви да сравните условия, да подредите документите и да изберете оферта, която пасва на бюджета и срока ви.",
      items: [
        {
          title: "Жилищни кредити",
          body: "Основният ни фокус: покупка, строеж, ремонт или рефинансиране на жилище. Разглеждаме лихви, такси, самоучастие и срок — преди да кандидатствате.",
        },
        {
          title: "Потребителски и бързи кредити",
          body: "Когато ви трябва по-малко финансиране, сравняваме оферти и ви казваме ясно кога потребителският кредит има смисъл — и кога е по-скъп от очакваното.",
        },
        {
          title: "Автокредити и други продукти",
          body: "Автокредит, кредит за бизнес нужди или консолидиране на задължения — преглеждаме вариантите и ви насочваме към най-чистата структура за вашия случай.",
        },
      ],
    },
    process: {
      eyebrow: "Процес",
      title: "От първия разговор до подадена заявка — безплатно за вас.",
      support:
        "Консултацията е безплатна за клиента. Без натиск за конкретна банка — целта е условия, които реално можете да обслужвате.",
      imageAlt: "Ръце, които преглеждат документи по време на консултация",
      steps: [
        {
          number: "01",
          title: "Безплатна консултация",
          body: "Кратък разговор за целта, бюджета, дохода и предпочитания срок — особено ако търсите жилищен кредит.",
        },
        {
          number: "02",
          title: "Сравнение на оферти",
          body: "Получавате ясна картина на подходящите продукти: лихва, такси, месечна вноска и какво се изисква като документи.",
        },
        {
          number: "03",
          title: "Кандидатстване с насоки",
          body: "Помагаме с подготовката на документите и следващите стъпки, докато заявката е подадена и условията са ясни.",
        },
      ],
    },
    consult: {
      eyebrow: "Консултация",
      title: "Безплатна консултация — кажете ни какъв кредит търсите.",
      support:
        "Напишете ни кратко за жилищния или друг кредит, който ви интересува. Отговаряме до един работен ден със свободни часове. Безплатно за вас.",
      emailLabel: "Имейл",
      phoneLabel: "Телефон",
      hoursLabel: "Работно време",
      hoursValue: "Понеделник–петък, 9:00–17:00",
    },
    form: {
      name: "Име и фамилия",
      namePlaceholder: "Иван Петров",
      email: "Имейл",
      emailPlaceholder: "vie@email.com",
      phone: "Телефон (по желание)",
      phonePlaceholder: "0888 000 000",
      goal: "Какъв кредит ви интересува?",
      goalPlaceholder:
        "Жилищен кредит, рефинансиране, потребителски, автокредит или друго…",
      submit: "Заяви безплатна консултация",
      submitting: "Изпращане…",
      error:
        "Моля, попълнете име, имейл и какъв кредит търсите, за да се подготвим за разговора.",
      successTitle: "Заявката е получена",
      successBody:
        "Ще прегледаме бележката ви и ще отговорим до един работен ден със свободни часове за безплатната консултация.",
      sendAnother: "Изпрати нова заявка",
    },
    footer: {
      disclaimer:
        "Независими кредитни консултации. Консултацията е безплатна за клиента. Не сме банка и не предоставяме самия кредит.",
    },
    lang: {
      label: "Език",
      bg: "БГ",
      en: "EN",
    },
  },
  en: {
    meta: {
      title: "Meridian Credit — Loan consulting focused on home mortgages",
      description:
        "Free credit consultation for all loan types. Primary focus — residential mortgages. Independent guidance when comparing offers.",
    },
    nav: {
      services: "Loans",
      process: "Process",
      consult: "Consult",
      bookCall: "Free consultation",
    },
    hero: {
      brand: "Meridian Credit",
      headline: "Home loans — with a clear plan from the first call.",
      support:
        "We advise on all loan types, with a primary focus on residential mortgages. Your consultation is free.",
      ctaPrimary: "Request a free consultation",
      ctaSecondary: "See loan types",
      imageAlt:
        "Financial documents and calculator on a desk, suggesting careful credit review",
    },
    services: {
      eyebrow: "Loans",
      title: "All loan types. Strongest focus — residential.",
      support:
        "We help you compare terms, organize documents, and choose an offer that fits your budget and timeline.",
      items: [
        {
          title: "Residential mortgages",
          body: "Our core focus: buying, building, renovating, or refinancing a home. We review rates, fees, down payment, and term — before you apply.",
        },
        {
          title: "Consumer and personal loans",
          body: "When you need smaller financing, we compare offers and tell you plainly when a consumer loan makes sense — and when it costs more than expected.",
        },
        {
          title: "Auto loans and other products",
          body: "Auto finance, business-related credit, or consolidating obligations — we review the options and guide you toward the cleanest structure for your case.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "From first call to application — free for you.",
      support:
        "Consultation is free for the client. No pressure toward a specific bank — the goal is terms you can actually afford.",
      imageAlt: "Hands reviewing paperwork during a consulting session",
      steps: [
        {
          number: "01",
          title: "Free consultation",
          body: "A short call about your goal, budget, income, and preferred term — especially if you are looking for a home loan.",
        },
        {
          number: "02",
          title: "Offer comparison",
          body: "You get a clear picture of suitable products: rate, fees, monthly payment, and which documents are required.",
        },
        {
          number: "03",
          title: "Guided application",
          body: "We help prepare documents and next steps until the application is submitted and the terms are clear.",
        },
      ],
    },
    consult: {
      eyebrow: "Consult",
      title: "Free consultation — tell us which loan you need.",
      support:
        "Share a short note about the home loan or other credit you are considering. We reply within one business day with available times. Free for you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursValue: "Monday–Friday, 9am–5pm",
    },
    form: {
      name: "Full name",
      namePlaceholder: "Jordan Blake",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone (optional)",
      phonePlaceholder: "0888 000 000",
      goal: "Which loan are you interested in?",
      goalPlaceholder:
        "Home mortgage, refinance, consumer loan, auto loan, or something else…",
      submit: "Request a free consultation",
      submitting: "Sending…",
      error:
        "Please fill in your name, email, and which loan you need so we can prepare for the call.",
      successTitle: "Request received",
      successBody:
        "We'll review your note and reply within one business day with available times for your free consultation.",
      sendAnother: "Send another request",
    },
    footer: {
      disclaimer:
        "Independent loan consulting. Consultation is free for the client. We are not a bank and do not issue the loan ourselves.",
    },
    lang: {
      label: "Language",
      bg: "BG",
      en: "EN",
    },
  },
};
