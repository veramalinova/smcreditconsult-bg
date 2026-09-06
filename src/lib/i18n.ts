export type Locale = "bg" | "en";

export const defaultLocale: Locale = "bg";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    about: string;
    useful: string;
    phoneAria: string;
  };
  hero: {
    brand: string;
    headline: string;
    support: string;
    cta: string;
    imageAlt: string;
  };
  services: {
    items: {
      id: "mortgage" | "consumer" | "refinance";
      title: string;
      body: string;
    }[];
  };
  process: {
    title: string;
    support: string;
    steps: { number: string; title: string; body: string }[];
  };
  about: {
    title: string;
    body: string;
    imageAlt: string;
  };
  useful: {
    title: string;
    support: string;
    items: { title: string; body: string }[];
  };
  ctaBand: {
    title: string;
    button: string;
  };
  consult: {
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
    legal: string;
    contacts: string;
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
      title: "СМ Консулт — Кредитно решение според вашите нужди",
      description:
        "Безплатна кредитна консултация. Всички видове кредити с основен фокус върху жилищни кредити.",
    },
    nav: {
      services: "Услуги",
      about: "За нас",
      useful: "Полезно",
      phoneAria: "Обадете се",
    },
    hero: {
      brand: "СМ Консулт",
      headline: "Кредитно решение според вашите нужди",
      support:
        "Всички видове кредити. Основен фокус — жилищните. Консултацията е безплатна за вас.",
      cta: "Получи консултация",
      imageAlt: "Спокоен дом и градска улица при дневна светлина",
    },
    services: {
      items: [
        {
          id: "mortgage",
          title: "Ипотечен",
          body: "Жилищен кредит за покупка, строеж или ремонт — основният ни фокус.",
        },
        {
          id: "consumer",
          title: "Потребителски",
          body: "Потребителски и други лични кредити с ясни условия и реалистична вноска.",
        },
        {
          id: "refinance",
          title: "Рефинансиране",
          body: "Прехвърляне към по-добра оферта, когато текущият кредит вече не ви устройва.",
        },
      ],
    },
    process: {
      title: "Как работим?",
      support: "Четири спокойни стъпки — безплатно за клиента.",
      steps: [
        {
          number: "1",
          title: "Консултация",
          body: "Разбираме целта, бюджета и какъв кредит ви трябва.",
        },
        {
          number: "2",
          title: "Анализ",
          body: "Преглеждаме дохода, натоварването и възможните продукти.",
        },
        {
          number: "3",
          title: "Оферти",
          body: "Сравняваме лихви, такси и месечна вноска в ясен вид.",
        },
        {
          number: "4",
          title: "Кандидатстване",
          body: "Подготвяме документите и ви водим до подадена заявка.",
        },
      ],
    },
    about: {
      title: "За нас",
      body: "СМ Консулт е независима кредитна консултация. Работим с всички видове кредити, а най-силно — с жилищните. Целта ни е да получите ясни условия, без натиск и безплатна първа консултация.",
      imageAlt: "Консултант и клиент преглеждат документи заедно",
    },
    useful: {
      title: "Полезно",
      support: "Кратки ориентири преди да кандидатствате.",
      items: [
        {
          title: "Самоучастие и срок",
          body: "По-високо самоучастие и разумен срок често свалят общата цена на жилищния кредит.",
        },
        {
          title: "Скрити разходи",
          body: "Освен лихвата гледайте такси, застраховки и ГПР — там често е разликата между офертите.",
        },
        {
          title: "Кога да рефинансирате",
          body: "Има смисъл, когато новата вноска и таксите за прехвърляне реално ви спестяват пари.",
        },
      ],
    },
    ctaBand: {
      title: "Имате въпрос за кредит?",
      button: "Поискай консултация",
    },
    consult: {
      title: "Безплатна консултация",
      support:
        "Кажете ни какъв кредит търсите. Отговаряме до един работен ден със свободен час.",
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
      legal: "Правна информация",
      contacts: "Контакти",
      disclaimer:
        "Независими кредитни консултации. Консултацията е безплатна за клиента. Не сме банка.",
    },
    lang: {
      label: "Език",
      bg: "БГ",
      en: "EN",
    },
  },
  en: {
    meta: {
      title: "SM Consult — A credit solution for your needs",
      description:
        "Free credit consultation. All loan types with a primary focus on residential mortgages.",
    },
    nav: {
      services: "Services",
      about: "About",
      useful: "Guides",
      phoneAria: "Call us",
    },
    hero: {
      brand: "SM Consult",
      headline: "A credit solution for your needs",
      support:
        "All loan types. Primary focus — home mortgages. Your consultation is free.",
      cta: "Get a consultation",
      imageAlt: "Calm home and city street in daylight",
    },
    services: {
      items: [
        {
          id: "mortgage",
          title: "Mortgage",
          body: "Home loans for purchase, construction, or renovation — our core focus.",
        },
        {
          id: "consumer",
          title: "Consumer",
          body: "Personal and consumer loans with clear terms and a realistic monthly payment.",
        },
        {
          id: "refinance",
          title: "Refinance",
          body: "Moving to a better offer when your current loan no longer fits.",
        },
      ],
    },
    process: {
      title: "How we work",
      support: "Four calm steps — free for the client.",
      steps: [
        {
          number: "1",
          title: "Consultation",
          body: "We learn your goal, budget, and which loan you need.",
        },
        {
          number: "2",
          title: "Analysis",
          body: "We review income, debt load, and suitable products.",
        },
        {
          number: "3",
          title: "Offers",
          body: "We compare rates, fees, and monthly payments in plain terms.",
        },
        {
          number: "4",
          title: "Application",
          body: "We prepare documents and guide you through submission.",
        },
      ],
    },
    about: {
      title: "About us",
      body: "SM Consult is independent loan consulting. We cover all loan types, with the strongest focus on residential mortgages. You get clear terms, no pressure, and a free first consultation.",
      imageAlt: "Advisor and client reviewing documents together",
    },
    useful: {
      title: "Useful guides",
      support: "Short pointers before you apply.",
      items: [
        {
          title: "Down payment and term",
          body: "A higher down payment and a sensible term often lower the total cost of a home loan.",
        },
        {
          title: "Hidden costs",
          body: "Beyond the rate, compare fees, insurance, and APR — that is often where offers diverge.",
        },
        {
          title: "When to refinance",
          body: "It makes sense when the new payment and transfer costs truly save you money.",
        },
      ],
    },
    ctaBand: {
      title: "Have a question about a loan?",
      button: "Request a consultation",
    },
    consult: {
      title: "Free consultation",
      support:
        "Tell us which loan you need. We reply within one business day with an available time.",
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
      legal: "Legal",
      contacts: "Contacts",
      disclaimer:
        "Independent loan consulting. Consultation is free for the client. We are not a bank.",
    },
    lang: {
      label: "Language",
      bg: "BG",
      en: "EN",
    },
  },
};
