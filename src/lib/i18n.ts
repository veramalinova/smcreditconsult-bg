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
      title: "Meridian Credit — Ясни съвети за сложен кредит",
      description:
        "Независими кредитни консултации за подобряване на кредитния рейтинг, стратегия при дългове и готовност за финансиране.",
    },
    nav: {
      services: "Услуги",
      process: "Процес",
      consult: "Консултация",
      bookCall: "Запази час",
    },
    hero: {
      brand: "Meridian Credit",
      headline: "Ясни съвети за сложен кредит.",
      support:
        "Независими консултации за кредитен рейтинг, стратегия при дългове и готовност за кредит — с план, на който можете да разчитате.",
      ctaPrimary: "Заяви консултация",
      ctaSecondary: "Виж как помагаме",
      imageAlt:
        "Финансови документи и калкулатор на бюро, които подсказват внимателен преглед на кредит",
    },
    services: {
      eyebrow: "Услуги",
      title: "Практична кредитна работа, без излишен шум.",
      support:
        "Един фокусиран ангажимент наведнъж. Обясняваме кое е важно, кое може да почака и какво е следващата стъпка.",
      items: [
        {
          title: "Възстановяване на рейтинг",
          body: "Преглеждаме всяка позиция в доклада, оспорваме неточностите и изграждаме месечен план за устойчиво повишаване на рейтинга — без съкратени пътища.",
        },
        {
          title: "Стратегия при дългове",
          body: "От револвиращи баланси до събирателни сметки — приоритизираме какво да се плати, договори или преструктурира, за да спре лихвата да изяжда напредъка.",
        },
        {
          title: "Готовност за финансиране",
          body: "Подготвяте се за ипотека, автокредит или рефинансиране? Подреждаме кредит, натоварване и документи преди срещата с кредитора.",
        },
      ],
    },
    process: {
      eyebrow: "Процес",
      title: "Спокоен път от объркването до писмен план.",
      support:
        "Без натиск за продажба. След първия разговор ще знаете дали Meridian е подходящ избор — и как трябва да изглеждат следващите тридесет дни.",
      imageAlt: "Ръце, които преглеждат документи по време на консултация",
      steps: [
        {
          number: "01",
          title: "Ориентиращ разговор",
          body: "30-минутна среща, за да разберем целите ви, сроковете и текущата кредитна картина.",
        },
        {
          number: "02",
          title: "Кредитен план",
          body: "Получавате писмен план с приоритети, очаквани срокове и стъпките, които ще предприемем заедно.",
        },
        {
          number: "03",
          title: "Насочено изпълнение",
          body: "Оставаме с вас през оспорвания, преговори и последващи стъпки, докато следващият етап е ясен.",
        },
      ],
    },
    consult: {
      eyebrow: "Консултация",
      title: "Кажете ни къде сте. Ще помогнем с следващия ход.",
      support:
        "Споделете кратко за ситуацията си. Отговаряме до един работен ден с възможни часове — без автоматичен спам и без натиск.",
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
      goal: "С какво имате нужда от помощ?",
      goalPlaceholder:
        "Рейтинг, стратегия при дългове, готовност за ипотека или нещо друго…",
      submit: "Заяви консултация",
      submitting: "Изпращане…",
      error:
        "Моля, попълнете име, имейл и цел на консултацията, за да се подготвим за разговора.",
      successTitle: "Заявката е получена",
      successBody:
        "Ще прегледаме бележката ви и ще отговорим до един работен ден със следващи стъпки и свободни часове.",
      sendAnother: "Изпрати нова заявка",
    },
    footer: {
      disclaimer:
        "Независими кредитни консултации. Не сме кредитор, фирма за „поправка“ на кредит или адвокатска кантора.",
    },
    lang: {
      label: "Език",
      bg: "БГ",
      en: "EN",
    },
  },
  en: {
    meta: {
      title: "Meridian Credit — Clear advice for complex credit",
      description:
        "Independent credit consulting for score recovery, debt strategy, and lending readiness. Book a focused consultation with Meridian Credit.",
    },
    nav: {
      services: "Services",
      process: "Process",
      consult: "Consult",
      bookCall: "Book a call",
    },
    hero: {
      brand: "Meridian Credit",
      headline: "Clear advice for complex credit.",
      support:
        "Independent consulting for score recovery, debt strategy, and lending readiness—so you can move forward with a plan that holds.",
      ctaPrimary: "Request a consultation",
      ctaSecondary: "See how we help",
      imageAlt:
        "Financial documents and calculator on a desk, suggesting careful credit review",
    },
    services: {
      eyebrow: "Services",
      title: "Practical credit work, without the noise.",
      support:
        "One focused engagement at a time. We explain what matters, what can wait, and what to do next.",
      items: [
        {
          title: "Score recovery",
          body: "We map every tradeline, dispute what is inaccurate, and build a month-by-month plan to raise your score with durable habits—not shortcuts.",
        },
        {
          title: "Debt strategy",
          body: "From revolving balances to collection accounts, we prioritize what to pay, negotiate, or restructure so interest stops eating your progress.",
        },
        {
          title: "Lending readiness",
          body: "Preparing for a mortgage, auto loan, or refinance? We align credit, utilization, and documentation before you talk to a lender.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A calm path from confusion to a written plan.",
      support:
        "No hard sell. You leave the first call knowing whether Meridian is the right fit—and what the next thirty days should look like.",
      imageAlt: "Hands reviewing paperwork during a consulting session",
      steps: [
        {
          number: "01",
          title: "Discovery call",
          body: "A 30-minute session to understand your goals, timeline, and current credit picture.",
        },
        {
          number: "02",
          title: "Credit blueprint",
          body: "You receive a written plan with priorities, expected timelines, and the actions we will take together.",
        },
        {
          number: "03",
          title: "Guided execution",
          body: "We stay with you through disputes, negotiations, and follow-ups until the next milestone is clear.",
        },
      ],
    },
    consult: {
      eyebrow: "Consult",
      title: "Tell us where you are. We'll help chart the next move.",
      support:
        "Share a short note about your situation. We reply within one business day with available times—no automated spam, no pressure to commit.",
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
      goal: "What do you need help with?",
      goalPlaceholder:
        "Score repair, debt strategy, mortgage readiness, or something else…",
      submit: "Request a consultation",
      submitting: "Sending…",
      error:
        "Please fill in your name, email, and consulting goal so we can prepare for the call.",
      successTitle: "Request received",
      successBody:
        "We'll review your note and reply within one business day with next steps and available times.",
      sendAnother: "Send another request",
    },
    footer: {
      disclaimer:
        "Independent credit consulting. Not a lender, credit repair organization, or law firm.",
    },
    lang: {
      label: "Language",
      bg: "BG",
      en: "EN",
    },
  },
};
