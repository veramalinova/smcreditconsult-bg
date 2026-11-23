import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import UsefulView from "./view";

const t = dictionaries.bg.usefulPage;
export const metadata = pageMetadata("/polezno", t.metaTitle, t.metaDescription);

export default function Page() {
  return <UsefulView />;
}
