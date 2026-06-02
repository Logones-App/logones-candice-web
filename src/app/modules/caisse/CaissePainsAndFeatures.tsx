import type { LucideIcon } from "lucide-react";
import {
  SplitSquareHorizontal,
  LayoutGrid,
  TrendingUp,
  Zap,
  Layers,
  CreditCard,
  Printer,
  LineChart,
  ShieldCheck,
  BadgeCheck,
  Check,
} from "lucide-react";

const C = {
  bg: "#02060B",
  blue: "#147CFF",
  text: "#FFFFFF",
  textSubtle: "rgba(255,255,255,0.68)",
  textMuted: "rgba(255,255,255,0.50)",
  border: "rgba(20,124,255,0.18)",
  borderSoft: "rgba(255,255,255,0.08)",
  cardGradient:
    "linear-gradient(180deg, rgba(10,25,40,0.96), rgba(4,13,23,0.98))",
  widgetBg: "rgba(2,8,15,0.55)",
  green: "#3DD27C",
  red: "#E55B3C",
};

const CARD_SHADOW =
  "0 22px 55px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)";

export function CaissePainsAndFeatures() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(56px, 7vw, 80px)",
        paddingInline: "clamp(20px, 4vw, 48px)",
      }}
    >
      {/* Soft blue glow on top */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(20,124,255,0.14), transparent 38%)",
        }}
        aria-hidden
      />

      <div
        className="mx-auto"
        style={{ maxWidth: "1280px" }}
      >
        <PainsBlock />
        <FeaturesBlock />
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 1 — PAINS (3 cards)
   ============================================================ */
function PainsBlock() {
  return (
    <div style={{ marginBottom: "72px" }}>
      <SectionHeader
        eyebrow="Ce que les autres ne font pas"
        title={
          <>
            Trois points où votre caisse
            <br />
            actuelle vous coûte cher.
          </>
        }
        titleSize="large"
      />

      <div
        className="grid gap-7 lg:grid-cols-3"
        style={{ marginTop: "48px" }}
      >
        <PainCard
          icon={SplitSquareHorizontal}
          title="TVA par table, pas par client"
          body="Quand un client commande avec alcool et un autre sans à la même table, ils ne paient pas le même taux. La quasi-totalité des caisses gère par table — pas par client."
          widget={<TvaWidget />}
        />
        <PainCard
          icon={LayoutGrid}
          title="Plan de salle figé"
          body="Vos réservations vivent ailleurs. Votre plan de salle ne sait pas qui arrive. Vous découvrez les tables disponibles à la volée."
          widget={<PlanSalleWidget />}
        />
        <PainCard
          icon={TrendingUp}
          title="Marge calculée après-coup"
          body="Votre marge, vous la connaissez en fin de mois quand votre expert-comptable vous l'annonce. Trop tard pour corriger."
          widget={<MargeWidget />}
        />
      </div>
    </div>
  );
}

