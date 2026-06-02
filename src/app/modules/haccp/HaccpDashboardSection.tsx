import { Check, AlertTriangle, ChevronRight } from "lucide-react";
import { HACCP as C } from "./palette";

export function HaccpDashboardSection() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(28px, 4vw, 40px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto grid items-start gap-10 lg:grid-cols-[30fr_70fr] lg:gap-10"
        style={{ maxWidth: "1280px" }}
      >
        {/* LEFT — TEXT */}
        <div className="lg:sticky lg:top-24">
          <p
            style={{
              color: C.green,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Tableau de bord de conformité HACCP
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              marginBottom: "20px",
            }}
          >
            Un pilotage en temps réel
            <br />
            pour une{" "}
            <span style={{ color: C.green }}>
              conformité sous contrôle.
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: C.textSubtle,
              marginBottom: "26px",
            }}
          >
            Un suivi en temps réel de vos obligations sanitaires : ce qui est
            fait, ce qui manque, ce qui arrive.
          </p>

          <ul className="flex flex-col" style={{ gap: "12px" }}>
            {[
              "Visualisation hebdo / mensuelle / trimestrielle",
              "Détection des trous de traçabilité",
              "Export horodaté pour les contrôles DDPP",
              "Conforme CE 852/2004 et Code rural",
              "Multi-sites et droits utilisateurs",
            ].map((label) => (
              <li
                key={label}
                className="flex items-center"
                style={{
                  gap: "10px",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Check
                  size={16}
                  strokeWidth={2.5}
                  style={{ color: C.green, flexShrink: 0 }}
                  aria-hidden
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — DASHBOARD MOCKUP */}
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  const tabs = [
    "Vue d'ensemble",
    "Températures",
    "Nettoyages",
    "Réceptions",
    "Friture",
    "Plans de contrôle",
    "Documents",
  ];

  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "20px",
        boxShadow:
          "0 28px 70px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Tabs */}
      <div
        className="flex flex-wrap"
        style={{
          gap: "2px",
          borderBottom: `1px solid ${C.borderSoft}`,
          paddingBottom: "10px",
        }}
      >
        {tabs.map((t, i) => (
          <span
            key={t}
            style={{
              fontSize: "11px",
              fontWeight: i === 0 ? 800 : 600,
              color: i === 0 ? C.green : C.textMuted,
              padding: "6px 11px",
              borderRadius: "8px",
              backgroundColor: i === 0 ? C.greenSofter : "transparent",
              border: i === 0 ? `1px solid ${C.border}` : "1px solid transparent",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Cards row */}
      <div
        className="grid gap-3 sm:grid-cols-3"
        style={{ marginTop: "18px" }}
      >
        <ConformiteGlobaleCard />
        <RepartitionParThemeCard />
        <TendanceCard />
      </div>

      {/* Alertes prioritaires */}
      <AlertesPrioritairesCard />
    </div>
  );
}

function ConformiteGlobaleCard() {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div
      style={{
        backgroundColor: C.cardLighter,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: C.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        État de conformité global
      </p>
      <div className="mt-3 flex items-center gap-4">
        <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden>
          <circle
            cx="38"
            cy="38"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="7"
          />
          <circle
            cx="38"
            cy="38"
            r={r}
            fill="none"
            stroke={C.green}
            strokeWidth="7"
            strokeDasharray={`${c * 0.92} ${c}`}
            transform="rotate(-90 38 38)"
            strokeLinecap="round"
          />
        </svg>
        <div>
          <p
            style={{
              fontSize: "26px",
              fontWeight: 850,
              color: C.text,
              lineHeight: 1,
            }}
          >
            92 %
          </p>
          <p
            style={{
              fontSize: "11px",
              color: C.green,
              fontWeight: 700,
              marginTop: "2px",
            }}
          >
            Très bonne
          </p>
          <p
            style={{
              fontSize: "10px",
              color: C.textMuted,
              marginTop: "1px",
            }}
          >
            Objectif ≥ 90 %
          </p>
        </div>
      </div>
    </div>
  );
}

function RepartitionParThemeCard() {
  const themes = [
    { label: "Températures", pct: 96 },
    { label: "Nettoyages", pct: 94 },
    { label: "Réceptions", pct: 88 },
    { label: "Friture", pct: 90 },
    { label: "Documentation", pct: 95 },
  ];
  return (
    <div
      style={{
        backgroundColor: C.cardLighter,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: C.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "10px",
        }}
      >
        Répartition par thème
      </p>
      <ul className="space-y-1.5">
        {themes.map((t) => (
          <li key={t.label}>
            <div
              className="flex items-center justify-between"
              style={{ fontSize: "10.5px", marginBottom: "3px" }}
            >
              <span style={{ color: C.text, fontWeight: 600 }}>{t.label}</span>
              <span
                style={{
                  color: C.green,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {t.pct} %
              </span>
            </div>
            <div
              className="overflow-hidden rounded-full"
              style={{
                height: "5px",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${t.pct}%`,
                  background: `linear-gradient(90deg, ${C.greenDeep}, ${C.green})`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TendanceCard() {
  return (
    <div
      style={{
        backgroundColor: C.cardLighter,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <p
        style={{
          fontSize: "10px",
          fontWeight: 700,
          color: C.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        Tendance 30 derniers jours
      </p>
      <p
        style={{
          fontSize: "11px",
          color: C.green,
          fontWeight: 700,
          marginTop: "4px",
        }}
      >
        + 4 pts vs mois précédent
      </p>
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="mt-4 h-20 w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="tendance-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.green} stopOpacity="0.42" />
            <stop offset="100%" stopColor={C.green} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,42 L12,40 L25,34 L38,36 L52,28 L65,30 L78,22 L92,18 L100,15 L100,50 L0,50 Z"
          fill="url(#tendance-fill)"
        />
        <polyline
          points="0,42 12,40 25,34 38,36 52,28 65,30 78,22 92,18 100,15"
          fill="none"
          stroke={C.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function AlertesPrioritairesCard() {
  const alerts = [
    {
      label: "Température chambre froide",
      detail: "Relevé 18 h manquant",
      level: "Critique",
      color: C.red,
    },
    {
      label: "Nettoyage friteuse",
      detail: "Échéance dépassée — 1 j",
      level: "Important",
      color: C.orange,
    },
    {
      label: "Traçabilité réception",
      detail: "DLC manquante sur 2 lots",
      level: "Important",
      color: C.orange,
    },
  ];
  return (
    <div
      style={{
        backgroundColor: C.cardLighter,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
        padding: "16px",
        marginTop: "14px",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle size={14} style={{ color: C.green }} strokeWidth={2} />
          <p
            style={{
              fontSize: "11px",
              fontWeight: 800,
              color: C.text,
            }}
          >
            Alertes prioritaires
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-0.5"
          style={{
            fontSize: "10.5px",
            color: C.green,
            fontWeight: 700,
          }}
          tabIndex={-1}
        >
          Voir toutes les alertes
          <ChevronRight size={12} strokeWidth={2.5} />
        </a>
      </div>
      <ul className="mt-3 grid gap-2 sm:grid-cols-3">
        {alerts.map((a) => (
          <li
            key={a.label}
            className="flex items-start gap-2 rounded-lg"
            style={{
              backgroundColor: "rgba(2,11,8,0.55)",
              border: `1px solid ${C.borderSoft}`,
              padding: "9px 11px",
              fontSize: "10.5px",
            }}
          >
            <span
              className="mt-0.5 inline-block shrink-0"
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "999px",
                backgroundColor: a.color,
              }}
            />
            <div className="flex-1 min-w-0">
              <p style={{ color: C.text, fontWeight: 700 }}>{a.label}</p>
              <p style={{ color: C.textMuted, fontSize: "9.5px" }}>
                {a.detail}
              </p>
              <span
                className="mt-1 inline-block rounded"
                style={{
                  fontSize: "8.5px",
                  fontWeight: 800,
                  color: a.color,
                  padding: "1px 5px",
                  border: `1px solid ${a.color}55`,
                  backgroundColor: `${a.color}18`,
                }}
              >
                {a.level}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
