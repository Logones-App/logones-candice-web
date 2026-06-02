import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TARIFS as C } from "./palette";

export function TarifsHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bgDark,
        minHeight: "520px",
        paddingBlock: "120px clamp(40px, 5vw, 64px)",
      }}
    >
      {/* Right photo */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
        style={{ width: "52%" }}
        aria-hidden
      >
        <Image
          src="/images/Gemini_Generated_Image_v1tagev1tagev1ta.png"
          alt=""
          fill
          priority
          sizes="52vw"
          className="object-cover object-center"
        />
        {/* Left fade to navy */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${C.bgDark} 0%, rgba(7,17,31,0.85) 18%, rgba(7,17,31,0.30) 50%, rgba(7,17,31,0.10) 100%)`,
          }}
        />
        {/* Warm accent on image side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(255,106,26,0.18), transparent 55%)",
          }}
        />
      </div>

      {/* Mobile fallback */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(255,106,26,0.18), transparent 55%), ${C.bgDark}`,
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
        <div className="max-w-[640px]">
          <p
            className="inline-block rounded-full"
            style={{
              color: C.orange,
              backgroundColor: C.orangeSoft,
              border: `1px solid ${C.orangeBorder}`,
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "6px 12px",
              marginBottom: "26px",
            }}
          >
            Tarifs Logones
          </p>

          <h1
            style={{
              fontSize: "clamp(40px, 5.4vw, 62px)",
              lineHeight: 1.02,
              fontWeight: 850,
              color: C.textOnDark,
              letterSpacing: "-0.02em",
              marginBottom: "22px",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            Le vrai coût
            <br />
            d&apos;un logiciel de caisse,
            <br />
            <span style={{ color: C.orange }}>
              c&apos;est tout ce qu&apos;il
              <br />
              ajoute autour.
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: C.textOnDarkSubtle,
              maxWidth: "560px",
              marginBottom: "32px",
            }}
          >
            Réservations, commissions, salariés, modules, synchronisations…
            Logones réunit tout dans une plateforme pensée pour protéger votre
            rentabilité.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{
                height: "54px",
                padding: "0 28px",
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                fontSize: "15px",
                fontWeight: 850,
                boxShadow:
                  "0 14px 32px rgba(255,106,26,0.38), inset 0 1px 0 rgba(255,255,255,0.28)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              Demander une démo
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="#cartes"
              className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              style={{
                height: "54px",
                padding: "0 28px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.28)",
                fontSize: "15px",
                fontWeight: 800,
                backdropFilter: "blur(10px)",
              }}
            >
              Comparer les tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
