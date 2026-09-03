import type { IconName } from "@/content/types";

/**
 * A small, self-contained stroke icon set.
 *
 * Kept inline rather than pulled from an icon package: it's a handful of
 * kilobytes, ships no runtime JavaScript, and avoids a dependency that would
 * need updating. Add a key here and to `IconName` in content/types.ts to extend it.
 */
const paths: Record<IconName, React.ReactNode> = {
  calculator: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <path d="M8 7h8M8 11.5h.01M12 11.5h.01M16 11.5h.01M8 15h.01M12 15h.01M16 15v3.5M8 18.5h4" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 2.5v19l2.5-1.6 2.5 1.6 2-1.6 2 1.6 2.5-1.6 2.5 1.6v-19l-2.5 1.6L15.5 2.5l-2 1.6-2-1.6-2.5 1.6z" />
      <path d="M9 9h6M9 13h6" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="M7.5 15.5l4-4.5 3 3 5-6" />
      <path d="M19.5 8v3.5M19.5 8H16" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5l7.5 3v6c0 4.6-3.1 8.8-7.5 10-4.4-1.2-7.5-5.4-7.5-10v-6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13.5" rx="2" />
      <path d="M8.5 7V5a2 2 0 012-2h3a2 2 0 012 2v2M2.5 12.5h19" />
    </>
  ),
  building: (
    <>
      <path d="M4 21.5V4.5a2 2 0 012-2h8a2 2 0 012 2v17" />
      <path d="M16 9.5h2.5a2 2 0 012 2v10M2 21.5h20" />
      <path d="M8 7h4M8 11h4M8 15h4" />
    </>
  ),
  growth: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6M11 20.5V9M15.5 20.5v-9M20 20.5V4.5" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 6.5L8.5 9a2.1 2.1 0 000 3 2.1 2.1 0 003 0l1.5-1.5 4 4a2 2 0 01-2.8 2.8l-.7-.7" />
      <path d="M13 5.5h3l5 5-3 3M11 6.5H8l-5 5 3 3" />
      <path d="M13 17.5l-1.5 1.5a2 2 0 01-2.8-2.8" />
    </>
  ),
  clipboard: (
    <>
      <rect x="4.5" y="4" width="15" height="17.5" rx="2" />
      <path d="M9 4V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 3v1" />
      <path d="M8.5 10.5h7M8.5 14.5h7M8.5 18h4" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7.5A2.5 2.5 0 015.5 5H18a2 2 0 012 2v1.5" />
      <rect x="3" y="7.5" width="18.5" height="12" rx="2.5" />
      <path d="M16.5 13.5h1.5" />
    </>
  ),
  scales: (
    <>
      <path d="M12 3v18M7 21h10M12 6l7 2M12 6L5 8" />
      <path d="M5 8l-2.5 6h5zM19 8l-2.5 6h5z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20.5a6.5 6.5 0 0113 0" />
      <path d="M16 5.2a3.5 3.5 0 010 5.6M17.5 15a6.5 6.5 0 014 5.5" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5.5 9v11.5h13V9" />
      <path d="M10 20.5v-6h4v6" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3v5a4.5 4.5 0 009 0V3" />
      <path d="M4 3h3M14 3h3M10.5 12.5v3a5 5 0 0010 0v-1" />
      <circle cx="19.5" cy="12" r="2" />
    </>
  ),
  hardhat: (
    <>
      <path d="M3 17.5h18M4.5 17.5v-2.5a7.5 7.5 0 0115 0v2.5" />
      <path d="M9.5 8.2V4.5A1.5 1.5 0 0111 3h2a1.5 1.5 0 011.5 1.5v3.7" />
      <path d="M2.5 20.5h19" />
    </>
  ),
  cart: (
    <>
      <path d="M2.5 3.5h2.8l2.4 12h10.4l2.4-8.5H6.2" />
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="17.5" cy="20" r="1.4" />
    </>
  ),
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </>
  ),
  heart: (
    <path d="M12 20.5S3.5 15.2 3.5 9.2A4.7 4.7 0 0112 6.6a4.7 4.7 0 018.5 2.6c0 6-8.5 11.3-8.5 11.3z" />
  ),
  utensils: (
    <>
      <path d="M6 2.5v7a2.5 2.5 0 005 0v-7M8.5 12v9.5" />
      <path d="M16.5 2.5c-1.5 1.5-2 3.5-2 5.5s.7 3 2 3.5v10" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2.5s4.5 2.5 4.5 8c0 3-1.2 5-2 6h-5c-.8-1-2-3-2-6 0-5.5 4.5-8 4.5-8z" />
      <circle cx="12" cy="9.5" r="1.8" />
      <path d="M9.5 16.5L7 19l1 2.5 2-1.5M14.5 16.5L17 19l-1 2.5-2-1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 6.5V12l3.5 2" />
    </>
  ),
  phone: (
    <path d="M6.6 3h-2A1.6 1.6 0 003 4.7C3 13.1 9.9 20 18.3 20a1.6 1.6 0 001.7-1.6v-2a1.2 1.2 0 00-1-1.2l-3-.6a1.2 1.2 0 00-1.2.5l-1 1.4a13.5 13.5 0 01-5.3-5.3l1.4-1a1.2 1.2 0 00.5-1.2l-.6-3A1.2 1.2 0 006.6 3z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11.5a7 7 0 10-14 0c0 5.3 7 11.5 7 11.5z" />
      <circle cx="12" cy="10" r="2.8" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  sparkle: (
    <>
      <path d="M12 2.5l2.2 6.3L20.5 11l-6.3 2.2L12 19.5l-2.2-6.3L3.5 11l6.3-2.2z" />
      <path d="M19 3v3M20.5 4.5h-3" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 018 0v3M12 14.5v2.5" />
    </>
  ),
  document: (
    <>
      <path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z" />
      <path d="M14 2.5v5h5M8.5 12.5h7M8.5 16.5h5" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
