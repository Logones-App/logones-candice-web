import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { TARIFS as C } from "./palette";

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
    id: "starter",
    name: "Starter",
    price: "90 €",
    priceUnit: "TTC / mois",
    priceNote: "Logiciel uniquement · Sans matériel",
    features: [
      "Caisse NF525",
      "Encaissement & tickets",
      "Statistiques temps réel",
      "Support standard",
    ],
    cta: { label: "Choisir Starter", href: "/logones/demo?plan=starter" },
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Le socle opérationnel",
    price: "169 €",
    priceUnit: "HT / mois",
    priceNote: "Logiciel uniquement · Sans matériel",
    features: [
      "Caisse NF525",
      "RH / Planning",
      "HACCP",
      "Statistiques temps réel",
      "Support standard",
    ],
    cta: { label: "Choisir Pro", href: "/logones/demo?plan=pro" },
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Le plus complet",
    price: "300 €",
    priceUnit: "TTC / mois",
    priceNote: "Logiciel uniquement · Sans matériel",
    features: [
      "Tout Pro",
      "Réservation sans commission",
      "Stocks en temps réel",
      "Exports comptables inclus",
      "Multi-utilisateurs & droits avancés",
      "Support prioritaire",
    ],
    cta: { label: "Choisir Premium", href: "/logones/demo?plan=premium" },
    highlighted: true,
  },
  {
    id: "multi",
    name: "Multi-sites",
    price: "Sur devis",
    priceUnit: "",
    priceNote: "Logiciel uniquement · Sans matériel",
    features: [
      "Tout Premium",
      "Multi-établissements",
      "Consolidation centralisée",
      "Permissions avancées",
      "Pilotage groupe",
      "Support dédié",
    ],
    cta: { label: "Nous contacter", href: "/logones/demo?plan=multi" },
  },
];

const leftBullets = [
  "Tous les modules natifs",
  "Aucun frais caché",
  "Résiliation avec préavis",
  "Support humain inclus",
];

export function TarifsCards() {
  return (
    <section
      id="cartes"
      style={{
        backgroundColor: C.card,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr] lg:gap-12" style={{ marginBottom: "44px" }}>
          <div>
            <p
              style={{
                color: C.orange,
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
                fontSize: "clamp(28px, 3.6vw, 42px)",
                lineHeight: 1.08,
                fontWeight: 850,
                color: C.text,
                marginBottom: "20px",
              }}
            >
              Des offres simples.
              <br />
              <span style={{ color: C.orange }}>Sans addition cachée.</span>
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
                style={{ fontSize: "14.5px", fontWeight: 600, color: C.text }}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "22px",
                    height: "22px",
                    background: C.orangeSoft,
                    border: `1px solid ${C.orangeBorder}`,
                    color: C.orange,
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
          ? "0 24px 60px rgba(255,106,26,0.18), inset 0 1px 0 rgba(255,255,255,0.5)"
          : "0 10px 30px rgba(7,17,31,0.06)",
      }}
    >
      {plan.badge && (
        <span
          className="absolute inline-block rounded-full"
          style={{
            top: "-12px",
            left: "24px",
            fontSize: "10.5px",
            fontWeight: 900,
            letterSpacing: "0.12em",
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
          letterSpacing: "0.08em",
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
            fontWeight: 850,
            color: C.text,
            lineHeight: 1,
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
              fontSize: "13.5px",
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
                color: C.orange,
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
                  "0 12px 28px rgba(255,106,26,0.32), inset 0 1px 0 rgba(255,255,255,0.28)",
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
