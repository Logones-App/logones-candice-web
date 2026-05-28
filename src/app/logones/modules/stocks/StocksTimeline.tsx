import { Clock, X, Check } from "lucide-react";
import { STOCKS as C } from "./palette";

const classicSteps = [
  { label: "Réception manuelle des BL", time: "45 min" },
  { label: "Saisie Excel des quantités", time: "1 h" },
  { label: "Mise à jour des fiches recettes", time: "45 min" },
  { label: "Calcul du food cost à la main", time: "30 min" },
];

const logonesSteps = [
  { label: "Scan du BL fournisseur", time: "2 min" },
  { label: "Stock mis à jour automatiquement", time: "instantané" },
  { label: "Food cost recalculé en continu", time: "instantané" },
  { label: "Validation et export comptable", time: "10 min" },
];

export function StocksTimeline() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        <div className="text-center" style={{ marginBottom: "44px" }}>
          <p
            style={{
              color: C.yellow,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Gagnez 3 heures par semaine
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4.2vw, 42px)",
              lineHeight: 1.08,
              fontWeight: 850,
              color: C.text,
              maxWidth: "780px",
              margin: "0 auto 14px",
            }}
          >
            La gestion des stocks{" "}
            <span style={{ color: C.yellow }}>sans la paperasse.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: C.textSubtle,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Comparez le temps passé sur vos stocks selon la méthode utilisée.
            Les chiffres sont indicatifs pour un restaurant de service midi+soir.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* CLASSIC */}
          <article
            className="relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${C.card}, rgba(3,7,12,0.98))`,
              border: `1px solid ${C.borderSoft}`,
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: "22px" }}
            >
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    color: C.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginBottom: "8px",
                  }}
                >
                  Méthode classique
                </p>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 850,
                    color: C.text,
                  }}
                >
                  Excel + papier
                </h3>
              </div>
              <div
                className="inline-flex items-center gap-1.5 rounded-full"
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: C.red,
                  background: "rgba(239,68,68,0.10)",
                  border: "1px solid rgba(239,68,68,0.35)",
                  padding: "6px 12px",
                }}
              >
                <Clock size={13} strokeWidth={2.5} />
                3 h / semaine
              </div>
            </div>

            <ul className="space-y-3">
              {classicSteps.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${C.borderSoft}`,
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "26px",
                        height: "26px",
                        background: "rgba(239,68,68,0.10)",
                        border: "1px solid rgba(239,68,68,0.35)",
                        color: C.red,
                        flexShrink: 0,
                      }}
                      aria-hidden
                    >
                      <X size={13} strokeWidth={3} />
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.84)",
                        fontWeight: 600,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: C.textMuted,
                      fontWeight: 700,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* LOGONES */}
          <article
            className="relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, rgba(20,12,0,0.6), rgba(3,7,12,0.98))`,
              border: `1px solid ${C.border}`,
              borderRadius: "18px",
              padding: "28px",
              boxShadow:
                "0 24px 60px rgba(255,196,0,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="pointer-events-none absolute"
              style={{
                top: "-80px",
                right: "-60px",
                width: "260px",
                height: "260px",
                background:
                  "radial-gradient(circle, rgba(255,196,0,0.14), transparent 65%)",
                filter: "blur(8px)",
              }}
              aria-hidden
            />
            <div
              className="relative flex items-center justify-between"
              style={{ marginBottom: "22px" }}
            >
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    color: C.yellow,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginBottom: "8px",
                  }}
                >
                  Avec Logones
                </p>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 850,
                    color: C.text,
                  }}
                >
                  Stocks intégrés et scan BL
                </h3>
              </div>
              <div
                className="inline-flex items-center gap-1.5 rounded-full"
                style={{
                  fontSize: "12px",
                  fontWeight: 850,
                  color: "#1A1000",
                  background: `linear-gradient(135deg, ${C.yellow}, ${C.yellowDeep})`,
                  padding: "6px 12px",
                  boxShadow: "0 8px 22px rgba(255,196,0,0.32)",
                }}
              >
                <Clock size={13} strokeWidth={2.5} />
                12 min / semaine
              </div>
            </div>

            <ul className="relative space-y-3">
              {logonesSteps.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center justify-between"
                  style={{
                    background: "rgba(255,196,0,0.04)",
                    border: `1px solid ${C.border}`,
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "26px",
                        height: "26px",
                        background: C.yellowSoft,
                        border: `1px solid ${C.border}`,
                        color: C.yellow,
                        flexShrink: 0,
                      }}
                      aria-hidden
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.92)",
                        fontWeight: 600,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: C.yellow,
                      fontWeight: 800,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
