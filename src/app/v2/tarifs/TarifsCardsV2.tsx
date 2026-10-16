/* Copie de tarifs/TarifsCards.tsx.
   Changements : la grille passe intégralement en HT — elle mélangeait TTC et
   HT d'une carte à l'autre — et adopte les paliers arrêtés : Essentiel 89 €,
   Gestion 249 €, Complet 379 €, Multi-sites sur devis. Le prix est désormais
   annoncé par établissement, et « résiliation avec préavis » devient « sans
   engagement de durée ». Le fichier d'origine n'est pas touché. */

import { container, gutter, rhythm } from "../../lib/spacing";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { TARIFS as C } from "../../tarifs/palette";

type Plan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "89 €",
    priceUnit: "HT / mois / établissement",
    priceNote: "Logiciel uniquement · Sans engagement",
    features: [
      "Caisse complète",
      "Écran de cuisine inclus",
      "Conformité et export comptable",
      "Socle plateforme",
    ],
    cta: { label: "Choisir Essentiel", href: "/demo?plan=essentiel" },
  },
  {
    id: "gestion",
    name: "Gestion",
    badge: "Le plus choisi",
    price: "249 €",
    priceUnit: "HT / mois / établissement",
    priceNote: "Logiciel uniquement · Sans engagement",
    features: [
      "Caisse",
      "Stocks et food cost",
      "HACCP",
      "Pilotage et compte de résultat",
      "Socle plateforme",
    ],
    cta: { label: "Choisir Gestion", href: "/demo?plan=gestion" },
    highlighted: true,
  },
  {
    id: "complet",
    name: "Complet",
    badge: "Les six modules",
    price: "379 €",
    priceUnit: "HT / mois / établissement",
    priceNote: "Logiciel uniquement · Sans engagement",
    features: [
      "Tout Gestion",
      "RH et planning",
      "Réservation sans commission",
      "Site vitrine référencé inclus",
      "Support prioritaire",
    ],
    cta: { label: "Choisir Complet", href: "/demo?plan=complet" },
  },
  {
    id: "multi",
    name: "Multi-sites",
    price: "Sur devis",
    priceUnit: "",
    priceNote: "À partir de deux établissements",
    features: [
      "Tout Complet",
      "Consolidation multi-établissements",
      "Comparaison entre sites",
      "Droits par périmètre",
      "Interlocuteur dédié",
    ],
    cta: { label: "Nous contacter", href: "/demo?plan=multi" },
  },
];

const leftBullets = [
  "Tous les modules natifs",
  "Aucun frais caché",
  "Sans engagement de durée",
  "Support humain inclus",
];

export function TarifsCardsV2() {
  return (
    <section
      id="cartes"
      style={{
        backgroundColor: C.card,
        paddingBlock: rhythm.section,
        paddingInline: gutter,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container }}>
        <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr] lg:gap-12" style={{ marginBottom: "44px" }}>
          <div>
            <p
              style={{
                color: C.orangeOnPaper,
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Tarifs Logones
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.8vw, 42px)",
                lineHeight: 1.15,
                fontWeight: 900,
                color: C.text,
                marginBottom: "20px",
              }}
            >
              Des offres simples.
              <br />
              <span style={{ color: C.orangeOnPaper }}>Sans addition cachée.</span>
            </h2>
          </div>
          <ul
            className="grid gap-3 sm:grid-cols-2 self-end"
            style={{ marginBottom: "6px" }}
          >
            {leftBullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2"
                style={{ fontSize: "15px", fontWeight: 600, color: C.text }}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "22px",
                    height: "22px",
                    background: C.orangeSoft,
                    border: `1px solid ${C.orangeBorder}`,
                    color: C.orangeOnPaper,
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>

        <p
          className="text-center"
          style={{
            fontSize: "13px",
            color: C.textMuted,
            marginTop: "28px",
          }}
        >
          Engagement 24 mois. Résiliation possible avec préavis. Tous les
          tarifs sont exprimés hors matériel.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isPremium = plan.highlighted;
  return (
    <article
      className="relative flex flex-col"
      style={{
        background: isPremium
          ? "linear-gradient(180deg, #FFFFFF, #FFF6EE)"
          : C.card,
        border: isPremium
          ? `2px solid ${C.orange}`
          : `1px solid ${C.border}`,
        borderRadius: "20px",
        padding: "28px 24px",
        boxShadow: isPremium
          ? "0 24px 60px rgba(226,104,24,0.18), inset 0 1px 0 rgba(255,255,255,0.5)"
          : "0 10px 30px rgba(7,17,31,0.06)",
      }}
    >
      {plan.badge && (
        <span
          className="absolute inline-block rounded-full"
          style={{
            top: "-12px",
            left: "24px",
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 12px",
            background: isPremium ? C.orange : C.bgDark,
            color: "#FFFFFF",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        >
          {plan.badge}
        </span>
      )}

      <p
        style={{
          fontSize: "13px",
          fontWeight: 800,
          color: C.text,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginTop: plan.badge ? "8px" : 0,
          marginBottom: "14px",
        }}
      >
        {plan.name}
      </p>

      <div style={{ marginBottom: "8px" }}>
        <span
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: C.text,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {plan.price}
        </span>
        {plan.priceUnit && (
          <span
            style={{
              fontSize: "13px",
              color: C.textSubtle,
              marginLeft: "8px",
              fontWeight: 600,
            }}
          >
            {plan.priceUnit}
          </span>
        )}
      </div>

      <p
        style={{
          fontSize: "12px",
          color: C.textMuted,
          marginBottom: "22px",
          fontWeight: 500,
        }}
      >
        {plan.priceNote}
      </p>

      <ul className="space-y-2.5" style={{ marginBottom: "26px", flex: 1 }}>
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5"
            style={{
              fontSize: "14px",
              color: C.text,
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{
                width: "18px",
                height: "18px",
                background: C.orangeSoft,
                border: `1px solid ${C.orangeBorder}`,
                color: C.orangeOnPaper,
                marginTop: "2px",
              }}
              aria-hidden
            >
              <Check size={10} strokeWidth={3.2} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={plan.cta.href}
        className="inline-flex items-center justify-center gap-2 rounded-full transition-all hover:-translate-y-0.5"
        style={{
          height: "48px",
          width: "100%",
          fontSize: "14px",
          fontWeight: 800,
          ...(isPremium
            ? {
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                color: "#FFFFFF",
                boxShadow:
                  "0 12px 28px rgba(226,104,24,0.32), inset 0 1px 0 rgba(255,255,255,0.28)",
                border: "1px solid rgba(255,255,255,0.10)",
              }
            : {
                background: C.bgDark,
                color: "#FFFFFF",
                border: `1px solid ${C.bgDark}`,
              }),
        }}
      >
        {plan.cta.label}
        <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </article>
  );
}
