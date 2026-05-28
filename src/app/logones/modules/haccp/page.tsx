import type { Metadata } from "next";
import { HaccpHero } from "./HaccpHero";
import { HaccpProblems } from "./HaccpProblems";
import { HaccpDashboardSection } from "./HaccpDashboardSection";
import { HaccpCtaFinal } from "./HaccpCtaFinal";

export const metadata: Metadata = {
  title: "Module HACCP proactif avec veille réglementaire",
  description:
    "Tableau de bord de complétude HACCP, alertes proactives avant inspection, conforme règlement CE 852/2004. Le HACCP qui anticipe avant le contrôle.",
};

export default function HaccpPage() {
  return (
    <>
      <HaccpHero />
      <HaccpProblems />
      <HaccpDashboardSection />
      <HaccpCtaFinal />
    </>
  );
}
