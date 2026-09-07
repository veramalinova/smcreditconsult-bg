"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";
import { getContactPhone } from "@/lib/contact";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  /** Always use tel: (for mobile-only UI like the header call icon). */
  forceCall?: boolean;
  children?: ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
};

/**
 * On phones, tapping opens the dialer.
 * On desktop, the number is plain text so browsers do not prompt for an app.
 * Number follows the active language (BG / EN).
 */
export function PhoneLink({
  className,
  forceCall = false,
  children,
  "aria-label": ariaLabel,
  onClick,
}: PhoneLinkProps) {
  const { locale } = useLanguage();
  const phone = getContactPhone(locale);
  const label = children ?? phone.display;

  if (forceCall) {
    return (
      <a
        href={`tel:${phone.tel}`}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <>
      <a
        href={`tel:${phone.tel}`}
        className={cn(className, "md:hidden")}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {label}
      </a>
      <span className={cn(className, "hidden md:inline")}>{label}</span>
    </>
  );
}
