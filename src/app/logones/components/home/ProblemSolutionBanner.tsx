import Image from "next/image";
import {
  CreditCard,
  Users,
  ShieldCheck,
  CalendarDays,
  Heart,
  Boxes,
  FileText,
  Table,
  X,
  BarChart3,
} from "lucide-react";

const ORANGE = "#FF7000";
const RED = "#D71920";
const RED_DASH = "#E53935";
const CARD_BG = "#F2EDE7";
const PAGE_BG = "#FAFAF8";
const CARD_INNER_BG = "#FFF7EF";
const INK = "#05080D";

const fragmentedTools = [
  { icon: CreditCard, label: "Caisse" },
  { icon: Users, label: "RH / Planning" },
  { icon: ShieldCheck, label: "HACCP" },
  { icon: CalendarDays, label: "Réservations" },
  { icon: Heart, label: "Fidélité" },
  { icon: Boxes, label: "Stocks" },
  { icon: FileText, label: "Compta" },
  { icon: Table, label: "Tableurs" },
];

/* 7 modules positioned in a circle around the central Logones disc */
const orbitModules = [
  { icon: BarChart3, label: "Pilotage" },
  { icon: CreditCard, label: "Caisse" },
  { icon: Users, label: "RH / Planning" },
  { icon: ShieldCheck, label: "HACCP" },
  { icon: CalendarDays, label: "Réservations" },
  { icon: Boxes, label: "Stocks" },
  { icon: FileText, label: "Comptabilité" },
];

