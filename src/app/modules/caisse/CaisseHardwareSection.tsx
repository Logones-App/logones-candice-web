import Image from "next/image";
import { Check } from "lucide-react";

const C = {
  bg: "#02060B",
  blue: "#147CFF",
  text: "#FFFFFF",
  textSubtle: "rgba(255,255,255,0.68)",
  textBright: "rgba(255,255,255,0.82)",
  border: "rgba(20,124,255,0.18)",
};

const features = [
  "Terminaux tactiles performants",
  "Imprimantes tickets et cuisines",
  "Tiroirs-caisses sécurisés",
  "Afficheurs clients",
  "Scanners codes-barres",
  "Balances connectées",
];

export function CaisseHardwareSection() {
  return (
    <section
      aria-labelledby="hardware-title"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(32px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 32px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative grid gap-10 overflow-hidden lg:grid-cols-[38%_62%] lg:gap-12"
          style={{
            minHeight: "430px",
            borderRadius: "22px",
            padding: "clamp(34px, 4vw, 58px) clamp(24px, 4vw, 64px)",
            background:
              "linear-gradient(135deg, rgba(7,21,35,0.98) 0%, rgba(4,14,25,0.98) 45%, rgba(3,10,18,0.98) 100%)",
            border: `1px solid ${C.border}`,
            boxShadow:
              "0 28px 70px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.05)",
            alignItems: "center",
          }}
        >
          {/* Subtle grain overlay */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>\")",
            }}
            aria-hidden
          />

          {/* Left column — text */}
          <div className="relative">
            <p
              style={{
                color: C.blue,
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "22px",
              }}
            >
              Matériel compatible
            </p>
            <h2
              id="hardware-title"
              style={{
                color: C.text,
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.08,
                fontWeight: 850,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Le matériel qui s&apos;adapte
              <br />à votre établissement.
            </h2>
            <p
              style={{
                color: C.textSubtle,
                fontSize: "16px",
                lineHeight: 1.65,
                maxWidth: "440px",
                marginBottom: "28px",
              }}
            >
              Logones fonctionne avec un large choix de terminaux et
              périphériques pour s&apos;intégrer parfaitement à votre espace et à
              vos usages.
            </p>

            <ul className="flex flex-col" style={{ gap: "12px" }}>
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center"
                  style={{
                    gap: "12px",
                    fontSize: "15px",
                    fontWeight: 650,
                    color: C.textBright,
                  }}
                >
                  <Check
                    size={18}
                    strokeWidth={2.4}
                    style={{ color: C.blue, flexShrink: 0 }}
                    aria-hidden
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — hardware photo */}
          <div className="relative h-[260px] w-full md:h-[340px] lg:h-[380px]">
            <Image
              src="/images/Gemini_Generated_Image_f6edf5f6edf5f6ed.png"
              alt="Matériel compatible avec la caisse Logones : terminal POS, imprimante tickets, tiroir-caisse, afficheur client, terminal de paiement et scanner codes-barres"
              fill
              sizes="(min-width: 1024px) 780px, 100vw"
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
