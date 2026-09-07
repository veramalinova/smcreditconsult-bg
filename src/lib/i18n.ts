export type Locale = "bg" | "en";

export const defaultLocale: Locale = "bg";

export type ServiceId = "mortgage" | "consumer" | "business";

export type ServicePage = {
  id: ServiceId;
  href: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
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
    faq: string;
    consult: string;
    phoneAria: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    support: string;
    highlights: string[];
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
  };
  faqPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    support: string;
    items: { q: string; a: string }[];
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
  freeWhy: { title: string; body: string };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    goal: string;
    goalPlaceholder: string;
    privacyAckBefore: string;
    privacyAckLink: string;
    privacyRequired: string;
    submit: string;
    submitting: string;
    invalid: string;
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
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    disclaimer: string;
  };
  mobileCall: { label: string; aria: string };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    body: string;
    home: string;
    consult: string;
  };
  lang: { label: string; bg: string; en: string };
};

const bgServices: Record<ServiceId, ServicePage> = {
  mortgage: {
    id: "mortgage",
    href: "/uslugi/ipotechnen-kredit",
    title: "Ипотечен кредит",
    short: "Жилищен кредит за покупка, строеж, ремонт или рефинансиране.",
    metaTitle: "Ипотечен кредит | СМ Кредит Консулт",
    metaDescription:
      "Сравнете оферти за ипотечен кредит за покупка, строеж, ремонт или рефинансиране. Професионална консултация и съдействие при кандидатстване.",
    eyebrow: "Жилищно финансиране",
    headline: "Ипотечен кредит с ясни условия от първия разговор",
    intro:
      "Помагаме ви да сравните банкови оферти за покупка на жилище, строеж, ремонт или рефинансиране на съществуваща ипотека. Работим безплатно за вас.",
    points: [
      "Сравнение на лихви, такси, ГПР и месечна вноска",
      "Оценка на самоучастие, срок и одобряемост",
      "Подготовка на документи и насоки до одобрение",
      "Рефинансиране на текуща ипотека към по-добра оферта",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Купувате първо или следващо жилище",
      "Планирате строеж или основен ремонт",
      "Искате да рефинансирате съществуваща ипотека",
    ],
    cta: "Получете безплатна консултация",
  },
  consumer: {
    id: "consumer",
    href: "/uslugi/potrebitelski-kredit",
    title: "Потребителски кредит",
    short:
      "Потребителски и лични кредити — нов кредит или рефинансиране с ясни условия.",
    metaTitle: "Потребителски кредит | СМ Кредит Консулт",
    metaDescription:
      "Сравнете оферти за потребителски кредит — нов кредит или рефинансиране. Професионална консултация и съдействие при кандидатстване.",
    eyebrow: "Лични нужди",
    headline: "Потребителски кредит без излишни изненади",
    intro:
      "Когато ви трябва финансиране за ремонт, автомобил, обединяване на задължения или рефинансиране на текущ потребителски кредит, сравняваме оферти и ви казваме ясно какво реално ще струва.",
    points: [
      "Сравнение на лихва, такси и срок",
      "Оценка дали новият или рефинансиращият кредит е по-изгоден",
      "Помощ с документи и кандидатстване",
      "Честен разговор кога кредитът не е добра идея",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Имате конкретна сума и срок в главата си",
      "Искате да рефинансирате или обедините задължения",
      "Искате да избегнете скрити такси",
    ],
    cta: "Получете безплатна консултация",
  },
  business: {
    id: "business",
    href: "/uslugi/firmen-kredit",
    title: "Фирмен кредит",
    short:
      "Финансиране за оборот, инвестиции или рефинансиране на фирмен кредит.",
    metaTitle: "Фирмен кредит | СМ Кредит Консулт",
    metaDescription:
      "Сравнете оферти за фирмен кредит за оборот, инвестиции или рефинансиране. Професионална консултация и съдействие при кандидатстване.",
    eyebrow: "За бизнеса",
    headline: "Фирмен кредит според нуждите на компанията",
    intro:
      "Помагаме на фирми и еднолични търговци да сравнят оферти за оборотен капитал, инвестиционен кредит или рефинансиране на текущо фирмено финансиране — с реалистична оценка на натоварването и условията.",
    points: [
      "Сравнение на лихва, такси, срок и обезпечение",
      "Оценка на кешфлоу, одобряемост и нужните документи",
      "Варианти за оборотен, инвестиционен кредит и рефинансиране",
      "Съдействие при кандидатстване до решение от банката",
    ],
    forWhomTitle: "За кого е подходящ",
    forWhom: [
      "Търсите оборотен капитал или инвестиция в техника и оборудване",
      "Искате да рефинансирате текущ фирмен кредит",
      "Искате да сравните условия за фирма или ЕТ",
    ],
    cta: "Получете безплатна консултация",
  },
};

