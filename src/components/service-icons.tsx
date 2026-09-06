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

export function RefinanceIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M14 18a12 12 0 0 1 20-2l2-4m0 0v6h-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30a12 12 0 0 1-20 2l-2 4m0 0v-6h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export const serviceIcons = {
  mortgage: MortgageIcon,
  consumer: ConsumerIcon,
  business: BusinessIcon,
  refinance: RefinanceIcon,
} as const;
