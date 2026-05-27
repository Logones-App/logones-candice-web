import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Users,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  Package,
  Receipt,
  CreditCard,
  Banknote,
  MoreHorizontal,
  Check,
  Clock,
} from "lucide-react";

const PALETTE = {
  bg: "#020B12",
  cardGradFrom: "#0D1A22",
  cardGradTo: "#08131A",
  widgetBg: "#081019",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,112,0,0.35)",
  text: "#F6F3EA",
  textTitle: "#F8F4EA",
  textDesc: "rgba(255,255,255,0.72)",
  textMuted: "rgba(255,255,255,0.50)",
  iconOrange: "#FF7000",
  accentOrange: "#FF7000",
  green: "#2D9B5A",
};

export function CockpitGrid() {
  return (
    <section
      style={{
        backgroundColor: PALETTE.bg,
        paddingTop: "42px",
        paddingBottom: "36px",
      }}
    >
      <div className="mx-auto max-w-[1480px]">
        <h2
          className="text-center font-extrabold"
          style={{
            fontSize: "clamp(24px, 2.5vw, 28px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "28px",
            color: PALETTE.textTitle,
            paddingInline: "16px",
          }}
        >
          Un cockpit complet pour{" "}
          <span style={{ color: PALETTE.accentOrange }}>piloter chaque jour</span>
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
          style={{ gap: "12px", paddingInline: "32px" }}
        >
          <CockpitCard
            icon={Monitor}
            title="Caisse nouvelle génération"
            description="Encaissement rapide, fiable et 100% conforme NF525."
            widget={<WidgetCaisse />}
          />
          <CockpitCard
            icon={Users}
            title="RH & Planning"
            description="Planning intelligent, pointage, heures, absences, documents."
            widget={<WidgetRH />}
          />
          <CockpitCard
            icon={ShieldCheck}
            title="HACCP"
            description="Températures, contrôles, alertes et traçabilité simplifiées."
            widget={<WidgetHACCP />}
          />
          <CockpitCard
            icon={BarChart3}
            title="Pilotage & Performance"
            description="Indicateurs clés en temps réel. Rentabilité, marges, seuils."
            widget={<WidgetPilotage />}
          />
          <CockpitCard
            icon={CalendarDays}
            title="Réservations & Salle"
            description="Plan de salle, réservation en ligne, gestion des flux."
            widget={<WidgetReservations />}
          />
          <CockpitCard
            icon={Package}
            title="Stocks & Achats"
            description="Inventaires, fournisseurs, coûts matières, alertes."
            widget={<WidgetStocks />}
          />
          <CockpitCard
            icon={Receipt}
            title="Comptabilité & TVA"
            description="TVA, exports comptables, rapports et clôtures."
            widget={<WidgetCompta />}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Generic card
   ============================================================ */
function CockpitCard({
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
    <div
      className="flex flex-col border border-white/[0.06] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7000]/35"
      style={{
        background: `linear-gradient(180deg, ${PALETTE.cardGradFrom} 0%, ${PALETTE.cardGradTo} 100%)`,
        borderRadius: "10px",
        minHeight: "155px",
        padding: "18px 16px",
        color: PALETTE.text,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex items-center gap-2">
        <Icon
          size={18}
          style={{ color: PALETTE.iconOrange, flexShrink: 0 }}
          strokeWidth={1.75}
          aria-hidden
        />
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 800,
            color: PALETTE.textTitle,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
      </div>

      <p
        style={{
          fontSize: "12px",
          lineHeight: 1.45,
          color: PALETTE.textDesc,
          marginTop: "10px",
        }}
      >
        {description}
      </p>

      <div
        style={{
          marginTop: "14px",
          background: PALETTE.widgetBg,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: "8px",
          padding: "12px",
          minHeight: "48px",
        }}
      >
        {widget}
      </div>
    </div>
  );
}

/* ============================================================
   8 mini-widgets
   ============================================================ */

function WidgetCaisse() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: "11px", color: PALETTE.textMuted }}>
          Table 12
        </span>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: PALETTE.textTitle,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          128,50 €
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        <Chip icon={CreditCard} label="Carte" />
        <Chip icon={Banknote} label="Espèces" />
        <Chip icon={MoreHorizontal} label="Autre" />
      </div>
    </div>
  );
}

function Chip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span
      className="inline-flex flex-1 items-center justify-center gap-1 rounded-md py-1"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)",
        fontSize: "9.5px",
        color: PALETTE.textDesc,
      }}
    >
      <Icon size={10} strokeWidth={2} />
      {label}
    </span>
  );
}

