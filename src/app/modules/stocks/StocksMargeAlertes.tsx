import { TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { STOCKS as C } from "./palette";

export function StocksMargeAlertes() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(40px, 5vw, 64px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
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
            Marge & food cost
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              maxWidth: "800px",
              margin: "0 auto 14px",
            }}
          >
            Voyez ce que chaque plat{" "}
            <span style={{ color: C.yellow }}>vous rapporte vraiment.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: C.textSubtle,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Les chiffres affichés ici sont indicatifs et calculés à partir de vos
            recettes, de vos achats et de vos ventes. Ils ne remplacent pas votre
            expert-comptable, mais vous donnent un pilotage clair au quotidien.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MargeCard />
          <AlertesCard />
        </div>
      </div>
    </section>
  );
}

function MargeCard() {
  const dishes = [
    { name: "Quenelle de brochet", price: 24, cost: 6.4, margin: 73 },
    { name: "Tablier de sapeur", price: 18, cost: 5.8, margin: 68 },
    { name: "Salade lyonnaise", price: 14, cost: 3.5, margin: 75 },
    { name: "Praline tarte", price: 9, cost: 3.1, margin: 66 },
  ];
  return (
    <article
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${C.card}, rgba(3,7,12,0.98))`,
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "26px",
        boxShadow:
          "0 18px 45px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: "18px" }}>
        <div>
          <div
            className="flex items-center justify-center rounded-md"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: C.yellowSofter,
              border: `1px solid ${C.border}`,
              color: C.yellow,
              marginBottom: "12px",
            }}
            aria-hidden
          >
            <TrendingUp size={18} strokeWidth={1.8} />
          </div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 850,
              color: C.text,
              marginBottom: "6px",
            }}
          >
            Marge par plat
          </h3>
          <p style={{ fontSize: "13px", color: C.textMuted }}>
            Mis à jour à chaque service
          </p>
        </div>
        <div className="text-right">
          <p
            style={{
              fontSize: "26px",
              fontWeight: 850,
              color: C.yellow,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            71 %
          </p>
          <p style={{ fontSize: "11px", color: C.textMuted, marginTop: "4px" }}>
            Marge moyenne
          </p>
        </div>
      </div>

      <div
        style={{
          background: "rgba(2,6,11,0.55)",
          border: `1px solid ${C.borderSoft}`,
          borderRadius: "12px",
          padding: "14px",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 70px 70px 60px",
            fontSize: "10px",
            fontWeight: 700,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            paddingBottom: "8px",
            borderBottom: `1px solid ${C.borderSoft}`,
          }}
        >
          <span>Plat</span>
          <span className="text-right">Prix</span>
          <span className="text-right">Coût</span>
          <span className="text-right">Marge</span>
        </div>
        <ul className="space-y-1 mt-2">
          {dishes.map((d) => (
            <li
              key={d.name}
              className="grid items-center"
              style={{
                gridTemplateColumns: "1fr 70px 70px 60px",
                fontSize: "12px",
                padding: "6px 0",
              }}
            >
              <span style={{ color: C.text, fontWeight: 600 }}>{d.name}</span>
              <span
                className="text-right"
                style={{
                  color: C.textSubtle,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {d.price.toFixed(2)} €
              </span>
              <span
                className="text-right"
                style={{
                  color: C.textMuted,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {d.cost.toFixed(2)} €
              </span>
              <span
                className="text-right"
                style={{
                  color: d.margin >= 70 ? C.yellow : C.orange,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {d.margin} %
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function AlertesCard() {
  const alerts = [
    {
      title: "Bœuf charolais",
      detail: "+ 12 % vs achat moyen 30 j",
      level: "Hausse fournisseur",
      icon: ArrowUpRight,
      color: C.red,
    },
    {
      title: "Beurre AOP",
      detail: "Conso > stock prévu de 3 kg",
      level: "Sur-consommation",
      icon: AlertTriangle,
      color: C.orange,
    },
    {
      title: "Pommes de terre",
      detail: "− 8 % sur le prix négocié",
      level: "Opportunité",
      icon: ArrowDownRight,
      color: C.green,
    },
  ];
  return (
    <article
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${C.card}, rgba(3,7,12,0.98))`,
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "26px",
        boxShadow:
          "0 18px 45px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: "18px" }}>
        <div>
          <div
            className="flex items-center justify-center rounded-md"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: C.yellowSofter,
              border: `1px solid ${C.border}`,
              color: C.yellow,
              marginBottom: "12px",
            }}
            aria-hidden
          >
            <AlertTriangle size={18} strokeWidth={1.8} />
          </div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 850,
              color: C.text,
              marginBottom: "6px",
            }}
          >
            Alertes food cost
          </h3>
          <p style={{ fontSize: "13px", color: C.textMuted }}>
            Dérives détectées sur les 7 derniers jours
          </p>
        </div>
        <div className="text-right">
          <p
            style={{
              fontSize: "26px",
              fontWeight: 850,
              color: C.yellow,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            3
          </p>
          <p style={{ fontSize: "11px", color: C.textMuted, marginTop: "4px" }}>
            Alertes actives
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {alerts.map((a) => (
          <li
            key={a.title}
            className="flex items-start gap-3"
            style={{
              background: "rgba(2,6,11,0.55)",
              border: `1px solid ${C.borderSoft}`,
              borderRadius: "12px",
              padding: "12px 14px",
            }}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{
                width: "32px",
                height: "32px",
                background: `${a.color}18`,
                border: `1px solid ${a.color}55`,
                color: a.color,
              }}
              aria-hidden
            >
              <a.icon size={14} strokeWidth={2.2} />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p style={{ fontSize: "13.5px", color: C.text, fontWeight: 700 }}>
                  {a.title}
                </p>
                <span
                  className="rounded"
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 800,
                    color: a.color,
                    padding: "2px 6px",
                    border: `1px solid ${a.color}55`,
                    backgroundColor: `${a.color}18`,
                    flexShrink: 0,
                  }}
                >
                  {a.level}
                </span>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: C.textMuted,
                  marginTop: "2px",
                }}
              >
                {a.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
