import {
  Check,
  CalendarCheck,
  CreditCard,
  Package,
  Thermometer,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  Headset,
  BadgeCheck,
  Lock,
  RefreshCw,
  MapPin,
} from "lucide-react";

/* ===== Charte ===== */
const NAVY = "#07111F";
const ORANGE = "#FF5A1F";
const OFFWHITE = "#F7F3EC";
const INK_MUTED = "#51607A";
const TXT_ON_NAVY = "#D6DCE8";

/* ===== Données ===== */
const pilotageList = [
  "Tableaux de bord personnalisables",
  "Indicateurs clés en temps réel",
  "Analyses claires et exploitables",
  "Exports comptables en 1 clic",
];

const benefices = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    text: "Fini les doubles saisies et les allers-retours entre plusieurs logiciels.",
  },
  {
    icon: TrendingUp,
    title: "Augmentez votre rentabilité",
    text: "Moins de coûts, moins d’erreurs, plus de visibilité.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisez votre activité",
    text: "Données fiables, conformité assurée, HACCP toujours à jour.",
  },
  {
    icon: Users,
    title: "Simplifiez la gestion de vos équipes",
    text: "Planning, communication et suivi RH en un clic.",
  },
  {
    icon: Headset,
    title: "Un accompagnement dédié",
    text: "Une équipe basée en France, disponible et réactive.",
  },
];

const reassurance = [
  {
    icon: BadgeCheck,
    title: "Caisse certifiée NF525",
    text: "Conforme à la législation en vigueur",
  },
  {
    icon: Lock,
    title: "Hébergement sécurisé",
    text: "Données hébergées en France",
  },
  {
    icon: Headset,
    title: "Support réactif 7j/7",
    text: "Une équipe dédiée à votre écoute",
  },
  {
    icon: RefreshCw,
    title: "Mises à jour incluses",
    text: "Nouvelles fonctionnalités automatiques",
  },
  {
    icon: MapPin,
    title: "Éditeur français",
    text: "Accompagnement dédié partout en France",
  },
];

/* ============================================================
   Mockup dashboard (illustration de l'interface LOGONES)
   ============================================================ */
