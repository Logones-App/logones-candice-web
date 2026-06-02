import { Check, AlertTriangle } from "lucide-react";
import { RH as C } from "./palette";

export function RhPilotageMasse() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(28px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto grid items-start gap-8 lg:grid-cols-[25fr_75fr] lg:gap-10"
        style={{
          maxWidth: "1280px",
          background: "rgba(7,21,35,0.78)",
          border: `1px solid ${C.border}`,
          borderRadius: "24px",
          padding: "clamp(28px, 3.5vw, 42px)",
          boxShadow:
            "0 24px 65px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* LEFT — text */}
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              marginBottom: "18px",
            }}
          >
            Pilotez vos équipes.
            <br />
            <span style={{ color: C.violet }}>Maîtrisez vos coûts.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: C.textSubtle,
              marginBottom: "24px",
            }}
          >
            Des indicateurs clairs et en temps réel pour prendre les bonnes
            décisions.
          </p>

          <ul className="flex flex-col" style={{ gap: "10px" }}>
            {[
              "Masse salariale / CA en temps réel",
              "Coût par service et par poste",
              "Prévisions et alertes automatiques",
              "Heures supplémentaires et repos",
              "Ajustez vos effectifs selon l'activité",
            ].map((l) => (
              <li
                key={l}
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
                  style={{ color: C.violet, flexShrink: 0 }}
                  aria-hidden
                />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Dashboard widgets */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Masse sal. / CA"
            value="28,4 %"
            trend="-1,2 pts"
            trendUp
          />
          <KpiCard
            label="Coût horaire moyen"
            value="18,72 €"
            trend="+0,15 €"
          />
          <KpiCard
            label="Heures supplémentaires"
            value="32 h"
            trend="-4 h vs sem. passée"
            trendUp
          />
          <KpiCard
            label="Prévision fin de mois"
            value="29,1 %"
            trend="Objectif ≤ 30 %"
            trendUp
          />

          {/* Donut — coût par service */}
          <DonutServices />

          {/* Bar chart — évolution */}
          <BarChartMasse />

          {/* Alertes en cours — wide */}
          <AlertesEnCours />
        </div>
      </div>
    </section>
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
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: "14px",
        padding: "14px",
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
        {label}
      </p>
      <p
        style={{
          fontSize: "22px",
          fontWeight: 850,
          color: C.text,
          lineHeight: 1,
          marginTop: "6px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontSize: "10.5px",
          color: trendUp ? C.green : C.textSubtle,
          fontWeight: 700,
          marginTop: "4px",
        }}
      >
        {trend}
      </p>
    </div>
  );
}

function DonutServices() {
  const services = [
    { label: "Cuisine", pct: 42, color: C.violet },
    { label: "Salle", pct: 32, color: "#C695FF" },
    { label: "Bar", pct: 16, color: C.orange },
    { label: "Admin.", pct: 10, color: "rgba(255,255,255,0.30)" },
  ];
  const r = 28;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div
      className="sm:col-span-2 lg:col-span-1"
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: "14px",
        padding: "14px",
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
        Coût par service
      </p>
      <div className="mt-2 flex items-center gap-4">
        <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden>
          <circle
            cx="42"
            cy="42"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="9"
          />
          {services.map((s) => {
            const len = (s.pct / 100) * c;
            const seg = (
              <circle
                key={s.label}
                cx="42"
                cy="42"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="9"
                strokeDasharray={`${len} ${c - len}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 42 42)"
              />
            );
            offset += len;
            return seg;
          })}
        </svg>
        <ul className="flex-1 space-y-1">
          {services.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between"
              style={{ fontSize: "10.5px" }}
            >
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "999px",
                    backgroundColor: s.color,
                  }}
                />
                <span style={{ color: C.text }}>{s.label}</span>
              </span>
              <span
                style={{
                  color: C.text,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.pct} %
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BarChartMasse() {
  const bars = [
    { m: "M-5", pct: 24 },
    { m: "M-4", pct: 26 },
    { m: "M-3", pct: 30 },
    { m: "M-2", pct: 29 },
    { m: "M-1", pct: 27 },
    { m: "Mois", pct: 28.4 },
  ];
  const max = 32;
  return (
    <div
      className="sm:col-span-2"
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: "14px",
        padding: "14px",
      }}
    >
      <div className="flex items-baseline justify-between">
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Évolution masse salariale / CA
        </p>
        <p
          style={{
            fontSize: "10px",
            color: C.violet,
            fontWeight: 700,
          }}
        >
          6 derniers mois
        </p>
      </div>
      <div className="mt-3 flex h-20 items-end gap-2">
        {bars.map((b, i) => (
          <div key={b.m} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-md"
              style={{
                height: `${(b.pct / max) * 100}%`,
                background:
                  i === bars.length - 1
                    ? `linear-gradient(180deg, ${C.violet}, ${C.violetDeep})`
                    : "linear-gradient(180deg, rgba(163,107,255,0.55), rgba(163,107,255,0.25))",
                boxShadow:
                  i === bars.length - 1
                    ? `0 0 12px rgba(163,107,255,0.40)`
                    : "none",
              }}
            />
            <span
              style={{
                fontSize: "9px",
                color: C.textMuted,
                fontWeight: 700,
              }}
            >
              {b.m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertesEnCours() {
  const alerts = [
    {
      label: "Repos minimum non respecté",
      detail: "Marie B. — 9 h entre services",
      level: "Critique",
      color: C.red,
    },
    {
      label: "Heures supplémentaires élevées",
      detail: "Tom L. — 8 h cumulées",
      level: "Important",
      color: C.amber,
    },
    {
      label: "Contrat étudiant 20 h dépassé",
      detail: "Yasmine D. — 22 h cette semaine",
      level: "Important",
      color: C.amber,
    },
  ];
  return (
    <div
      className="sm:col-span-2 lg:col-span-3"
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: "14px",
        padding: "14px",
      }}
    >
      <div className="flex items-center gap-2">
        <AlertTriangle size={13} style={{ color: C.violet }} strokeWidth={2} />
        <p
          style={{
            fontSize: "10.5px",
            fontWeight: 800,
            color: C.text,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Alertes en cours
        </p>
      </div>
      <ul className="mt-2 grid gap-2 sm:grid-cols-3">
        {alerts.map((a) => (
          <li
            key={a.label}
            className="flex items-start gap-2 rounded-lg"
            style={{
              backgroundColor: "rgba(2,6,11,0.55)",
              border: `1px solid ${C.borderSoft}`,
              padding: "10px 12px",
              fontSize: "11px",
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
              <p style={{ color: C.text, fontWeight: 700, lineHeight: 1.2 }}>
                {a.label}
              </p>
              <p style={{ color: C.textMuted, fontSize: "10px", marginTop: "1px" }}>
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
