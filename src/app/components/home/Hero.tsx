import Image from "next/image";
import { ArrowRight, Shield, Sparkles, Receipt } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "../common/Buttons";

const proofChips = [
  "Caisse en cours de certification NF525",
  "Conçu par des restaurateurs lyonnais",
  "Dès 90 € TTC / mois — sans surprise",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/Gemini_Generated_Image_rpasizrpasizrpas (1).png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic dark gradient overlay — denser left, lighter right */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,14,13,0.95) 0%, rgba(31,31,45,0.85) 35%, rgba(31,31,45,0.55) 60%, rgba(31,31,45,0.45) 100%)",
        }}
        aria-hidden
      />
      {/* Bottom fade into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--color-bg-base) 100%)",
        }}
        aria-hidden
      />
      {/* Warm orange glow accent for warmth */}
      <div
        className="pointer-events-none absolute right-[-200px] top-[100px] -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--gold-light) 50%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-center px-5 pt-[120px] pb-20 sm:px-8 sm:pt-[140px] sm:pb-28 lg:px-10">
        <div className="max-w-[640px]">
          <div
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium backdrop-blur-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--gold-light) 14%, transparent)",
              borderColor: "color-mix(in srgb, var(--gold-light) 35%, transparent)",
              color: "var(--gold-light)",
              animationDelay: "0ms",
              animationFillMode: "both",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Le centre de contrôle de votre restaurant
          </div>

          <h1
            className="mt-7 text-balance font-sans text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.025em] text-text-primary"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            <span
              className="block animate-fade-up font-light italic"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              La caisse qui aide
            </span>
            <span
              className="block animate-fade-up font-light italic"
              style={{ animationDelay: "240ms", animationFillMode: "both" }}
            >
              les restaurateurs à piloter
            </span>
            <span
              className="block animate-fade-up font-semibold not-italic text-gold-light"
              style={{ animationDelay: "360ms", animationFillMode: "both" }}
            >
              leur activité en temps réel.
            </span>
          </h1>

          <p
            className="mt-7 max-w-[560px] animate-fade-up text-[clamp(17px,1.5vw,20px)] leading-[1.65] text-text-primary/90"
            style={{
              animationDelay: "480ms",
              animationFillMode: "both",
              textShadow: "0 1px 12px rgba(0,0,0,0.4)",
            }}
          >
            Caisse, stocks, HACCP, RH et réservation — réunis dans un seul
            outil pensé pour les indépendants. Vous gardez le contrôle. Vos
            équipes respirent. Votre marge se voit, en direct.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            <ButtonPrimary
              href="/demo"
              size="lg"
              className="w-full sm:w-auto"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonPrimary>
            <ButtonSecondary
              href="/tarifs"
              size="lg"
              className="w-full sm:w-auto border-white/30 bg-bg-base/40 text-text-primary backdrop-blur-sm hover:border-gold-light hover:text-gold-light"
            >
              Voir les tarifs
            </ButtonSecondary>
          </div>

          <ul
            className="mt-10 flex animate-fade-up flex-wrap gap-x-5 gap-y-2 text-[13px] text-text-primary/80"
            style={{
              animationDelay: "720ms",
              animationFillMode: "both",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            {proofChips.map((chip, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? (
                  <Shield className="h-3.5 w-3.5 text-gold-light" aria-hidden />
                ) : i === 1 ? (
                  <Receipt className="h-3.5 w-3.5 text-gold-light" aria-hidden />
                ) : (
                  <Sparkles className="h-3.5 w-3.5 text-gold-light" aria-hidden />
                )}
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
