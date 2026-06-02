import type { Metadata } from "next";
import { RhHero } from "./RhHero";
import { RhCoutErreurs } from "./RhCoutErreurs";
import { RhPilotageMasse } from "./RhPilotageMasse";
import { RhFonctionnalites } from "./RhFonctionnalites";
import { RhDonneesEtTarif } from "./RhDonneesEtTarif";
import { RhCtaFinal } from "./RhCtaFinal";

export const metadata: Metadata = {
  title: "Module Planning & RH restaurant — Logones",
  description:
    "Logiciel planning restaurant, pointage, contrats et masse salariale en temps réel. Conforme CCN HCR. Données prêtes pour l'expert-comptable. Pas de supplément par salarié.",
};

export default function RhPage() {
  return (
    <>
      <RhHero />
      <RhCoutErreurs />
      <RhPilotageMasse />
      <RhFonctionnalites />
      <RhDonneesEtTarif />
      <RhCtaFinal />
    </>
  );
}
