import { HomeHero } from "./HomeHero";
import { ProblemSolutionBanner } from "./ProblemSolutionBanner";
import { CockpitGrid } from "./CockpitGrid";
import { PlatformOrbit } from "./PlatformOrbit";
import { PlatformSection, BaselineFinale } from "./PlatformSection";
import { CtaPremiumSection } from "./CtaPremiumSection";

export function PosterSection() {
  return (
    <>
      {/* ============ HERO — Tout votre restaurant. Une seule plateforme. ============ */}
      <HomeHero />

      {/* ============ COCKPIT — 7 modules ============ */}
      <CockpitGrid />

      {/* ============ ORBITE — plateforme unique + vidéo ============ */}
      <PlatformOrbit />

      {/* ============ PROBLEM vs SOLUTION BANNER ============ */}
      <ProblemSolutionBanner />

      {/* ============ PLATEFORME UNIQUE + PILOTAGE + CTA + RÉASSURANCE ============ */}
      <PlatformSection />

      {/* ============ CTA PREMIUM BANNER — Prêt à simplifier… ============ */}
      <CtaPremiumSection />

      {/* ============ BASELINE FINALE ============ */}
      <BaselineFinale />
    </>
  );
}
