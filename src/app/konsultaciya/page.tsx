import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import ConsultView from "./view";

const t = dictionaries.bg.consultPage;
export const metadata = pageMetadata("/konsultaciya", t.metaTitle, t.metaDescription);

export default function Page() {
  return <ConsultView />;
}
