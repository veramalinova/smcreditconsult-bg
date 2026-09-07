"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";
import {
  getContactPhones,
  getPrimaryContactPhone,
  type ContactPhone,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  /** Always use tel: (for mobile-only UI like the header call icon). */
  forceCall?: boolean;
  /** Specific number; defaults to the primary number for the active language. */
  phone?: ContactPhone;
  children?: ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
};

/**
 * On phones, tapping opens the dialer.
 * On desktop, the number is plain text so browsers do not prompt for an app.
 */
export function PhoneLink({
  className,
  forceCall = false,
  phone: phoneProp,
  children,
  "aria-label": ariaLabel,
  onClick,
}: PhoneLinkProps) {
  const { locale } = useLanguage();
  const phone = phoneProp ?? getPrimaryContactPhone(locale);
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

/** All contact numbers for the active language. */
export function PhoneList({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  const { locale } = useLanguage();
  const phones = getContactPhones(locale);

  return (
    <div className={cn("space-y-1", className)}>
      {phones.map((phone) => (
        <PhoneLink key={phone.tel} phone={phone} className={itemClassName}>
          {phone.display}
        </PhoneLink>
      ))}
    </div>
  );
}
