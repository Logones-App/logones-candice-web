import type { ModuleId } from "../../lib/modules-data";

const colorMap: Record<ModuleId, string> = {
  caisse: "var(--caisse-accent)",
  stocks: "var(--stocks-accent)",
  haccp: "var(--haccp-accent)",
  rh: "var(--rh-accent)",
  resa: "var(--resa-accent)",
};

export function ModuleIcon({
  module,
  size = 24,
  className,
}: {
  module: ModuleId;
  size?: number;
  className?: string;
}) {
  const color = colorMap[module];
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (module) {
    case "caisse":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1" />
          <rect x="3" y="12" width="18" height="8" rx="1" />
          <path d="M7 16h2M11 16h2M15 16h2M7 8h10" />
        </svg>
      );
    case "stocks":
      return (
        <svg {...common}>
          <path d="M21 8V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8" />
          <path d="M2 4h20v4H2z" />
          <path d="M10 12h4" />
        </svg>
      );
    case "haccp":
      return (
        <svg {...common}>
          <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case "rh":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 21a6 6 0 0 1 12 0" />
          <circle cx="17" cy="9" r="2" />
          <path d="M21 19a4 4 0 0 0-6-3.4" />
        </svg>
      );
    case "resa":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
          <circle cx="12" cy="15" r="2" fill={color} />
        </svg>
      );
  }
}
