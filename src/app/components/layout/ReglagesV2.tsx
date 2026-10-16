"use client";

import { useEffect, useState } from "react";

import { brand, ground, onNight } from "../../lib/tokens";

/**
 * Réglages d'arbitrage, réservés à la phase de décision.
 *
 * Deux choses, et ni l'une ni l'autre n'est du contenu de page :
 *   — le traitement visuel des listes de fonctionnalités, pour choisir ;
 *   — un mode révision qui signale ce qui n'est pas encore sur le site.
 *
 * Le mode révision est éteint par défaut. Tant qu'il l'est, la page ne dit
 * rien que le restaurateur ne devrait lire. Ces réglages n'existent que sous
 * /v2 et disparaîtront le jour de la fusion.
 */

const CLE = "logones-v2-variante";
const CLE_REVISION = "logones-v2-revision";

const VARIANTES = [
  { id: "a", label: "Frise", aide: "Le déroulé du service, en une colonne" },
  { id: "b", label: "Cartes", aide: "Grille par moment, volumétrie visible" },
  { id: "c", label: "Accordéon", aide: "Compact, on ouvre ce qui intéresse" },
  { id: "d", label: "Index", aide: "Tout à l'écran, deux colonnes" },
] as const;

export function ReglagesV2() {
  const [variante, setVariante] = useState("a");
  const [revision, setRevision] = useState(false);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    setVariante(localStorage.getItem(CLE) ?? "a");
    setRevision(localStorage.getItem(CLE_REVISION) === "1");
  }, []);

  function choisir(v: string) {
    localStorage.setItem(CLE, v);
    setVariante(v);
    window.dispatchEvent(new Event("logones-reglages"));
  }

  function basculerRevision() {
    const n = !revision;
    localStorage.setItem(CLE_REVISION, n ? "1" : "0");
    setRevision(n);
    window.dispatchEvent(new Event("logones-reglages"));
  }

  const cadre = {
    backgroundColor: ground.nightSurfaceHigh,
    border: `1px solid ${onNight.border}`,
    borderRadius: "12px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
  };

  return (
    <div className="fixed bottom-5 right-5 z-[150]" style={cadre}>
      {!ouvert ? (
        <button
          onClick={() => setOuvert(true)}
          className="px-4 py-2.5 text-[13px] font-semibold"
          style={{ color: onNight.subtle }}
        >
          Réglages d&apos;arbitrage
        </button>
      ) : (
        <div className="w-[17rem] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: onNight.muted }}
            >
              Affichage des fonctions
            </span>
            <button
              onClick={() => setOuvert(false)}
              className="text-[16px] leading-none"
              style={{ color: onNight.muted }}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {VARIANTES.map((v) => (
              <button
                key={v.id}
                onClick={() => choisir(v.id)}
                className="rounded-lg px-3 py-2 text-left transition-colors"
                style={{
                  backgroundColor: variante === v.id ? brand.orange : "transparent",
                  color: variante === v.id ? brand.onOrange : onNight.subtle,
                }}
              >
                <span className="block text-[13px] font-bold">{v.label}</span>
                <span
                  className="block text-[11px]"
                  style={{ color: variante === v.id ? "rgba(26,10,0,.75)" : onNight.muted }}
                >
                  {v.aide}
                </span>
              </button>
            ))}
          </div>

          <label
            className="mt-4 flex cursor-pointer items-start gap-2.5 border-t pt-3 text-[12px]"
            style={{ borderColor: onNight.border, color: onNight.subtle }}
          >
            <input
              type="checkbox"
              checked={revision}
              onChange={basculerRevision}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
              style={{ accentColor: brand.orange }}
            />
            <span>
              Mode révision
              <span className="mt-0.5 block text-[11px]" style={{ color: onNight.muted }}>
                Signale ce qui n&apos;est pas encore sur le site. Éteint, la page ne montre
                rien d&apos;interne.
              </span>
            </span>
          </label>
        </div>
      )}
    </div>
  );
}
