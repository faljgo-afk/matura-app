export default function Logo({ size = 28 }: { size?: number }) {
  const r = Math.round(size * 0.22)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx={r} fill="url(#logo-bg)" />
      <path
        d="M11 5 Q19 10.5 11 16 Q19 21.5 11 27"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M21 5 Q13 10.5 21 16 Q13 21.5 21 27"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <line x1="11" y1="5"  x2="21" y2="5"  stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="11" y1="16" x2="21" y2="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="11" y1="27" x2="21" y2="27" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
