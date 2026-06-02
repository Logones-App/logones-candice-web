import { Check, Minus } from "lucide-react";
import { TARIFS as C } from "./palette";

type Cell = true | false | "all";

const columns = [
  { id: "starter", label: "Starter", price: "90 € TTC" },
  { id: "pro", label: "Pro", price: "169 € HT" },
  { id: "premium", label: "Premium", price: "300 € TTC" },
  { id: "logones", label: "Logones", price: "Plateforme native", highlight: true },
] as const;

type ColId = (typeof columns)[number]["id"];

const rows: Array<{ label: string; values: Record<ColId, Cell> }> = [
  {
    label: "Caisse NF525",
    values: { starter: true, pro: true, premium: true, logones: true },
  },
  {
    label: "RH / Planning",
    values: { starter: false, pro: true, premium: true, logones: true },
  },
  {
    label: "HACCP",
    values: { starter: false, pro: true, premium: true, logones: true },
  },
  {
    label: "Réservation sans commission",
    values: { starter: false, pro: false, premium: true, logones: true },
  },
  {
    label: "Stocks en temps réel",
    values: { starter: false, pro: false, premium: true, logones: true },
  },
  {
    label: "Exports comptables inclus",
    values: { starter: false, pro: false, premium: true, logones: true },
  },
  {
    label: "Multi-utilisateurs & droits avancés",
    values: { starter: false, pro: false, premium: true, logones: true },
  },
  {
    label: "Mises à jour & évolutions",
    values: { starter: true, pro: true, premium: true, logones: true },
  },
  {
    label: "Support prioritaire",
    values: { starter: false, pro: false, premium: true, logones: true },
  },
  {
    label: "Prix stable par établissement",
    values: { starter: true, pro: true, premium: true, logones: "all" },
  },
];

export function TarifsMatrix() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <p
            style={{
              color: C.orange,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Matrice de comparaison
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
            }}
          >
            Comparez toutes les{" "}
            <span style={{ color: C.orange }}>fonctionnalités.</span>
          </h2>
        </div>

        <div
          className="overflow-hidden"
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "20px",
            boxShadow: "0 14px 40px rgba(7,17,31,0.06)",
          }}
        >
          <div className="overflow-x-auto">
            <table
              className="w-full"
              style={{
                borderCollapse: "collapse",
                minWidth: "780px",
              }}
            >
              <thead>
                <tr style={{ background: C.bgDark }}>
                  <th
                    className="text-left"
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: C.textOnDark,
                      padding: "18px 24px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Fonctionnalités
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c.id}
                      className="text-center"
                      style={{
                        padding: "18px 16px",
                        background:
                          "highlight" in c && c.highlight
                            ? C.orange
                            : "transparent",
                        color: C.textOnDark,
                        borderLeft: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 850,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 600,
                          opacity:
                            "highlight" in c && c.highlight ? 0.95 : 0.65,
                          marginTop: "3px",
                        }}
                      >
                        {c.price}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    style={{
                      background: i % 2 === 0 ? "transparent" : "#FBF7F0",
                    }}
                  >
                    <td
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: C.text,
                        padding: "14px 24px",
                        borderTop: `1px solid ${C.borderSoft}`,
                      }}
                    >
                      {r.label}
                    </td>
                    {columns.map((c) => {
                      const value = r.values[c.id];
                      const isHighlight = "highlight" in c && c.highlight;
                      return (
                        <td
                          key={c.id}
                          className="text-center"
                          style={{
                            padding: "14px 16px",
                            borderTop: `1px solid ${C.borderSoft}`,
                            borderLeft: `1px solid ${C.borderSoft}`,
                            background: isHighlight
                              ? "rgba(255,106,26,0.06)"
                              : "transparent",
                          }}
                        >
                          <Cell value={value} highlight={isHighlight} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          className="text-center"
          style={{
            fontSize: "12.5px",
            color: C.textMuted,
            marginTop: "20px",
          }}
        >
          Tous les modules sont natifs : aucune intégration tierce, aucune
          double saisie.
        </p>
      </div>
    </section>
  );
}

function Cell({ value, highlight }: { value: Cell; highlight: boolean }) {
  if (value === false) {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full"
        style={{
          width: "26px",
          height: "26px",
          background: "transparent",
          border: `1px solid ${C.border}`,
          color: C.textMuted,
        }}
        aria-label="Non inclus"
      >
        <Minus size={12} strokeWidth={2.5} />
      </span>
    );
  }
  if (value === "all") {
    return (
      <span
        style={{
          fontSize: "12px",
          fontWeight: 850,
          color: highlight ? C.orange : C.text,
          letterSpacing: "0.04em",
        }}
        aria-label="Tous les modules"
      >
        Tout inclus
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-full"
      style={{
        width: "26px",
        height: "26px",
        background: highlight ? C.orange : C.orangeSoft,
        border: highlight
          ? `1px solid ${C.orangeDeep}`
          : `1px solid ${C.orangeBorder}`,
        color: highlight ? "#FFFFFF" : C.orange,
      }}
      aria-label="Inclus"
    >
      <Check size={13} strokeWidth={3} />
    </span>
  );
}
