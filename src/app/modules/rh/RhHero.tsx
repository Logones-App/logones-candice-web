import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";
import { RH as C } from "./palette";

const microProofs = [
  { icon: ShieldCheck, label: "Conforme CCN HCR" },
  { icon: TrendingUp, label: "Masse salariale en temps réel" },
  { icon: FileSpreadsheet, label: "Données prêtes pour l'expert-comptable" },
];

export function RhHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bg,
        minHeight: "740px",
        paddingBlock: "120px clamp(56px, 6vw, 80px)",
      }}
    >
      {/* Background image — manager + équipe en service (full hero) */}
      <Image
        src="/images/Gemini_Generated_Image_r9vboar9vboar9vb.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
        style={{ objectPosition: "calc(50% + 100px) center" }}
        aria-hidden
      />

      {/* Diagonal overlay — dense gauche pour lisibilité texte, transparent droite pour révéler l'image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #02060B 0%, rgba(2,6,11,0.92) 42%, rgba(2,6,11,0.55) 68%, rgba(2,6,11,0.20) 100%)",
        }}
        aria-hidden
      />
      {/* Violet RH tint */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 35%, rgba(163,107,255,0.20), transparent 45%)",
        }}
        aria-hidden
      />
      {/* Warm accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(255,112,0,0.10), transparent 45%)",
        }}
        aria-hidden
      />
      {/* Bottom fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${C.bg} 100%)`,
        }}
        aria-hidden
      />
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
        aria-hidden
      />

      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1280px",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[48fr_52fr] lg:gap-14">
          {/* LEFT — Copy */}
          <div>
            <p
              className="inline-block rounded-full"
              style={{
                color: C.violet,
                backgroundColor: C.violetSofter,
                border: `1px solid rgba(163,107,255,0.35)`,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 12px",
                marginBottom: "26px",
              }}
            >
              Ressources humaines & planning HCR
            </p>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 64px)",
                lineHeight: 1.02,
                fontWeight: 850,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              Le planning restaurant
              <br />
              qui{" "}
              <span style={{ color: C.violet }}>
                protège votre rentabilité.
              </span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: C.textSubtle,
                maxWidth: "640px",
                marginBottom: "32px",
              }}
            >
              Plannings, pointage, contrats, heures supplémentaires, repos
              obligatoires et exports expert-comptable réunis dans une seule
              plateforme pensée pour les restaurants.
            </p>

            <div className="flex flex-wrap gap-3" style={{ marginBottom: "26px" }}>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "56px",
                  padding: "0 28px",
                  background: `linear-gradient(135deg, #B989FF, ${C.violet}, ${C.violetDeep})`,
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow:
                    "0 14px 32px rgba(163,107,255,0.38), inset 0 1px 0 rgba(255,255,255,0.28)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                Demander une démo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                style={{
                  height: "56px",
                  padding: "0 28px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  fontSize: "15px",
                  fontWeight: 800,
                  backdropFilter: "blur(10px)",
                }}
              >
                Voir les fonctionnalités
              </Link>
            </div>

            {/* Micro proofs */}
            <ul
              className="flex flex-wrap"
              style={{
                gap: "12px 18px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {microProofs.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <span
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: C.violetSofter,
                      border: `1px solid ${C.border}`,
                      color: C.violet,
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    <p.icon size={13} strokeWidth={2} />
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Empty column (image révélée par l'overlay) */}
          <div className="relative" style={{ minHeight: "520px" }} aria-hidden />

        </div>
      </div>
    </section>
  );
}
