"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { FONCTIONS } from "../../lib/v2-fonctions";

/**
 * Toutes les fonctionnalités d'un module, rangées par moment d'usage.
 *
 * ⚠ Le texte s'adresse au restaurateur, pas à nous. Le fait qu'une fonction
 * soit absente du site actuel est une information d'arbitrage interne : elle
 * n'apparaît que si la bascule « révision » est active, et jamais autrement.
 *
 * Quatre traitements sont proposés, à choisir depuis la barre flottante :
 *   A — frise du service      : le déroulé chronologique, une colonne
 *   B — cartes par moment     : grille scannable, volumétrie visible
 *   C — accordéon             : compact, on ouvre ce qui intéresse
 *   D — index dense           : tout à l'écran, deux colonnes
 */

export type Variante = "a" | "b" | "c" | "d";

const CLE = "logones-v2-variante";
const CLE_REVISION = "logones-v2-revision";

function useReglages() {
  const [variante, setVariante] = useState<Variante>("a");
  const [revision, setRevision] = useState(false);

  useEffect(() => {
    const lire = () => {
      const v = localStorage.getItem(CLE) as Variante | null;
      if (v) setVariante(v);
      setRevision(localStorage.getItem(CLE_REVISION) === "1");
    };
    lire();
    window.addEventListener("logones-reglages", lire);
    return () => window.removeEventListener("logones-reglages", lire);
  }, []);

  return { variante, revision };
}

const LINE = onNight.border;

function Neuf({ actif, couleur }: { actif: boolean; couleur: string }) {
  if (!actif) return null;
  return (
    <span
      className="ml-2 inline-block align-middle px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.08em]"
      style={{ backgroundColor: couleur, color: "#04070B", borderRadius: "3px" }}
      title="Absente de la page en ligne — repère d'arbitrage, invisible pour un visiteur"
    >
      pas sur le site
    </span>
  );
}

