import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Monitor,
  Users,
  ShieldCheck,
  BarChart3,
  CalendarDays,
  Package,
  Receipt,
  Play,
} from "lucide-react";

/* ===== Charte (continuité avec le Cockpit) ===== */
const BG = "#07111F";
const ORANGE = "#FF7000";
const CARD_FROM = "#0D1A22";
const CARD_TO = "#08131A";
const TXT = "#F8F4EA";
const TXT_MUTED = "rgba(255,255,255,0.62)";

/* ===== 7 modules du Cockpit, positionnés sur un heptagone =====
   x / y = position du centre de la carte en % du conteneur carré */
const modules: {
  icon: LucideIcon;
  title: string;
  desc: string;
  x: number;
  y: number;
}[] = [
  {
    icon: Monitor,
    title: "Caisse NF525",
    desc: "Encaissement rapide, fiable et conforme.",
    x: 50,
    y: 9,
  },
  {
    icon: Users,
    title: "RH & Planning",
    desc: "Plannings, pointages, absences, contrats.",
    x: 82,
    y: 25,
  },
  {
    icon: ShieldCheck,
    title: "HACCP",
    desc: "Températures, contrôles, alertes et rapports.",
    x: 90,
    y: 60,
  },
  {
    icon: BarChart3,
    title: "Pilotage",
    desc: "Indicateurs clés et marges en temps réel.",
    x: 67,
    y: 88,
  },
  {
    icon: CalendarDays,
    title: "Réservations",
    desc: "Plan de salle et réservation en ligne.",
    x: 33,
    y: 88,
  },
  {
    icon: Package,
    title: "Stocks & Achats",
    desc: "Inventaires, fournisseurs, coûts matières.",
    x: 10,
    y: 60,
  },
  {
    icon: Receipt,
    title: "Comptabilité",
    desc: "TVA, exports comptables et clôtures.",
    x: 18,
    y: 25,
  },
];

function ModuleCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex items-start gap-2.5 border border-white/[0.07] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF7000]/40"
      style={{
        background: `linear-gradient(180deg, ${CARD_FROM} 0%, ${CARD_TO} 100%)`,
        borderRadius: "12px",
        padding: "12px 14px",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 12px 30px rgba(0,0,0,0.30)",
      }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: "rgba(255,112,0,0.14)" }}
      >
        <Icon size={18} style={{ color: ORANGE }} strokeWidth={1.9} aria-hidden />
      </span>
      <div className="min-w-0">
        <p style={{ fontSize: "13.5px", fontWeight: 800, color: TXT, lineHeight: 1.2 }}>
          {title}
        </p>
        <p
          style={{
            fontSize: "11.5px",
            lineHeight: 1.4,
            color: TXT_MUTED,
            marginTop: "3px",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

/* Nœud central : bouton lecture vidéo + logo LOGONES (empilés, sans superposition) */
function CenterNode() {
  return (
    <Link
      href="/demo"
      aria-label="Voir Logones en vidéo"
      className="group relative flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-full px-4 text-center"
      style={{
        backgroundColor: BG,
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.55), 0 0 70px rgba(255,112,0,0.22)",
      }}
    >
      {/* Bouton lecture */}
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
        style={{
          backgroundColor: ORANGE,
          boxShadow: "0 10px 30px rgba(255,112,0,0.45)",
        }}
      >
        <Play
          className="h-6 w-6 translate-x-0.5 text-white"
          fill="currentColor"
          aria-hidden
        />
      </span>

      {/* Logo + libellé */}
      <div>
        <p
          style={{
            fontSize: "clamp(14px,1.5vw,18px)",
            fontWeight: 800,
            letterSpacing: "0.12em",
            color: TXT,
            lineHeight: 1,
          }}
        >
          LOGONES
        </p>
        <p className="mt-1" style={{ fontSize: "11px", color: TXT_MUTED }}>
          Voir la démo
        </p>
      </div>
    </Link>
  );
}

export function PlatformOrbit() {
  return (
    <section
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 45%, rgba(255,112,0,0.10), transparent 60%), linear-gradient(180deg, #020B12 0%, #07111F 50%, #020B12 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10">
        {/* ---------- Schéma radial (desktop) ---------- */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block">
          {/* Lignes pointillées */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {modules.map((m) => (
              <line
                key={m.title}
                x1="50"
                y1="50"
                x2={m.x}
                y2={m.y}
                stroke={ORANGE}
                strokeWidth="0.3"
                strokeDasharray="1.3 1.7"
                opacity="0.55"
              />
            ))}
          </svg>

          {/* Nœud central */}
          <div className="absolute left-1/2 top-1/2 w-[24%] -translate-x-1/2 -translate-y-1/2">
            <CenterNode />
          </div>

          {/* Cartes modules */}
          {modules.map((m) => (
            <div
              key={m.title}
              className="absolute w-[190px] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <ModuleCard icon={m.icon} title={m.title} desc={m.desc} />
            </div>
          ))}
        </div>

        {/* ---------- Version mobile : centre + grille ---------- */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          <div className="w-[170px]">
            <CenterNode />
          </div>
          <div className="grid w-full grid-cols-2 gap-3">
            {modules.map((m) => (
              <ModuleCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
