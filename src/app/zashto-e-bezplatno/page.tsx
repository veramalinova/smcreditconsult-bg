import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import FreeWhyView from "./view";

const t = dictionaries.bg.freeWhyPage;
export const metadata = pageMetadata("/zashto-e-bezplatno", t.metaTitle, t.metaDescription);

export default function Page() {
  return <FreeWhyView />;
}
