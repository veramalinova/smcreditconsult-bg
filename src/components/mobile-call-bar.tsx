"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { trackMobileConsultCta } from "@/lib/analytics";

export function MobileCallBar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname === "/konsultaciya") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="border-t border-white/15 bg-jade px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_28px_rgba(6,32,41,0.22)]">
        <Link
          href="/konsultaciya"
          aria-label={t.mobileCall.aria}
          onClick={trackMobileConsultCta}
          className="pointer-events-auto flex h-12 w-full items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-ink transition-opacity active:opacity-90"
        >
          {t.mobileCall.label}
        </Link>
      </div>
    </div>
  );
}
