import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock3,
  Gauge,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Headphones,
  Monitor,
  Tablet,
  Smartphone,
  BadgeCheck,
  Home,
  CreditCard,
  Users,
  CalendarDays,
  Package,
  Heart,
  FileText,
  Settings,
  AlertTriangle,
} from "lucide-react";

const C = {
  bg: "#FAF7F2",
  ink: "#06111A",
  orange: "#FF7000",
  orangeLight: "#FF8A24",
  orangeDeep: "#CC5800",
  text: "#101820",
  textSecondary: "rgba(16,24,32,0.72)",
  border: "rgba(6,17,26,0.10)",
  dashFrom: "#0B1A24",
  dashTo: "#061018",
  dashCard: "#0F202C",
  dashText: "#F5F5F0",
  dashMuted: "rgba(255,255,255,0.55)",
  green: "#3DD27C",
};

export function ModularPlatformSection() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 4vw, 48px)",
      }}
    >
      <div
        className="mx-auto flex flex-col"
        style={{ maxWidth: "1480px", gap: "clamp(64px, 7vw, 96px)" }}
      >
        <PlatformBlock />
        <BenefitsBlock />
      </div>
    </section>
  );
}

/* =====================================================
   PART 1 — MODULAR PLATFORM
   ===================================================== */
function PlatformBlock() {
  return (
    <div>
      <div className="grid items-center gap-12 lg:grid-cols-[35fr_65fr] lg:gap-16">
        <PlatformLeft />
        <div className="relative">
          <DashboardMockup />
          {/* Phone overlay on desktop only */}
          <div className="absolute -bottom-8 -right-6 hidden lg:block">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Badges row */}
      <BadgesRow />
    </div>
  );
}

function PlatformLeft() {
  const bullets = [
    "Données centralisées et fiables",
    "Informations en temps réel",
    "Automatisations intelligentes",
    "Accessible sur tous vos appareils",
    "Évolutif selon vos besoins",
  ];
  return (
    <div>
      <p
        style={{
          color: C.orange,
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        Plateforme modulaire
      </p>
      <h2
        style={{
          fontSize: "clamp(32px, 4vw, 44px)",
          lineHeight: 1.05,
          fontWeight: 900,
          color: C.ink,
          marginBottom: "28px",
          fontFamily: "var(--font-poppins), system-ui, sans-serif",
        }}
      >
        Une interface unique.
        <br />
        Des données connectées.
      </h2>
      <p
        style={{
          fontSize: "17px",
          lineHeight: 1.6,
          color: C.textSecondary,
          maxWidth: "460px",
          marginBottom: "30px",
        }}
      >
        Tous vos modules communiquent entre eux en temps réel. Fini les doubles
        saisies, les erreurs et les outils déconnectés.
      </p>

      <ul className="space-y-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <CheckCircle
              size={20}
              style={{ color: C.orange, flexShrink: 0 }}
              strokeWidth={2}
              aria-hidden
            />
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: C.text,
              }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/logones/demo"
        className="mt-8 inline-flex items-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
        style={{
          background: `linear-gradient(135deg, ${C.orangeLight}, ${C.orangeDeep})`,
          padding: "16px 30px",
          fontSize: "16px",
          fontWeight: 800,
          boxShadow: "0 16px 35px rgba(255,112,0,0.35)",
        }}
      >
        Voir la plateforme en action
        <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
      </Link>
    </div>
  );
}

/* =====================================================
   DASHBOARD DESKTOP MOCKUP
   ===================================================== */
function DashboardMockup() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maxWidth: "860px",
        aspectRatio: "16 / 9",
        background: `linear-gradient(180deg, ${C.dashFrom}, ${C.dashTo})`,
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
        padding: "18px",
        color: C.dashText,
        fontFamily: "var(--font-poppins), system-ui, sans-serif",
      }}
    >
      <div className="flex h-full gap-3">
        <DashSidebar />
        <DashContent />
      </div>
    </div>
  );
}

