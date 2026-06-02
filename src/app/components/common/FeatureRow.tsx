import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import type { ModuleId } from "../../lib/modules-data";

const colorMap: Record<ModuleId, string> = {
  caisse: "var(--caisse-accent)",
  stocks: "var(--stocks-accent)",
  haccp: "var(--haccp-accent)",
  rh: "var(--rh-accent)",
  resa: "var(--resa-accent)",
};

export function FeatureRow({
  module,
  title,
  description,
  bullets,
  reverse = false,
  illustration,
}: {
  module: ModuleId;
  title: string;
  description: string;
  bullets: string[];
  reverse?: boolean;
  illustration?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
      )}
    >
      <div className={cn(reverse && "lg:order-2")}>
        <h3 className="font-sans text-[clamp(20px,2.5vw,32px)] font-semibold leading-[1.25] tracking-[-0.015em] text-text-primary">
          {title}
        </h3>
        <p className="mt-4 text-[16px] leading-[1.7] text-text-secondary">
          {description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: colorMap[module] }}
                aria-hidden
              />
              <span className="text-text-primary">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "relative flex h-[280px] w-full items-center justify-center rounded-2xl border border-border bg-bg-surface p-6",
          reverse && "lg:order-1",
        )}
      >
        {illustration ?? (
          <div
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${colorMap[module]}, transparent 70%)`,
            }}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
