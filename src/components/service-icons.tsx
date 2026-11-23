export function MortgageIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M8 22.5 24 9l16 13.5V39a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M20 41V27h8v14" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ConsumerIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="7"
        y="14"
        width="34"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M7 21h34" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13 29h8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function BusinessIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M10 40V18l8-6h12l8 6v22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M18 40V28h12v12" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 22h2M26 22h2M20 27h2M26 27h2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function RefinancingIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      {/* Two arrows forming a circle: moving a loan to better terms */}
      <path
        d="M37 20a14 14 0 0 0-25.5-5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M11 9v6h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 28a14 14 0 0 0 25.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M37 39v-6h-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 24h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIcons = {
  mortgage: MortgageIcon,
  consumer: ConsumerIcon,
  business: BusinessIcon,
  refinancing: RefinancingIcon,
} as const;
