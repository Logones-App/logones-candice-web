import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { brand, ground, onNight } from "../../../lib/tokens";
import { container, gutter } from "../../../lib/spacing";
import { pilotageColor as C } from "../../../lib/v2-content";
import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "Pilotage — proposition",
  description:
    "Compte de résultat mensuel, marge par plat, coût par couvert. Le 1er du mois suivant, pas en fin d'exercice.",
};

const LINE = onNight.border;

const POINTS = [
  "Compte de résultat mensuel automatique",
  "Marge et coût matière par plat",
  "Coût par couvert, personnel compris",
  "Objectifs et suivi des écarts",
  "Consolidation multi-établissements",
];

const DOULEURS_PILOTAGE = [
  [
    "Une rentabilité découverte au bilan",
    "Onze mois après les décisions qui l'ont fabriquée. À ce stade, on ne corrige plus : on constate.",
  ],
  [
    "Le plat vedette",
    "Celui qui sort le plus, et dont personne ne sait s'il rapporte de l'argent ou s'il en coûte.",
  ],
  [
    "Des tableaux de bord qui affichent le chiffre d'affaires",
    "Or le chiffre d'affaires n'est pas un résultat. On peut vendre beaucoup et perdre de l'argent.",
  ],
];

const PL = [
  ["Chiffre d'affaires HT", "84 320 €"],
  ["Coût matière", "− 24 890 €"],
  ["Masse salariale", "− 28 640 €"],
  ["Charges fixes", "− 19 200 €"],
];

const CONTRIB = [
  ["Quenelle de brochet", "+ 2 840 €"],
  ["Bavette échalote", "+ 2 190 €"],
  ["Salade lyonnaise", "+ 1 470 €"],
  ["Tablier de sapeur", "+ 310 €"],
];

/**
 * Pilotage — sixième module, page entièrement nouvelle.
 *
 * Construite sur le gabarit des cinq pages existantes : héros à pastille de
 * couleur, section douleur, maquette commentée, puis les ajouts communs.
 * La maquette de compte de résultat est celle que PlatformSection contient
 * déjà sur l'accueil ; elle est ici enrichie du P&L.
 */
