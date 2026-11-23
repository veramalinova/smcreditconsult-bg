import { ServiceDetailPage } from "@/components/service-detail-page";
import { dictionaries } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const s = dictionaries.bg.services.refinancing;
export const metadata = pageMetadata(s.href, s.metaTitle, s.metaDescription);

export default function RefinancingPage() {
  return <ServiceDetailPage serviceId="refinancing" />;
}
