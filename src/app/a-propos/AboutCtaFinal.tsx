import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT as C } from "./palette";
import { ABOUT_PHOTOS } from "./photos";
import { AboutPhoto } from "./AboutPhoto";

export function AboutCtaFinal() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 88px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="grid items-stretch gap-0 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]"
          style={{
            background: C.card,
            borderRadius: "28px",
            border: `1px solid ${C.border}`,
            boxShadow: "0 24px 70px rgba(2,8,23,0.10)",
          }}
        >
          {/* LEFT — Copy */}
          <div style={{ padding: "clamp(36px, 4.5vw, 60px)" }}>
            <p
              style={{
                color: C.orange,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Reprenez le contrôle
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 38px)",
                lineHeight: 1.12,
                fontWeight: 850,
                color: C.text,
                marginBottom: "18px",
                letterSpacing: "-0.01em",
              }}
            >
              Et si demain, votre restaurant fonctionnait{" "}
              <span style={{ color: C.orange, fontStyle: "italic" }}>
                pour vous
              </span>{" "}
              — pas l&apos;inverse ?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: C.textSubtle,
                maxWidth: "560px",
                marginBottom: "30px",
              }}
            >
              30 minutes pour comprendre : où part votre rentabilité, combien
              vous coûte réellement votre pile logicielle, et comment reprendre
              le contrôle de votre exploitation.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "52px",
                  padding: "0 26px",
                  background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow:
                    "0 14px 32px rgba(255,106,42,0.32), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Demander une démo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  height: "52px",
                  padding: "0 26px",
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          {/* RIGHT — POS visual */}
          <div className="relative min-h-[280px]">
            <AboutPhoto
              src={ABOUT_PHOTOS.pos}
              alt="Caisse tactile Logones sur un comptoir de restaurant"
              label="Visuel POS / comptoir"
              rounded="0px"
              fillParent
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
