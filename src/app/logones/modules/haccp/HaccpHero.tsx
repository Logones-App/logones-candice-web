import Link from "next/link";
import Image from "next/image";
import {
  Thermometer,
  Bell,
  CheckSquare,
  ScrollText,
  BookOpenCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { HACCP as C } from "./palette";

const benefits = [
  { icon: Thermometer, label: "Suivi en temps réel des températures" },
  { icon: Bell, label: "Alertes avant échéance" },
  { icon: CheckSquare, label: "Traçabilité complète et horodatée" },
  { icon: ScrollText, label: "Export DDPP en 1 clic" },
  { icon: BookOpenCheck, label: "Veille réglementaire intégrée" },
];

const reassurance = [
  "Conforme au règlement CE 852/2004",
  "Hébergé en France",
  "Support réactif 7j/7",
];

export function HaccpHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bg,
        minHeight: "720px",
        paddingBlock: "120px clamp(56px, 6vw, 80px)",
      }}
    >
      {/* Background image — chef en cuisine pro (scale up to fill larger area) */}
      <div
        className="pointer-events-none absolute -z-20"
        style={{
          inset: "-12% -8%",
        }}
        aria-hidden
      >
        <Image
          src="/images/Gemini_Generated_Image_70f76p70f76p70f7.png"
          alt=""
          fill
          priority
          sizes="120vw"
          className="object-cover object-center"
        />
      </div>

      {/* Diagonal dark overlay — dense left → reveal right (kitchen + chef visible) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #020B08 0%, rgba(2,11,8,0.92) 38%, rgba(2,11,8,0.55) 65%, rgba(2,11,8,0.20) 100%)",
        }}
        aria-hidden
      />
      {/* HACCP green tint */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 60%, rgba(34,197,94,0.18), transparent 45%)",
        }}
        aria-hidden
      />
      {/* Warm hanging lights accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 18%, rgba(245,158,11,0.08), transparent 35%)",
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

      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1480px",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-[680px]">
          {/* LEFT — Copy (image visible on the right via the gradient overlay) */}
          <div>
            <p
              className="inline-block rounded-full"
              style={{
                color: C.green,
                backgroundColor: C.greenSofter,
                border: `1px solid ${C.border}`,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 12px",
                marginBottom: "26px",
              }}
            >
              Module HACCP proactif
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
              Votre HACCP
              <br />
              <span style={{ color: C.green }}>anticipe les risques</span>
              <br />
              avant le contrôle.
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
              Traçabilité, températures, relevés, réceptions, nettoyages,
              alertes et veille réglementaire HACCP réunis dans une plateforme
              pensée pour les restaurateurs.
            </p>

            {/* 5 benefits in 2 cols */}
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
                      backgroundColor: C.greenSofter,
                      border: `1px solid ${C.border}`,
                      color: C.green,
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

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ marginBottom: "26px" }}>
              <Link
                href="/logones/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "54px",
                  padding: "0 28px",
                  background: `linear-gradient(135deg, ${C.green}, ${C.greenDeep})`,
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow:
                    "0 14px 32px rgba(34,197,94,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
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

            {/* Reassurance row */}
            <ul
              className="flex flex-wrap gap-x-5 gap-y-2"
              style={{ fontSize: "12.5px", color: C.textMuted }}
            >
              {reassurance.map((r) => (
                <li key={r} className="inline-flex items-center gap-1.5">
                  <Check size={13} strokeWidth={2.5} style={{ color: C.green }} />
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
