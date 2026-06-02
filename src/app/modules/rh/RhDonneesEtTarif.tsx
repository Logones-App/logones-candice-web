import Link from "next/link";
import {
  CalendarClock,
  Fingerprint,
  CheckSquare,
  FileSpreadsheet,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { RH as C } from "./palette";

const dataPoints = [
  "Heures travaillées et heures supplémentaires",
  "Absences, congés, arrêts maladie",
  "Primes, paniers repas, indemnités",
  "Contrats, catégories, coefficients HCR",
  "Historique complet horodaté",
];

const tarifRows = [
  { team: "5 salariés", concurrent: "89 €", logones: "300 €" },
  { team: "15 salariés", concurrent: "249 €", logones: "300 €" },
  { team: "35 salariés", concurrent: "549 €", logones: "300 €" },
  { team: "+50 salariés", concurrent: "Sur devis", logones: "300 €" },
];

export function RhDonneesEtTarif() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(28px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto grid gap-6 lg:grid-cols-2 lg:gap-7"
        style={{ maxWidth: "1280px" }}
      >
        <DonneesBlock />
        <TarifBlock />
      </div>
    </section>
  );
}

/* ============================================================
   Left — Données expert-comptable
   ============================================================ */
function DonneesBlock() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(7,21,35,0.96), rgba(2,6,11,0.98))",
        border: `1px solid ${C.border}`,
        borderRadius: "22px",
        padding: "clamp(28px, 3.2vw, 40px)",
        boxShadow:
          "0 24px 65px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-100px",
          right: "-100px",
          width: "260px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(163,107,255,0.18), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <p
          style={{
            color: C.violet,
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Des données claires, prêtes à partager
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 34px)",
            lineHeight: 1.15,
            fontWeight: 850,
            color: C.text,
            marginBottom: "24px",
          }}
        >
          Vos données RH prêtes
          <br />
          pour <span style={{ color: C.violet }}>l&apos;expert-comptable.</span>
        </h2>

        {/* Visual flow */}
        <div
          className="flex flex-wrap items-center gap-2"
          style={{ marginBottom: "26px" }}
        >
          {[
            { icon: CalendarClock, label: "Planning" },
            { icon: Fingerprint, label: "Pointage" },
            { icon: CheckSquare, label: "Validation" },
            { icon: FileSpreadsheet, label: "Export" },
          ].map((step, i, arr) => (
            <div
              key={step.label}
              className="flex items-center gap-2"
            >
              <div
                className="flex items-center gap-2 rounded-full"
                style={{
                  background: C.violetSofter,
                  border: `1px solid ${C.border}`,
                  padding: "6px 12px",
                }}
              >
                <step.icon
                  size={14}
                  strokeWidth={2}
                  style={{ color: C.violet }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: C.text,
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <ChevronRight
                  size={14}
                  strokeWidth={2.5}
                  style={{ color: C.violet }}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>

        <ul className="flex flex-col" style={{ gap: "10px" }}>
          {dataPoints.map((p) => (
            <li
              key={p}
              className="flex items-center"
              style={{
                gap: "10px",
                fontSize: "14px",
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
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================================
   Right — Tarification "pas de supplément par salarié"
   ============================================================ */
function TarifBlock() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(7,21,35,0.96), rgba(2,6,11,0.98))",
        border: `1px solid ${C.border}`,
        borderRadius: "22px",
        padding: "clamp(28px, 3.2vw, 40px)",
        boxShadow:
          "0 24px 65px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-100px",
          left: "-100px",
          width: "260px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(255,112,0,0.18), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <p
          style={{
            color: C.orange,
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Une tarification juste et transparente
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 34px)",
            lineHeight: 1.15,
            fontWeight: 850,
            color: C.text,
            marginBottom: "10px",
          }}
        >
          Pas de supplément par salarié.
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: C.textSubtle,
            marginBottom: "24px",
          }}
        >
          Vous payez votre établissement, pas chaque employé.
        </p>

        {/* Comparison table */}
        <div
          className="overflow-hidden rounded-xl"
          style={{
            background: "rgba(2,6,11,0.55)",
            border: `1px solid ${C.borderSoft}`,
          }}
        >
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "1.4fr 1fr 1fr",
              fontSize: "10px",
              fontWeight: 800,
              color: C.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "12px 14px",
              borderBottom: `1px solid ${C.borderSoft}`,
            }}
          >
            <span>Taille de l&apos;équipe</span>
            <span className="text-center">Concurrent</span>
            <span className="text-right">Logones</span>
          </div>
          {tarifRows.map((r, i) => (
            <div
              key={r.team}
              className="grid items-center"
              style={{
                gridTemplateColumns: "1.4fr 1fr 1fr",
                padding: "11px 14px",
                fontSize: "12.5px",
                borderBottom:
                  i === tarifRows.length - 1
                    ? "none"
                    : `1px solid ${C.borderSoft}`,
              }}
            >
              <span style={{ color: C.text, fontWeight: 700 }}>{r.team}</span>
              <span
                className="text-center"
                style={{
                  color: C.textSubtle,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.concurrent}
              </span>
              <span
                className="text-right"
                style={{
                  color: C.orange,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.logones}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight card */}
        <div
          className="mt-5 flex items-center justify-between gap-4 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(255,112,0,0.22), rgba(204,88,0,0.12))`,
            border: `1px solid rgba(255,112,0,0.40)`,
            padding: "16px 20px",
            boxShadow: "0 14px 32px rgba(255,112,0,0.18)",
          }}
        >
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.4,
              color: C.text,
              fontWeight: 700,
            }}
          >
            Un prix unique. Zéro surprise.
            <br />
            Zéro facturation par utilisateur.
          </p>
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-1.5 rounded-full text-white shrink-0"
            style={{
              fontSize: "13px",
              fontWeight: 800,
              background: `linear-gradient(135deg, ${C.orangeLight}, ${C.orange}, ${C.orangeDeep})`,
              padding: "10px 18px",
              boxShadow: "0 10px 24px rgba(255,112,0,0.30)",
            }}
          >
            Voir nos tarifs
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
