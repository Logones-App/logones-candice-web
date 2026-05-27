import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProblemSolutionBanner } from "./ProblemSolutionBanner";
import { CockpitGrid } from "./CockpitGrid";
import { ModularPlatformSection } from "./ModularPlatformSection";
import { CtaPremiumSection } from "./CtaPremiumSection";

export function PosterSection() {
  return (
    <>
      {/* ============ HERO POSTER — image Lyon Doré en fond ============ */}
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

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(15,14,13,0.95) 0%, rgba(31,31,45,0.85) 35%, rgba(31,31,45,0.55) 60%, rgba(31,31,45,0.45) 100%)",
          }}
          aria-hidden
        />
        {/* Bottom fade into the next block */}
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--color-bg-base) 100%)",
          }}
          aria-hidden
        />
        {/* Warm orange glow accent */}
        <div
          className="pointer-events-none absolute right-[-200px] top-[100px] -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--gold-light) 50%, transparent), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1280px] flex-col px-5 pt-[120px] pb-24 sm:px-8 sm:pt-[140px] sm:pb-32 lg:px-10">
          {/* Headline + subtitle — at the top (where the logo used to be) */}
          <div className="max-w-[640px]">
            <h1
              className="leading-[1.05] tracking-[-0.015em] text-text-primary"
              style={{
                fontFamily: "var(--font-anton), 'Arial Narrow', sans-serif",
                fontSize: "clamp(30px, 4vw, 60px)",
                textShadow: "0 2px 30px rgba(0,0,0,0.6)",
              }}
            >
              La solution tout-en-un
              <br />
              pour piloter
              <br />
              <span className="text-gold-light">votre restaurant</span>
            </h1>

            <p
              className="mt-7 max-w-[600px] text-[clamp(16px,1.5vw,20px)] font-light leading-[1.55] text-text-primary/90"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
            >
              Tout est intégré. Tout communique. Vous gagnez du temps, de la
              visibilité et de la sérénité.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/logones/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-8 py-3.5 text-base font-semibold text-bg-base transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow-gold"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/logones/tarifs"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-bg-base/40 px-8 py-3.5 text-base font-semibold text-text-primary backdrop-blur-sm transition-colors hover:border-gold-light hover:text-gold-light"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COCKPIT — 8 modules ============ */}
      <CockpitGrid />

      {/* ============ PROBLEM vs SOLUTION BANNER ============ */}
      <ProblemSolutionBanner />

      {/* ============ MODULAR PLATFORM + BENEFITS ============ */}
      <ModularPlatformSection />

      {/* ============ CTA PREMIUM BANNER ============ */}
      <CtaPremiumSection />
    </>
  );
}
