import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { RES as C } from "./palette";

const reassurance = ["Sans engagement", "30 minutes", "Disponible 7j/7"];

export function ReservationCtaFinal() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(32px, 4vw, 56px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "320px",
            borderRadius: "22px",
            border: `1px solid ${C.border}`,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Background image — restaurateur */}
          <Image
            src="/images/Gemini_Generated_Image_pssz3npssz3npssz.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1480px, 100vw"
            className="absolute inset-0 z-0 object-cover"
            aria-hidden
          />

          {/* Overlay combiné — linear fade gauche→droite + radial rouge */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: `
                linear-gradient(90deg, #02060B 0%, rgba(2,6,11,0.94) 43%, rgba(2,6,11,0.55) 70%, rgba(2,6,11,0.15) 100%),
                radial-gradient(circle at 78% 45%, rgba(255,48,48,0.22), transparent 34%)
              `,
            }}
            aria-hidden
          />

          {/* Halo rouge derrière le restaurateur */}
          <div
            className="pointer-events-none absolute z-[1] hidden lg:block"
            style={{
              right: "60px",
              bottom: 0,
              width: "420px",
              height: "260px",
              background:
                "radial-gradient(circle, rgba(255,48,48,0.26), transparent 65%)",
              filter: "blur(18px)",
            }}
            aria-hidden
          />

          {/* CONTENT */}
          <div
            className="relative z-[2] flex h-full items-center"
            style={{
              padding: "clamp(40px, 6vw, 64px) clamp(28px, 5vw, 72px)",
            }}
          >
            <div style={{ maxWidth: "640px" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 4.2vw, 42px)",
                  lineHeight: 1.08,
                  fontWeight: 850,
                  color: C.text,
                  marginBottom: "18px",
                }}
              >
                Remplissez votre salle.
                <br />
                <span style={{ color: C.redAccent }}>
                  Sans perdre le contrôle.
                </span>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "17px",
                  lineHeight: 1.55,
                  maxWidth: "560px",
                  marginBottom: "30px",
                }}
              >
                Logones Réservation vous aide à maximiser votre remplissage,
                réduire les no-shows et offrir une expérience irréprochable.
              </p>

              <div className="flex flex-wrap" style={{ gap: "16px" }}>
                <Link
                  href="/logones/demo"
                  aria-label="Demander une démo personnalisée du module Réservation Logones"
                  className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                  style={{
                    height: "54px",
                    padding: "0 28px",
                    background: `linear-gradient(135deg, ${C.redAccent}, ${C.red}, ${C.redDeep})`,
                    fontSize: "15px",
                    fontWeight: 850,
                    boxShadow:
                      "0 16px 35px rgba(255,48,48,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  Demander une démo
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <Link
                  href="#features"
                  aria-label="Voir toutes les fonctionnalités du module Réservation"
                  className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  style={{
                    height: "54px",
                    padding: "0 28px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    fontSize: "15px",
                    fontWeight: 850,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Voir toutes les fonctionnalités
                </Link>
              </div>

              <ul
                className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
                style={{ fontSize: "12.5px", color: C.textMuted }}
              >
                {reassurance.map((r) => (
                  <li key={r} className="inline-flex items-center gap-1.5">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      style={{ color: C.redAccent }}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
