import Link from "next/link";
import { Check, X } from "lucide-react";
import { PRICING_TIERS } from "../../lib/pricing-data";
import { MODULES, MODULE_ORDER } from "../../lib/modules-data";
import { cn } from "../../lib/utils";

export function PricingGrid({ variant = "preview" }: { variant?: "preview" | "full" }) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
      {PRICING_TIERS.map((tier) => {
        const isPro = tier.highlighted;
        return (
          <div
            key={tier.id}
            className={cn(
              "relative flex flex-col rounded-2xl p-8",
              isPro
                ? "border-2 border-gold-light bg-bg-base text-text-primary lg:-translate-y-3"
                : "border border-border-light bg-white text-text-dark",
              tier.id === "premium" &&
                "border border-border bg-bg-surface text-text-primary",
            )}
            style={isPro ? { boxShadow: "var(--shadow-glow-gold)" } : undefined}
          >
            {isPro && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-bg-base">
                LE PLUS CHOISI
              </span>
            )}

            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.08em]",
                isPro ? "text-gold-light" : tier.id === "premium" ? "text-gold-light" : "text-text-dark-sec",
              )}
            >
              {tier.name}
            </p>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span
                className={cn(
                  "font-sans text-[48px] font-semibold leading-none",
                  isPro ? "text-gold-light" : tier.id === "premium" ? "text-text-primary" : "text-text-dark",
                )}
              >
                {tier.priceTTC} €
              </span>
              <span
                className={cn(
                  "text-base",
                  isPro || tier.id === "premium" ? "text-text-secondary" : "text-text-dark-sec",
                )}
              >
                /mois TTC
              </span>
            </div>
            <p
              className={cn(
                "mt-1 text-xs",
                isPro || tier.id === "premium" ? "text-text-muted" : "text-text-dark-sec",
              )}
            >
              Sans matériel. Contrat 2 ans.
            </p>

            <ul className="mt-6 space-y-3">
              {MODULE_ORDER.map((mid) => {
                const included = tier.modules[mid];
                const m = MODULES[mid];
                return (
                  <li
                    key={mid}
                    className={cn(
                      "flex items-center gap-2 text-sm",
                      !included &&
                        (isPro || tier.id === "premium"
                          ? "text-text-muted/60"
                          : "text-text-dark-sec/50"),
                    )}
                  >
                    {included ? (
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isPro
                            ? "text-gold-light"
                            : tier.id === "premium"
                              ? "text-haccp-accent"
                              : "text-haccp-bright",
                        )}
                        aria-hidden
                      />
                    ) : (
                      <X className="h-4 w-4 shrink-0 opacity-40" aria-hidden />
                    )}
                    <span>{m.name === "Caisse" ? "Caisse NF525" : m.name}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/demo"
              className={cn(
                "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all",
                isPro
                  ? "bg-gold-light text-bg-base hover:brightness-110 hover:shadow-glow-gold"
                  : tier.id === "premium"
                    ? "border border-border bg-transparent text-text-primary hover:border-gold-light hover:text-gold-light"
                    : "border border-border-light bg-transparent text-text-dark hover:bg-bg-light-alt",
              )}
            >
              Demander une démo
            </Link>
          </div>
        );
      })}
    </div>
  );
}
