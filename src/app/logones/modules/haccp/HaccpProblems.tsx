import { BookOpenCheck, AlertTriangle, BarChart3, Check, X } from "lucide-react";
import { HACCP as C } from "./palette";

export function HaccpProblems() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(16px, 2vw, 28px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,26,19,0.92), rgba(3,12,9,0.98))",
            border: `1px solid ${C.border}`,
            borderRadius: "24px",
            padding: "clamp(40px, 5vw, 54px) clamp(24px, 3vw, 40px)",
            boxShadow:
              "0 24px 65px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Soft glow */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-140px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "520px",
              height: "320px",
              background:
                "radial-gradient(ellipse, rgba(34,197,94,0.14), transparent 70%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />

          <div className="relative text-center">
            <p
              style={{
                color: C.green,
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Ce que votre HACCP actuel ne fait pas
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 4.5vw, 42px)",
                lineHeight: 1.08,
                fontWeight: 850,
                color: C.text,
                marginBottom: "10px",
              }}
            >
              Enregistrer, ce n&apos;est pas{" "}
              <span style={{ color: C.green }}>anticiper.</span>
            </h2>
          </div>

          <div
            className="grid gap-7 lg:grid-cols-3"
            style={{ marginTop: "38px" }}
          >
            <ProblemCard
              icon={BookOpenCheck}
              title="Aucune veille réglementaire"
              body="Les obligations évoluent, vous n'êtes prévenu que par votre vétérinaire officiel — souvent en contrôle."
              widget={<JournalOfficielWidget />}
            />
            <ProblemCard
              icon={AlertTriangle}
              title="Alertes après-coup"
              body="Votre logiciel vous dit que vous avez oublié un relevé hier. Trop tard pour la traçabilité du jour."
              widget={<TableauReleveWidget />}
            />
            <ProblemCard
              icon={BarChart3}
              title="Pas de complétude visible"
              body="Vous avez 200 enregistrements ce mois-ci. Combien manquent ? Aucune idée — sauf à fouiller."
              widget={<CompletudeWidget />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  body,
  widget,
}: {
  icon: typeof BookOpenCheck;
  title: string;
  body: string;
  widget: React.ReactNode;
}) {
  return (
    <article
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${C.card}, rgba(3,12,9,0.98))`,
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "26px",
        boxShadow:
          "0 18px 45px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-70px",
          left: "-70px",
          width: "160px",
          height: "160px",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.14), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: C.greenSofter,
            border: `1px solid ${C.border}`,
            color: C.green,
            marginBottom: "18px",
          }}
          aria-hidden
        >
          <Icon size={20} strokeWidth={1.8} />
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 850,
            color: C.text,
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: C.textSubtle,
            marginBottom: "22px",
          }}
        >
          {body}
        </p>

        {widget}
      </div>
    </article>
  );
}

/* ----- Widgets ----- */

function JournalOfficielWidget() {
  const updates = [
    { ref: "Arrêté du 14/05", note: "Plans HACCP cuisines centrales" },
    { ref: "Décret 2025-218", note: "Traçabilité allergènes" },
    { ref: "Note DGAL", note: "Contrôles inopinés DDPP" },
  ];
  return (
    <div
      style={{
        background: "rgba(2,11,8,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
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
          marginBottom: "10px",
        }}
      >
        Journal Officiel — Extrait
      </p>
      <ul className="space-y-2">
        {updates.map((u, i) => (
          <li
            key={u.ref}
            className="flex items-start gap-2"
            style={{ fontSize: "11px" }}
          >
            {i === 0 && (
              <span
                className="rounded-full"
                style={{
                  backgroundColor: C.green,
                  color: "#000",
                  fontSize: "8.5px",
                  fontWeight: 900,
                  padding: "1px 5px",
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                NOUV.
              </span>
            )}
            {i !== 0 && (
              <span
                className="mt-1 inline-block shrink-0"
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "999px",
                  backgroundColor: C.textMuted,
                }}
              />
            )}
            <div>
              <p style={{ color: C.text, fontWeight: 700 }}>{u.ref}</p>
              <p style={{ color: C.textMuted, fontSize: "10.5px" }}>{u.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableauReleveWidget() {
  const rows = [
    { date: "27/05", temp: "OK", clean: "OK", recep: "OK", fri: "OK" },
    { date: "26/05", temp: "OK", clean: "OK", recep: "OK", fri: "OK" },
    { date: "25/05", temp: "OK", clean: "ALERT", recep: "OK", fri: "OK" },
    { date: "24/05", temp: "OK", clean: "OK", recep: "OK", fri: "OK" },
  ];
  return (
    <div
      style={{
        background: "rgba(2,11,8,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
        padding: "12px",
        overflowX: "auto",
      }}
    >
      <div
        className="grid items-center"
        style={{
          gridTemplateColumns: "50px repeat(4, 1fr)",
          fontSize: "9px",
          fontWeight: 700,
          color: C.textMuted,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          paddingBottom: "6px",
          borderBottom: `1px solid ${C.borderSoft}`,
        }}
      >
        <span>Date</span>
        <span className="text-center">Temp</span>
        <span className="text-center">Nettoy.</span>
        <span className="text-center">Récep.</span>
        <span className="text-center">Fritur.</span>
      </div>
      <div className="mt-1.5 space-y-1">
        {rows.map((r) => (
          <div
            key={r.date}
            className="grid items-center"
            style={{
              gridTemplateColumns: "50px repeat(4, 1fr)",
              fontSize: "10px",
              padding: "4px 0",
              borderBottom: `1px solid rgba(255,255,255,0.04)`,
            }}
          >
            <span style={{ color: C.text, fontWeight: 700 }}>{r.date}</span>
            {([r.temp, r.clean, r.recep, r.fri] as const).map((v, i) => (
              <span key={i} className="flex justify-center">
                {v === "OK" ? (
                  <Check
                    size={11}
                    style={{ color: C.green }}
                    strokeWidth={3}
                  />
                ) : (
                  <X size={11} style={{ color: C.red }} strokeWidth={3} />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompletudeWidget() {
  const weeks = [
    { label: "S 18", pct: 88 },
    { label: "S 19", pct: 92 },
    { label: "S 20", pct: 90 },
    { label: "S 21", pct: 92 },
  ];
  return (
    <div
      style={{
        background: "rgba(2,11,8,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "12px",
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
          Complétude par semaine
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 850,
            color: C.text,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          92 %
        </p>
      </div>
      <svg
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        className="mt-2 h-10 w-full"
        aria-hidden
      >
        <polyline
          points="0,16 33,8 66,12 100,8"
          fill="none"
          stroke={C.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[0, 33, 66, 100].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={[16, 8, 12, 8][i]}
            r="1.6"
            fill={C.green}
          />
        ))}
      </svg>
      <div
        className="mt-1 flex justify-between"
        style={{ fontSize: "9.5px", color: C.textMuted }}
      >
        {weeks.map((w) => (
          <span key={w.label}>{w.label}</span>
        ))}
      </div>
    </div>
  );
}
