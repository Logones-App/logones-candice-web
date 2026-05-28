import { Zap, Calculator, Bell, FileSpreadsheet } from "lucide-react";
import { STOCKS as C } from "./palette";

const benefits = [
  {
    icon: Zap,
    title: "Zéro ressaisie",
    body: "Vos bons de livraison sont scannés puis intégrés directement dans vos stocks. Vous validez, le système range.",
  },
  {
    icon: Calculator,
    title: "Food cost calculé en continu",
    body: "Chaque vente débite vos stocks et recalcule votre coût matière. Vous voyez l'impact d'un plat sur votre marge, en direct.",
  },
  {
    icon: Bell,
    title: "Alertes sur les dérives",
    body: "Une hausse de prix fournisseur, un écart inhabituel, un produit qui pèse trop : vous êtes prévenu avant la fin du mois.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export comptable simplifié",
    body: "Vos achats, vos consos et vos inventaires sortent au bon format pour votre comptable. Plus de copier-coller le 5 du mois.",
  },
];

export function StocksBenefits() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(40px, 5vw, 64px)",
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
            Pourquoi Logones Stocks
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Quatre bénéfices concrets pour{" "}
            <span style={{ color: C.yellow }}>tenir votre marge.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="relative overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${C.card}, rgba(3,7,12,0.98))`,
                border: `1px solid ${C.border}`,
                borderRadius: "16px",
                padding: "24px",
                boxShadow:
                  "0 14px 36px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="pointer-events-none absolute"
                style={{
                  top: "-60px",
                  left: "-60px",
                  width: "150px",
                  height: "150px",
                  background:
                    "radial-gradient(circle, rgba(255,196,0,0.14), transparent 65%)",
                }}
                aria-hidden
              />
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: C.yellowSofter,
                  border: `1px solid ${C.border}`,
                  color: C.yellow,
                  marginBottom: "18px",
                }}
                aria-hidden
              >
                <b.icon size={20} strokeWidth={1.8} />
              </div>

              <h3
                className="relative"
                style={{
                  fontSize: "17px",
                  fontWeight: 850,
                  color: C.text,
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {b.title}
              </h3>
              <p
                className="relative"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.55,
                  color: C.textSubtle,
                }}
              >
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
