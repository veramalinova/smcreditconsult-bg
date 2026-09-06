"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getSiteUrl } from "@/lib/site";

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content: string
) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Sets title, description, Open Graph, Twitter card, and canonical for the page. */
export function usePageMeta(title: string, description: string) {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const origin = getSiteUrl();
    const url = `${origin}${pathname}`;
    const image = `${origin}/hero.jpg`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description" }, description);

    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, url);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
    upsertMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "СМ Кредит Консулт"
    );
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "bg_BG");

    upsertMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description
    );
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);

    upsertLink("canonical", url);
  }, [title, description, pathname]);
}
