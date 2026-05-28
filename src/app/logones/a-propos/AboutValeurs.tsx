import { Eye, Headphones, Database, CheckCircle2 } from "lucide-react";
import { ABOUT as C } from "./palette";

const valeurs = [
  {
    icon: Eye,
    title: "La vérité sur nos prix",
    body: "Affichés publiquement, avant tout appel. Si un concurrent cache ses prix, c'est qu'il y a quelque chose à cacher.",
  },
  {
    icon: Headphones,
    title: "Le support pendant vos services",
    body: "Vous travaillez quand les autres dorment. Nous aussi. Notre équipe est joignable aux heures où ça compte vraiment.",
  },
  {
    icon: Database,
    title: "Les données qui vous appartiennent",
    body: "Export standard à tout moment. Sans frais. Pas de chantage à la portabilité. Pas de verrouillage contractuel.",
  },
  {
    icon: CheckCircle2,
    title: "Concrètes. Vérifiables. Pas des slogans.",
    body: "Nos engagements sont mesurables. Nos résultats viennent de notre restaurant, pas d'un PowerPoint.",
  },
];

export function AboutValeurs() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${C.bgDark}, ${C.bgDarkDeep})`,
            borderRadius: "28px",
            border: `1px solid ${C.borderOnDark}`,
            padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
            boxShadow: "0 30px 80px rgba(2,8,23,0.30)",
          }}
        >
          {/* Subtle orange glow */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-140px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "560px",
              height: "320px",
              background:
                "radial-gradient(ellipse, rgba(255,106,42,0.12), transparent 70%)",
              filter: "blur(24px)",
            }}
            aria-hidden
          />

          <p
            className="relative text-center"
            style={{
              color: C.orange,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            Nos valeurs
          </p>

          <div className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v, i) => (
              <div
                key={v.title}
                style={{
                  paddingInline: "clamp(0px, 2vw, 28px)",
                  borderLeft:
                    i !== 0 ? `1px solid ${C.borderOnDarkSoft}` : "none",
                }}
                className={i !== 0 ? "lg:border-l" : ""}
              >
                <span
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(255,106,42,0.12)",
                    border: `1px solid ${C.orangeBorder}`,
                    color: C.orange,
                    marginBottom: "18px",
                  }}
                  aria-hidden
                >
                  <v.icon size={20} strokeWidth={1.9} />
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: C.textOnDark,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: C.textOnDarkSubtle,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
