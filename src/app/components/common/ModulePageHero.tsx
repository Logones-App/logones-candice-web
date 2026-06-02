import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import { ModuleIcon } from "./ModuleIcon";
import { MODULES, type ModuleId } from "../../lib/modules-data";
import { cn } from "../../lib/utils";

export function ModulePageHero({
  module,
  title,
  lead,
  image,
  imageAlt,
}: {
  module: ModuleId;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
}) {
  const m = MODULES[module];
  const deepVar = m.colorVar.replace("-bright", "-deep");
  const accentVar = m.colorVar.replace("-bright", "-accent");
  const hasImage = Boolean(image);

  return (
    <section
      className="grain-overlay relative isolate overflow-hidden pt-[120px] pb-20 sm:pt-[140px]"
      style={{
        background: `linear-gradient(160deg, var(${deepVar}) 0%, var(--color-bg-base) 70%)`,
      }}
    >
      <div
        className={cn(
          "relative mx-auto px-5 sm:px-8 lg:px-10",
          hasImage
            ? "max-w-[1280px] grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]"
            : "max-w-[1000px]",
        )}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em]"
            style={{
              borderColor: `color-mix(in srgb, var(${accentVar}) 30%, transparent)`,
              backgroundColor: `color-mix(in srgb, var(${accentVar}) 12%, transparent)`,
              color: `var(${accentVar})`,
            }}
          >
            <ModuleIcon module={module} size={16} />
            {m.label}
          </div>
          <h1 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.1] tracking-[-0.025em] text-text-primary">
            {title}
          </h1>
          <p className="mt-6 max-w-[640px] text-[clamp(17px,1.5vw,20px)] leading-[1.65] text-text-secondary">
            {lead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary href="/demo" size="lg">
              Demander une démo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonPrimary>
            <ButtonSecondary href="/tarifs" size="lg">
              <Tag className="h-4 w-4" aria-hidden />
              Voir les tarifs
            </ButtonSecondary>
          </div>
        </div>

        {hasImage && image && (
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-xl)]"
              style={{ aspectRatio: "16 / 10" }}
            >
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, color-mix(in srgb, var(${deepVar}) 50%, transparent) 100%)`,
                }}
                aria-hidden
              />
            </div>
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl opacity-30 blur-3xl"
              style={{
                background: `radial-gradient(ellipse at center, var(${accentVar}), transparent 70%)`,
              }}
              aria-hidden
            />
          </div>
        )}
      </div>
    </section>
  );
}
