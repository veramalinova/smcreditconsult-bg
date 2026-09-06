export type Locale = "bg" | "en";

export const defaultLocale: Locale = "bg";

export type ServiceId = "mortgage" | "consumer" | "refinance";

export type ServicePage = {
  id: ServiceId;
  href: string;
  title: string;
  short: string;
  eyebrow: string;
  headline: string;
  intro: string;
  points: string[];
  forWhomTitle: string;
  forWhom: string[];
  cta: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  brand: string;
  nav: {
    home: string;
    services: string;
    process: string;
    about: string;
    useful: string;
    consult: string;
    phoneAria: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    support: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
    servicesTitle: string;
    servicesSupport: string;
    whyTitle: string;
    whyItems: { title: string; body: string }[];
    processTitle: string;
    processSupport: string;
  };
  servicesOverview: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    support: string;
  };
  services: Record<ServiceId, ServicePage>;
  processPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    support: string;
    steps: { number: string; title: string; body: string }[];
    note: string;
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    body: string[];
    imageAlt: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
  };
  usefulPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    support: string;
    tipsTitle: string;
    tips: { title: string; body: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  consultPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    support: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  ctaBand: { title: string; button: string };
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
    services: string;
    company: string;
    legal: string;
    contacts: string;
    disclaimer: string;
  };
  lang: { label: string; bg: string; en: string };
};

const bgServices: Record<ServiceId, ServicePage> = {
  mortgage: {
    id: "mortgage",
    href: "/uslugi/ipotechnen-kredit",
    title: "Ипотечен кредит",
    short: "Жилищен кредит за покупка, строеж или ремонт — основният ни фокус.",
    eyebrow: "Жилищно финансиране",
    headline: "Ипотечен кредит с ясни условия от първия разговор",
    intro:
      "Помагаме ви да сравните банкови оферти за покупка на жилище, строеж, ремонт или други цели, обезпечени с имот. Работим независимо и безплатно за вас.",
    points: [
      "Сравнение на лихви, такси, ГПР и месечна вноска",
      "Оценка на самоучастие, срок и одобряемост",
      "Подготовка на документи и насоки до одобрение",
      "Съдействие и при рефинансиране на съществуваща ипотека",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Купувате първо или следващо жилище",
      "Планирате строеж или основен ремонт",
      "Искате по-ясна картина преди среща с банка",
    ],
    cta: "Заяви консултация за ипотечен кредит",
  },
  consumer: {
    id: "consumer",
    href: "/uslugi/potrebitelski-kredit",
    title: "Потребителски кредит",
    short:
      "Потребителски и лични кредити с ясни условия и реалистична вноска.",
    eyebrow: "Лични нужди",
    headline: "Потребителски кредит без излишни изненади",
    intro:
      "Когато ви трябва финансиране за ремонт, автомобил, обединяване на задължения или други лични цели, сравняваме оферти и ви казваме ясно какво реално ще струва кредитът.",
    points: [
      "Сравнение на лихва, такси и срок",
      "Оценка дали потребителският кредит е по-добър от алтернатива",
      "Помощ с документи и кандидатстване",
      "Честен разговор кога кредитът не е добра идея",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Имате конкретна сума и срок в главата си",
      "Искате бърза, но добре премислена оферта",
      "Искате да избегнете скрити такси",
    ],
    cta: "Заяви консултация за потребителски кредит",
  },
  refinance: {
    id: "refinance",
    href: "/uslugi/refinansirane",
    title: "Рефинансиране",
    short:
      "Прехвърляне към по-добра оферта, когато текущият кредит вече не ви устройва.",
    eyebrow: "По-добри условия",
    headline: "Рефинансиране, което реално спестява",
    intro:
      "Преглеждаме текущия ви кредит и проверяваме дали нова оферта ще намали вноската или общата цена — след такси за предсрочно погасяване и прехвърляне.",
    points: [
      "Сравнение на стара и нова месечна вноска",
      "Калкулация на такси и реална икономия",
      "Варианти за ипотечно и потребителско рефинансиране",
      "Подкрепа през целия процес на прехвърляне",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Лихвата или вноската вече са високи",
      "Искате да обедините няколко кредита",
      "Искате по-кратък или по-дълъг срок с ясна сметка",
    ],
    cta: "Заяви консултация за рефинансиране",
  },
};