function DashSidebar() {
  const items = [
    { label: "Accueil", icon: Home, active: false },
    { label: "Pilotage", icon: BarChart3, active: true },
    { label: "Caisse", icon: CreditCard, active: false },
    { label: "RH / Planning", icon: Users, active: false },
    { label: "HACCP", icon: ShieldCheck, active: false },
    { label: "Réservations", icon: CalendarDays, active: false },
    { label: "Stocks", icon: Package, active: false },
    { label: "Fidélité & Marketing", icon: Heart, active: false },
    { label: "Comptabilité", icon: FileText, active: false },
    { label: "Paramètres", icon: Settings, active: false },
  ];
  return (
    <aside
      style={{ width: "150px", flexShrink: 0 }}
      className="flex flex-col"
    >
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-md"
          style={{ backgroundColor: C.orange }}
          aria-hidden
        >
          <span
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "13px",
              fontWeight: 900,
              color: C.ink,
            }}
          >
            LG
          </span>
        </span>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em" }}>
          LOGONES
        </span>
      </div>
      <ul className="space-y-0.5 overflow-hidden">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 truncate rounded-md px-2 py-1"
            style={{
              backgroundColor: item.active ? "rgba(255,112,0,0.12)" : "transparent",
              color: item.active ? C.orange : C.dashMuted,
              fontSize: "9.5px",
              fontWeight: item.active ? 700 : 500,
            }}
          >
            <item.icon
              size={11}
              strokeWidth={1.75}
              style={{ flexShrink: 0 }}
              aria-hidden
            />
            <span className="truncate">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function DashContent() {
  return (
    <div className="flex flex-1 flex-col gap-3 overflow-hidden">
      {/* Top KPI cards */}
      <div className="grid grid-cols-5 gap-2">
        <KpiCard label="CA aujourd'hui" value="4 125 €" trend="+8 %" trendUp />
        <KpiCard label="Panier moyen" value="49,50 €" trend="+2 %" trendUp />
        <KpiCard label="Couverts" value="85" trend="+11" trendUp />
        <KpiCard label="Coût matière" value="32 %" trend="-1 pt" trendUp />
        <KpiCard label="Masse sal. / CA" value="28 %" trend="+1 pt" />
      </div>

      <div className="grid flex-1 grid-cols-[1.7fr_1fr] gap-3 overflow-hidden">
        <RevenueGraph />
        <div className="flex flex-col gap-2 overflow-hidden">
          <AlertsCard />
          <TopProductsCard />
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  trend,
  trendUp,
}: {
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
}) {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: C.dashCard,
        borderRadius: "10px",
        padding: "8px 10px",
      }}
    >
      <p style={{ fontSize: "8px", color: C.dashMuted, fontWeight: 500 }}>
        {label}
      </p>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 800,
          color: C.dashText,
          marginTop: "2px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: "8px",
          color: trendUp ? C.green : C.orange,
          fontWeight: 700,
          marginTop: "1px",
        }}
      >
        {trend}
      </p>
    </div>
  );
}

