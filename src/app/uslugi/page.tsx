import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import ServicesView from "./view";

const t = dictionaries.bg.servicesOverview;
export const metadata = pageMetadata("/uslugi", t.metaTitle, t.metaDescription);

export default function Page() {
  return <ServicesView />;
}
