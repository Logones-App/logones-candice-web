import type { Metadata } from "next";

/* Toutes les sections de la page en ligne, importées telles quelles. */
import { StocksHero } from "../../../modules/stocks/StocksHero";
import { StocksTimeline } from "../../../modules/stocks/StocksTimeline";
import { StocksBenefits } from "../../../modules/stocks/StocksBenefits";
import { StocksScanBL } from "../../../modules/stocks/StocksScanBL";
import { StocksMargeAlertes } from "../../../modules/stocks/StocksMargeAlertes";
import { StocksCtaFinal } from "../../../modules/stocks/StocksCtaFinal";

import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "Stocks — proposition",
};

/**
 * Stocks, version proposée.
 *
 * Rien n'est retiré ni réécrit : les six sections existantes sont reprises
 * dans leur ordre d'origine. La proposition se limite à quatre sections
 * ajoutées à la suite, avant le CTA final.
 */
export default function StocksV2() {
  return (
    <>
      <StocksHero />
      <StocksTimeline />
      <StocksBenefits />
      <StocksScanBL />
      <StocksMargeAlertes />

      {/* ---- ajouts ---- */}
      <Demonstrations moduleId="stocks" couleur="var(--stocks-bright, #FFC400)" />
      <Fonctionnalites moduleId="stocks" couleur="var(--stocks-bright, #FFC400)" />
      <PartiPrisSection moduleId="stocks" />
      <FaqSection moduleId="stocks" />
      <AutresModulesSection sauf="stocks" />

      <StocksCtaFinal />
    </>
  );
}
