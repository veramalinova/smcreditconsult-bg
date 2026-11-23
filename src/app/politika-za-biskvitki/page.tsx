import { LegalPageView } from "@/components/legal-page-view";
import { getLegalPage } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

const p = getLegalPage("bg", "cookies");
export const metadata = pageMetadata(p.href, p.metaTitle, p.metaDescription);

export default function CookiesPage() {
  return <LegalPageView pageId="cookies" />;
}