const enServices: Record<ServiceId, ServicePage> = {
  mortgage: {
    id: "mortgage",
    href: "/uslugi/ipotechnen-kredit",
    title: "Mortgage loan",
    short: "Home loans for purchase, construction, renovation, or refinancing.",
    metaTitle: "Mortgage loan | SM Credit Consult",
    metaDescription:
      "Compare mortgage loan offers for purchase, construction, renovation, or refinancing. Professional consultation and application support.",
    eyebrow: "Home financing",
    headline: "Mortgage advice with clear terms from the first call",
    intro:
      "We help you compare bank offers for buying a home, building, renovating, or refinancing an existing mortgage. Guidance is free for you.",
    points: [
      "Compare rates, fees, APR, and monthly payments",
      "Assess down payment, term, and approval likelihood",
      "Document prep and guidance through approval",
      "Refinance an existing mortgage to a better offer",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "Buying a first or next home",
      "Planning construction or a major renovation",
      "Wanting to refinance an existing mortgage",
    ],
    cta: "Get a free consultation",
  },
  consumer: {
    id: "consumer",
    href: "/uslugi/potrebitelski-kredit",
    title: "Consumer loan",
    short:
      "Consumer and personal loans — new credit or refinancing with clear terms.",
    metaTitle: "Consumer loan | SM Credit Consult",
    metaDescription:
      "Compare consumer loan offers — new credit or refinancing. Professional consultation and application support.",
    eyebrow: "Personal needs",
    headline: "Consumer loans without expensive surprises",
    intro:
      "When you need financing for a renovation, car, debt consolidation, or refinancing an existing consumer loan, we compare offers and explain what it will really cost.",
    points: [
      "Compare rate, fees, and term",
      "Check whether a new or refinancing loan is the better deal",
      "Help with documents and application",
      "An honest talk when borrowing is not a good idea",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "You already have an amount and term in mind",
      "You want to refinance or consolidate debts",
      "You want to avoid hidden fees",
    ],
    cta: "Get a free consultation",
  },
  business: {
    id: "business",
    href: "/uslugi/firmen-kredit",
    title: "Business loan",
    short:
      "Financing for working capital, investment, or refinancing a business loan.",
    metaTitle: "Business loan | SM Credit Consult",
    metaDescription:
      "Compare business loan offers for working capital, investment, or refinancing. Professional consultation and application support.",
    eyebrow: "For business",
    headline: "Business loans matched to your company’s needs",
    intro:
      "We help companies and sole traders compare offers for working capital, investment loans, or refinancing existing business financing — with a realistic view of debt load and terms.",
    points: [
      "Compare rate, fees, term, and collateral",
      "Assess cash flow, approval chances, and required documents",
      "Options for working-capital, investment, and refinance loans",
      "Application support through the bank’s decision",
    ],
    forWhomTitle: "Who it is for",
    forWhom: [
      "Looking for working capital or equipment investment",
      "Wanting to refinance an existing business loan",
      "Comparing terms for a company or sole trader",
    ],
    cta: "Get a free consultation",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  bg: {
    meta: {
      title: "СМ Кредит Консулт | Кредитен консултант и посредник",
      description:
        "Кредитен консултант за ипотечни, потребителски и фирмени кредити. Сравнение на банкови оферти, рефинансиране и професионално съдействие. Безплатна консултация.",
    },
    brand: "СМ Кредит Консулт",
    nav: {
      home: "Начало",
      services: "Услуги",
      process: "Как работим",
      about: "За нас",
      useful: "Полезно",
      faq: "Въпроси",
      consult: "Безплатна консултация",
      phoneAria: "Обадете се",
    },
    home: {
      metaTitle: "СМ Кредит Консулт | Кредитен консултант и посредник",
      metaDescription:
        "Кредитен консултант за ипотечни, потребителски и фирмени кредити. Сравнение на банкови оферти, рефинансиране и професионално съдействие. Безплатна консултация.",
      headline: "Вашият кредит. Нашата експертиза.",
      support:
        "Сравняваме предложения от банки и ви помагаме да изберете подходящото финансиране според вашите цели и финансов профил.",
      highlights: [
        "Безплатна консултация",
        "Дългогодишен опит",
        "Изцяло онлайн",
      ],
      cta: "Получете безплатна консултация",
      secondaryCta: "Вижте услугите",
      imageAlt: "Спокоен дом и градска улица при дневна светлина",
      servicesTitle: "С какво можем да помогнем",
      servicesSupport:
        "Работим с всички основни кредитни продукти — ипотечен, потребителски и фирмен кредит — включително рефинансиране.",
      whyTitle: "Защо кредитен консултант",
      whySupport:
        "С дългогодишен опит ви помагаме да разберете пазара, да сравните реалните условия и да кандидатствате подготвени — без да обикаляте сам всяка банка. Услугата е напълно безплатна за вас.",
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
          title: "Обективен поглед върху профила ви",
          body: "Оценяваме дохода, текущите задължения и целта на кредита. Ако даден продукт не ви пасва или рискът е висок, го казваме директно — дори това да значи да изчакате или да изберете друг вариант.",
        },
        {
          title: "Съдействие до кандидатстването",
          body: "След като изберете оферта, оставаме с вас при подаване на заявката и следващите стъпки. Целта е да знаете какво се случва на всеки етап, без изненади и без натиск.",
        },
        {
          title: "Услугата е безплатна за вас",
          body: "Консултацията и съдействието са без допълнителна такса за вас. Когато е приложимо, възнаграждението на кредитния посредник се заплаща от кредитора съгласно договорните отношения между страните.",
        },
        {
          title: "Изцяло онлайн и по телефона",
          body: "Целият процес може да мине дистанционно — разговор, анализ, сравнение на оферти и кандидатстване. Без губене на време с ходене в офис, ако предпочитате да работите от вкъщи или в движение.",
        },
      ],
      processTitle: "Как работим",
      processSupport:
        "Четири стъпки от първия разговор до подадена заявка. Целият процес може да е изцяло онлайн и по телефона — без да губите време в офис.",
    },
    servicesOverview: {
      metaTitle: "Услуги | СМ Кредит Консулт",
      metaDescription:
        "Ипотечен, потребителски и фирмен кредит — включително рефинансиране. Сравнение на банкови оферти и професионално съдействие.",
      title: "Услуги",
      support:
        "Изберете продукта, който ви интересува, или започнете с обща консултация — ще уточним заедно най-подходящия път.",
    },
    services: bgServices,
    processPage: {
      metaTitle: "Как работим | СМ Кредит Консулт",
      metaDescription:
        "Как работи кредитната консултация: анализ на профила, сравнение на банкови оферти и съдействие при кандидатстване.",
      title: "Как работим",
      support:
        "Процесът е прозрачен. На всеки етап знаете какво следва и защо. Можем да минем през всичко изцяло онлайн и по телефона, без посещение в офис.",
      steps: [
        {
          number: "01",
          title: "Консултация",
          body: "Говорим за целта, дохода, срока и какъв кредит реално ви трябва — онлайн или по телефон, без нужда да идвате на място.",
        },
        {
          number: "02",
          title: "Анализ на профила",
          body: "Преглеждаме дохода и текущите ви задължения, колко още можете да поемете като месечна вноска и кои кредити реално ви пасват.",
        },
        {
          number: "03",
          title: "Сравнение на оферти",
          body: "Получавате ясна картина: лихва, такси, ГПР, месечна вноска и какво се изисква като документи.",
        },
        {
          number: "04",
          title: "Кандидатстване и проследяване",
          body: "Подготвяме документите, подаваме заявката и сме с вас до ясно решение и следващи стъпки — изцяло онлайн и по телефона.",
        },
      ],
    },
    aboutPage: {
      metaTitle: "За нас | СМ Кредит Консулт",
      metaDescription:
        "Зад СМ Кредит Консулт стоят хора с дългогодишен опит в кредитирането. Кредитна консултация за ипотечен, потребителски и фирмен кредит. Безплатна консултация.",
      title: "За СМ Кредит Консулт",
      lead: "Зад сайта стоят хора с дългогодишен опит в кредитирането — за клиенти, които искат яснота и спокойствие преди да подпишат.",
      body: [
        "СМ Кредит Консулт е кредитна консултация с дългогодишен опит. Зад услугата стоят специалисти в кредитирането — хора, които познават как реално работят банковите процеси, как се оценява кредитен профил и къде най-често се губят време и пари.",
        "Помагаме при избор на ипотечен, потребителски и фирмен кредит — включително рефинансиране. Обясняваме условията на разбираем език: лихва, такси, ГПР, месечна вноска и какво реално се изисква като документи. Целият процес може да е изцяло онлайн и по телефона — без губене на време с ходене в офис.",
        "Опитът ни е практически: сравнение на оферти, подреждане на документите, типични причини за отказ или забавяне и как да кандидатствате подготвени. Не сме банка и не отпускаме кредити — ролята ни е да ви ориентираме според вашия профил, без натиск към конкретна институция.",
        "Консултацията е безплатна за вас. Целта ни е да вземете информирано решение и да кандидатствате спокойно — с ясна картина какво подписвате и защо.",
      ],
      imageAlt: "Консултант и клиент преглеждат документи заедно",
      valuesTitle: "На какво можете да разчитате",
      values: [
        {
          title: "Дългогодишен опит в кредитирането",
          body: "Зад консултацията стоят хора, които са минавали през реални кредитни казуси — ипотека, потребителски и фирмен кредит, включително рефинансиране. Познаваме банковите изисквания и типичните капани, за да ви спестим скъпи грешки.",
        },
        {
          title: "Доверие чрез яснота",
          body: "Говорим с числа, срокове и условия — не с общи обещания. Ако даден продукт не ви пасва или рискът е висок, го казваме директно.",
        },
        {
          title: "Обективно сравнение",
          body: "Сравняваме варианти според вашия профил и цел, не според удобството на една банка. Вие избирате офертата, която ви устройва.",
        },
        {
          title: "Без натиск, с отговорност",
          body: "Консултацията не ви обвързва да кандидатствате. Работим спокойно, стъпка по стъпка, докато имате достатъчно яснота, за да вземете решение.",
        },
        {
          title: "Спестете време",
          body: "Целият процес може да мине дистанционно — разговор, анализ, сравнение и съдействие при кандидатстване, без губене на време с ходене в офис.",
        },
      ],
    },
    usefulPage: {
      metaTitle: "Полезно | СМ Кредит Консулт",
      metaDescription:
        "Практични съвети преди кандидатстване за ипотечен, потребителски или фирмен кредит — включително рефинансиране.",
      title: "Полезно преди да кандидатствате",
      support:
        "Кратки ориентири, за да влезете в разговора подготвени.",
      tipsTitle: "Практични съвети",
      tips: [
        {
          title: "Самоучастие и срок",
          body: "По-високо самоучастие обикновено подобрява условията и намалява месечната вноска. Срокът също има значение: по-дългият срок сваля вноската, но увеличава общата цена на кредита. Търсете баланс между комфортна вноска и разумна крайна сума.",
        },
        {
          title: "ГПР, не само лихва",
          body: "Рекламната лихва рядко е цялата картина. Сравнявайте годишния процент на разходите, таксите за обработка, застраховките и евентуални годишни такси по сметката. Именно там често се крие разликата между две привидно близки оферти.",
        },
        {
          title: "Документи предварително",
          body: "Подгответе предварително доказателства за доход, лична карта и основни данни за имота или целта на кредита. Колкото по-пълна е информацията в началото, толкова по-точен е анализът и по-малко връщания има по-късно в процеса.",
        },
        {
          title: "Рефинансиране с калкулатор",
          body: "По-ниската вноска не винаги означава по-добра сделка. Преди да рефинансирате, сметнете таксите за предсрочно погасяване, оценката и прехвърлянето. Смисъл има, когато реалното спестяване във времето надвишава тези разходи.",
        },
        {
          title: "Месечна вноска според бюджета",
          body: "Преди да изберете оферта, проверете как вноската се вписва в месечните ви разходи — не само при текущия доход, но и при възможни промени. Добрият кредит е този, който можете да обслужвате спокойно, без да натоварвате бюджета до краен предел.",
        },
        {
          title: "Условия след първите години",
          body: "Обърнете внимание какво се случва след промоционалния период: промяна на лихвата, изисквания за застраховка или други условия. Краткосрочната изгода може да изглежда привлекателна, но дългосрочните правила често определят реалната цена.",
        },
      ],
    },
    faqPage: {
      metaTitle: "Често задавани въпроси | СМ Кредит Консулт",
      metaDescription:
        "Отговори за безплатната консултация, комисионата, банките, одобрението и онлайн процеса при кредитна консултация.",
      title: "Често задавани въпроси",
      support:
        "Кратки отговори преди да заявите консултация — за услугата, продуктите и начина на работа.",
      items: [
        {
          q: "Безплатна ли е консултацията?",
          a: "Да. За клиента консултацията и съдействието са без допълнителна такса и не ви обвързват да кандидатствате. Когато е приложимо, възнаграждението на кредитния посредник се заплаща от кредитора съгласно договорните отношения между страните.",
        },
        {
          q: "Трябва ли да плащам за консултацията?",
          a: "Не. За вас консултацията и съдействието са без допълнителна такса. Не ви обвързваме да продължите с кандидатстване.",
        },
        {
          q: "Получавате ли комисиона от банката?",
          a: "Когато е приложимо, възнаграждението на кредитния посредник се заплаща от кредитора съгласно договорните отношения между страните. За вас услугата остава без допълнителна такса.",
        },
        {
          q: "Работите ли с всички банки?",
          a: "Сравняваме оферти от различни банки според вашия профил и цел — не всяка банка е подходяща за всеки случай. Работим с водещи кредитори на пазара и ви показваме реалистичните варианти за вас.",
        },
        {
          q: "Гарантирате ли одобрение?",
          a: "Не. Решението за отпускане на кредита и окончателните условия се определят от съответната банка въз основа на нейния анализ на кредитоспособността.",
        },
        {
          q: "Защо ми е нужен кредитен консултант?",
          a: "За да сравните реалните условия на няколко банки на едно място — лихва, такси, ГПР и месечна вноска — и да кандидатствате подготвени, без да обикаляте сами всеки клон. Спестявате време и намалявате риска от скъп избор.",
        },
        {
          q: "Отпускате ли кредити?",
          a: "Не. Ние сме кредитен консултант. Кредитът се отпуска от банка, която изберете след сравнение на оферти.",
        },
        {
          q: "С какви видове кредити може да помогнете?",
          a: "С ипотечни, потребителски и фирмени кредити — включително рефинансиране на всеки от тях. Помагаме да сравните оферти, да изберете подходящите условия и да минете процеса до кандидатстване — според вашата цел и профил.",
        },
        {
          q: "Колко време отнема процесът?",
          a: "Зависи от продукта и документите. Потребителският кредит често е по-бърз; ипотечният обикновено отнема няколко седмици.",
        },
        {
          q: "Мога ли да говоря с вас онлайн?",
          a: "Да. Целият процес може да бъде изцяло онлайн и по телефона — без да губите време да ходите в офис.",
        },
      ],
    },
    consultPage: {
      metaTitle: "Безплатна консултация | СМ Кредит Консулт",
      metaDescription:
        "Заявете безплатна кредитна консултация за ипотечен, потребителски или фирмен кредит. Отговаряме до един работен ден.",
      title: "Заявете безплатна консултация",
      support:
        "Напишете ни кратко какво търсите. Консултацията е безплатна. Отговаряме до един работен ден. Целият процес може да е изцяло онлайн и по телефона.",
      emailLabel: "Имейл",
      phoneLabel: "Телефон",
      hoursLabel: "Работно време",
      hoursValue: "Понеделник–петък, 9:00–18:00",
    },
    ctaBand: {
      title: "Имате въпрос за кредит?",
      button: "Получете безплатна консултация",
    },
    freeWhy: {
      title: "Защо консултацията е безплатна?",
      body: "За клиента консултацията и съдействието са без допълнителна такса. Когато е приложимо, възнаграждението на кредитния посредник се заплаща от кредитора съгласно договорните отношения между страните.",
    },
    form: {
      name: "Име и фамилия",
      namePlaceholder: "Иван Петров",
      email: "Имейл",
      emailPlaceholder: "vie@email.com",
      phone: "Телефон (по желание)",
      phonePlaceholder: "0888 000 000",
      goal: "Какъв кредит ви интересува?",
      goalPlaceholder: "Ипотечен, потребителски, фирмен — включително рефинансиране…",
      privacyAckBefore: "Запознах се с ",
      privacyAckLink: "Политиката за поверителност",
      privacyRequired:
        "Моля, потвърдете, че сте се запознали с Политиката за поверителност.",
      submit: "Получете безплатна консултация",
      submitting: "Изпращане…",
      invalid: "Моля, попълнете име, имейл и какъв кредит ви интересува.",
      error:
        "Не успяхме да изпратим заявката през сайта. Опитайте отново след малко или се обадете по телефона.",
      successTitle: "Заявката е получена",
      successBody: "Ще отговорим до един работен ден.",
      sendAnother: "Изпрати нова заявка",
    },
    footer: {
      services: "Услуги",
      company: "Компания",
      legal: "Правна информация",
      contacts: "Контакти",
      phoneLabel: "Телефон за връзка",
      emailLabel: "Имейл",
      hoursLabel: "Работно време",
      hoursValue: "Понеделник–петък, 9:00–18:00",
      disclaimer:
        "Кредитни консултации с дългогодишен опит. Консултацията е напълно безплатна за клиента.",
    },
    mobileCall: {
      label: "Обадете се за безплатна консултация",
      aria: "Обадете се за безплатна консултация",
    },
    notFound: {
      metaTitle: "Страницата не е намерена | СМ Кредит Консулт",
      metaDescription: "Тази страница не съществува или е преместена.",
      title: "Страницата не е намерена",
      body: "Проверете адреса или се върнете към началото — или заявете безплатна консултация.",
      home: "Към началото",
      consult: "Безплатна консултация",
    },
    lang: { label: "Език", bg: "БГ", en: "EN" },
  },
  en: {
    meta: {
      title: "SM Credit Consult | Credit consultant and intermediary",
      description:
        "Credit consultant for mortgages, consumer loans, and business loans. Compare bank offers, refinancing, and professional support. Free consultation.",
    },
    brand: "SM Credit Consult",
    nav: {
      home: "Home",
      services: "Services",
      process: "How we work",
      about: "About",
      useful: "Guides",
      faq: "FAQ",
      consult: "Free consultation",
      phoneAria: "Call us",
    },
    home: {
      metaTitle: "SM Credit Consult | Credit consultant and intermediary",
      metaDescription:
        "Credit consultant for mortgages, consumer loans, and business loans. Compare bank offers, refinancing, and professional support. Free consultation.",
      headline: "Your credit. Our expertise.",
      support:
        "We compare bank offers and help you choose the right financing for your goals and financial profile.",
      highlights: [
        "Free consultation",
        "Years of experience",
        "Fully online",
      ],
      cta: "Get a free consultation",
      secondaryCta: "See services",
      imageAlt: "Calm home and city street in daylight",
      servicesTitle: "How we can help",
      servicesSupport:
        "We cover the main loan products — mortgages, consumer loans, and business loans — including refinancing.",
      whyTitle: "Why use a credit consultant",
      whySupport:
        "With years of experience, we help you understand the market, compare real terms, and apply prepared — without visiting every bank yourself. The service is completely free for you.",
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
          title: "An objective view of your profile",
          body: "We assess income, current obligations, and the purpose of the loan. If a product does not fit or the risk is high, we say so directly — even if that means waiting or choosing another option.",
        },
        {
          title: "Support through application",
          body: "After you choose an offer, we stay with you for submission and the next steps. The goal is that you know what is happening at every stage, without pressure.",
        },
        {
          title: "The service is free for you",
          body: "Consultation and support come with no extra fee for you. When applicable, the credit intermediary’s remuneration is paid by the lender under the contractual arrangements between the parties.",
        },
        {
          title: "Fully online and by phone",
          body: "The whole process can happen remotely — conversation, analysis, offer comparison, and application. No time wasted visiting an office if you prefer to work from home or on the go.",
        },
      ],
      processTitle: "How we work",
      processSupport:
        "Four steps from the first call to a submitted application. The whole process can be fully online and by phone — without wasting time at an office.",
    },
    servicesOverview: {
      metaTitle: "Services | SM Credit Consult",
      metaDescription:
        "Mortgage, consumer, and business loans — including refinancing. Compare bank offers with professional support.",
      title: "Services",
      support:
        "Pick the product you care about, or start with a general consultation — we will refine the best path together.",
    },
    services: enServices,
    processPage: {
      metaTitle: "How we work | SM Credit Consult",
      metaDescription:
        "How credit consultation works: profile analysis, bank offer comparison, and application support.",
      title: "How we work",
      support:
        "The process is transparent. At every stage you know what comes next and why. We can do everything fully online and by phone, with no office visit.",
      steps: [
        {
          number: "01",
          title: "Consultation",
          body: "We talk about your goal, income, term, and which loan you actually need — online or by phone, with no need to come in person.",
        },
        {
          number: "02",
          title: "Profile analysis",
          body: "We review your income and current debts, how much more monthly payment you can take on, and which loans actually fit you.",
        },
        {
          number: "03",
          title: "Offer comparison",
          body: "You get a clear view: rate, fees, APR, monthly payment, and required documents.",
        },
        {
          number: "04",
          title: "Application and follow-up",
          body: "We prepare documents, submit the application, and stay with you until the next step is clear — fully online and by phone.",
        },
      ],
    },
    aboutPage: {
      metaTitle: "About us | SM Credit Consult",
      metaDescription:
        "Behind SM Credit Consult are people with years of experience in lending. Credit consultation for mortgages, consumer loans, and business loans. Free consultation.",
      title: "About SM Credit Consult",
      lead: "Behind the site are people with years of experience in lending — for clients who want clarity and peace of mind before they sign.",
      body: [
        "SM Credit Consult is credit consulting with years of experience. Behind the service are specialists in lending — people who know how bank processes really work, how a credit profile is assessed, and where time and money are most often lost.",
        "We help with mortgage, consumer, and business loans — including refinancing. We explain the terms in plain language: rate, fees, APR, monthly payment, and what documents are actually required. The whole process can be fully online and by phone — without wasting time visiting an office.",
        "Our experience is practical: comparing offers, organizing the file, common reasons for refusal or delay, and how to apply prepared. We are not a bank and we do not issue loans — our role is to guide you according to your profile, without pressure toward a specific institution.",
        "Consultation is free for you. Our goal is an informed decision and a calm application — with a clear picture of what you are signing and why.",
      ],
      imageAlt: "Advisor and client reviewing documents together",
      valuesTitle: "What you can rely on",
      values: [
        {
          title: "Years of experience in lending",
          body: "Behind the consultation are people who have worked through real credit cases — mortgages, consumer and business loans, including refinancing. We know bank requirements and common pitfalls, so we can help you avoid costly mistakes.",
        },
        {
          title: "Trust through clarity",
          body: "We talk in numbers, timelines, and terms — not vague promises. If a product does not fit or the risk is high, we say so directly.",
        },
        {
          title: "Objective comparison",
          body: "We compare options for your profile and goal, not for one bank’s convenience. You choose the offer that fits.",
        },
        {
          title: "No pressure, with responsibility",
          body: "The consultation does not obligate you to apply. We work calmly, step by step, until you have enough clarity to decide.",
        },
        {
          title: "Save time",
          body: "The whole process can happen remotely — conversation, analysis, comparison, and application support, without wasting time visiting an office.",
        },
      ],
    },
    usefulPage: {
      metaTitle: "Guides | SM Credit Consult",
      metaDescription:
        "Practical tips before applying for a mortgage, consumer loan, or business loan — including refinancing.",
      title: "Useful before you apply",
      support:
        "Short pointers so you enter the conversation prepared.",
      tipsTitle: "Practical tips",
      tips: [
        {
          title: "Down payment and term",
          body: "A higher down payment usually improves the terms and lowers the monthly payment. Term matters too: a longer term reduces the installment but raises the total cost. Look for a balance between a comfortable payment and a sensible overall price.",
        },
        {
          title: "APR, not only the rate",
          body: "The advertised rate is rarely the full picture. Compare APR, processing fees, insurance, and any annual account charges. That is often where two seemingly similar offers diverge.",
        },
        {
          title: "Documents early",
          body: "Prepare income proof, ID, and key details about the property or loan purpose in advance. The fuller the information at the start, the more accurate the analysis — and the fewer returns later in the process.",
        },
        {
          title: "Refinance with math",
          body: "A lower payment does not always mean a better deal. Before refinancing, calculate early-repayment fees, appraisal, and transfer costs. It makes sense when the real long-term savings beat those expenses.",
        },
        {
          title: "A payment that fits your budget",
          body: "Before choosing an offer, check how the installment fits your monthly expenses — not only with today’s income, but also if things change. A good loan is one you can service comfortably, without stretching the budget to the edge.",
        },
        {
          title: "What happens after the first years",
          body: "Pay attention to what changes after any promotional period: rate resets, insurance requirements, or other conditions. A short-term advantage can look attractive, but the longer-term rules often decide the real cost.",
        },
      ],
    },
    faqPage: {
      metaTitle: "Frequently asked questions | SM Credit Consult",
      metaDescription:
        "Answers about the free consultation, commission, banks, approval, and the online credit consultation process.",
      title: "Frequently asked questions",
      support:
        "Short answers before you request a consultation — about the service, products, and how we work.",
      items: [
        {
          q: "Is the consultation free?",
          a: "Yes. For the client, consultation and support come with no extra fee and do not obligate you to apply. When applicable, the credit intermediary’s remuneration is paid by the lender under the contractual arrangements between the parties.",
        },
        {
          q: "Do I have to pay for the consultation?",
          a: "No. Consultation and support come with no extra fee for you. We do not obligate you to continue with an application.",
        },
        {
          q: "Do you receive a commission from the bank?",
          a: "When applicable, the credit intermediary’s remuneration is paid by the lender under the contractual arrangements between the parties. For you, the service remains without an extra fee.",
        },
        {
          q: "Do you work with all banks?",
          a: "We compare offers from different banks based on your profile and goal — not every bank fits every case. We work with leading lenders on the market and show you the realistic options for you.",
        },
        {
          q: "Do you guarantee approval?",
          a: "No. The decision to grant the loan and the final terms are determined by the relevant bank based on its creditworthiness assessment.",
        },
        {
          q: "Why do I need a credit consultant?",
          a: "To compare real terms from several banks in one place — rate, fees, APR, and monthly payment — and apply prepared, without visiting every branch yourself. You save time and reduce the risk of an expensive choice.",
        },
        {
          q: "Do you issue loans?",
          a: "No. We are a credit consultant. The loan is issued by the bank you choose after comparing offers.",
        },
        {
          q: "What types of loans can you help with?",
          a: "Mortgages, consumer loans, and business loans — including refinancing. We help you compare offers, choose suitable terms, and go through the process to application — based on your goal and profile.",
        },
        {
          q: "How long does the process take?",
          a: "It depends on the product and documents. Consumer loans are often faster; mortgages usually take a few weeks.",
        },
        {
          q: "Can we talk online?",
          a: "Yes. The whole process can be fully online and by phone — without wasting time visiting an office.",
        },
      ],
    },
    consultPage: {
      metaTitle: "Free consultation | SM Credit Consult",
      metaDescription:
        "Request a free credit consultation for a mortgage, consumer, or business loan. We reply within one business day.",
      title: "Request a free consultation",
      support:
        "Tell us briefly what you need. The consultation is free. We reply within one business day. The whole process can be fully online and by phone.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursValue: "Monday–Friday, 9am–6pm",
    },
    ctaBand: {
      title: "Have a question about a loan?",
      button: "Get a free consultation",
    },
    freeWhy: {
      title: "Why is the consultation free?",
      body: "For the client, consultation and support come with no extra fee. When applicable, the credit intermediary’s remuneration is paid by the lender under the contractual arrangements between the parties.",
    },
    form: {
      name: "Full name",
      namePlaceholder: "Jordan Blake",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone (optional)",
      phonePlaceholder: "0888 000 000",
      goal: "Which loan are you interested in?",
      goalPlaceholder: "Mortgage, consumer, or business — including refinancing…",
      privacyAckBefore: "I have read the ",
      privacyAckLink: "Privacy Policy",
      privacyRequired: "Please confirm that you have read the Privacy Policy.",
      submit: "Get a free consultation",
      submitting: "Sending…",
      invalid: "Please fill in your name, email, and which loan you need.",
      error:
        "We could not send the request through the site. Please try again shortly or call us.",
      successTitle: "Request received",
      successBody: "We will reply within one business day.",
      sendAnother: "Send another request",
    },
    footer: {
      services: "Services",
      company: "Company",
      legal: "Legal",
      contacts: "Contacts",
      phoneLabel: "Contact phone",
      emailLabel: "Email",
      hoursLabel: "Working hours",
      hoursValue: "Monday–Friday, 9:00–18:00",
      disclaimer:
        "Loan consulting with years of experience. Consultation is completely free for the client.",
    },
    mobileCall: {
      label: "Call for a free consultation",
      aria: "Call for a free consultation",
    },
    notFound: {
      metaTitle: "Page not found | SM Credit Consult",
      metaDescription: "This page does not exist or has been moved.",
      title: "Page not found",
      body: "Check the address or go back home — or request a free consultation.",
      home: "Back home",
      consult: "Free consultation",
    },
    lang: { label: "Language", bg: "BG", en: "EN" },
  },
};

export const serviceOrder: ServiceId[] = [
  "mortgage",
  "consumer",
  "business",
];
