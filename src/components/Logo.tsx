type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** Mark: three stacked infrastructure layers joined by a connection node. */
export function LogoMark({ className = "h-9 w-9", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="39" height="39" rx="8.5" fill={onDark ? "#16223a" : "#0b1220"} stroke={onDark ? "#33456a" : "#0b1220"} />
      <rect x="9" y="10" width="17" height="4" rx="1.5" fill="#3b82f6" />
      <rect x="9" y="18" width="17" height="4" rx="1.5" fill="#93b6fd" />
      <rect x="9" y="26" width="17" height="4" rx="1.5" fill="#ffffff" />
      <path d="M26 12h4v16h-4" fill="none" stroke="#3b82f6" strokeWidth="1.6" />
      <circle cx="30" cy="20" r="2.6" fill="#3b82f6" />
    </svg>
  );
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "dark" ? "text-ink-950" : "text-white";
  const secondary = variant === "dark" ? "text-slate-500" : "text-slate-400";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark onDark={variant === "light"} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[0.98rem] font-bold tracking-tight ${primary}`}>IT Infrastructure</span>
        <span className={`mt-1 text-[0.68rem] font-semibold tracking-[0.2em] uppercase ${secondary}`}>Solutions</span>
      </span>
    </span>
  );
}
