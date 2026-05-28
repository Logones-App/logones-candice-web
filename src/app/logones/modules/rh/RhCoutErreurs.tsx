import Link from "next/link";
import { Scale, ArrowRight } from "lucide-react";
import { RH as C } from "./palette";

const risks = [
  {
    nonConformity: "DPAE non transmise",
    risk: "Travail dissimulé",
    frequency: "Élevée",
    cost: "1 625 € / salarié",
  },
  {
    nonConformity: "Repos minimum non respecté",
    risk: "Inspection du travail",
    frequency: "Moyenne",
    cost: "Variable",
  },
  {
    nonConformity: "Heures supplémentaires mal comptées",
    risk: "Rappel de salaire + dommages",
    frequency: "Élevée",
    cost: "1 500 € / employé",
  },
  {
    nonConformity: "Contrat incomplet ou incorrect",
    risk: "Contentieux prud'homal",
    frequency: "Moyenne",
    cost: "Important",
  },
  {
    nonConformity: "Bulletin de paie non conforme",
    risk: "Sanction pénale",
    frequency: "Faible",
    cost: "Jusqu'à 4 500 €",
  },
];

export function RhCoutErreurs() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(16px, 2vw, 28px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1480px", marginTop: "-20px" }}
      >
        <div
          className="grid gap-7 lg:grid-cols-[26fr_54fr_20fr] lg:gap-7"
          style={{
            background: "rgba(7,21,35,0.78)",
            border: `1px solid rgba(163,107,255,0.16)`,
            borderRadius: "24px",
            padding: "clamp(28px, 3vw, 36px)",
            boxShadow:
              "0 24px 65px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* LEFT — Title block */}
          <div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 36px)",
                lineHeight: 1.1,
                fontWeight: 850,
                color: C.text,
                marginBottom: "16px",
              }}
            >
              Chaque erreur RH peut
              <br />
              vous{" "}
              <span style={{ color: C.orange }}>coûter très cher.</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: C.textSubtle,
                marginBottom: "24px",
              }}
            >
              Anticipez les risques, respectez la loi et évitez les
              redressements.
            </p>
            <Link
              href="#features"
              className="inline-flex items-center gap-1.5"
              style={{
                fontSize: "13.5px",
                fontWeight: 800,
                color: C.violet,
              }}
            >
              Voir tous les risques
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* CENTER — Table */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "rgba(2,6,11,0.55)",
              border: `1px solid ${C.borderSoft}`,
            }}
          >
            {/* Header */}
            <div
              className="grid items-center"
              style={{
                gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.5fr) minmax(0,0.7fr) minmax(0,1fr)",
                fontSize: "10px",
                fontWeight: 800,
                color: C.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "12px 14px",
                borderBottom: `1px solid ${C.borderSoft}`,
              }}
            >
              <span>Non-conformité</span>
              <span>Risque</span>
              <span className="hidden sm:block">Fréquence</span>
              <span className="text-right">Coût estimé</span>
            </div>
            {/* Rows */}
            <ul>
              {risks.map((r, i) => (
                <li
                  key={r.nonConformity}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns:
                      "minmax(0,1.5fr) minmax(0,1.5fr) minmax(0,0.7fr) minmax(0,1fr)",
                    fontSize: "12.5px",
                    padding: "12px 14px",
                    borderBottom:
                      i === risks.length - 1
                        ? "none"
                        : `1px solid ${C.borderSoft}`,
                  }}
                >
                  <span style={{ color: C.text, fontWeight: 700 }}>
                    {r.nonConformity}
                  </span>
                  <span style={{ color: C.textSubtle }}>{r.risk}</span>
                  <span
                    className="hidden sm:inline"
                    style={{
                      color:
                        r.frequency === "Élevée"
                          ? C.red
                          : r.frequency === "Moyenne"
                            ? C.amber
                            : C.green,
                      fontWeight: 700,
                    }}
                  >
                    {r.frequency}
                  </span>
                  <span
                    className="text-right"
                    style={{
                      color: C.orange,
                      fontWeight: 800,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {r.cost}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Violet trust card */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: `linear-gradient(180deg, rgba(124,74,224,0.30) 0%, rgba(163,107,255,0.18) 50%, rgba(7,21,35,0.85) 100%)`,
              border: `1px solid rgba(163,107,255,0.40)`,
              padding: "22px",
              boxShadow: "0 12px 32px rgba(124,74,224,0.25)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: "52px",
                height: "52px",
                backgroundColor: "rgba(255,255,255,0.10)",
                border: `1px solid rgba(255,255,255,0.20)`,
                color: C.text,
                marginBottom: "16px",
              }}
              aria-hidden
            >
              <Scale size={26} strokeWidth={1.7} />
            </div>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.55,
                color: C.text,
                fontWeight: 600,
              }}
            >
              Logones <strong style={{ color: C.violet }}>sécurise votre
              établissement</strong> et réduit considérablement vos risques
              juridiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
