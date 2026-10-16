import type { Metadata } from "next";

/* Toutes les sections de la page en ligne, importées telles quelles. */
import { RhHero } from "../../../modules/rh/RhHero";
import { RhCoutErreurs } from "../../../modules/rh/RhCoutErreurs";
import { RhPilotageMasse } from "../../../modules/rh/RhPilotageMasse";
import { RhFonctionnalites } from "../../../modules/rh/RhFonctionnalites";
import { RhDonneesEtTarif } from "../../../modules/rh/RhDonneesEtTarif";
import { RhCtaFinal } from "../../../modules/rh/RhCtaFinal";

import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "RH — proposition",
};

/**
 * RH, version proposée.
 *
 * Les cinq sections existantes sont conservées, y compris le tableau des risques
 * non-conformité et le bloc tarifaire à prix fixe. Quatre sections sont ajoutées.
 */
export default function RhV2() {
  return (
    <>
      <RhHero />
      <RhCoutErreurs />
      <RhPilotageMasse />
      <RhFonctionnalites />
      <RhDonneesEtTarif />

      {/* ---- ajouts ---- */}
      <Demonstrations moduleId="rh" couleur="var(--rh-bright, #A36BFF)" />
      <Fonctionnalites moduleId="rh" couleur="var(--rh-bright, #A36BFF)" />
      <PartiPrisSection moduleId="rh" />
      <FaqSection moduleId="rh" />
      <AutresModulesSection sauf="rh" />

      <RhCtaFinal />
    </>
  );
}
