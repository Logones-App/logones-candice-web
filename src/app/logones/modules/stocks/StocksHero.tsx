import Link from "next/link";
import Image from "next/image";
import {
  Scan,
  Bell,
  TrendingUp,
  PackageCheck,
  FileSpreadsheet,
  Check,
  ArrowRight,
} from "lucide-react";
import { STOCKS as C } from "./palette";

const benefits = [
  { icon: Scan, label: "Scan des bons de livraison" },
  { icon: PackageCheck, label: "Stock à jour en temps réel" },
  { icon: TrendingUp, label: "Food cost et marge calculés" },
  { icon: Bell, label: "Alertes sur dérives de coût" },
  { icon: FileSpreadsheet, label: "Export comptable simplifié" },
];

const reassurance = [
  "Sans ressaisie",
  "Connecté à votre caisse",
  "Conçu pour les restaurateurs",
];

export function StocksHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bg,
        minHeight: "740px",
        paddingBlock: "120px clamp(56px, 6vw, 80px)",
      }}
    >
      {/* Background image — restaurant en service */}
      <div
        className="pointer-events-none absolute -z-20"
        style={{
          inset: "-12% -8%",
        }}
        aria-hidden
      >
        <Image
          src="/images/Gemini_Generated_Image_g70c5ag70c5ag70c.png"
          alt=""
          fill
          priority
          sizes="120vw"
          className="object-cover object-center"
        />
      </div>

      {/* Diagonal dark overlay — dense left → reveal right */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #02060B 0%, rgba(2,6,11,0.92) 38%, rgba(2,6,11,0.55) 65%, rgba(2,6,11,0.20) 100%)",
        }}
        aria-hidden
      />
      {/* Yellow tint */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 60%, rgba(255,196,0,0.18), transparent 45%)",
        }}
        aria-hidden
      />
      {/* Warm accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 18%, rgba(255,176,0,0.10), transparent 35%)",
        }}
        aria-hidden
      />
      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${C.bg} 100%)`,
        }}
        aria-hidden
      />

      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1480px",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-[680px]">
          <div>
            <p
              className="inline-block rounded-full"
              style={{
                color: C.yellow,
                backgroundColor: C.yellowSofter,
                border: `1px solid ${C.border}`,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 12px",
                marginBottom: "26px",
              }}
            >
              Module Stocks · Food Cost
            </p>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 68px)",
                lineHeight: 0.98,
                fontWeight: 850,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              Votre food cost
              <br />
              <span style={{ color: C.yellow }}>en temps réel</span>
              <br />
              sans ressaisie.
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: C.textSubtle,
                maxWidth: "620px",
                marginBottom: "32px",
              }}
            >
              Scannez vos bons de livraison, gardez vos stocks à jour et suivez
              vos marges service après service. Une gestion fluide, intégrée à
              votre caisse Logones.
            </p>

            <ul
              className="grid gap-3 sm:grid-cols-2"
              style={{ marginBottom: "36px", maxWidth: "600px" }}
            >
              {benefits.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center"
                  style={{ gap: "10px" }}
                >
                  <span
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: C.yellowSofter,
                      border: `1px solid ${C.border}`,
                      color: C.yellow,
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    <b.icon size={14} strokeWidth={1.85} />
                  </span>
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.84)",
                    }}
                  >
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3" style={{ marginBottom: "26px" }}>
              <Link
                href="/logones/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "54px",
                  padding: "0 28px",
                  background: `linear-gradient(135deg, ${C.yellow}, ${C.yellowDeep})`,
                  color: "#1A1000",
                  fontSize: "15px",
                  fontWeight: 850,
                  boxShadow:
                    "0 14px 32px rgba(255,196,0,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
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
                  height: "54px",
                  padding: "0 28px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  fontSize: "15px",
                  fontWeight: 800,
                  backdropFilter: "blur(10px)",
                }}
              >
                Voir les fonctionnalités
              </Link>
            </div>

            <ul
              className="flex flex-wrap gap-x-5 gap-y-2"
              style={{ fontSize: "12.5px", color: C.textMuted }}
            >
              {reassurance.map((r) => (
                <li key={r} className="inline-flex items-center gap-1.5">
                  <Check size={13} strokeWidth={2.5} style={{ color: C.yellow }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
