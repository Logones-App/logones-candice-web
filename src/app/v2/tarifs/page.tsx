import type { Metadata } from "next";

/* Sections reprises telles quelles depuis la page en ligne. */
import { TarifsHero } from "../../tarifs/TarifsHero";
import { TarifsSimulateur } from "../../tarifs/TarifsSimulateur";
import { TarifsFAQ } from "../../tarifs/TarifsFAQ";
import { TarifsHardware } from "../../tarifs/TarifsHardware";

import { TarifsCardsV2 } from "./TarifsCardsV2";
import { TarifsMatrixV2 } from "./TarifsMatrixV2";

import { Configurateur } from "../../components/v2/Configurateur";

export const metadata: Metadata = {
  title: "Tarifs — proposition",
};

/**
 * Tarifs, version proposée.
 *
 * Les six sections existantes sont conservées dans leur ordre. La proposition
 * ajoute le configurateur de coût, placé avant les cartes : le prospect
 * compose son offre, puis retrouve les packs.
 *
 * ⚠ Il reste deux points sur cette page, non traités ici :
 *   — TarifsSimulateur calcule des économies. Le transformer en calculateur
 *     de coût complet supposait d'afficher le prix du matériel : abandonné
 *     par décision du 4 août.
 *   — TarifsHero annonce encore les anciens paliers dans son texte.
 */
export default function TarifsV2() {
  return (
    <>
      <TarifsHero />

      {/* AJOUTÉ — le prix se calcule en direct, le pack s'applique seul. */}
      <Configurateur preselection={["caisse"]} />

      <TarifsSimulateur />
      {/* REMPLACÉ — grille arrêtée, tout en HT. */}
      <TarifsCardsV2 />
      {/* REMPLACÉ — ligne Pilotage ajoutée, socle marqué inclus partout. */}
      <TarifsMatrixV2 />
      <TarifsFAQ />
      <TarifsHardware />
    </>
  );
}