const enServices: Record<ServiceId, ServicePage> = {
  mortgage: {
    id: "mortgage",
    href: "/uslugi/ipotechnen-kredit",
    title: "Mortgage loan",
    short: "Home loans for purchase, construction, or renovation — our core focus.",
    eyebrow: "Home financing",
    headline: "Mortgage advice with clear terms from the first call",
    intro:
      "We help you compare bank offers for buying a home, building, renovating, or other property-secured goals. Independent guidance, free for you.",
    points: [
      "Compare rates, fees, APR, and monthly payments",
      "Assess down payment, term, and approval likelihood",
      "Document prep and guidance through approval",
      "Support for refinancing an existing mortgage too",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "Buying a first or next home",
      "Planning construction or a major renovation",
      "Wanting clarity before you talk to a bank",
    ],
    cta: "Request mortgage consultation",
  },
  consumer: {
    id: "consumer",
    href: "/uslugi/potrebitelski-kredit",
    title: "Consumer loan",
    short: "Personal and consumer loans with clear terms and a realistic payment.",
    eyebrow: "Personal needs",
    headline: "Consumer loans without expensive surprises",
    intro:
      "When you need financing for a renovation, car, debt consolidation, or other personal goals, we compare offers and explain what the loan will really cost.",
    points: [
      "Compare rate, fees, and term",
      "Check whether a consumer loan beats alternatives",
      "Help with documents and application",
      "An honest talk when borrowing is not a good idea",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "You already have an amount and term in mind",
      "You want a fast but well-considered offer",
      "You want to avoid hidden fees",
    ],
    cta: "Request consumer loan consultation",
  },
  refinance: {
    id: "refinance",
    href: "/uslugi/refinansirane",
    title: "Refinancing",
    short: "Moving to a better offer when your current loan no longer fits.",
    eyebrow: "Better terms",
    headline: "Refinancing that actually saves money",
    intro:
      "We review your current loan and check whether a new offer lowers the payment or total cost — after early-repayment and transfer fees.",
    points: [
      "Compare old and new monthly payments",
      "Calculate fees and real savings",
      "Options for mortgage and consumer refinance",
      "Support through the full transfer process",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "Your rate or payment already feels high",
      "You want to consolidate several loans",
      "You want a shorter or longer term with a clear math",
    ],
    cta: "Request refinance consultation",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  bg: {
    meta: {
      title: "СМ Консулт — Безплатна кредитна консултация",
      description:
        "Независим кредитен консултант. Ипотечен, потребителски кредит и рефинансиране. Консултацията е безплатна.",
    },
    brand: "СМ Консулт",
    nav: {
      home: "Начало",
      services: "Услуги",
      process: "Как работим",
      about: "За нас",
      useful: "Полезно",
      consult: "Консултация",
      phoneAria: "Обадете се",
    },
    home: {
      metaTitle: "СМ Консулт — Кредитен консултант",
      metaDescription:
        "Безплатна кредитна консултация за ипотечен, потребителски кредит и рефинансиране.",
      headline: "Консултация за кредит според вашите нужди",
      support:
        "Независима кредитна консултация — сравняваме банкови оферти, обясняваме условията и ви водим до кандидатстване. Основен фокус — жилищните кредити. Услугата е безплатна за вас. Не сме банка и не отпускаме кредити.",
      cta: "Безплатна консултация",
      secondaryCta: "Виж услугите",
      imageAlt: "Спокоен дом и градска улица при дневна светлина",
      servicesTitle: "С какво можем да помогнем",
      servicesSupport:
        "Работим с всички основни кредитни продукти. Най-силно сме в жилищното финансиране.",
      whyTitle: "Защо кредитен консултант",
      whyItems: [
        {
          title: "Безплатно за вас",
          body: "Консултацията и съдействието не ви струват. Не ви обвързваме с конкретна банка.",
        },
        {
          title: "Сравнение на оферти",
          body: "Гледаме лихва, такси, ГПР и реална месечна вноска — не само рекламната лихва.",
        },
        {
          title: "До усвояването",
          body: "Помагаме с документи, срокове и следващи стъпки, докато процесът е ясен.",
        },
      ],
      processTitle: "Как работим",
      processSupport: "Четири спокойни стъпки от първия разговор до подадена заявка.",
    },
    servicesOverview: {
      metaTitle: "Услуги — СМ Консулт",
      metaDescription:
        "Ипотечен кредит, потребителски кредит и рефинансиране с безплатна консултация.",
      title: "Услуги",
      support:
        "Изберете продукта, който ви интересува, или започнете с обща консултация — ще уточним заедно най-подходящия път.",
    },
    services: bgServices,
    processPage: {
      metaTitle: "Как работим — СМ Консулт",
      metaDescription:
        "Безплатна консултация, анализ, сравнение на оферти и съдействие при кандидатстване.",
      title: "Как работим",
      support:
        "Процесът е прозрачен и без натиск. На всеки етап знаете какво следва и защо.",
      steps: [
        {
          number: "01",
          title: "Безплатна консултация",
          body: "Говорим за целта, дохода, срока и какъв кредит реално ви трябва — онлайн или по телефон.",
        },
        {
          number: "02",
          title: "Анализ на профила",
          body: "Преглеждаме възможностите за одобрение, натоварването и ограниченията на различните продукти.",
        },
        {
          number: "03",
          title: "Сравнение на оферти",
          body: "Получавате ясна картина: лихва, такси, ГПР, месечна вноска и какво се изисква като документи.",
        },
        {
          number: "04",
          title: "Кандидатстване и проследяване",
          body: "Подготвяме документите, подаваме заявката и сме с вас до ясно решение и следващи стъпки.",
        },
      ],
      note: "Не отпускаме кредити. Съдействаме като независим консултант, а финансирането идва от банката, която изберете.",
    },
    aboutPage: {
      metaTitle: "За нас — СМ Консулт",
      metaDescription:
        "Независима кредитна консултация с фокус върху жилищни кредити. Безплатно за клиента.",
      title: "За СМ Консулт",
      lead: "Независим кредитен консултант за хора, които искат ясни условия преди да подпишат.",
      body: [
        "СМ Консулт помага при избор на ипотечен кредит, потребителски кредит и рефинансиране. Работим спокойно, с обяснения на разбираем език и без натиск към конкретна банка.",
        "Основният ни фокус е жилищното финансиране — там разликите между офертите са най-големи, а грешният избор излиза най-скъпо във времето.",
        "Консултацията е безплатна за вас. Целта ни е да вземете информирано решение и да кандидатствате подготвени.",
      ],
      imageAlt: "Консултант и клиент преглеждат документи заедно",
      valuesTitle: "Какво ценим",
      values: [
        {
          title: "Яснота",
          body: "Говорим с числа и срокове, не с общи обещания.",
        },
        {
          title: "Независимост",
          body: "Сравняваме варианти според вашия профил, не според удобството на една банка.",
        },
        {
          title: "Спокойствие",
          body: "Време за въпроси, без агресивни продажби и без изкуствен спешност.",
        },
      ],
    },
    usefulPage: {
      metaTitle: "Полезно — СМ Консулт",
      metaDescription:
        "Практични съвети и отговори за ипотечен кредит, потребителски кредит и рефинансиране.",
      title: "Полезно преди да кандидатствате",
      support:
        "Кратки ориентири и често задавани въпроси, за да влезете в разговора подготвени.",
      tipsTitle: "Практични съвети",
      tips: [
        {
          title: "Самоучастие и срок",
          body: "По-високо самоучастие и разумен срок често намаляват общата цена на жилищния кредит.",
        },
        {
          title: "ГПР, не само лихва",
          body: "Сравнявайте годишния процент на разходите, таксите и застраховките — не само рекламната лихва.",
        },
        {
          title: "Документи предварително",
          body: "Доходи, лична карта и данни за имота/целта ускоряват анализа и правят офертите по-точни.",
        },
        {
          title: "Рефинансиране с калкулатор",
          body: "Нова по-ниска вноска има смисъл само ако спестяването надвишава таксите за прехвърляне.",
        },
      ],
      faqTitle: "Често задавани въпроси",
      faq: [
        {
          q: "Безплатна ли е консултацията?",
          a: "Да. За вас услугата е безплатна и не ви обвързва да продължите с кандидатстване.",
        },
        {
          q: "Отпускате ли кредити?",
          a: "Не. Ние сме кредитен консултант. Кредитът се отпуска от банка, която изберете след сравнение на оферти.",
        },
        {
          q: "С кои кредити работите?",
          a: "С ипотечни, потребителски кредити и рефинансиране. Основният ни фокус е жилищното финансиране.",
        },
        {
          q: "Колко време отнема процесът?",
          a: "Зависи от продукта и документите. Потребителският кредит често е по-бърз; ипотечният обикновено отнема няколко седмици.",
        },
        {
          q: "Мога ли да говоря с вас онлайн?",
          a: "Да. Работим по телефон и онлайн, както и с присъствена среща при нужда.",
        },
      ],
    },
    consultPage: {
      metaTitle: "Безплатна консултация — СМ Консулт",
      metaDescription:
        "Заявете безплатна кредитна консултация за ипотечен, потребителски кредит или рефинансиране.",
      title: "Заявете безплатна консултация",
      support:
        "Напишете ни кратко какво търсите. Отговаряме до един работен ден със свободен час.",
      emailLabel: "Имейл",
      phoneLabel: "Телефон",
      hoursLabel: "Работно време",
      hoursValue: "Понеделник–петък, 9:00–17:00",
    },
    ctaBand: {
      title: "Имате въпрос за кредит?",
      button: "Поискай консултация",
    },
    form: {
      name: "Име и фамилия",
      namePlaceholder: "Иван Петров",
      email: "Имейл",
      emailPlaceholder: "vie@email.com",
      phone: "Телефон (по желание)",
      phonePlaceholder: "0888 000 000",
      goal: "Какъв кредит ви интересува?",
      goalPlaceholder: "Ипотечен, потребителски, рефинансиране или друго…",
      submit: "Заяви безплатна консултация",
      submitting: "Изпращане…",
      error:
        "Моля, попълнете име, имейл и какъв кредит търсите, за да се подготвим.",
      successTitle: "Заявката е получена",
      successBody:
        "Ще отговорим до един работен ден със свободен час за безплатната консултация.",
      sendAnother: "Изпрати нова заявка",
    },
    footer: {
      services: "Услуги",
      company: "Компания",
      legal: "Правна информация",
      contacts: "Контакти",
      disclaimer:
        "Независими кредитни консултации. Консултацията е безплатна за клиента. Не сме банка и не отпускаме кредити.",
    },
    lang: { label: "Език", bg: "БГ", en: "EN" },
  },
  en: {
    meta: {
      title: "SM Consult — Free credit consultation",
      description:
        "Independent credit consultant. Mortgage, consumer loans, and refinancing. Consultation is free.",
    },
    brand: "SM Consult",
    nav: {
      home: "Home",
      services: "Services",
      process: "How we work",
      about: "About",
      useful: "Guides",
      consult: "Consultation",
      phoneAria: "Call us",
    },
    home: {
      metaTitle: "SM Consult — Credit consultant",
      metaDescription:
        "Free credit consultation for mortgages, consumer loans, and refinancing.",
      headline: "Credit consultation tailored to your needs",
      support:
        "Independent credit consulting — we compare bank offers, explain the terms, and guide you to application. Primary focus — home loans. The service is free for you. We are not a bank and do not issue loans.",
      cta: "Free consultation",
      secondaryCta: "See services",
      imageAlt: "Calm home and city street in daylight",
      servicesTitle: "How we can help",
      servicesSupport:
        "We cover the main loan products. We are strongest in home financing.",
      whyTitle: "Why use a credit consultant",
      whyItems: [
        {
          title: "Free for you",
          body: "Advice and support cost you nothing. We do not lock you into one bank.",
        },
        {
          title: "Offer comparison",
          body: "We look at rate, fees, APR, and the real monthly payment — not just the ad rate.",
        },
        {
          title: "Through drawdown",
          body: "We help with documents, timelines, and next steps until the process is clear.",
        },
      ],
      processTitle: "How we work",
      processSupport: "Four calm steps from the first call to a submitted application.",
    },
    servicesOverview: {
      metaTitle: "Services — SM Consult",
      metaDescription:
        "Mortgage loans, consumer loans, and refinancing with a free consultation.",
      title: "Services",
      support:
        "Pick the product you care about, or start with a general consultation — we will refine the best path together.",
    },
    services: enServices,
    processPage: {
      metaTitle: "How we work — SM Consult",
      metaDescription:
        "Free consultation, analysis, offer comparison, and application support.",
      title: "How we work",
      support:
        "The process is transparent and pressure-free. At every stage you know what comes next and why.",
      steps: [
        {
          number: "01",
          title: "Free consultation",
          body: "We talk about your goal, income, term, and which loan you actually need — online or by phone.",
        },
        {
          number: "02",
          title: "Profile analysis",
          body: "We review approval chances, debt load, and the limits of different products.",
        },
        {
          number: "03",
          title: "Offer comparison",
          body: "You get a clear view: rate, fees, APR, monthly payment, and required documents.",
        },
        {
          number: "04",
          title: "Application and follow-up",
          body: "We prepare documents, submit the application, and stay with you until the next step is clear.",
        },
      ],
      note: "We do not issue loans. We advise as an independent consultant; financing comes from the bank you choose.",
    },
    aboutPage: {
      metaTitle: "About us — SM Consult",
      metaDescription:
        "Independent credit consulting focused on home loans. Free for the client.",
      title: "About SM Consult",
      lead: "An independent credit consultant for people who want clear terms before they sign.",
      body: [
        "SM Consult helps with mortgage loans, consumer loans, and refinancing. We work calmly, in plain language, without pressure toward a specific bank.",
        "Our strongest focus is home financing — that is where offer differences are largest, and a poor choice costs the most over time.",
        "Consultation is free for you. Our goal is an informed decision and a well-prepared application.",
      ],
      imageAlt: "Advisor and client reviewing documents together",
      valuesTitle: "What we value",
      values: [
        {
          title: "Clarity",
          body: "We talk in numbers and timelines, not vague promises.",
        },
        {
          title: "Independence",
          body: "We compare options for your profile, not for one bank’s convenience.",
        },
        {
          title: "Calm",
          body: "Time for questions, no hard sell, and no artificial urgency.",
        },
      ],
    },
    usefulPage: {
      metaTitle: "Guides — SM Consult",
      metaDescription:
        "Practical tips and answers on mortgages, consumer loans, and refinancing.",
      title: "Useful before you apply",
      support:
        "Short pointers and frequent questions so you enter the conversation prepared.",
      tipsTitle: "Practical tips",
      tips: [
        {
          title: "Down payment and term",
          body: "A higher down payment and a sensible term often lower the total cost of a home loan.",
        },
        {
          title: "APR, not only the rate",
          body: "Compare APR, fees, and insurance — not just the advertised interest rate.",
        },
        {
          title: "Documents early",
          body: "Income proof, ID, and property/goal details speed up analysis and make offers more accurate.",
        },
        {
          title: "Refinance with math",
          body: "A lower payment only helps if the savings beat transfer and early-repayment fees.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          q: "Is the consultation free?",
          a: "Yes. The service is free for you and does not obligate you to apply.",
        },
        {
          q: "Do you issue loans?",
          a: "No. We are a credit consultant. The loan is issued by the bank you choose after comparing offers.",
        },
        {
          q: "Which loans do you cover?",
          a: "Mortgages, consumer loans, and refinancing. Home financing is our primary focus.",
        },
        {
          q: "How long does the process take?",
          a: "It depends on the product and documents. Consumer loans are often faster; mortgages usually take a few weeks.",
        },
        {
          q: "Can we talk online?",
          a: "Yes. We work by phone and online, and in person when needed.",
        },
      ],
    },
    consultPage: {
      metaTitle: "Free consultation — SM Consult",
      metaDescription:
        "Request a free credit consultation for a mortgage, consumer loan, or refinance.",
      title: "Request a free consultation",
      support:
        "Tell us briefly what you need. We reply within one business day with an available time.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursValue: "Monday–Friday, 9am–5pm",
    },
    ctaBand: {
      title: "Have a question about a loan?",
      button: "Request a consultation",
    },
    form: {
      name: "Full name",
      namePlaceholder: "Jordan Blake",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone (optional)",
      phonePlaceholder: "0888 000 000",
      goal: "Which loan are you interested in?",
      goalPlaceholder: "Mortgage, consumer, refinance, or something else…",
      submit: "Request a free consultation",
      submitting: "Sending…",
      error:
        "Please fill in your name, email, and which loan you need so we can prepare.",
      successTitle: "Request received",
      successBody:
        "We will reply within one business day with an available time for your free consultation.",
      sendAnother: "Send another request",
    },
    footer: {
      services: "Services",
      company: "Company",
      legal: "Legal",
      contacts: "Contacts",
      disclaimer:
        "Independent loan consulting. Consultation is free for the client. We are not a bank and do not issue loans.",
    },
    lang: { label: "Language", bg: "BG", en: "EN" },
  },
};

export const serviceOrder: ServiceId[] = [
  "mortgage",
  "consumer",
  "refinance",
];
