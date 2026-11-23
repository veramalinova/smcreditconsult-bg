import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import AboutView from "./view";

const t = dictionaries.bg.aboutPage;
export const metadata = pageMetadata("/za-nas", t.metaTitle, t.metaDescription);

export default function Page() {
  return <AboutView />;
}
