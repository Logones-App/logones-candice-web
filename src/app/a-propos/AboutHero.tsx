import { container, gutter, rhythm } from "../lib/spacing";
import Link from "next/link";
import { ArrowRight, X, LineChart } from "lucide-react";
import { ABOUT as C } from "./palette";
import { ABOUT_PHOTOS } from "./photos";
import { AboutPhoto } from "./AboutPhoto";

const frictions = [
  "Trop d'abonnements.",
  "Trop d'intermédiaires.",
  "Trop de données inutilisées.",
];

export function AboutHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bgDark,
        paddingBlock: rhythm.hero,
        paddingInline: gutter,
      }}
    >
      {/* Radial subtle gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 18% 25%, rgba(226,104,24,0.10), transparent 45%),
            radial-gradient(ellipse at 85% 80%, rgba(6,18,37,0.6), transparent 55%),
            linear-gradient(180deg, ${C.bgDark} 0%, ${C.bgDarkDeep} 100%)
          `,
        }}
        aria-hidden
      />

      <div className="relative mx-auto" style={{ maxWidth: container }}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          {/* LEFT — Text */}
          <div>
            <p
              style={{
                color: C.orange,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "22px",
              }}
            >
              Notre histoire
            </p>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.05,
                fontWeight: 900,
                color: C.textOnDark,
                letterSpacing: "-0.02em",
                marginBottom: "26px",
              }}
            >
              Nous avons cherché
              <br />
              cet outil depuis 2022.
              <br />
              <span style={{ color: C.orange }}>Il n&apos;existait pas.</span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: C.textOnDarkSubtle,
                maxWidth: "560px",
                marginBottom: "22px",
              }}
            >
              Pendant des années, nous avons essayé de faire fonctionner
              ensemble des logiciels conçus séparément : caisse, HACCP, RH,
              réservations, pilotage, comptabilité.
            </p>

            <ul
              className="flex flex-wrap gap-x-6 gap-y-2"
              style={{ marginBottom: "24px" }}
            >
              {frictions.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-2"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: C.textOnDark,
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "20px",
                      height: "20px",
                      background: C.orangeSoft,
                      border: `1px solid ${C.orangeBorder}`,
                      color: C.orange,
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    <X size={11} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              className="space-y-4"
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: C.textOnDarkSubtle,
                maxWidth: "560px",
              }}
            >
              <p>
                Alors en juillet 2025, nous avons commencé à développer notre
                propre solution.
              </p>
              <p>
                <strong style={{ color: C.textOnDark, fontWeight: 700 }}>
                  Philippe
                </strong>
                , développeur full-stack et restaurateur, a conçu Logones
                directement depuis les problématiques du terrain.
              </p>
              <p>
                <strong style={{ color: C.textOnDark, fontWeight: 700 }}>
                  Candice
                </strong>
                , spécialisée en gestion et pilotage d&apos;entreprise, a
                structuré les modules autour d&apos;un objectif concret :
                améliorer durablement la rentabilité d&apos;un établissement.
              </p>
              <p
                style={{
                  color: C.textOnDark,
                  fontWeight: 700,
                  fontSize: "17px",
                }}
              >
                Résultat : près de 2 points de marge gagnés chaque année pendant
                3 ans, jusqu&apos;à atteindre 73 % en 2026.
              </p>
              <p>
                Aujourd&apos;hui, nous partageons cette solution avec
                d&apos;autres restaurateurs.
              </p>
            </div>

            <div style={{ marginTop: "34px" }}>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  height: "54px",
                  padding: "0 28px",
                  background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                  color: "#1A0A00",
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow:
                    "0 14px 32px rgba(226,104,24,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Découvrir Logones
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* RIGHT — Founders photo + proof card */}
          <div className="relative">
            <AboutPhoto
              src={ABOUT_PHOTOS.founders}
              alt="Les deux co-fondateurs de Logones"
              label="Photo des fondateurs"
              rounded="24px"
              aspect="4/5"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            {/* Overlay navy for readability (only over a real photo) */}
            {ABOUT_PHOTOS.founders && (
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, rgba(2,8,23,0.10) 0%, rgba(2,8,23,0.35) 100%)",
                }}
                aria-hidden
              />
            )}

            {/* Proof card 73% */}
            <div
              className="absolute"
              style={{
                right: "clamp(-8px, 1vw, 18px)",
                bottom: "clamp(-20px, -1.5vw, -12px)",
                width: "min(280px, 78%)",
                background: "rgba(11,26,48,0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: `1px solid ${C.orangeBorder}`,
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "10px" }}>
                <span
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "30px",
                    height: "30px",
                    background: C.orangeSoft,
                    border: `1px solid ${C.orangeBorder}`,
                    color: C.orange,
                  }}
                  aria-hidden
                >
                  <LineChart size={15} strokeWidth={2} />
                </span>
                <span
                  style={{
                    fontSize: "44px",
                    fontWeight: 900,
                    color: C.textOnDark,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  73 %
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: C.textOnDark,
                  lineHeight: 1.25,
                  marginBottom: "6px",
                }}
              >
                Marge atteinte en 2026 dans notre établissement.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: C.textOnDarkMuted,
                  lineHeight: 1.45,
                }}
              >
                +2 points gagnés par an pendant 3 ans grâce au pilotage
                centralisé des données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
