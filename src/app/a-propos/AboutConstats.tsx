import { Unplug, TrendingDown, Database, Lightbulb } from "lucide-react";
import { ABOUT as C } from "./palette";

const constats = [
  {
    icon: Unplug,
    title: "Des outils qui ne se parlent pas",
    body: "Caisse. HACCP. RH. Réservations. Comptabilité. Chaque logiciel ajoute un abonnement… et retire de la visibilité.",
  },
  {
    icon: TrendingDown,
    title: "Une rentabilité qui s'érode",
    body: "Commissions. Frais cachés. Multiplication des intermédiaires. Le restaurateur travaille plus, mais garde moins.",
  },
  {
    icon: Database,
    title: "Des données inutilisées",
    body: "Le problème n'était pas le manque de données. Le problème, c'était l'absence d'outil capable de les centraliser pour aider à décider.",
  },
];

export function AboutConstats() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="text-center" style={{ marginBottom: "44px" }}>
          <p
            style={{
              color: C.orange,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Notre constat
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 42px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
            }}
          >
            Trois constats.{" "}
            <span style={{ color: C.orange }}>Une décision.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {constats.map((c) => (
            <article
              key={c.title}
              className="transition-transform hover:-translate-y-1"
              style={{
                background: C.card,
                borderRadius: "20px",
                border: `1px solid ${C.border}`,
                padding: "28px",
                boxShadow: "0 14px 36px rgba(2,8,23,0.07)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "48px",
                  height: "48px",
                  background: C.bgDark,
                  color: C.orange,
                  marginBottom: "20px",
                }}
                aria-hidden
              >
                <c.icon size={21} strokeWidth={1.9} />
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: C.text,
                  marginBottom: "12px",
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.65,
                  color: C.textSubtle,
                }}
              >
                {c.body}
              </p>
            </article>
          ))}
        </div>

        {/* Bandeau décision */}
        <div
          className="relative overflow-hidden text-center"
          style={{
            marginTop: "28px",
            background:
              "linear-gradient(135deg, #FFF3EC 0%, #FAF7F2 60%, #FFF6EF 100%)",
            border: `1px solid ${C.orangeBorder}`,
            borderRadius: "24px",
            padding: "clamp(36px, 4vw, 52px) clamp(24px, 4vw, 48px)",
          }}
        >
          <div
            className="mx-auto flex items-center justify-center rounded-full"
            style={{
              width: "52px",
              height: "52px",
              background: C.orangeSoft,
              border: `1px solid ${C.orangeBorder}`,
              color: C.orange,
              marginBottom: "18px",
            }}
            aria-hidden
          >
            <Lightbulb size={24} strokeWidth={1.9} />
          </div>
          <h3
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 850,
              color: C.text,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            Alors nous avons créé{" "}
            <span style={{ color: C.orange }}>Logones.</span>
          </h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: C.textSubtle,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Une plateforme pensée dès le départ pour connecter les opérations,
            le pilotage et la rentabilité.
          </p>
        </div>
      </div>
    </section>
  );
}
