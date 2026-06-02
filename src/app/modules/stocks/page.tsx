import type { Metadata } from "next";
import { StocksHero } from "./StocksHero";
import { StocksTimeline } from "./StocksTimeline";
import { StocksBenefits } from "./StocksBenefits";
import { StocksScanBL } from "./StocksScanBL";
import { StocksMargeAlertes } from "./StocksMargeAlertes";
import { StocksCtaFinal } from "./StocksCtaFinal";

export const metadata: Metadata = {
  title: "Gestion des stocks restaurant : scan BL fournisseur et food cost en temps réel",
  description:
    "Scannez vos bons de livraison, gardez vos stocks à jour et pilotez votre food cost et vos marges en temps réel avec Logones Stocks.",
};

export default function StocksPage() {
  return (
    <>
      <StocksHero />
      <StocksTimeline />
      <StocksBenefits />
      <StocksScanBL />
      <StocksMargeAlertes />
      <StocksCtaFinal />
    </>
  );
}
