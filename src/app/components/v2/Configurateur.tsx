"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { MODULES_TARIF, PACKS } from "../../lib/v2-content";

/**
 * Configurateur de coût.
 *
 * Le prospect coche ses modules et voit son prix. Le pack s'applique de
 * lui-même dès qu'il devient plus avantageux que la somme à l'unité — on ne
 * lui demande pas de faire le calcul, et on ne lui vend pas un pack quand la
 * carte est moins chère.
 *
 * La comparaison affichée ne porte que sur nos propres prix : pack contre
 * à l'unité. Aucun montant de concurrent n'apparaît.
 */
export function Configurateur({ preselection = ["caisse"] }: { preselection?: string[] }) {
  const [choisis, setChoisis] = useState<string[]>(preselection);

  const calcul = useMemo(() => {
    if (choisis.length === 0) return null;

    const somme = choisis.reduce(
      (t, id) => t + (MODULES_TARIF.find((m) => m.id === id)?.prixHT ?? 0),
      0,
    );

    let meilleur = { prix: somme, nom: "À la carte" };
    for (const p of PACKS) {
      const couvre = choisis.every((id) => p.modules.includes(id));
      if (couvre && p.prixHT < meilleur.prix) {
        meilleur = { prix: p.prixHT, nom: `Pack ${p.nom}` };
      }
    }

    return { somme, ...meilleur, economie: somme - meilleur.prix };
  }, [choisis]);

  function bascule(id: string) {
    setChoisis((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  }

  return (
    <section
      className="relative overflow-hidden py-[clamp(56px,7vw,96px)]"
      style={{
        backgroundColor: ground.night,
        borderTop: `1px solid ${onNight.border}`,
        borderLeft: `3px solid ${brand.orange}`,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: brand.orangeLight }}
        >
          Combien ça coûte
        </p>
        <h2 className="mb-4 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
          Composez votre offre, le prix s&apos;affiche
        </h2>
        <p className="max-w-[54ch] text-[15px]" style={{ color: onNight.subtle }}>
          Cochez les modules dont vous avez besoin. Le prix se calcule immédiatement, et
          le pack s&apos;applique tout seul dès qu&apos;il devient plus avantageux.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          {/* ---- la liste ---- */}
          <div>
            <div
              className="grid gap-px overflow-hidden rounded-xl border"
              style={{ backgroundColor: onNight.border, borderColor: onNight.border }}
            >
              {MODULES_TARIF.map((m) => {
                const actif = choisis.includes(m.id);
                return (
                  <label
                    key={m.id}
                    className="flex cursor-pointer items-start gap-3.5 px-5 py-4 transition-colors hover:bg-white/[0.03]"
                    style={{ backgroundColor: ground.nightSurface }}
                  >
                    <input
                      type="checkbox"
                      checked={actif}
                      onChange={() => bascule(m.id)}
                      className="mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer"
                      style={{ accentColor: brand.orange }}
                    />
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-[15px] font-bold text-white">
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: m.couleur }}
                        />
                        {m.nom}
                      </span>
                      <span
                        className="mt-0.5 block text-[13px]"
                        style={{ color: onNight.muted }}
                      >
                        {m.resume}
                      </span>
                    </span>
                    <span
                      className="text-[15px] font-bold"
                      style={{
                        color: onNight.subtle,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {m.prixHT}&nbsp;€
                    </span>
                  </label>
                );
              })}
            </div>

            <p className="mt-4 text-[13px]" style={{ color: onNight.muted }}>
              Le socle — hors ligne, multi-appareils, droits, hébergement France, mises à
              jour et support — est inclus dans tous les cas, sans supplément.
            </p>
          </div>

          {/* ---- le résultat ---- */}
          <div
            className="rounded-xl border p-6 lg:sticky lg:top-24"
            style={{
              backgroundColor: ground.nightSurfaceHigh,
              borderColor: onNight.border,
            }}
          >
            {calcul === null ? (
              <>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: brand.orangeLight }}
                >
                  Votre configuration
                </span>
                <p
                  className="my-2 text-[48px] font-extrabold leading-none"
                  style={{ color: onNight.muted }}
                >
                  —
                </p>
                <p className="text-[13px]" style={{ color: onNight.muted }}>
                  Choisissez au moins un module
                </p>
              </>
            ) : (
              <>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: brand.orangeLight }}
                >
                  {calcul.nom}
                </span>
                <p
                  className="my-2 text-[clamp(40px,6vw,56px)] font-extrabold leading-none tracking-[-0.035em] text-white"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {calcul.prix}&nbsp;€
                </p>
                <p className="text-[13px]" style={{ color: onNight.muted }}>
                  HT / mois / établissement · sans engagement
                </p>

                {calcul.economie > 0 && (
                  <p
                    className="mt-5 rounded-lg border p-3 text-[13px]"
                    style={{
                      backgroundColor: brand.orangeSoft,
                      borderColor: brand.orangeBorder,
                      color: onNight.subtle,
                    }}
                  >
                    Le{" "}
                    <strong style={{ color: brand.orangeLight }}>
                      pack revient à {calcul.economie} € de moins
                    </strong>{" "}
                    par mois que ces {choisis.length} modules pris à l&apos;unité — soit{" "}
                    <strong style={{ color: brand.orangeLight }}>
                      {calcul.economie * 12} € sur l&apos;année
                    </strong>
                    .
                  </p>
                )}

                <div className="mt-5 text-[13px]" style={{ color: onNight.muted }}>
                  {choisis.map((id) => {
                    const m = MODULES_TARIF.find((x) => x.id === id);
                    if (!m) return null;
                    return (
                      <span
                        key={id}
                        className="flex justify-between py-1"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        <span>{m.nom}</span>
                        <span>{m.prixHT}&nbsp;€</span>
                      </span>
                    );
                  })}
                  <span
                    className="mt-2 flex justify-between border-t pt-2"
                    style={{
                      borderColor: onNight.border,
                      color: onNight.subtle,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    <span>À l&apos;unité</span>
                    <span>{calcul.somme}&nbsp;€</span>
                  </span>
                </div>
              </>
            )}

            <Link
              href="/demo"
              className="mt-6 block w-full text-center font-bold transition-all hover:brightness-110"
              style={{
                backgroundColor: brand.orange,
                color: brand.onOrange,
                borderRadius: "10px",
                padding: "16px 24px",
              }}
            >
              Réserver une démonstration
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
