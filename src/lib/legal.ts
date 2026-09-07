import type { Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

export type LegalPageId = "privacy" | "cookies" | "terms";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  id: LegalPageId;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  updatedLabel: string;
  updatedValue: string;
  sections: LegalSection[];
};

const pages: Record<Locale, Record<LegalPageId, LegalPageContent>> = {
  bg: {
    privacy: {
      id: "privacy",
      href: "/politika-za-poveritelnost",
      title: "Политика за поверителност",
      metaTitle: "Политика за поверителност | СМ Кредит Консулт",
      metaDescription:
        "Как СМ Кредит Консулт обработва лични данни при кредитна консултация.",
      updatedLabel: "Последна актуализация",
      updatedValue: "септември 2026",
      sections: [
        {
          title: "Кой сме ние",
          paragraphs: [
            "СМ Кредит Консулт предоставя кредитни консултации. Не сме банка и не отпускаме кредити. Администратор на личните данни, събрани чрез сайта, е СМ Кредит Консулт.",
            `За въпроси относно личните данни: ${CONTACT_EMAIL}, телефон ${CONTACT_PHONE_DISPLAY}.`,
          ],
        },
        {
          title: "Какви данни събираме",
          paragraphs: [
            "Когато попълните формата за консултация, получаваме име, имейл, телефон (ако го посочите) и описание на кредитната ви цел.",
            "При обаждане или имейл кореспонденция обработваме данните, които ни споделяте доброволно, за да отговорим и да продължим консултацията.",
          ],
        },
        {
          title: "За какво ги използваме",
          paragraphs: [
            "Данните се използват само за връзка с вас, подготовка на консултацията и съдействие при сравнение на банкови оферти — според вашата заявка.",
            "Не продаваме лични данни. Не ги предоставяме на трети страни за маркетинг. Ако е нужно да споделим информация с банка във връзка с вашето кандидатстване, това става с ваше знание и за конкретната цел.",
          ],
        },
        {
          title: "Къде се съхраняват и колко време",
          paragraphs: [
            "Заявките от формата се изпращат по имейл към нашия работен адрес и се обработват от нас. Съхраняваме ги докато е нужно за консултацията и разумна последваща връзка, освен ако не поискате по-рано изтриване.",
            "Можете да поискате достъп, корекция или изтриване на данните си, като ни пишете на посочения имейл.",
          ],
        },
        {
          title: "Вашите права",
          paragraphs: [
            "Имате право на достъп, поправка, ограничаване на обработването и възражение, както и да подадете сигнал до Комисията за защита на личните данни, ако смятате, че правата ви са нарушени.",
          ],
        },
      ],
    },
    cookies: {
      id: "cookies",
      href: "/politika-za-biskvitki",
      title: "Политика за бисквитки",
      metaTitle: "Политика за бисквитки | СМ Кредит Консулт",
      metaDescription:
        "Как сайтът на СМ Кредит Консулт използва бисквитки и локално хранилище.",
      updatedLabel: "Последна актуализация",
      updatedValue: "септември 2026",
      sections: [
        {
          title: "Какво използваме",
          paragraphs: [
            "Сайтът работи с минимални технически средства. Не използваме рекламни или аналитични бисквитки на трети страни.",
            "Избраният език (БГ/EN) се запазва в локалното хранилище на браузъра (localStorage), за да не се налага да го избирате отново при следващо посещение.",
          ],
        },
        {
          title: "Защо е нужно",
          paragraphs: [
            "Това е техническа настройка за удобство. Без нея езикът би се връщал към подразбиращия се при всяко зареждане.",
          ],
        },
        {
          title: "Как да управлявате настройките",
          paragraphs: [
            "Можете да изчистите localStorage и бисквитките от настройките на браузъра си. Това няма да попречи на основното ползване на сайта, но езикът може да се нулира.",
            "Ако в бъдеще добавим допълнителни бисквитки, ще актуализираме тази страница.",
          ],
        },
      ],
    },
    terms: {
      id: "terms",
      href: "/obshti-usloviya",
      title: "Общи условия",
      metaTitle: "Общи условия | СМ Кредит Консулт",
      metaDescription:
        "Условия за ползване на сайта и кредитните консултации на СМ Кредит Консулт.",
      updatedLabel: "Последна актуализация",
      updatedValue: "септември 2026",
      sections: [
        {
          title: "Предмет на услугата",
          paragraphs: [
            "СМ Кредит Консулт предоставя ориентация и съдействие при избор и кандидатстване за ипотечен, потребителски или фирмен кредит — включително рефинансиране. Работим с дългогодишен опит. Консултацията за клиента е безплатна.",
            "За клиента консултацията и съдействието са без допълнителна такса. Когато е приложимо, възнаграждението на кредитния посредник се заплаща от кредитора съгласно договорните отношения между страните.",
            "Не сме кредитор. Окончателното одобрение, условията и отпускането на кредит са изцяло решение на съответната банка или финансов институция.",
          ],
        },
        {
          title: "Как работим",
          paragraphs: [
            "Работим изцяло онлайн и по телефона. След ваша заявка уточняваме целта и профила ви, сравняваме подходящи опции и ви съдействаме при документите и комуникацията с банката — според договореното.",
            "Информацията на сайта е обща и ориентировъчна. Не е индивидуален финансов или правен съвет, докато не проведем конкретна консултация по вашия случай.",
          ],
        },
        {
          title: "Отговорност",
          paragraphs: [
            "Стремим се към точна и актуална информация, но банковите условия се променят. Крайните параметри на кредита зависят от офертата на банката и от вашия одобрителен профил.",
            "Не носим отговорност за решения на банки, за промени в оферти или за загуби, произтичащи от избор, направен без да се съобразите с актуалните условия на кредитора.",
          ],
        },
        {
          title: "Ползване на сайта",
          paragraphs: [
            "Съдържанието на сайта е собственост на СМ Кредит Консулт и може да се ползва за лична информационна цел. Не е разрешено копиране с търговска цел без съгласие.",
            `За въпроси по тези условия: ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      id: "privacy",
      href: "/politika-za-poveritelnost",
      title: "Privacy policy",
      metaTitle: "Privacy policy | SM Credit Consult",
      metaDescription:
        "How SM Credit Consult processes personal data for credit consultation.",
      updatedLabel: "Last updated",
      updatedValue: "September 2026",
      sections: [
        {
          title: "Who we are",
          paragraphs: [
            "SM Credit Consult provides credit consulting. We are not a bank and we do not issue loans. SM Credit Consult is the controller of personal data collected through this website.",
            `For privacy questions: ${CONTACT_EMAIL}, phone ${CONTACT_PHONE_DISPLAY}.`,
          ],
        },
        {
          title: "What data we collect",
          paragraphs: [
            "When you submit the consultation form, we receive your name, email, phone (if provided), and a description of your loan goal.",
            "If you call or email us, we process the information you choose to share so we can reply and continue the consultation.",
          ],
        },
        {
          title: "How we use it",
          paragraphs: [
            "We use the data only to contact you, prepare the consultation, and help compare bank offers — according to your request.",
            "We do not sell personal data. We do not share it with third parties for marketing. If information needs to be shared with a bank for your application, that happens with your knowledge and for that specific purpose.",
          ],
        },
        {
          title: "Storage and retention",
          paragraphs: [
            "Form requests are sent by email to our working address and handled by us. We keep them as long as needed for the consultation and reasonable follow-up, unless you ask us to delete them sooner.",
            "You can request access, correction, or deletion by writing to the email above.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You have the right to access, rectify, restrict processing, and object, and to lodge a complaint with the Bulgarian Commission for Personal Data Protection if you believe your rights have been infringed.",
          ],
        },
      ],
    },
    cookies: {
      id: "cookies",
      href: "/politika-za-biskvitki",
      title: "Cookie policy",
      metaTitle: "Cookie policy | SM Credit Consult",
      metaDescription:
        "How the SM Credit Consult website uses cookies and local storage.",
      updatedLabel: "Last updated",
      updatedValue: "September 2026",
      sections: [
        {
          title: "What we use",
          paragraphs: [
            "The site uses minimal technical means. We do not use third-party advertising or analytics cookies.",
            "Your language choice (BG/EN) is saved in the browser’s localStorage so you do not have to select it again on the next visit.",
          ],
        },
        {
          title: "Why we need it",
          paragraphs: [
            "This is a convenience setting. Without it, the language would reset to the default on every load.",
          ],
        },
        {
          title: "How to manage settings",
          paragraphs: [
            "You can clear localStorage and cookies in your browser settings. That will not block basic use of the site, but the language may reset.",
            "If we add additional cookies later, we will update this page.",
          ],
        },
      ],
    },
    terms: {
      id: "terms",
      href: "/obshti-usloviya",
      title: "Terms of use",
      metaTitle: "Terms of use | SM Credit Consult",
      metaDescription:
        "Terms for using the SM Credit Consult website and credit consultations.",
      updatedLabel: "Last updated",
      updatedValue: "September 2026",
      sections: [
        {
          title: "Scope of the service",
          paragraphs: [
            "SM Credit Consult provides guidance and support when choosing and applying for a mortgage, consumer, or business loan — including refinancing. We work with years of experience. Consultation is free for the client.",
            "For the client, consultation and support come with no extra fee. When applicable, the credit intermediary’s remuneration is paid by the lender under the contractual arrangements between the parties.",
            "We are not a lender. Final approval, terms, and disbursement are decided solely by the relevant bank or financial institution.",
          ],
        },
        {
          title: "How we work",
          paragraphs: [
            "We work fully online and by phone. After your request, we clarify your goal and profile, compare suitable options, and help with documents and bank communication — as agreed.",
            "Website content is general and informational. It is not personal financial or legal advice until we hold a consultation on your specific case.",
          ],
        },
        {
          title: "Responsibility",
          paragraphs: [
            "We aim for accurate, up-to-date information, but bank terms change. Final loan parameters depend on the bank’s offer and your approval profile.",
            "We are not liable for bank decisions, offer changes, or losses from choices made without considering the lender’s current terms.",
          ],
        },
        {
          title: "Website use",
          paragraphs: [
            "Site content belongs to SM Credit Consult and may be used for personal informational purposes. Commercial copying without permission is not allowed.",
            `For questions about these terms: ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
  },
};

export const legalPageOrder: LegalPageId[] = ["privacy", "cookies", "terms"];

export function getLegalPage(locale: Locale, id: LegalPageId): LegalPageContent {
  return pages[locale][id];
}

export function getLegalNav(locale: Locale) {
  return legalPageOrder.map((id) => {
    const page = pages[locale][id];
    return { id, href: page.href, title: page.title };
  });
}