function RevenueGraph() {
  // Two SVG polylines: orange (current) + beige (last week)
  const points = (vals: number[]) =>
    vals
      .map((v, i) => `${(i / (vals.length - 1)) * 100},${100 - v}`)
      .join(" ");
  const cur = [10, 18, 28, 22, 45, 55, 68];
  const prev = [12, 16, 22, 30, 38, 44, 50];
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        backgroundColor: C.dashCard,
        borderRadius: "12px",
        padding: "10px 12px",
      }}
    >
      <div className="flex items-center justify-between">
        <p style={{ fontSize: "10px", fontWeight: 700, color: C.dashText }}>
          Évolution du CA
        </p>
        <div className="flex items-center gap-2 text-[7.5px]">
          <span className="inline-flex items-center gap-1" style={{ color: C.dashMuted }}>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "2px",
                backgroundColor: C.orange,
                borderRadius: "1px",
              }}
            />
            Aujourd&apos;hui
          </span>
          <span className="inline-flex items-center gap-1" style={{ color: C.dashMuted }}>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "2px",
                backgroundColor: "#D9C7A6",
                borderRadius: "1px",
              }}
            />
            7 j avant
          </span>
        </div>
      </div>
      <div className="relative mt-1 flex-1">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {/* grid */}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.3"
            />
          ))}
          {/* previous beige */}
          <polyline
            points={points(prev)}
            fill="none"
            stroke="#D9C7A6"
            strokeOpacity="0.6"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* current orange */}
          <polyline
            points={points(cur)}
            fill="none"
            stroke={C.orange}
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="mt-1 flex justify-between"
        style={{ fontSize: "7px", color: C.dashMuted }}
      >
        {["00h", "04h", "08h", "12h", "16h", "20h", "24h"].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function AlertsCard() {
  const alerts = [
    { tag: "HACCP", text: "Température chambre froide" },
    { tag: "Stocks", text: "Rupture proche" },
    { tag: "Masse sal.", text: "Dépassement prévisionnel" },
  ];
  return (
    <div
      style={{
        backgroundColor: C.dashCard,
        borderRadius: "12px",
        padding: "10px 12px",
      }}
    >
      <div className="flex items-center gap-1.5">
        <AlertTriangle size={10} style={{ color: C.orange }} strokeWidth={2} />
        <p style={{ fontSize: "9.5px", fontWeight: 700, color: C.dashText }}>
          Alertes
        </p>
      </div>
      <ul className="mt-1.5 space-y-1">
        {alerts.map((a) => (
          <li key={a.text} className="flex items-start gap-1.5">
            <span
              className="mt-0.5 inline-block"
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: C.orange,
                borderRadius: "999px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "7.5px",
                color: C.dashMuted,
                lineHeight: 1.3,
              }}
            >
              <strong style={{ color: C.dashText }}>{a.tag}</strong> — {a.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopProductsCard() {
  const products = [
    { name: "Burger Signature", pct: 90 },
    { name: "Tartare de bœuf", pct: 72 },
    { name: "Filet de dorade", pct: 55 },
  ];
  return (
    <div
      className="flex-1 overflow-hidden"
      style={{
        backgroundColor: C.dashCard,
        borderRadius: "12px",
        padding: "10px 12px",
      }}
    >
      <p style={{ fontSize: "9.5px", fontWeight: 700, color: C.dashText }}>
        Top produits
      </p>
      <ul className="mt-1.5 space-y-1.5">
        {products.map((p) => (
          <li key={p.name}>
            <p
              style={{
                fontSize: "7.5px",
                color: C.dashMuted,
                marginBottom: "1.5px",
              }}
            >
              {p.name}
            </p>
            <div
              className="h-1 w-full overflow-hidden rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${p.pct}%`,
                  backgroundColor: C.orange,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =====================================================
   PHONE MOCKUP overlay
   ===================================================== */
function PhoneMockup() {
  return (
    <div
      style={{
        width: "180px",
        height: "360px",
        background: C.dashTo,
        borderRadius: "32px",
        border: `8px solid ${C.text}`,
        boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
        padding: "14px",
        color: C.dashText,
        fontFamily: "var(--font-poppins), sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Notch */}
      <div
        className="mx-auto h-1 w-10 rounded-full"
        style={{ backgroundColor: C.text, marginBottom: "10px" }}
        aria-hidden
      />
      <p style={{ fontSize: "9px", color: C.dashMuted, fontWeight: 500 }}>
        Aujourd&apos;hui
      </p>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 800,
          color: C.dashText,
          marginBottom: "10px",
        }}
      >
        Pilotage
      </p>

      {[
        { label: "CA", value: "4 125 €", color: C.orange },
        { label: "Couverts", value: "85", color: C.dashText },
        { label: "Réservations", value: "14", color: C.dashText },
        { label: "Alertes", value: "3", color: C.orange },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between"
          style={{
            backgroundColor: C.dashCard,
            borderRadius: "8px",
            padding: "6px 8px",
            marginBottom: "5px",
            fontSize: "9px",
          }}
        >
          <span style={{ color: C.dashMuted }}>{row.label}</span>
          <span style={{ color: row.color, fontWeight: 700 }}>{row.value}</span>
        </div>
      ))}

      {/* Mini chart */}
      <div
        style={{
          backgroundColor: C.dashCard,
          borderRadius: "8px",
          padding: "8px",
          marginTop: "5px",
        }}
      >
        <p style={{ fontSize: "8px", color: C.dashMuted, marginBottom: "4px" }}>
          Tendance CA
        </p>
        <svg
          viewBox="0 0 100 30"
          className="h-7 w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polyline
            points="0,22 15,18 30,20 45,12 60,16 75,8 100,4"
            fill="none"
            stroke={C.orange}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* =====================================================
   BADGES ROW
   ===================================================== */
function BadgesRow() {
  const badges = [
    { icon: Monitor, primary: "Web", secondary: "Application" },
    { icon: Tablet, primary: "iPad", secondary: "Application" },
    { icon: Smartphone, primary: "iPhone", secondary: "Application" },
    { icon: BadgeCheck, primary: "Partenaires", secondary: "Certifiés" },
  ];
  return (
    <ul className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
      {badges.map((b) => (
        <li
          key={b.primary}
          className="inline-flex items-center gap-3 rounded-2xl bg-white"
          style={{
            border: `1px solid ${C.border}`,
            padding: "14px 22px",
            boxShadow: "0 6px 18px rgba(6,17,26,0.06)",
          }}
        >
          <b.icon size={20} style={{ color: C.text }} strokeWidth={1.75} aria-hidden />
          <div className="leading-tight">
            <p style={{ fontSize: "14px", fontWeight: 700, color: C.text }}>
              {b.primary}
            </p>
            <p style={{ fontSize: "11px", color: C.textSecondary }}>
              {b.secondary}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* =====================================================
   PART 2 — BENEFITS
   ===================================================== */
function BenefitsBlock() {
  const benefits = [
    {
      icon: Clock3,
      title: "Gagnez du temps",
      body: "Éliminez les doubles saisies et automatisez vos tâches quotidiennes.",
    },
    {
      icon: Gauge,
      title: "Réduisez vos coûts",
      body: "Maîtrisez vos achats, votre masse salariale et vos pertes.",
    },
    {
      icon: ShieldCheck,
      title: "Soyez en conformité",
      body: "Respectez les normes et réglementations en toute sérénité.",
    },
    {
      icon: BarChart3,
      title: "Prenez de meilleures décisions",
      body: "Des données fiables pour gérer votre activité avec clarté.",
    },
    {
      icon: Sparkles,
      title: "Développez votre activité",
      body: "Fidélisez vos clients et augmentez votre chiffre d'affaires.",
    },
    {
      icon: Headphones,
      title: "Accompagnement dédié",
      body: "Une équipe d'experts à vos côtés à chaque étape de votre projet.",
    },
  ];

  return (
    <div>
      <h2
        style={{
          fontSize: "clamp(28px, 3.5vw, 38px)",
          fontWeight: 900,
          lineHeight: 1.08,
          color: C.ink,
          maxWidth: "780px",
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        Conçu pour les restaurateurs.
        <br />
        Pensé pour <span style={{ color: C.orange }}>la performance.</span>
      </h2>

      <ul
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6"
        style={{ gap: "18px", marginTop: "40px" }}
      >
        {benefits.map((b) => (
          <li
            key={b.title}
            className="flex flex-col bg-white transition-all hover:-translate-y-1"
            style={{
              border: `1px solid rgba(6,17,26,0.08)`,
              borderRadius: "18px",
              padding: "26px 22px",
              minHeight: "190px",
              boxShadow: "0 14px 35px rgba(6,17,26,0.06)",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "rgba(255,112,0,0.08)",
                marginBottom: "20px",
              }}
            >
              <b.icon
                size={26}
                style={{ color: C.orange }}
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: C.ink,
                lineHeight: 1.2,
              }}
            >
              {b.title}
            </h3>
            <p
              style={{
                fontSize: "13.5px",
                lineHeight: 1.5,
                color: C.textSecondary,
                marginTop: "8px",
              }}
            >
              {b.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
