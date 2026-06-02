import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Ban,
  CreditCard,
  LayoutGrid,
  Network,
} from "lucide-react";
import { RES as C } from "./palette";

const microBenefits = [
  { icon: Ban, label: "Aucune commission sur les réservations" },
  { icon: CreditCard, label: "Empreinte bancaire sans commission" },
  { icon: LayoutGrid, label: "Plan de salle dynamique" },
  { icon: Network, label: "Synchronisé à votre caisse & service" },
];

export function ReservationHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bg,
        minHeight: "760px",
        paddingBlock: "120px clamp(56px, 6vw, 80px)",
      }}
    >
      {/* Background image — restaurant premium soir, hôtesse + tablette */}
      <div
        className="pointer-events-none absolute -z-20"
        style={{
          inset: "-12% -8%",
        }}
        aria-hidden
      >
        <Image
          src="/images/Gemini_Generated_Image_ylha1qylha1qylha.png"
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
      {/* Red tint */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 60%, rgba(255,48,48,0.18), transparent 45%)",
        }}
        aria-hidden
      />
      {/* Warm accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 60% 18%, rgba(245,158,11,0.10), transparent 35%)",
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
          maxWidth: "1280px",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="max-w-[680px]">
          <div>
            <p
              className="inline-block rounded-full"
              style={{
                color: C.redAccent,
                backgroundColor: C.redSofter,
                border: `1px solid rgba(255,48,48,0.35)`,
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 14px",
                marginBottom: "26px",
              }}
            >
              Réservation
            </p>

            <h1
              style={{
                fontSize: "clamp(40px, 5.5vw, 58px)",
                lineHeight: 1.05,
                fontWeight: 850,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              Les réservations doivent
              <br />
              remplir votre salle.
              <br />
              <span style={{ color: C.redAccent }}>
                Pas prélever votre chiffre
                <br />
                d&apos;affaires.
              </span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: C.textSubtle,
                maxWidth: "560px",
                marginBottom: "30px",
              }}
            >
              Réservations en ligne, plan de salle dynamique, empreinte
              bancaire et pilotage du service réunis dans une seule plateforme.
            </p>

            <div className="flex flex-wrap gap-3" style={{ marginBottom: "32px" }}>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "54px",
                  padding: "0 28px",
                  background: C.red,
                  fontSize: "15px",
                  fontWeight: 800,
                  borderRadius: "8px",
                  boxShadow:
                    "0 12px 28px rgba(224,32,32,0.35), inset 0 1px 0 rgba(255,255,255,0.22)",
                }}
              >
                Demander une démo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                style={{
                  height: "54px",
                  padding: "0 28px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  fontSize: "15px",
                  fontWeight: 800,
                  borderRadius: "8px",
                  backdropFilter: "blur(10px)",
                }}
              >
                Voir le plan de salle en action
              </Link>
            </div>

            {/* Micro benefits */}
            <ul
              className="grid gap-4 sm:grid-cols-2"
              style={{ marginTop: "32px", maxWidth: "600px" }}
            >
              {microBenefits.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: `1px solid rgba(255,255,255,0.12)`,
                      color: C.redAccent,
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    <b.icon size={18} strokeWidth={1.8} />
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.86)",
                      lineHeight: 1.3,
                    }}
                  >
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
