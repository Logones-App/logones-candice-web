import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MODULES, type ModuleId } from "../../lib/modules-data";
import { ModuleIcon } from "./ModuleIcon";

export function ModuleCard({ id }: { id: ModuleId }) {
  const m = MODULES[id];
  const colorStyle = {
    "--module-color": `var(${m.colorVar})`,
  } as React.CSSProperties;

  return (
    <Link
      href={`/modules/${m.slug}`}
      style={colorStyle}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--module-color)] hover:shadow-[var(--shadow-md),0_0_30px_color-mix(in_srgb,var(--module-color)_15%,transparent)]"
    >
      <div className="mb-5">
        <ModuleIcon module={id} size={40} />
      </div>
      <div
        className="text-[11px] font-semibold uppercase tracking-[0.08em]"
        style={{ color: `var(${m.colorVar.replace("bright", "accent")})` }}
      >
        {m.label}
      </div>
      <h3 className="mt-2 text-[22px] font-normal leading-[1.25] tracking-[-0.015em] text-text-primary font-sans">
        {m.tagline}
      </h3>
      <p className="mt-3 line-clamp-3 text-[15px] leading-[1.65] text-text-secondary">
        {m.description}
      </p>
      <div className="my-5 h-px bg-border" />
      <ul className="space-y-2.5">
        {m.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-[14px] text-text-primary"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{
                color: `var(${m.colorVar.replace("bright", "accent")})`,
              }}
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
        style={{ color: `var(${m.colorVar.replace("bright", "accent")})` }}
      >
        En savoir plus
        <ArrowRight className="h-4 w-4" aria-hidden />
      </div>
    </Link>
  );
}
