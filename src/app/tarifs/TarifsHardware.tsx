import { CreditCard, Printer, Tablet, Inbox, Monitor } from "lucide-react";
import { TARIFS as C } from "./palette";

const items = [
  { icon: CreditCard, label: "TPE" },
  { icon: Printer, label: "Imprimantes" },
  { icon: Tablet, label: "Tablettes" },
  { icon: Inbox, label: "Tiroirs-caisses" },
  { icon: Monitor, label: "Bornes" },
];

export function TarifsHardware() {
  return (
    <section
      style={{
        backgroundColor: C.card,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative overflow-hidden text-center"
          style={{
            background: C.bg,
            border: `1px solid ${C.border}`,
            borderRadius: "24px",
            padding: "clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)",
          }}
        >
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
            Matériel
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.15,
              fontWeight: 850,
              color: C.text,
              marginBottom: "14px",
            }}
          >
            Logiciel{" "}
            <span style={{ color: C.orange }}>sans matériel inclus.</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: C.textSubtle,
              maxWidth: "620px",
              margin: "0 auto 32px",
            }}
          >
            Les tarifs affichés concernent uniquement le logiciel, sans matériel.
            Le matériel (TPE, imprimantes, tablettes, tiroirs-caisses, bornes…)
            est disponible à la vente ou à la location selon vos besoins, sur
            devis.
          </p>

          <ul
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "clamp(20px, 4vw, 56px)" }}
          >
            {items.map((it) => (
              <li
                key={it.label}
                className="flex flex-col items-center"
                style={{ gap: "10px" }}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    boxShadow: "0 8px 22px rgba(7,17,31,0.06)",
                  }}
                  aria-hidden
                >
                  <it.icon size={22} strokeWidth={1.6} />
                </span>
                <span
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 700,
                    color: C.text,
                  }}
                >
                  {it.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
