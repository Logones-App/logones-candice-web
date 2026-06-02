import type { LucideIcon } from "lucide-react";
import { ListX, Receipt, Unplug } from "lucide-react";
import { RES as C } from "./palette";

const cards: {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  hue: "red" | "amber" | "violet";
}[] = [
  {
    icon: ListX,
    tag: "Désorganisé",
    title: "Aucune vision globale.",
    body: "Les réservations arrivent de partout, sans visibilité globale. Votre service en subit les conséquences.",
    hue: "red",
  },
  {
    icon: Receipt,
    tag: "Coûteux",
    title: "Plus vous remplissez, plus ils gagnent.",
    body: "Commissions et frais qui augmentent avec votre activité. Plus vous remplissez, plus ils gagnent.",
    hue: "amber",
  },
  {
    icon: Unplug,
    tag: "Déconnecté",
    title: "Vous pilotez à l'aveugle.",
    body: "Réservations, salle, caisse et équipe ne communiquent pas. La donnée est éparpillée, vous pilotez à l'aveugle.",
    hue: "violet",
  },
];

const hueColor = (h: "red" | "amber" | "violet") => {
  if (h === "red") return C.redAccent;
  if (h === "amber") return "#F59E0B";
  return "#A36BFF";
};

export function ReservationProblem() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(20px, 3vw, 40px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,18,26,0.96), rgba(4,8,12,0.98))",
            border: `1px solid rgba(255,48,48,0.16)`,
            borderRadius: "20px",
            padding: "clamp(36px, 4.5vw, 54px) clamp(24px, 4vw, 60px)",
            boxShadow:
              "0 24px 65px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Soft red glow on top */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "300px",
              background:
                "radial-gradient(ellipse, rgba(255,48,48,0.14), transparent 70%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />

          {/* Centered title */}
          <h2
            className="relative mx-auto text-center"
            style={{
              fontSize: "clamp(26px, 3.6vw, 34px)",
              lineHeight: 1.15,
              fontWeight: 850,
              color: C.text,
              maxWidth: "780px",
              marginBottom: "40px",
            }}
          >
            Les réservations ne doivent plus vivre{" "}
            <span style={{ color: C.redAccent }}>à côté</span> de votre
            restaurant.
          </h2>

          {/* 3 cards */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            {cards.map((card) => {
              const color = hueColor(card.hue);
              return (
                <article
                  key={card.tag}
                  className="overflow-hidden"
                  style={{
                    background: "transparent",
                    borderRadius: "12px",
                  }}
                >
                  {/* Visual placeholder — 16/9, monochrome-feel */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "16/9",
                      borderRadius: "12px",
                      border: `1px solid ${C.borderSoft}`,
                      background: `
                        radial-gradient(circle at 30% 30%, ${color}28, transparent 50%),
                        linear-gradient(160deg, #1A1A1F 0%, #0A0A0E 100%)
                      `,
                      filter: "grayscale(0.55)",
                    }}
                  >
                    {/* Faux soft light */}
                    <div
                      className="absolute"
                      style={{
                        top: "18%",
                        right: "12%",
                        width: "60px",
                        height: "60px",
                        borderRadius: "999px",
                        background:
                          "radial-gradient(circle, rgba(255,231,168,0.40) 0%, transparent 70%)",
                        filter: "blur(8px)",
                      }}
                    />
                    {/* Big icon ghost */}
                    <span
                      className="absolute"
                      style={{
                        right: "-12px",
                        bottom: "-16px",
                        color: color,
                        opacity: 0.20,
                      }}
                      aria-hidden
                    >
                      <card.icon size={160} strokeWidth={1.2} />
                    </span>
                    {/* Small tag */}
                    <span
                      className="absolute"
                      style={{
                        top: "16px",
                        left: "16px",
                        fontSize: "10px",
                        fontWeight: 900,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: color,
                        backgroundColor: "rgba(0,0,0,0.45)",
                        border: `1px solid ${color}55`,
                        padding: "4px 10px",
                        borderRadius: "999px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <div style={{ paddingTop: "18px" }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 850,
                        color: C.text,
                        lineHeight: 1.2,
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: C.textSubtle,
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
