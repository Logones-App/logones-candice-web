import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck, Rocket, CalendarDays } from "lucide-react";

/* Charte hero (spec landing LOGONES) */
const NAVY = "#07111F";
const ORANGE = "#FF5A1F";
const TEXT_SEC = "#D6DCE8";
const LINE = "rgba(255,255,255,0.16)";

const benefits = [
  "Aucune ressaisie",
  "Données en temps réel",
  "Aucune synchronisation",
  "Une seule équipe à vos côtés",
];

const proofs = [
  {
    icon: ShieldCheck,
    title: "Certification AFNOR NF525",
    text: "Prévue le 17 juillet 2026",
  },
  {
    icon: Rocket,
    title: "Lancement officiel",
    text: "Août 2026.",
  },
  {
    icon: CalendarDays,
    title: "Démonstrations ouvertes",
    text: "Réservez votre créneau dès maintenant",
  },
];

export function HomeHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Image restaurant + caisse — occupe le fond, cadrée à droite */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/Gemini_Generated_Image_p9hw66p9hw66p9hw.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "right center" }}
        />
      </div>

      {/* Dégradé navy : dense à gauche (texte) → transparent à droite (image) */}
      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, #07111F 0%, rgba(7,17,31,0.85) 18%, rgba(7,17,31,0.15) 55%, rgba(7,17,31,0) 100%)",
        }}
        aria-hidden
      />
      {/* Mobile : voile sombre pour garder la lisibilité du texte */}
      <div
        className="absolute inset-0 -z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,17,31,0.94) 0%, rgba(7,17,31,0.88) 100%)",
        }}
        aria-hidden
      />

      <div className="px-5 pt-[110px] sm:px-8 lg:px-16 xl:px-24">
        <div className="flex min-h-[480px] flex-col justify-center lg:min-h-[600px]">
          {/* ---------- COLONNE UNIQUE : texte ---------- */}
          <div className="py-8 lg:py-14">
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: ORANGE }}
            >
              Le logiciel de caisse NF525
            </p>

            <h1 className="mt-5 font-sans text-[clamp(42px,5.6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.02em] text-white">
              Tout votre restaurant.
              <br />
              <span style={{ color: ORANGE }}>Une seule</span> plateforme.
            </h1>

            <p className="mt-6 text-[clamp(17px,1.6vw,22px)] font-medium leading-[1.5] text-white">
              Caisse NF525, réservations, stocks, HACCP et planning RH.
              Nativement intégrés dans Logones.
            </p>

            <ul className="mt-8 flex flex-col gap-[14px]">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[15px] text-white"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Check
                      className="h-3.5 w-3.5 text-white"
                      strokeWidth={3}
                      aria-hidden
                    />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 font-bold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  backgroundColor: ORANGE,
                  borderRadius: "10px",
                  padding: "18px 30px",
                }}
              >
                Réserver une démonstration
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/modules/caisse"
                className="inline-flex items-center justify-center font-semibold text-white transition-colors hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.45)",
                  borderRadius: "10px",
                  padding: "18px 30px",
                }}
              >
                Découvrir Logones
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- BANDEAU PREUVE / LANCEMENT ---------- */}
        <div
          className="grid grid-cols-1 border-t sm:grid-cols-3"
          style={{
            borderColor: LINE,
            paddingTop: "40px",
            paddingBottom: "32px",
          }}
        >
          {proofs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`flex items-start gap-3 py-3 sm:py-0 sm:px-7 ${
                  i > 0 ? "sm:border-l" : ""
                }`}
                style={i > 0 ? { borderColor: LINE } : undefined}
              >
                <Icon className="h-6 w-6 shrink-0 text-white" aria-hidden />
                <div>
                  <p className="text-[15px] font-bold text-white">{p.title}</p>
                  <p className="mt-0.5 text-[13px]" style={{ color: TEXT_SEC }}>
                    {p.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
