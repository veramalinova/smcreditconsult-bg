import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import ProcessView from "./view";

const t = dictionaries.bg.processPage;
export const metadata = pageMetadata("/kak-rabotim", t.metaTitle, t.metaDescription);

export default function Page() {
  return <ProcessView />;
}