function PainCard({
  icon: Icon,
  title,
  body,
  widget,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  widget: React.ReactNode;
}) {
  return (
    <article
      className="relative overflow-hidden"
      style={{
        background: C.cardGradient,
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "34px",
        minHeight: "360px",
        boxShadow: CARD_SHADOW,
      }}
    >
      {/* Internal corner glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-80px",
          left: "-80px",
          width: "180px",
          height: "180px",
          background:
            "radial-gradient(circle, rgba(20,124,255,0.16), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "rgba(20,124,255,0.12)",
            border: "1px solid rgba(20,124,255,0.30)",
            color: C.blue,
            marginBottom: "22px",
          }}
          aria-hidden
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: 850,
            color: C.text,
            marginBottom: "18px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.65,
            color: C.textSubtle,
            marginBottom: "28px",
          }}
        >
          {body}
        </p>

        {widget}
      </div>
    </article>
  );
}

/* ----- Widgets section 1 ----- */

function TvaWidget() {
  return (
    <div
      style={{
        background: C.widgetBg,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "14px",
        padding: "18px",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: C.text,
          marginBottom: "12px",
        }}
      >
        Table 12 — 4 couverts
      </p>
      <div className="space-y-2">
        {[
          { client: "Client A", type: "sans alcool", tva: "TVA 10 %", price: "28,50 €" },
          { client: "Client B", type: "avec alcool", tva: "TVA 20 %", price: "33,50 €" },
        ].map((row) => (
          <div
            key={row.client}
            className="grid grid-cols-4 items-center gap-2 rounded-lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: `1px solid ${C.borderSoft}`,
              padding: "8px 10px",
              fontSize: "10.5px",
            }}
          >
            <span style={{ color: C.text, fontWeight: 700 }}>{row.client}</span>
            <span style={{ color: C.textMuted }}>{row.type}</span>
            <span
              className="text-center"
              style={{ color: C.blue, fontWeight: 700 }}
            >
              {row.tva}
            </span>
            <span
              className="text-right font-mono"
              style={{ color: C.text, fontWeight: 700 }}
            >
              {row.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanSalleWidget() {
  // grille 4x3 — 12 tables
  // statuts : 'occupied' bleu, 'free' vert, 'conflict' rouge, 'neutral' gris
  const states: Array<"occupied" | "free" | "conflict" | "neutral"> = [
    "occupied", "free", "free", "occupied",
    "neutral", "occupied", "conflict", "free",
    "free", "neutral", "occupied", "free",
  ];
  const colorOf = (s: string) => {
    if (s === "occupied") return C.blue;
    if (s === "free") return C.green;
    if (s === "conflict") return C.red;
    return "rgba(255,255,255,0.10)";
  };

  return (
    <div className="flex gap-3">
      {/* Plan grille */}
      <div
        className="grid grid-cols-4 gap-1.5"
        style={{
          background: C.widgetBg,
          border: `1px solid ${C.borderSoft}`,
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        {states.map((s, i) => (
          <div
            key={i}
            style={{
              width: "26px",
              height: "26px",
              backgroundColor: colorOf(s),
              opacity: s === "neutral" ? 1 : 0.85,
              borderRadius: "5px",
            }}
            aria-label={`Table ${i + 1} — ${s}`}
          />
        ))}
      </div>

      {/* Liste réservations */}
      <div
        className="flex-1"
        style={{
          background: C.widgetBg,
          border: `1px solid ${C.borderSoft}`,
          borderRadius: "12px",
          padding: "10px 12px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: C.text,
            marginBottom: "8px",
          }}
        >
          Réservations
        </p>
        <ul className="space-y-1.5">
          {[
            { time: "19:30", pers: "2 pers.", color: C.blue },
            { time: "20:00", pers: "4 pers.", color: C.blue },
            { time: "20:30", pers: "2 pers.", color: C.red },
          ].map((r) => (
            <li
              key={r.time}
              className="flex items-center gap-2"
              style={{ fontSize: "10.5px" }}
            >
              <span
                className="inline-block"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: r.color,
                  borderRadius: "999px",
                }}
                aria-hidden
              />
              <span style={{ color: C.text, fontWeight: 700 }}>{r.time}</span>
              <span style={{ color: C.textMuted }}>{r.pers}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MargeWidget() {
  return (
    <div
      style={{
        background: C.widgetBg,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "14px",
        padding: "16px",
      }}
    >
      <div className="flex items-baseline justify-between">
        <p
          style={{
            fontSize: "11px",
            color: C.textMuted,
            fontWeight: 600,
          }}
        >
          Marge du jour
        </p>
        <p
          style={{
            fontSize: "10px",
            color: C.green,
            fontWeight: 700,
          }}
        >
          +3,2 pts vs hier
        </p>
      </div>
      <p
        style={{
          fontSize: "28px",
          fontWeight: 850,
          color: C.text,
          lineHeight: 1,
          marginTop: "6px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        28,6 %
      </p>

      {/* Mini line chart */}
      <svg
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        className="mt-3 h-10 w-full"
        aria-hidden
      >
        <defs>
          <filter id="glow-marge" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polyline
          points="0,24 18,20 35,22 50,14 70,10 100,4"
          fill="none"
          stroke={C.blue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-marge)"
        />
      </svg>
      <div
        className="mt-1 flex justify-between"
        style={{ fontSize: "9px", color: C.textMuted }}
      >
        <span>09h</span>
        <span>12h</span>
        <span>16h</span>
        <span>24h</span>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION 2 — FEATURES (6 cards)
   ============================================================ */
function FeaturesBlock() {
  return (
    <div>
      <SectionHeader
        eyebrow="Toutes les fonctionnalités terrain"
        title="Une caisse complète pour chaque service."
        titleSize="medium"
      />

      <div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        style={{ marginTop: "42px" }}
      >
        <FeatureCard
          icon={Zap}
          title="Encaissez plus vite"
          description="Interface tactile optimisée pour un service fluide, même en plein rush."
          widget={<TicketRapide />}
        />
        <FeatureCard
          icon={Layers}
          title="Gérez tous vos services"
          description="Salle, terrasse, à emporter, livraison : adaptez votre organisation en un clic."
          widget={<ServicesGrid />}
        />
        <FeatureCard
          icon={CreditCard}
          title="Acceptez tous les paiements"
          description="Espèces, CB, titres resto, chèques, QR code, paiement sans contact."
          widget={<PaymentsList />}
        />
        <FeatureCard
          icon={Printer}
          title="Édition et envoi simplifiés"
          description="Tickets, factures et avoirs imprimés ou envoyés par email / SMS."
          widget={<TicketBistrot />}
        />
        <FeatureCard
          icon={LineChart}
          title="Suivez votre activité en temps réel"
          description="Chiffre d'affaires, couverts, paniers moyens : vos indicateurs clés en direct."
          widget={<CaWidget />}
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Sécurisée et conforme"
          description="Certification NF525, archivage sécurisé et mises à jour automatiques."
          widget={<Nf525Badge />}
        />
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  widget,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  widget: React.ReactNode;
}) {
  return (
    <article
      className="flex flex-col"
      style={{
        background: C.cardGradient,
        border: `1px solid ${C.border}`,
        borderRadius: "16px",
        padding: "24px",
        minHeight: "330px",
        boxShadow:
          "0 20px 50px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(20,124,255,0.12)",
          border: "1px solid rgba(20,124,255,0.30)",
          color: C.blue,
          marginBottom: "16px",
        }}
        aria-hidden
      >
        <Icon size={18} strokeWidth={1.75} />
      </div>

      <h3
        style={{
          fontSize: "17px",
          fontWeight: 850,
          color: C.text,
          marginBottom: "14px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.55,
          color: "rgba(255,255,255,0.66)",
          marginBottom: "22px",
        }}
      >
        {description}
      </p>

      <div className="mt-auto">{widget}</div>
    </article>
  );
}

/* ----- Widgets section 2 ----- */

function TicketRapide() {
  return (
    <div
      style={{
        background: C.widgetBg,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "10px",
        padding: "12px",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          color: C.textMuted,
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        Salle 12 · Commande #014
      </p>
      <ul className="space-y-1">
        {[
          ["Burger Signature", "18,00 €"],
          ["Frites maison", "4,50 €"],
          ["Verre de vin", "6,00 €"],
        ].map(([name, price]) => (
          <li
            key={name}
            className="flex items-center justify-between"
            style={{ fontSize: "10.5px" }}
          >
            <span style={{ color: C.text }}>{name}</span>
            <span style={{ color: C.text, fontWeight: 600, fontFamily: "var(--font-mono, monospace)" }}>
              {price}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="mt-2 flex items-center justify-between border-t pt-2"
        style={{ borderColor: C.borderSoft }}
      >
        <span style={{ fontSize: "10px", color: C.textMuted }}>Total</span>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 850,
            color: C.blue,
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          28,50 €
        </span>
      </div>
    </div>
  );
}

function ServicesGrid() {
  const services = [
    { label: "Salle 1", count: "12" },
    { label: "Salle 2", count: "6" },
    { label: "Terrasse", count: null },
    { label: "Comptoir", count: "8" },
    { label: "À emporter", count: null },
    { label: "Livraison", count: "5" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {services.map((s, i) => (
        <div
          key={s.label}
          className="flex items-center justify-between"
          style={{
            backgroundColor:
              i === 0 ? "rgba(20,124,255,0.16)" : C.widgetBg,
            border: `1px solid ${i === 0 ? "rgba(20,124,255,0.40)" : C.borderSoft}`,
            borderRadius: "8px",
            padding: "8px 10px",
            fontSize: "10.5px",
          }}
        >
          <span style={{ color: C.text, fontWeight: 600 }}>{s.label}</span>
          {s.count && (
            <span style={{ color: C.blue, fontWeight: 800 }}>{s.count}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function PaymentsList() {
  const items = [
    { label: "Carte bancaire", active: true },
    { label: "Espèces", active: false },
    { label: "Titre restaurant", active: false },
    { label: "Chèque", active: false },
    { label: "Sans contact", active: false },
  ];
  return (
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li
          key={it.label}
          className="flex items-center gap-2 rounded-md"
          style={{
            backgroundColor: it.active ? "rgba(20,124,255,0.12)" : "transparent",
            border: `1px solid ${it.active ? "rgba(20,124,255,0.30)" : C.borderSoft}`,
            padding: "7px 10px",
            fontSize: "11px",
          }}
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: it.active ? C.blue : "transparent",
              border: `1.5px solid ${it.active ? C.blue : "rgba(255,255,255,0.30)"}`,
              flexShrink: 0,
            }}
            aria-hidden
          >
            {it.active && <Check size={9} className="text-white" strokeWidth={3} />}
          </span>
          <span
            style={{
              color: it.active ? C.text : C.textSubtle,
              fontWeight: it.active ? 700 : 500,
            }}
          >
            {it.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TicketBistrot() {
  return (
    <div
      className="mx-auto text-center"
      style={{
        backgroundColor: "#F5F1E8",
        color: "#1F1F2D",
        borderRadius: "6px",
        padding: "12px 10px",
        fontFamily: "var(--font-mono, monospace)",
        maxWidth: "180px",
      }}
    >
      <p style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.05em" }}>
        LE BISTROT
      </p>
      <p style={{ fontSize: "8px", opacity: 0.7, lineHeight: 1.3 }}>
        18 Rue de la Paix
        <br />
        69002 Lyon
      </p>
      <div
        className="my-1.5 border-t border-dashed"
        style={{ borderColor: "rgba(31,31,45,0.30)" }}
      />
      <p style={{ fontSize: "9px", opacity: 0.85, lineHeight: 1.4 }}>
        Ticket #0034
        <br />
        30/04/2025 — 21:14
      </p>
      <div
        className="my-1.5 border-t border-dashed"
        style={{ borderColor: "rgba(31,31,45,0.30)" }}
      />
      <p style={{ fontSize: "13px", fontWeight: 900 }}>
        Total <span style={{ color: C.blue }}>45,50 €</span>
      </p>
      <p style={{ fontSize: "8px", marginTop: "4px", opacity: 0.7 }}>
        Merci de votre visite
      </p>
    </div>
  );
}

function CaWidget() {
  return (
    <div
      style={{
        background: C.widgetBg,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "10px",
        padding: "12px",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          color: C.textMuted,
          fontWeight: 600,
        }}
      >
        CA aujourd&apos;hui
      </p>
      <p
        style={{
          fontSize: "22px",
          fontWeight: 850,
          color: C.text,
          lineHeight: 1,
          marginTop: "4px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        4 125 €
      </p>
      <svg
        viewBox="0 0 100 28"
        preserveAspectRatio="none"
        className="mt-3 h-9 w-full"
        aria-hidden
      >
        <polyline
          points="0,22 15,18 32,20 50,12 72,14 88,6 100,8"
          fill="none"
          stroke={C.blue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className="mt-1 flex justify-between"
        style={{ fontSize: "8.5px", color: C.textMuted }}
      >
        <span>0h</span>
        <span>12h</span>
        <span>24h</span>
      </div>
    </div>
  );
}

function Nf525Badge() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: "100px" }}>
      <div className="relative">
        {/* Outer glow */}
        <div
          className="absolute -inset-3 rounded-full opacity-60 blur-xl"
          style={{
            background:
              "radial-gradient(circle, rgba(20,124,255,0.50), transparent 70%)",
          }}
          aria-hidden
        />
        {/* Main circle */}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: "82px",
            height: "82px",
            background:
              "radial-gradient(circle at 40% 30%, #1B7CFF, #003BB3)",
            border: `2px solid ${C.blue}`,
            boxShadow:
              "0 0 30px rgba(20,124,255,0.45), inset 0 2px 0 rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-center">
            <p
              style={{
                fontSize: "13px",
                fontWeight: 900,
                color: C.text,
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              NF525
            </p>
            <p
              style={{
                fontSize: "8px",
                fontWeight: 800,
                color: "rgba(255,255,255,0.80)",
                letterSpacing: "0.12em",
                marginTop: "2px",
              }}
            >
              CERTIFIÉ
            </p>
          </div>
          {/* Badge check bottom-right */}
          <span
            className="absolute"
            style={{
              right: "-4px",
              bottom: "-4px",
              width: "22px",
              height: "22px",
              borderRadius: "999px",
              backgroundColor: C.text,
              border: `2px solid ${C.bg}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.blue,
            }}
            aria-hidden
          >
            <BadgeCheck size={14} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Shared centered header
   ============================================================ */
function SectionHeader({
  eyebrow,
  title,
  titleSize,
}: {
  eyebrow: string;
  title: React.ReactNode;
  titleSize: "large" | "medium";
}) {
  return (
    <div className="text-center">
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.18em",
          fontWeight: 900,
          color: C.blue,
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="mx-auto"
        style={{
          fontSize:
            titleSize === "large"
              ? "clamp(32px, 4.5vw, 46px)"
              : "clamp(30px, 4vw, 42px)",
          lineHeight: titleSize === "large" ? 1.08 : 1.1,
          fontWeight: 850,
          color: C.text,
          maxWidth: titleSize === "large" ? "760px" : "640px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
