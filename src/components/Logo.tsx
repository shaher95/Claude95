export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="13" stroke="url(#logo-g)" strokeWidth="2" />
        <ellipse
          cx="14"
          cy="14"
          rx="13"
          ry="5.5"
          stroke="url(#logo-g)"
          strokeWidth="1.5"
          transform="rotate(-24 14 14)"
        />
        <circle cx="14" cy="14" r="3.5" fill="url(#logo-g)" />
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="28" y2="28">
            <stop stopColor="#8b7dff" />
            <stop offset="1" stopColor="#00d4a0" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-lg font-bold tracking-tight">AdOrbit</span>
    </span>
  );
}
