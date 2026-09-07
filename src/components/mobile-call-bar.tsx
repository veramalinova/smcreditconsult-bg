"use client";

import { useLanguage } from "@/components/language-provider";
import { PhoneLink } from "@/components/phone-link";
import { trackPhoneClick } from "@/lib/analytics";

export function MobileCallBar() {
  const { t } = useLanguage();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="border-t border-white/15 bg-jade px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_28px_rgba(6,32,41,0.22)]">
        <PhoneLink
          forceCall
          aria-label={t.mobileCall.aria}
          onClick={trackPhoneClick}
          className="pointer-events-auto flex h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-ink transition-opacity active:opacity-90"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-jade"
            fill="none"
            aria-hidden
          >
            <path
              d="M7.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5.5 6.5a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
          <span>{t.mobileCall.label}</span>
        </PhoneLink>
      </div>
    </div>
  );
}
