/* Copie de tarifs/TarifsMatrix.tsx.
   Changements : les colonnes suivent la grille arrêtée et passent toutes en
   HT ; la ligne Pilotage est ajoutée — le sixième module n'apparaissait dans
   aucune offre ; et les quatre lignes du socle sont marquées « incluses
   partout », puisqu'elles ne seront jamais une option.
   Le fichier d'origine n'est pas touché. */

import { container, gutter, rhythm } from "../../lib/spacing";
import { Check, Minus } from "lucide-react";
import { TARIFS as C } from "../../tarifs/palette";

type Cell = true | false | "all";

const columns = [
  { id: "essentiel", label: "Essentiel", price: "89 € HT" },
  { id: "gestion", label: "Gestion", price: "249 € HT" },
  { id: "complet", label: "Complet", price: "379 € HT" },
  { id: "logones", label: "Socle", price: "Inclus partout", highlight: true },
] as const;

type ColId = (typeof columns)[number]["id"];

const rows: Array<{ label: string; values: Record<ColId, Cell> }> = [
  {
    label: "Caisse",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "Stocks et food cost",
    values: { essentiel: false, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "HACCP",
    values: { essentiel: false, gestion: true, complet: true, logones: "all" },
  },
  {
    // AJOUT — sixième module. Il n'existait dans aucune offre.
    label: "Pilotage et compte de résultat",
    values: { essentiel: false, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "RH et planning",
    values: { essentiel: false, gestion: false, complet: true, logones: "all" },
  },
  {
    label: "Réservation sans commission",
    values: { essentiel: false, gestion: false, complet: true, logones: "all" },
  },
  {
    label: "Site vitrine référencé",
    values: { essentiel: false, gestion: false, complet: true, logones: "all" },
  },
  {
    // Le socle : ces lignes sont vraies partout, quelle que soit l'offre.
    label: "Fonctionne sans Internet",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "Multi-appareils et droits par employé",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "Hébergement en France",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "Mises à jour et support",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
  {
    label: "Prix stable, quel que soit l'effectif",
    values: { essentiel: true, gestion: true, complet: true, logones: "all" },
  },
];

export function TarifsMatrixV2() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: rhythm.section,
        paddingInline: gutter,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container }}>
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <p
            style={{
              color: C.orangeOnPaper,
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
              fontSize: "clamp(28px, 3.8vw, 42px)",
              lineHeight: 1.15,
              fontWeight: 900,
              color: C.text,
            }}
          >
            Comparez toutes les{" "}
            <span style={{ color: C.orangeOnPaper }}>fonctionnalités.</span>
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
                      letterSpacing: "0.06em",
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
                          fontWeight: 900,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
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
                              ? "rgba(226,104,24,0.06)"
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
            fontSize: "13px",
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
          fontWeight: 900,
          color: highlight ? C.orange : C.text,
          letterSpacing: "0.06em",
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
