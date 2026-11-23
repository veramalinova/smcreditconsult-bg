import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import HomeView from "./view";

const t = dictionaries.bg.home;
export const metadata = pageMetadata("/", t.metaTitle, t.metaDescription);

export default function Page() {
  return <HomeView />;
}
