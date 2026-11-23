import { ServiceDetailPage } from "@/components/service-detail-page";
import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const s = dictionaries.bg.services.mortgage;
export const metadata = pageMetadata(s.href, s.metaTitle, s.metaDescription);

export default function MortgagePage() {
  return <ServiceDetailPage serviceId="mortgage" />;
}
