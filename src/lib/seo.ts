import type { Metadata } from "next";
import { dictionaries } from "@/lib/i18n";

/**
 * Server-side metadata for one page, in Bulgarian (the default language).
 *
 * This is what search engines and link previews see in the initial HTML.
 * The client-side `usePageMeta` hook still swaps title/description when a
 * visitor switches to English.
 *
 * Relative URLs are resolved against `metadataBase` from the root layout.
 * Next.js merges metadata shallowly, so openGraph/twitter are repeated in full
 * here; otherwise a page would inherit the home page's preview.
 */
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const brand = dictionaries.bg.brand;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "bg_BG",
      url: path,
      siteName: brand,
      title,
      description,
      images: [{ url: "/hero.jpg", width: 2400, height: 1377, alt: brand }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.jpg"],
    },
  };
}
