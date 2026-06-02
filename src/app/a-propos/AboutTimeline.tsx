import { ABOUT as C } from "./palette";

const steps = [
  {
    year: "2022",
    body: "Recherche d'une solution capable de centraliser l'exploitation d'un restaurant.",
  },
  {
    year: "Juillet 2025",
    body: "Début du développement de Logones.",
  },
  {
    year: "2026",
    body: "73 % de marge atteints grâce au pilotage centralisé des données.",
  },
  {
    year: "Aujourd'hui",
    body: "Ouverture de Logones aux restaurateurs.",
  },
];

export function AboutTimeline() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBottom: "clamp(48px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative"
          style={{
            background: C.card,
            borderRadius: "24px",
            border: `1px solid ${C.border}`,
            boxShadow: "0 30px 70px rgba(2,8,23,0.16)",
            padding: "clamp(32px, 4vw, 48px)",
            marginTop: "clamp(-60px, -5vw, -90px)",
          }}
        >
          {/* Horizontal connecting line (desktop) */}
          <div
            className="pointer-events-none absolute hidden lg:block"
            style={{
              left: "clamp(32px, 4vw, 48px)",
              right: "clamp(32px, 4vw, 48px)",
              top: "calc(clamp(32px, 4vw, 48px) + 6px)",
              height: "1px",
              background: C.border,
            }}
            aria-hidden
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s) => (
              <li key={s.year} className="relative">
                <span
                  className="block rounded-full"
                  style={{
                    width: "13px",
                    height: "13px",
                    background: C.orange,
                    boxShadow: `0 0 0 4px ${C.orangeSoft}`,
                    marginBottom: "18px",
                  }}
                  aria-hidden
                />
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 850,
                    color: C.text,
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.year}
                </p>
                <p
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: C.textSubtle,
                  }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
