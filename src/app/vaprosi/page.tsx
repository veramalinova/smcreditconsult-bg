import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import FaqView from "./view";

const t = dictionaries.bg.faqPage;
export const metadata = pageMetadata("/vaprosi", t.metaTitle, t.metaDescription);

// FAQPage structured data: lets Google show these questions directly in results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: t.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqView />
    </>
  );
}
