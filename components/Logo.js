export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {/* wick + body, three candles */}
      <line x1="9" y1="7" x2="9" y2="33" />
      <rect x="6" y="15" width="6" height="11" fill="currentColor" fillOpacity="0.18" />
      <line x1="20" y1="4" x2="20" y2="30" />
      <rect x="17" y="9" width="6" height="14" fill="currentColor" />
      <line x1="31" y1="10" x2="31" y2="36" />
      <rect x="28" y="16" width="6" height="12" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}
