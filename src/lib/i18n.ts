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
    whySupport: string;
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
    short: "Жилищен кредит за покупка, строеж или ремонт.",
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
    short: "Home loans for purchase, construction, or renovation.",
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
      title: "СМ Консулт — Кредитна консултация",
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
        "Кредитна консултация за ипотечен, потребителски кредит и рефинансиране.",
      headline: "Консултация за кредит според вашите нужди",
      support:
        "Независима кредитна консултация — сравняваме банкови оферти, обясняваме условията и ви водим до кандидатстване. Услугата е напълно безплатна за вас.",
      cta: "Консултация",
      secondaryCta: "Виж услугите",
      imageAlt: "Спокоен дом и градска улица при дневна светлина",
      servicesTitle: "С какво можем да помогнем",
      servicesSupport:
        "Работим с всички основни кредитни продукти — ипотечен, потребителски кредит и рефинансиране.",
      whyTitle: "Защо кредитен консултант",
      whySupport:
        "Кредитният консултант ви помага да разберете пазара, да сравните реалните условия и да кандидатствате подготвени — без да обикаляте сам всяка банка. Услугата е напълно безплатна за вас.",
      whyItems: [
        {
          title: "Един разговор вместо много клонове",
          body: "Вместо да събирате оферти сам от различни банки, минавате през един консултант. Заедно уточняваме каква сума, срок и месечна вноска са реалистични за вас, преди да се губи време в несвързани предложения.",
        },
        {
          title: "Сравнение на реалната цена",
          body: "Не гледаме само рекламната лихва. Сравняваме такси, застраховки, ГПР и месечна вноска, за да видите кой вариант е по-изгоден в дългосрочен план — не само на хартия.",
        },
        {
          title: "Подготовка на документите",
          body: "Помагаме да подредите нужните документи и да избегнете връщания заради липсващи справки. Когато досието е ясно, процесът при банката обикновено върви по-бързо и по-спокойно.",
        },
        {
          title: "Независим поглед върху профила ви",
          body: "Оценяваме дохода, текущите задължения и целта на кредита. Ако даден продукт не ви пасва или рискът е висок, го казваме директно — дори това да значи да изчакате или да изберете друг вариант.",
        },
        {
          title: "Съдействие до кандидатстването",
          body: "След като изберете оферта, оставаме с вас при подаване на заявката и следващите стъпки. Целта е да знаете какво се случва на всеки етап, без изненади и без натиск.",
        },
        {
          title: "Услугата е безплатна за вас",
          body: "Консултацията и съдействието не ви струват допълнително. Не ви обвързваме с конкретна банка — избирате условията, които ви устройват.",
        },
      ],
      processTitle: "Как работим",
      processSupport: "Четири стъпки от първия разговор до подадена заявка.",
    },
    servicesOverview: {
      metaTitle: "Услуги — СМ Консулт",
      metaDescription:
        "Ипотечен кредит, потребителски кредит и рефинансиране с кредитна консултация.",
      title: "Услуги",
      support:
        "Изберете продукта, който ви интересува, или започнете с обща консултация — ще уточним заедно най-подходящия път.",
    },
    services: bgServices,
    processPage: {
      metaTitle: "Как работим — СМ Консулт",
      metaDescription:
        "Консултация, анализ, сравнение на оферти и съдействие при кандидатстване.",
      title: "Как работим",
      support:
        "Процесът е прозрачен и без натиск. На всеки етап знаете какво следва и защо.",
      steps: [
        {
          number: "01",
          title: "Консултация",
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
        "Независима кредитна консултация за ипотечен, потребителски кредит и рефинансиране. Безплатно за клиента.",
      title: "За СМ Консулт",
      lead: "Независим кредитен консултант за хора, които искат ясни условия преди да подпишат.",
      body: [
        "СМ Консулт помага при избор на ипотечен кредит, потребителски кредит и рефинансиране. Работим спокойно, с обяснения на разбираем език и без натиск към конкретна банка.",
        "Работим с жилищно финансиране, потребителски кредити и рефинансиране — там разликите между офертите са големи, а грешният избор излиза скъпо във времето.",
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
          a: "С ипотечни, потребителски кредити и рефинансиране.",
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
      metaTitle: "Консултация — СМ Консулт",
      metaDescription:
        "Заявете кредитна консултация за ипотечен, потребителски кредит или рефинансиране.",
      title: "Заявете консултация",
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
      submit: "Заяви консултация",
      submitting: "Изпращане…",
      error:
        "Моля, попълнете име, имейл и какъв кредит търсите, за да се подготвим.",
      successTitle: "Заявката е получена",
      successBody:
        "Ще отговорим до един работен ден със свободен час за консултацията.",
      sendAnother: "Изпрати нова заявка",
    },
    footer: {
      services: "Услуги",
      company: "Компания",
      legal: "Правна информация",
      contacts: "Контакти",
      disclaimer:
        "Независими кредитни консултации. Консултацията е напълно безплатна за клиента.",
    },
    lang: { label: "Език", bg: "БГ", en: "EN" },
  },
  en: {
    meta: {
      title: "SM Consult — Credit consultation",
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
        "Credit consultation for mortgages, consumer loans, and refinancing.",
      headline: "Credit consultation tailored to your needs",
      support:
        "Independent credit consulting — we compare bank offers, explain the terms, and guide you to application. The service is completely free for you.",
      cta: "Consultation",
      secondaryCta: "See services",
      imageAlt: "Calm home and city street in daylight",
      servicesTitle: "How we can help",
      servicesSupport:
        "We cover the main loan products — mortgages, consumer loans, and refinancing.",
      whyTitle: "Why use a credit consultant",
      whySupport:
        "A credit consultant helps you understand the market, compare real terms, and apply prepared — without visiting every bank yourself. The service is completely free for you.",
      whyItems: [
        {
          title: "One conversation instead of many branches",
          body: "Instead of collecting offers from different banks on your own, you go through one consultant. Together we clarify what amount, term, and monthly payment are realistic for you before time is spent on mismatched proposals.",
        },
        {
          title: "Comparison of the real cost",
          body: "We do not look only at the advertised rate. We compare fees, insurance, APR, and the monthly payment so you can see which option is better over time — not just on paper.",
        },
        {
          title: "Document preparation",
          body: "We help you organize the required documents and avoid returns for missing paperwork. When the file is clear, the bank process usually moves faster and with fewer surprises.",
        },
        {
          title: "An independent view of your profile",
          body: "We assess income, current obligations, and the purpose of the loan. If a product does not fit or the risk is high, we say so directly — even if that means waiting or choosing another option.",
        },
        {
          title: "Support through application",
          body: "After you choose an offer, we stay with you for submission and the next steps. The goal is that you know what is happening at every stage, without pressure.",
        },
        {
          title: "The service is free for you",
          body: "Consultation and support do not cost you extra. We do not lock you into a specific bank — you choose the terms that fit.",
        },
      ],
      processTitle: "How we work",
      processSupport: "Four steps from the first call to a submitted application.",
    },
    servicesOverview: {
      metaTitle: "Services — SM Consult",
      metaDescription:
        "Mortgage loans, consumer loans, and refinancing with credit consultation.",
      title: "Services",
      support:
        "Pick the product you care about, or start with a general consultation — we will refine the best path together.",
    },
    services: enServices,
    processPage: {
      metaTitle: "How we work — SM Consult",
      metaDescription:
        "Consultation, analysis, offer comparison, and application support.",
      title: "How we work",
      support:
        "The process is transparent and pressure-free. At every stage you know what comes next and why.",
      steps: [
        {
          number: "01",
          title: "Consultation",
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
        "Independent credit consulting for mortgages, consumer loans, and refinancing. Free for the client.",
      title: "About SM Consult",
      lead: "An independent credit consultant for people who want clear terms before they sign.",
      body: [
        "SM Consult helps with mortgage loans, consumer loans, and refinancing. We work calmly, in plain language, without pressure toward a specific bank.",
        "We work with home financing, consumer loans, and refinancing — where offer differences are large, and a poor choice costs a lot over time.",
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
          a: "Mortgages, consumer loans, and refinancing.",
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
      metaTitle: "Consultation — SM Consult",
      metaDescription:
        "Request a credit consultation for a mortgage, consumer loan, or refinance.",
      title: "Request a consultation",
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
      submit: "Request a consultation",
      submitting: "Sending…",
      error:
        "Please fill in your name, email, and which loan you need so we can prepare.",
      successTitle: "Request received",
      successBody:
        "We will reply within one business day with an available time for your consultation.",
      sendAnother: "Send another request",
    },
    footer: {
      services: "Services",
      company: "Company",
      legal: "Legal",
      contacts: "Contacts",
      disclaimer:
        "Independent loan consulting. Consultation is completely free for the client.",
    },
    lang: { label: "Language", bg: "BG", en: "EN" },
  },
};

export const serviceOrder: ServiceId[] = [
  "mortgage",
  "consumer",
  "refinance",
];
