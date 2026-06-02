import type { Metadata } from "next";
import { TarifsHero } from "./TarifsHero";
import { TarifsSimulateur } from "./TarifsSimulateur";
import { TarifsCards } from "./TarifsCards";
import { TarifsMatrix } from "./TarifsMatrix";
import { TarifsFAQ } from "./TarifsFAQ";
import { TarifsHardware } from "./TarifsHardware";

export const metadata: Metadata = {
  title: "Tarifs — Starter 90€ · Pro 169€ · Premium 300€ TTC/mois",
  description:
    "Tarifs Logones transparents : Starter, Pro, Premium et Multi-sites. Simulateur d'économies, matrice de comparaison et FAQ. Logiciel uniquement, matériel sur devis.",
};

export default function TarifsPage() {
  return (
    <>
      <TarifsHero />
      <TarifsSimulateur />
      <TarifsCards />
      <TarifsMatrix />
      <TarifsFAQ />
      <TarifsHardware />
    </>
  );
}