function DashboardMockup() {
  const kpis = [
    { label: "CA aujourd’hui", value: "2 480 €" },
    { label: "Réservations", value: "18" },
    { label: "Couverts", value: "52" },
    { label: "Marge brute", value: "71 %" },
  ];
  const bars = [38, 56, 44, 70, 60, 82, 64];
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_40px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="flex w-12 flex-col items-center gap-4 py-4"
          style={{ backgroundColor: NAVY }}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-extrabold text-white"
            style={{ backgroundColor: ORANGE }}
          >
            LG
          </span>
          {[CreditCard, CalendarCheck, Package, Thermometer, Users].map((Ic, i) => (
            <Ic
              key={i}
              className="h-4 w-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
              aria-hidden
            />
          ))}
        </aside>

        {/* Contenu */}
        <div className="flex-1 p-4">
          {/* KPI */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-xl p-3"
                style={{ backgroundColor: OFFWHITE }}
              >
                <p className="text-[10px]" style={{ color: INK_MUTED }}>
                  {k.label}
                </p>
                <p className="mt-1 text-[16px] font-extrabold" style={{ color: NAVY }}>
                  {k.value}
                </p>
              </div>
            ))}
          </div>

          {/* Graphiques */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            <div className="col-span-2 rounded-xl p-3 ring-1 ring-black/5">
              <p className="text-[10px]" style={{ color: INK_MUTED }}>
                Chiffre d’affaires — 7 jours
              </p>
              <div className="mt-3 flex h-[72px] items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 5 ? ORANGE : "rgba(7,17,31,0.18)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl p-3 ring-1 ring-black/5">
              <div
                className="h-[60px] w-[60px] rounded-full"
                style={{
                  background: `conic-gradient(${ORANGE} 0 71%, rgba(7,17,31,0.12) 71% 100%)`,
                }}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[11px] font-extrabold" style={{ color: NAVY }}>
                    71%
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[10px]" style={{ color: INK_MUTED }}>
                Marge brute
              </p>
            </div>
          </div>

          {/* Petites cartes */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {[
              { t: "Alertes HACCP", v: "2 à traiter" },
              { t: "Stocks faibles", v: "5 produits" },
              { t: "Planning", v: "8 en service" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl p-2.5 ring-1 ring-black/5">
                <p className="text-[9.5px]" style={{ color: INK_MUTED }}>
                  {c.t}
                </p>
                <p className="mt-0.5 text-[12px] font-bold" style={{ color: NAVY }}>
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION — Pilotage temps réel (fond navy premium)
   ============================================================ */
function PilotageTempsReel() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 72% -10%, rgba(255,90,31,0.12), transparent 55%), linear-gradient(180deg, #07111F 0%, #0A1626 100%)",
      }}
    >
      {/* Halo orange diffus */}
      <div
        className="pointer-events-none absolute right-[-180px] top-[100px] -z-10 h-[520px] w-[520px] rounded-full opacity-50 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.30), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-[1280px] px-5 py-[clamp(64px,8vw,112px)] sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Texte */}
          <div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: ORANGE }}
            >
              Pilotage en temps réel
            </p>
            <h2 className="mt-4 font-sans text-[clamp(28px,3.4vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
              Pilotez votre activité
              <br />
              <span style={{ color: ORANGE }}>en temps réel.</span>
            </h2>
            <p
              className="mt-5 max-w-[460px] text-[16px] leading-[1.6]"
              style={{ color: TXT_ON_NAVY }}
            >
              Toutes vos données sont centralisées et mises à jour en temps réel
              pour des décisions plus rapides et plus justes.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {pilotageList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-medium text-white"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(45,155,90,0.18)" }}
                  >
                    <Check
                      className="h-3.5 w-3.5"
                      style={{ color: "#4ADE80" }}
                      strokeWidth={3}
                      aria-hidden
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -z-10 translate-y-8 scale-90 rounded-[32px] opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(255,90,31,0.25), transparent 70%)",
              }}
              aria-hidden
            />
            <DashboardMockup />
          </div>
        </div>

        {/* Bénéfices */}
        <h3 className="mt-16 max-w-[680px] font-sans text-[clamp(20px,2.4vw,30px)] font-extrabold leading-[1.2] text-white">
          Conçu pour les restaurateurs qui veulent{" "}
          <span style={{ color: ORANGE }}>reprendre le contrôle.</span>
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefices.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(255,90,31,0.16)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: ORANGE }} aria-hidden />
                </span>
                <p className="mt-4 text-[14.5px] font-bold text-white">{b.title}</p>
                <p
                  className="mt-1.5 text-[12.5px] leading-[1.5]"
                  style={{ color: TXT_ON_NAVY }}
                >
                  {b.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION — Réassurance (bande blanc cassé, 5 items)
   ============================================================ */
function Reassurance() {
  return (
    <section style={{ backgroundColor: OFFWHITE }}>
      <div className="mx-auto max-w-[1280px] px-5 py-[clamp(40px,5vw,64px)] sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {reassurance.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="flex flex-col items-center text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "rgba(255,90,31,0.12)" }}
                >
                  <Icon className="h-6 w-6" style={{ color: ORANGE }} aria-hidden />
                </span>
                <p className="mt-3 text-[14px] font-bold" style={{ color: NAVY }}>
                  {r.title}
                </p>
                <p className="mt-1 text-[12.5px] leading-[1.45]" style={{ color: INK_MUTED }}>
                  {r.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Baseline finale (bandeau navy très foncé)
   — exportée séparément pour être placée en bas de page
   ============================================================ */
export function BaselineFinale() {
  return (
    <section style={{ backgroundColor: "#040A12" }}>
      <div className="mx-auto max-w-[900px] px-5 py-[clamp(48px,6vw,80px)] text-center sm:px-8">
        <p className="font-sans text-[clamp(20px,2.6vw,30px)] font-extrabold leading-[1.3] text-white">
          Logones, le logiciel de caisse NF525 tout-en-un des restaurateurs.
        </p>
        <p className="mt-3 text-[clamp(15px,1.8vw,19px)] font-medium" style={{ color: TXT_ON_NAVY }}>
          <span style={{ color: ORANGE }}>Plus de simplicité.</span> Plus de
          contrôle. Plus de rentabilité.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   Export — Pilotage + Réassurance (remplace ModularPlatformSection)
   ============================================================ */
export function PlatformSection() {
  return (
    <>
      <PilotageTempsReel />
      <Reassurance />
    </>
  );
}
