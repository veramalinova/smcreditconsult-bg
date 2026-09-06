import type { ReactNode } from "react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";
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
 */
export function PhoneLink({
  className,
  forceCall = false,
  children,
  "aria-label": ariaLabel,
  onClick,
}: PhoneLinkProps) {
  const label = children ?? CONTACT_PHONE_DISPLAY;

  if (forceCall) {
    return (
      <a
        href={`tel:${CONTACT_PHONE_TEL}`}
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
        href={`tel:${CONTACT_PHONE_TEL}`}
        className={cn("md:hidden", className)}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {label}
      </a>
      <span className={cn("hidden md:inline", className)}>{label}</span>
    </>
  );
}
