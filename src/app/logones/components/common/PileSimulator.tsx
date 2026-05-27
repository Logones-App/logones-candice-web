"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";
import { Switch } from "../ui/switch";
import { ButtonPrimary } from "./Buttons";
import { LegalNotice } from "./LegalNotice";
import { MARKET_COSTS } from "../../lib/pricing-data";
import { cn, formatEuros } from "../../lib/utils";

const LOGONES_PREMIUM_MONTHLY = 300;
const DURATION_OPTIONS = [12, 24, 36] as const;

type ToolState = { enabled: boolean; price: number };

export function PileSimulator({
  durationMonths = 24,
  intro = true,
}: {
  durationMonths?: number;
  intro?: boolean;
}) {
  const [duration, setDuration] = useState<number>(durationMonths);
  const [state, setState] = useState<Record<string, ToolState>>(() =>
    Object.fromEntries(
      MARKET_COSTS.map((m) => [
        m.id,
        { enabled: m.defaultMonthly > 0, price: m.defaultMonthly },
      ]),
    ),
  );

  const monthlyTotal = useMemo(
    () =>
      MARKET_COSTS.reduce(
        (sum, m) =>
          sum + (state[m.id]?.enabled ? Number(state[m.id]?.price || 0) : 0),
        0,
      ),
    [state],
  );

  const pileTotal = monthlyTotal * duration;
  const logonesTotal = LOGONES_PREMIUM_MONTHLY * duration;
  const diff = pileTotal - logonesTotal;

  function update(id: string, patch: Partial<ToolState>) {
    setState((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }

  let diffMessage: string;
  if (Math.abs(diff) < 200) {
    diffMessage = `À budget équivalent — mais un seul outil vs ${MARKET_COSTS.filter((m) => state[m.id]?.enabled).length} abonnements séparés.`;
  } else if (diff > 0) {
    diffMessage = `Vous économisez ${formatEuros(diff)} sur ${duration} mois avec Logones.`;
  } else {
    diffMessage = `Logones coûte ${formatEuros(Math.abs(diff))} de plus — mais un seul outil, une seule facture.`;
  }

  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-10">
      {intro && (
        <header className="mb-8 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-pale text-gold-light">
            <Calculator className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
              Calculateur interactif
            </p>
            <h3 className="mt-1 font-display text-[clamp(20px,2.5vw,28px)] font-normal text-text-primary">
              Combien vous coûte vraiment votre pile actuelle ?
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Entrez les outils que vous utilisez aujourd&apos;hui. Choisissez
              la durée — nous calculons le total.
            </p>
          </div>
        </header>
      )}

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
            Vos outils actuels
          </p>
          <ul className="mt-4 space-y-3">
            {MARKET_COSTS.map((m) => {
              const tool = state[m.id];
              return (
                <li key={m.id}>
                  <div
                    className={`flex items-center gap-3 rounded-xl border p-4 transition-colors ${
                      tool.enabled
                        ? "border-gold-light/30 bg-bg-surface"
                        : "border-border bg-bg-surface/50"
                    }`}
                  >
                    <Switch
                      checked={tool.enabled}
                      onCheckedChange={(v) => update(m.id, { enabled: v })}
                      aria-label={`Activer ${m.label}`}
                      className="data-[state=checked]:bg-gold-light"
                    />
                    <span className="flex-1 text-sm font-medium text-text-primary">
                      {m.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={0}
                        value={tool.price}
                        onChange={(e) =>
                          update(m.id, { price: Number(e.target.value) || 0 })
                        }
                        disabled={!tool.enabled}
                        aria-label={`Prix mensuel de ${m.label}`}
                        className="w-20 rounded-md border border-border bg-bg-base px-2 py-1.5 text-right font-mono text-sm text-text-primary focus:border-gold-light focus:outline-none disabled:opacity-40"
                      />
                      <span className="text-sm text-text-muted">€/mois</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl bg-bg-surface p-6">
          {/* Duration toggle */}
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
              Durée de simulation
            </p>
            <div
              role="radiogroup"
              aria-label="Durée de simulation"
              className="inline-flex rounded-full border border-border bg-bg-base p-1"
            >
              {DURATION_OPTIONS.map((m) => {
                const selected = duration === m;
                return (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setDuration(m)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-semibold transition-all",
                      selected
                        ? "bg-gold-light text-bg-base shadow-sm"
                        : "text-text-secondary hover:text-text-primary",
                    )}
                  >
                    {m} mois
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
              Votre pile sur {duration} mois
            </p>
            <p className="mt-2 font-display text-[clamp(36px,5vw,56px)] font-semibold leading-none text-text-primary">
              {formatEuros(pileTotal)}
            </p>
            <p className="mt-1 text-xs text-text-muted">
              soit {formatEuros(monthlyTotal)} / mois
            </p>
          </div>

          <div className="my-5 h-px bg-border" />

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">
              vs Logones Premium sur {duration} mois
            </p>
            <p className="mt-2 font-display text-[clamp(36px,5vw,56px)] font-semibold leading-none text-gold-light">
              {formatEuros(logonesTotal)}
            </p>
            <p className="mt-1 text-xs text-text-muted">
              soit {LOGONES_PREMIUM_MONTHLY} € / mois TTC
            </p>
          </div>

          <div
            className={`mt-6 rounded-xl border p-4 text-sm ${
              diff > 200
                ? "border-haccp-bright/30 bg-haccp-deep text-haccp-accent"
                : diff < -200
                  ? "border-gold-light/30 bg-gold-pale text-gold-light"
                  : "border-border bg-bg-elevated text-text-secondary"
            }`}
          >
            {diffMessage}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary
              href="/logones/demo"
              size="lg"
              className="flex-1"
            >
              Je veux voir la démo
            </ButtonPrimary>
            <Link
              href="/logones/tarifs"
              className="inline-flex items-center justify-center text-sm font-medium text-gold-light hover:underline"
            >
              Voir les tarifs détaillés →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <LegalNotice>
          Ce comparatif est indicatif et basé sur des prix moyens du marché
          observés en 2026. Il ne constitue pas un conseil comptable. Pour une
          analyse précise de votre situation, consultez votre expert-comptable.
        </LegalNotice>
      </div>
    </div>
  );
}
