import type { Metadata } from "next";

/* Sections reprises telles quelles. */
import { CaissePainsAndFeatures } from "../../../modules/caisse/CaissePainsAndFeatures";
import { CaisseHardwareSection } from "../../../modules/caisse/CaisseHardwareSection";
import { CaisseSettingsAndCta } from "../../../modules/caisse/CaisseSettingsAndCta";

/* Sections remplacées, chacune pour un seul mot. */
import { CaisseFeatureHeroV2 } from "./CaisseFeatureHeroV2";
import { CaisseReassuranceBarV2 } from "./CaisseReassuranceBarV2";

import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "Caisse — proposition",
};

/**
 * Caisse, version proposée.
 *
 * Deux sections changent, d'un mot chacune. La barre de réassurance annonçait
 * « Conforme NF525 » et « Loi de finances 2025 ». Le reste — héros, trois
 * douleurs, fonctionnalités terrain, matériel, paramètres — est repris sans
 * modification depuis les fichiers d'origine.
 *
 * Le sixième point du héros disait « Sécurisé et certifié » alors que son
 * propre corps de texte annonçait « en cours de certification ». Le titre
 * contredisait le texte : il devient « Sécurisé et conforme ».
 */
export default function CaisseV2() {
  return (
    <>
      <CaisseFeatureHeroV2 />

      <CaisseReassuranceBarV2 />

      <CaissePainsAndFeatures />

      <CaisseHardwareSection />

      {/* ---- ajouts ---- */}
      <Demonstrations moduleId="caisse" couleur="var(--caisse-bright, #147CFF)" />
      <Fonctionnalites moduleId="caisse" couleur="var(--caisse-bright, #147CFF)" />
      <PartiPrisSection moduleId="caisse" />
      <FaqSection moduleId="caisse" />
      <AutresModulesSection sauf="caisse" />

      <CaisseSettingsAndCta />
    </>
  );
}