export function Fonctionnalites({
  moduleId,
  couleur,
}: {
  moduleId: string;
  couleur: string;
}) {
  const { variante, revision } = useReglages();
  const m = FONCTIONS[moduleId];
  if (!m) return null;

  const entete = (
    <>
      <p
        className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: brand.orangeLight }}
      >
        Tout ce que fait le module
      </p>
      <h2 className="text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
        {m.total} fonctionnalités,
        <span style={{ color: couleur }}> rangées par moment</span>
      </h2>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
        Pas une liste alphabétique : l&apos;ordre de votre journée. Vous trouvez ce que vous
        cherchez au moment où vous vous posez la question.
      </p>
      {revision && (
        <p className="mt-3 text-[12px]" style={{ color: brand.orangeLight }}>
          Mode révision — {m.absentes} de ces {m.total} fonctions ne sont pas mentionnées sur la
          page en ligne. Repère interne, invisible pour un visiteur.
        </p>
      )}
    </>
  );

  return (
    <section
      className="relative overflow-hidden py-[clamp(56px,7vw,96px)]"
      style={{
        backgroundColor: ground.night,
        borderTop: `1px solid ${LINE}`,
        borderLeft: `3px solid ${brand.orange}`,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
        {entete}

        {variante === "a" && <VarianteA m={m} couleur={couleur} revision={revision} />}
        {variante === "b" && <VarianteB m={m} couleur={couleur} revision={revision} />}
        {variante === "c" && <VarianteC m={m} couleur={couleur} revision={revision} />}
        {variante === "d" && <VarianteD m={m} couleur={couleur} revision={revision} />}
      </div>
    </section>
  );
}

type P = {
  m: (typeof FONCTIONS)[string];
  couleur: string;
  revision: boolean;
};

/* ---------------- A — frise du service ---------------- */
function VarianteA({ m, couleur, revision }: P) {
  return (
    <ol className="mt-12 list-none border-l pl-0" style={{ borderColor: LINE }}>
      {m.moments.map((mo) => (
        <li key={mo.titre} className="relative pb-10 pl-8">
          <span
            className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: couleur }}
            aria-hidden
          />
          <h3 className="text-[clamp(17px,2.1vw,22px)] font-bold leading-snug text-white">
            {mo.titre}
          </h3>
          <p className="mt-1 max-w-[58ch] text-[14px]" style={{ color: onNight.muted }}>
            {mo.question}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {mo.items.map((it) => (
              <li key={it.f} className="flex items-start gap-2.5 text-[15px] text-white">
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0"
                  strokeWidth={3}
                  style={{ color: couleur }}
                  aria-hidden
                />
                <span>
                  {it.f}
                  <Neuf actif={!!it.absent && revision} couleur={couleur} />
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- B — cartes par moment ---------------- */
function VarianteB({ m, couleur, revision }: P) {
  return (
    <div
      className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
      style={{ backgroundColor: LINE }}
    >
      {m.moments.map((mo) => (
        <div
          key={mo.titre}
          className="flex flex-col p-6"
          style={{ backgroundColor: ground.nightSurface }}
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[16px] font-bold leading-snug text-white">{mo.titre}</h3>
            <span
              className="shrink-0 text-[13px] font-extrabold"
              style={{ color: couleur, fontVariantNumeric: "tabular-nums" }}
            >
              {mo.items.length}
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: onNight.muted }}>
            {mo.question}
          </p>
          <ul
            className="mt-4 flex flex-col gap-1.5 border-t pt-4"
            style={{ borderColor: LINE }}
          >
            {mo.items.map((it) => (
              <li
                key={it.f}
                className="text-[14px] leading-snug"
                style={{ color: onNight.subtle }}
              >
                <span style={{ color: couleur }}>·</span> {it.f}
                <Neuf actif={!!it.absent && revision} couleur={couleur} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------------- C — accordéon ---------------- */
function VarianteC({ m, couleur, revision }: P) {
  return (
    <div
      className="mt-12 overflow-hidden rounded-xl border"
      style={{ borderColor: LINE, backgroundColor: ground.nightSurface }}
    >
      {m.moments.map((mo, i) => (
        <details
          key={mo.titre}
          className="group"
          open={i === 0}
          style={{ borderTop: i === 0 ? undefined : `1px solid ${LINE}` }}
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 hover:bg-white/[0.03]">
            <span
              className="text-[13px] font-extrabold"
              style={{ color: couleur, fontVariantNumeric: "tabular-nums" }}
            >
              {String(mo.items.length).padStart(2, "0")}
            </span>
            <span className="flex-1">
              <span className="block text-[16px] font-bold text-white">{mo.titre}</span>
              <span className="mt-0.5 block text-[13px]" style={{ color: onNight.muted }}>
                {mo.question}
              </span>
            </span>
            <span
              className="shrink-0 text-lg font-extrabold transition-transform group-open:rotate-45"
              style={{ color: couleur }}
              aria-hidden
            >
              +
            </span>
          </summary>
          <ul className="flex flex-col gap-2 px-6 pb-6 pl-[4.25rem]">
            {mo.items.map((it) => (
              <li key={it.f} className="flex items-start gap-2.5 text-[15px] text-white">
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0"
                  strokeWidth={3}
                  style={{ color: couleur }}
                  aria-hidden
                />
                <span>
                  {it.f}
                  <Neuf actif={!!it.absent && revision} couleur={couleur} />
                </span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

/* ---------------- D — index dense ---------------- */
function VarianteD({ m, couleur, revision }: P) {
  return (
    <div className="mt-12 columns-1 gap-10 lg:columns-2">
      {m.moments.map((mo) => (
        <div key={mo.titre} className="mb-8 break-inside-avoid">
          <h3
            className="border-b pb-2 text-[12px] font-extrabold uppercase tracking-[0.12em]"
            style={{ color: couleur, borderColor: LINE }}
          >
            {mo.titre}
            <span className="ml-2 font-normal" style={{ color: onNight.muted }}>
              {mo.items.length}
            </span>
          </h3>
          <ul className="mt-3 flex flex-col">
            {mo.items.map((it) => (
              <li
                key={it.f}
                className="border-b border-dotted py-2 text-[14px] leading-snug"
                style={{ borderColor: LINE, color: onNight.subtle }}
              >
                {it.f}
                <Neuf actif={!!it.absent && revision} couleur={couleur} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
