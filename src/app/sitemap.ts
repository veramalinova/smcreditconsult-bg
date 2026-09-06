import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/uslugi",
  "/uslugi/ipotechnen-kredit",
  "/uslugi/potrebitelski-kredit",
  "/uslugi/firmen-kredit",
  "/kak-rabotim",
  "/za-nas",
  "/polezno",
  "/vaprosi",
  "/konsultaciya",
  "/politika-za-poveritelnost",
  "/politika-za-biskvitki",
  "/obshti-usloviya",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${origin}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/konsultaciya" ? 0.9 : 0.7,
  }));
}
