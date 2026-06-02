import Link from "next/link";
import Image from "next/image";

const ORANGE = "#FF7000";
const ORANGE_LIGHT = "#FF8A24";
const ORANGE_DEEP = "#CC5800";

export function CtaPremiumSection() {
  return (
    <section
      style={{
        backgroundColor: "#FAF7F2",
        paddingBlock: "clamp(32px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 32px)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px" }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "260px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Background image — restaurant premium with restaurateur on the right */}
          <Image
            src="/images/Gemini_Generated_Image_pssz3npssz3npssz.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1480px, 100vw"
            className="absolute inset-0 z-0 object-cover"
            aria-hidden
          />

          {/* Overlay 1 — left-to-right dark fade */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(90deg, #02060B 0%, rgba(2,6,11,0.92) 38%, rgba(2,6,11,0.55) 65%, rgba(2,6,11,0.12) 100%)",
            }}
            aria-hidden
          />

          {/* Overlay 2 — warm orange vignette on the right */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(circle at 80% 50%, rgba(255,112,0,0.15), transparent 35%)",
            }}
            aria-hidden
          />

          {/* Subtle warm halo behind the right area (where the restaurateur photo would go) */}
          <div
            className="pointer-events-none absolute z-[1] hidden lg:block"
            style={{
              right: "80px",
              bottom: "20px",
              width: "360px",
              height: "220px",
              background:
                "radial-gradient(circle, rgba(255,112,0,0.18), transparent 62%)",
              filter: "blur(18px)",
            }}
            aria-hidden
          />

          {/* Content wrapper */}
          <div
            className="relative z-[2] flex h-full flex-col justify-center"
            style={{
              padding: "clamp(36px, 5vw, 56px) clamp(24px, 5vw, 64px)",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              <h2
                className="text-white"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  marginBottom: "18px",
                }}
              >
                Prêt à simplifier la gestion de votre restaurant ?
              </h2>
              <p
                style={{
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.76)",
                  fontWeight: 500,
                  marginBottom: "34px",
                  maxWidth: "560px",
                }}
              >
                Découvrez Logones en démo personnalisée avec un expert.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5"
                  style={{
                    height: "58px",
                    padding: "0 32px",
                    background: `linear-gradient(135deg, ${ORANGE_LIGHT} 0%, ${ORANGE} 45%, ${ORANGE_DEEP} 100%)`,
                    fontSize: "16px",
                    fontWeight: 800,
                    fontFamily: "var(--font-poppins), sans-serif",
                    boxShadow:
                      "0 14px 32px rgba(255,112,0,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
                  }}
                  aria-label="Demander une démo personnalisée"
                >
                  Demander une démo
                </Link>

                <Link
                  href="/tarifs"
                  className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  style={{
                    height: "58px",
                    padding: "0 32px",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: "16px",
                    fontWeight: 800,
                    fontFamily: "var(--font-poppins), sans-serif",
                    border: "1px solid rgba(255,255,255,0.28)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                  aria-label="Voir nos tarifs"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
