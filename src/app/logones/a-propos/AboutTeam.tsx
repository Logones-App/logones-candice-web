import { ABOUT as C } from "./palette";
import { ABOUT_PHOTOS } from "./photos";
import { AboutPhoto } from "./AboutPhoto";

const members = [
  {
    name: "Candice",
    role: "Co-fondatrice — Pilotage & Expérience terrain",
    // Portrait dédié si fourni, sinon recadrage du visage dans la photo des fondateurs.
    src: ABOUT_PHOTOS.candice ?? ABOUT_PHOTOS.founders,
    crop: ABOUT_PHOTOS.candice
      ? undefined
      : { backgroundPosition: "13% 30%", backgroundSize: "230%" },
    bio: [
      "Restauratrice et spécialiste de la gestion d'entreprise, Candice transforme les données opérationnelles en décisions concrètes.",
      "Elle pilote l'expérience utilisateur et la logique métier des modules Logones.",
    ],
  },
  {
    name: "Philippe",
    role: "Co-fondateur — Architecture & Développement",
    src: ABOUT_PHOTOS.philippe ?? ABOUT_PHOTOS.founders,
    crop: ABOUT_PHOTOS.philippe
      ? undefined
      : { backgroundPosition: "88% 24%", backgroundSize: "230%" },
    bio: [
      "Développeur full-stack, Philippe a conçu l'intégralité de Logones à partir des problématiques rencontrées dans l'exploitation quotidienne d'un restaurant.",
      "Chaque module est issu d'un besoin réel du terrain.",
    ],
  },
];

export function AboutTeam() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <div style={{ marginBottom: "40px" }}>
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
            L&apos;équipe
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 42px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
            }}
          >
            Deux co-fondateurs.{" "}
            <span style={{ color: C.orange }}>Deux métiers.</span>
          </h2>
        </div>

        <div
          className="grid gap-10 md:grid-cols-2 md:gap-0"
          style={{
            background: C.card,
            borderRadius: "24px",
            border: `1px solid ${C.border}`,
            boxShadow: "0 18px 50px rgba(2,8,23,0.08)",
            padding: "clamp(28px, 4vw, 48px)",
          }}
        >
          {members.map((m, i) => (
            <div
              key={m.name}
              style={{
                paddingInline: "clamp(0px, 2.5vw, 40px)",
                borderLeft:
                  i === 1 ? `1px solid ${C.border}` : "none",
              }}
              className={i === 1 ? "md:border-l" : ""}
            >
              <div className="flex items-center gap-5" style={{ marginBottom: "22px" }}>
                {m.src && m.crop ? (
                  <div
                    role="img"
                    aria-label={`Portrait de ${m.name}`}
                    style={{
                      width: "92px",
                      height: "92px",
                      flexShrink: 0,
                      borderRadius: "999px",
                      backgroundImage: `url(${m.src})`,
                      backgroundSize: m.crop.backgroundSize,
                      backgroundPosition: m.crop.backgroundPosition,
                      backgroundRepeat: "no-repeat",
                      border: `2px solid ${C.border}`,
                    }}
                  />
                ) : (
                  <AboutPhoto
                    src={m.src}
                    alt={`Portrait de ${m.name}`}
                    label={m.name}
                    rounded="999px"
                    size={92}
                  />
                )}
                <div>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: 850,
                      color: C.text,
                      lineHeight: 1.1,
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: C.orange,
                      marginTop: "5px",
                      lineHeight: 1.35,
                    }}
                  >
                    {m.role}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {m.bio.map((b, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: C.textSubtle,
                    }}
                  >
                    {b}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
