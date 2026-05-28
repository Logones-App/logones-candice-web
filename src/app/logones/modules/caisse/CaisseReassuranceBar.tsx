import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ShieldCheck, ReceiptText, CreditCard, WifiOff } from "lucide-react";

const PALETTE = {
  bg: "#02060B",
  cardBg: "rgba(7,21,35,0.72)",
  cardGradient:
    "linear-gradient(180deg, rgba(11,27,43,0.38), rgba(5,15,26,0.16))",
  blueLight: "#147CFF",
  blueDeep: "#005BFF",
  blueBorder: "rgba(20,124,255,0.16)",
  iconBorder: "rgba(20,124,255,0.28)",
  iconBg: "rgba(20,124,255,0.10)",
  text: "#FFFFFF",
  textSubtle: "rgba(255,255,255,0.62)",
  divider: "rgba(255,255,255,0.08)",
};

const cards = [
  {
    icon: ShieldCheck,
    title: "Conforme NF525",
    subtitle: "Loi de finances 2025",
  },
  {
    icon: ReceiptText,
    title: "Tickets, factures, avoirs",
    subtitle: "Impression ou envoi digital",
  },
  {
    icon: CreditCard,
    title: "TVA et modes de paiement",
    subtitle: "Toutes les options intégrées",
  },
  {
    icon: WifiOff,
    title: "Offline mode",
    subtitle: "Fonctionne même sans internet",
  },
];

export function CaisseReassuranceBar() {
  return (
    <section
      style={{
        backgroundColor: PALETTE.bg,
        paddingBlock: "32px",
        paddingInline: "clamp(18px, 4vw, 48px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        {/* CTA group */}
        <div
          className="flex flex-col sm:flex-row sm:items-center"
          style={{ gap: "18px", marginBottom: "28px" }}
        >
          <Link
            href="/logones/demo"
            aria-label="Découvrir le module caisse Logones"
            className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5"
            style={{
              height: "48px",
              padding: "0 26px",
              background: `linear-gradient(135deg, ${PALETTE.blueLight} 0%, ${PALETTE.blueDeep} 100%)`,
              fontSize: "14px",
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 12px 28px rgba(20,124,255,0.35), inset 0 1px 0 rgba(255,255,255,0.24)",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            Découvrir le module Caisse →
          </Link>

          <Link
            href="#features"
            aria-label="Voir toutes les fonctionnalités du module caisse"
            className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            style={{
              height: "48px",
              padding: "0 26px",
              background: "rgba(255,255,255,0.035)",
              fontSize: "14px",
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(10px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            Voir toutes les fonctionnalités
          </Link>
        </div>

        {/* Reassurance cards bar */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
          style={{
            backgroundColor: PALETTE.cardBg,
            border: `1px solid ${PALETTE.blueBorder}`,
            borderRadius: "16px",
            boxShadow:
              "0 18px 45px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {cards.map((card, i) => (
            <ReassuranceCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              isLast={i === cards.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReassuranceCard({
  icon: Icon,
  title,
  subtitle,
  isLast,
  index,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isLast: boolean;
  index: number;
}) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: "14px",
        padding: "20px 24px",
        minHeight: "76px",
        background: PALETTE.cardGradient,
        // dividers : right on desktop (lg+), bottom on smaller widths
        borderRight: isLast ? undefined : `1px solid ${PALETTE.divider}`,
        borderBottom: isLast ? undefined : `1px solid ${PALETTE.divider}`,
      }}
      data-card-index={index}
    >
      {/* Icon circle */}
      <div
        className="flex shrink-0 items-center justify-center rounded-full"
        style={{
          width: "42px",
          height: "42px",
          backgroundColor: PALETTE.iconBg,
          border: `1px solid ${PALETTE.iconBorder}`,
          color: PALETTE.blueLight,
        }}
        aria-hidden
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p
          style={{
            fontSize: "14px",
            fontWeight: 850,
            color: PALETTE.text,
            lineHeight: 1.15,
            marginBottom: "4px",
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: PALETTE.textSubtle,
            lineHeight: 1.2,
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