export default function PilotageV2() {
  return (
    <>
      {/* ---------- héros ---------- */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${ground.nightSurface} 0%, ${ground.night} 100%)`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: container, paddingInline: gutter, paddingTop: "150px", paddingBottom: "72px" }}
        >
          <span
            className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ border: `1px solid ${C.border}`, color: C.accent, borderRadius: "999px" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: C.accent }}
            />
            Module Pilotage
          </span>

          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
            Vos concurrents savent ce qu&apos;ils ont vendu.
            <br />
            <span style={{ color: C.accent }}>Vous saurez ce que vous avez gagné.</span>
          </h1>

          <p
            className="mt-6 max-w-[54ch] text-[clamp(17px,2vw,20px)] leading-relaxed"
            style={{ color: onNight.subtle }}
          >
            Compte de résultat mensuel, marge par plat, coût par couvert. Le 1er du mois
            suivant — pas en fin d&apos;exercice, quand il n&apos;y a plus rien à corriger.
          </p>

          <ul className="mt-8 flex max-w-[36rem] flex-col gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-white">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: C.accent }}
                >
                  <Check className="h-3 w-3" strokeWidth={3} style={{ color: C.onButton }} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 font-bold transition-all hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${C.buttonFrom}, ${C.buttonTo})`,
                color: C.onButton,
                borderRadius: "10px",
                padding: "18px 30px",
              }}
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/v2/tarifs"
              className="inline-flex items-center justify-center font-semibold text-white transition-colors hover:bg-white/5"
              style={{
                border: "1px solid rgba(255,255,255,0.45)",
                borderRadius: "10px",
                padding: "18px 30px",
              }}
            >
              79 € HT/mois — voir les offres
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- la douleur ---------- */}
      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{ backgroundColor: ground.night }}
      >
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-10 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Le chiffre d&apos;affaires{" "}
            <span style={{ color: "#EE8080" }}>n&apos;est pas un résultat</span>
          </h2>
          <div className="grid gap-px sm:grid-cols-3" style={{ backgroundColor: LINE }}>
            {DOULEURS_PILOTAGE.map(([t, d]) => (
              <div key={t} className="p-6" style={{ backgroundColor: ground.nightSurface }}>
                <h3 className="mb-2 text-[16px] font-bold" style={{ color: "#EE8080" }}>
                  {t}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- le compte de résultat ---------- */}
      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{ backgroundColor: ground.nightSurface, borderTop: `1px solid ${LINE}` }}
      >
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-8 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Votre compte de résultat,
            <br />
            <span style={{ color: C.accent }}>le 1er du mois suivant</span>
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
                Les ventes viennent de la caisse. Le coût matière vient des stocks. La
                masse salariale vient des plannings. Logones ne calcule pas votre
                résultat : il l&apos;assemble à partir de données qu&apos;il possède déjà.
              </p>
              <p className="mt-4 text-[15px] font-bold text-white">
                Rien n&apos;est saisi une deuxième fois, donc rien ne peut diverger.
              </p>
              <p className="mt-4 text-[13px]" style={{ color: onNight.muted }}>
                Vous ne saisissez qu&apos;une chose, une seule fois : vos charges fixes.
              </p>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: ground.nightSurfaceHigh, borderColor: LINE }}
            >
              <p
                className="mb-3 border-b pb-2.5 text-[11px] font-bold uppercase tracking-[0.1em]"
                style={{ borderColor: LINE, color: onNight.muted }}
              >
                Compte de résultat · juillet 2026
              </p>
              {PL.map(([l, v]) => (
                <p
                  key={l}
                  className="flex justify-between border-b border-dotted py-1.5 text-[14px]"
                  style={{ borderColor: LINE, fontVariantNumeric: "tabular-nums" }}
                >
                  <span style={{ color: onNight.subtle }}>{l}</span>
                  <span className="font-semibold text-white">{v}</span>
                </p>
              ))}
              <p
                className="mt-2 flex justify-between border-t pt-3 text-[18px] font-extrabold"
                style={{ borderColor: LINE, color: C.accent, fontVariantNumeric: "tabular-nums" }}
              >
                <span>Résultat</span>
                <span>11 590 €</span>
              </p>
              <p className="mt-3 text-[12px]" style={{ color: onNight.muted }}>
                Coût matière 29,5 % · masse salariale 34,0 % · coût par couvert 41,80 €
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- contribution par plat ---------- */}
      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{ backgroundColor: ground.night, borderTop: `1px solid ${LINE}` }}
      >
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-4 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Quel plat porte <span style={{ color: C.accent }}>votre résultat</span> ?
          </h2>
          <p className="max-w-[56ch] text-[15px]" style={{ color: onNight.subtle }}>
            Le plat qui sort le plus n&apos;est pas toujours celui qui rapporte le plus. Le
            classement par contribution le montre en une ligne.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div
              className="rounded-xl border p-5"
              style={{ backgroundColor: ground.nightSurfaceHigh, borderColor: LINE }}
            >
              <p
                className="mb-3 border-b pb-2.5 text-[11px] font-bold uppercase tracking-[0.1em]"
                style={{ borderColor: LINE, color: onNight.muted }}
              >
                Contribution au résultat · juillet
              </p>
              {CONTRIB.map(([l, v]) => (
                <p
                  key={l}
                  className="flex justify-between border-b border-dotted py-1.5 text-[14px]"
                  style={{ borderColor: LINE, fontVariantNumeric: "tabular-nums" }}
                >
                  <span style={{ color: onNight.subtle }}>{l}</span>
                  <span className="font-semibold text-white">{v}</span>
                </p>
              ))}
              <p
                className="mt-2 flex justify-between border-t pt-3 text-[18px] font-extrabold"
                style={{ borderColor: LINE, color: C.accent, fontVariantNumeric: "tabular-nums" }}
              >
                <span>Coût par couvert</span>
                <span>41,80 €</span>
              </p>
            </div>

            <div className="grid gap-px sm:grid-cols-2" style={{ backgroundColor: LINE }}>
              {[
                ["Marge par plat", "Coût matière réel, recalculé dès qu'un prix d'achat bouge."],
                ["Coût par couvert", "Matière et personnel compris — le vrai coût d'accueillir un client."],
                ["Objectifs et écarts", "Fixés par période, suivis en continu, pas à la fin."],
                ["Comparaison", "Au mois précédent, à l'an passé, et entre vos établissements."],
              ].map(([t, d]) => (
                <div key={t} className="p-5" style={{ backgroundColor: ground.nightSurface }}>
                  <h3 className="mb-1 text-[15px] font-bold text-white">{t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: onNight.subtle }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Demonstrations moduleId="pilotage" couleur={C.accent} />
      <Fonctionnalites moduleId="pilotage" couleur={C.accent} />
      <PartiPrisSection moduleId="pilotage" />
      <FaqSection moduleId="pilotage" />
      <AutresModulesSection sauf="pilotage" />

      {/* ---------- CTA final ---------- */}
      <section
        className="py-[clamp(56px,7vw,96px)] text-center"
        style={{
          background: `linear-gradient(160deg, ${ground.nightSurface}, ${ground.night})`,
          borderTop: `1px solid ${LINE}`,
        }}
      >
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Sachez enfin
            <br />
            <span style={{ color: C.accent }}>si le mois a été bon.</span>
          </h2>
          <Link
            href="/demo"
            className="mt-8 inline-flex items-center justify-center gap-2 font-bold transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${C.buttonFrom}, ${C.buttonTo})`,
              color: C.onButton,
              borderRadius: "10px",
              padding: "18px 30px",
            }}
          >
            Demander une démo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
