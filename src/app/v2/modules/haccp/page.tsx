import type { Metadata } from "next";

/* Toutes les sections de la page en ligne, importées telles quelles. */
import { HaccpHero } from "../../../modules/haccp/HaccpHero";
import { HaccpProblems } from "../../../modules/haccp/HaccpProblems";
import { HaccpDashboardSection } from "../../../modules/haccp/HaccpDashboardSection";
import { HaccpCtaFinal } from "../../../modules/haccp/HaccpCtaFinal";

import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "HACCP — proposition",
};

/**
 * HACCP, version proposée.
 *
 * Les trois sections existantes sont reprises dans leur ordre d'origine, sans une
 * ligne modifiée. La proposition ajoute quatre sections avant le CTA final.
 */
export default function HaccpV2() {
  return (
    <>
      <HaccpHero />
      <HaccpProblems />
      <HaccpDashboardSection />

      {/* ---- ajouts ---- */}
      <Demonstrations moduleId="haccp" couleur="var(--haccp-bright, #22C55E)" />
      <Fonctionnalites moduleId="haccp" couleur="var(--haccp-bright, #22C55E)" />
      <PartiPrisSection moduleId="haccp" />
      <FaqSection moduleId="haccp" />
      <AutresModulesSection sauf="haccp" />

      <HaccpCtaFinal />
    </>
  );
}
