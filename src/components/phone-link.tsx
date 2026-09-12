"use client";

import type { MouseEvent, ReactNode } from "react";
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
 * On desktop, the number stays a single text node so crawlers do not see it twice;
 * clicks do not open a calling app.
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

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (
      !forceCall &&
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      event.preventDefault();
    }
  }

  return (
    <a
      href={`tel:${phone.tel}`}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}

/** All contact numbers for the active language. */
export function PhoneList({
  className,
  itemClassName,
  forceCall = false,
  onItemClick,
}: {
  className?: string;
  itemClassName?: string;
  forceCall?: boolean;
  onItemClick?: () => void;
}) {
  const { locale } = useLanguage();
  const phones = getContactPhones(locale);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {phones.map((phone) => (
        <PhoneLink
          key={phone.tel}
          phone={phone}
          className={itemClassName}
          forceCall={forceCall}
          onClick={onItemClick}
        >
          {phone.display}
        </PhoneLink>
      ))}
    </div>
  );
}
