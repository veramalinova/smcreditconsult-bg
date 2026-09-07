import type { Metadata } from "next";
import { Literata, Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { LanguageProvider } from "@/components/language-provider";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { dictionaries } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const bg = dictionaries.bg;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: bg.meta.title,
  description: bg.meta.description,
  applicationName: bg.brand,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: siteUrl,
    siteName: bg.brand,
    title: bg.meta.title,
    description: bg.meta.description,
    images: [
      {
        url: "/hero.jpg",
        width: 2400,
        height: 1377,
        alt: bg.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: bg.meta.title,
    description: bg.meta.description,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bg"
      className={`${manrope.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-20 font-sans md:pb-0">
        <LanguageProvider>
          {children}
          <MobileCallBar />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