function WidgetRH() {
  return (
    <div>
      <p style={{ fontSize: "10px", color: PALETTE.textMuted }}>Lundi 20 mai</p>
      <div className="mt-1.5 flex items-center gap-2">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
          style={{
            backgroundColor: PALETTE.iconOrange,
            color: PALETTE.bg,
          }}
          aria-hidden
        >
          J
        </span>
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: PALETTE.textTitle,
              lineHeight: 1.1,
            }}
          >
            Julie
          </p>
          <p style={{ fontSize: "10px", color: PALETTE.textMuted }}>
            09h – 17h
          </p>
        </div>
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full shrink-0"
          style={{ backgroundColor: PALETTE.green }}
          aria-hidden
        >
          <Check size={10} className="text-white" strokeWidth={3} />
        </span>
      </div>
    </div>
  );
}

function WidgetHACCP() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p style={{ fontSize: "10px", color: PALETTE.textMuted }}>
          Chambre froide
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 800,
            color: PALETTE.textTitle,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          3,2 °C
        </p>
        <p style={{ fontSize: "10px", color: PALETTE.green, fontWeight: 600 }}>
          Conforme
        </p>
      </div>
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full"
        style={{ backgroundColor: PALETTE.green }}
        aria-hidden
      >
        <Check size={18} className="text-white" strokeWidth={3} />
      </span>
    </div>
  );
}

function WidgetPilotage() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p style={{ fontSize: "10px", color: PALETTE.textMuted }}>
          Marge brute
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 800,
            color: PALETTE.textTitle,
          }}
        >
          68 %
        </p>
        <p style={{ fontSize: "10px", color: PALETTE.green, fontWeight: 600 }}>
          +5 %
        </p>
      </div>
      <div className="flex items-end gap-[3px]" aria-hidden>
        {[6, 10, 8, 14, 17].map((h, i) => (
          <span
            key={i}
            style={{
              width: "4px",
              height: `${h}px`,
              backgroundColor: PALETTE.iconOrange,
              opacity: 0.4 + i * 0.15,
              borderRadius: "1px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function WidgetReservations() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1"
          style={{
            fontSize: "11px",
            color: PALETTE.textTitle,
            fontWeight: 700,
          }}
        >
          <Clock size={12} style={{ color: PALETTE.iconOrange }} />
          19:30
        </span>
        <span
          className="rounded px-1.5 py-0.5"
          style={{
            fontSize: "9.5px",
            fontWeight: 700,
            backgroundColor: "rgba(45,155,90,0.18)",
            color: PALETTE.green,
          }}
        >
          2 pers.
        </span>
      </div>
      <p style={{ fontSize: "10px", color: PALETTE.textMuted, marginTop: "4px" }}>
        Table 15
      </p>
    </div>
  );
}

function WidgetStocks() {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden style={{ fontSize: "22px", lineHeight: 1 }}>
        🍅
      </span>
      <div className="flex-1">
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: PALETTE.textTitle,
            lineHeight: 1.1,
          }}
        >
          Tomates
        </p>
        <span
          className="mt-0.5 inline-block rounded px-1.5 py-0.5"
          style={{
            fontSize: "9.5px",
            fontWeight: 700,
            backgroundColor: "rgba(255,112,0,0.18)",
            color: PALETTE.accentOrange,
          }}
        >
          Stock faible
        </span>
      </div>
    </div>
  );
}

function WidgetCompta() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p style={{ fontSize: "10px", color: PALETTE.textMuted }}>
          TVA collectée
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 800,
            color: PALETTE.textTitle,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          2 450 €
        </p>
      </div>
      <DonutMini />
    </div>
  );
}

function DonutMini() {
  // simple 2-segment donut: orange 65%, blue 35%
  const r = 14;
  const c = 2 * Math.PI * r;
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="5"
      />
      {/* Orange segment 65% */}
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke={PALETTE.iconOrange}
        strokeWidth="5"
        strokeDasharray={`${c * 0.65} ${c}`}
        transform="rotate(-90 20 20)"
        strokeLinecap="round"
      />
      {/* Blue segment 35% */}
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="#5DADE2"
        strokeWidth="5"
        strokeDasharray={`${c * 0.32} ${c}`}
        strokeDashoffset={`${-c * 0.65}`}
        transform="rotate(-90 20 20)"
        strokeLinecap="round"
      />
    </svg>
  );
}