export function ProblemSolutionBanner() {
  return (
    <section
      style={{ backgroundColor: PAGE_BG }}
      className="relative py-8 sm:py-10"
    >
      <div style={{ marginInline: "15px" }}>
        <div
          style={{
            backgroundColor: CARD_INNER_BG,
            boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
          }}
          className="rounded-3xl p-7 sm:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[54fr_46fr] lg:gap-0 lg:divide-x lg:divide-black/10">
            <LeftBlock />
            <RightBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LEFT BLOCK — Problem
   ============================================================ */
function LeftBlock() {
  return (
    <div className="lg:pr-10 xl:pr-12">
      <h3
        className="uppercase leading-[1] tracking-[-0.01em]"
        style={{
          fontFamily: "var(--font-anton), 'Oswald', 'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 3.2vw, 38px)",
          fontWeight: 800,
          color: INK,
        }}
      >
        Trop d&apos;outils.
        <br />
        <span style={{ color: ORANGE }}>Trop de pertes.</span>
      </h3>

      <p
        className="mt-6 text-[15px] leading-[1.5]"
        style={{ color: "#101010", maxWidth: "440px" }}
      >
        Aujourd&apos;hui, un restaurant utilise souvent
        <strong> 6 à 8 logiciels différents</strong>. Résultat : perte de
        temps, erreurs, coûts élevés et manque de visibilité.
      </p>

      {/* 8 tool cards on a single row + dashed connector */}
      <div className="mt-6">
        <ul className="grid grid-cols-4 gap-x-2 gap-y-3 sm:grid-cols-8 sm:gap-x-2">
          {fragmentedTools.map((tool) => (
            <li
              key={tool.label}
              className="flex flex-col items-center text-center"
            >
              <div
                className="relative flex h-[48px] w-[48px] items-center justify-center sm:h-[52px] sm:w-[52px]"
                style={{
                  backgroundColor: CARD_BG,
                  borderRadius: "10px",
                }}
              >
                <tool.icon
                  className="h-5 w-5"
                  style={{ color: INK }}
                  strokeWidth={1.5}
                  aria-hidden
                />
                {/* Red error badge */}
                <span
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full"
                  style={{ backgroundColor: RED }}
                  aria-hidden
                >
                  <X
                    className="h-2.5 w-2.5 text-white"
                    strokeWidth={3.5}
                  />
                </span>
              </div>
              <span
                className="mt-1.5 text-[10px] font-semibold leading-tight sm:text-[11px]"
                style={{ color: INK }}
              >
                {tool.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Vertical connectors (only on sm+, where 8 cols are aligned) */}
        <ul
          className="mt-2 hidden grid-cols-8 sm:grid"
          aria-hidden
        >
          {fragmentedTools.map((_, i) => (
            <li
              key={i}
              className="flex justify-center"
            >
              <span
                className="block h-2.5 w-px"
                style={{ backgroundColor: RED_DASH, opacity: 0.7 }}
              />
            </li>
          ))}
        </ul>

        {/* Horizontal dashed line */}
        <div
          className="mt-0 w-full sm:mt-0"
          style={{
            borderTop: `1.5px dashed ${RED_DASH}`,
            opacity: 0.7,
          }}
          aria-hidden
        />

        <p
          className="mt-3 text-center text-[13px] font-bold tracking-tight sm:text-[14px]"
          style={{ color: RED }}
        >
          Données éparpillées, ressaisies, erreurs, perte de temps
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   RIGHT BLOCK — Solution
   ============================================================ */
function RightBlock() {
  return (
    <div className="lg:pl-10 xl:pl-12">
      <h3
        className="uppercase leading-[1] tracking-[-0.01em]"
        style={{
          fontFamily: "var(--font-anton), 'Oswald', 'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 3.2vw, 38px)",
          fontWeight: 800,
          color: INK,
        }}
      >
        Logones centralise tout.
        <br />
        <span style={{ color: ORANGE }}>Vous reprenez le contrôle.</span>
      </h3>

      <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center xl:grid-cols-[1fr_320px]">
        <p
          className="text-[15px] leading-[1.5]"
          style={{ color: "#101010", maxWidth: "340px" }}
        >
          Une seule plateforme. Toutes vos données connectées.
          <br />
          Une vision claire. Des décisions plus rapides.
          <br />
          <strong>Un restaurant plus rentable.</strong>
        </p>

        <OrbitDiagram />
      </div>
    </div>
  );
}

/* ============================================================
   OrbitDiagram — Central Logones disc + 7 modules in circle
   ============================================================ */
function OrbitDiagram() {
  const size = 340;
  const center = size / 2;
  const radius = 120;
  const moduleRadius = 24; // small circle radius
  const centerRadius = 44; // central disc radius

  // 7 modules positioned on the circle, first one at the top
  const positions = orbitModules.map((mod, i) => {
    const angle = (i / orbitModules.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...mod,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size, maxWidth: "100%" }}
      aria-label="Schéma : Logones au centre, 7 modules connectés"
    >
      {/* SVG for connection lines + decorative arcs */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {/* Decorative background arcs */}
        <circle
          cx={center}
          cy={center}
          r={radius + 18}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="1"
        />
        <circle
          cx={center}
          cy={center}
          r={radius - 20}
          fill="none"
          stroke="rgba(0,0,0,0.04)"
          strokeWidth="1"
        />

        {/* Connection lines from center to each module */}
        {positions.map((mod, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={mod.x}
            y2={mod.y}
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Module circles positioned absolutely — label below each circle */}
      {positions.map((mod, i) => {
        const Icon = mod.icon;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: mod.x,
              top: mod.y,
              transform: "translate(-50%, -50%)",
              width: moduleRadius * 2,
              height: moduleRadius * 2,
            }}
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{ backgroundColor: INK }}
            >
              <Icon
                className="h-5 w-5 text-white"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
            {/* Label absolutely positioned BELOW the circle, centered */}
            <span
              className="absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap pt-1.5 text-[11px] font-semibold leading-tight"
              style={{ color: INK }}
            >
              {mod.label}
            </span>
          </div>
        );
      })}

      {/* Central Logones disc — official logo SVG */}
      <div
        className="absolute flex items-center justify-center overflow-hidden rounded-full shadow-lg"
        style={{
          left: center,
          top: center,
          transform: "translate(-50%, -50%)",
          width: centerRadius * 2,
          height: centerRadius * 2,
        }}
      >
        <Image
          src="/images/logos/LOGONES-Logo-Final.svg"
          alt="Logones"
          width={centerRadius * 2}
          height={centerRadius * 2}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
