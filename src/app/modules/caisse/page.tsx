import type { Metadata } from "next";
import { CaisseFeatureHero } from "./CaisseFeatureHero";
import { CaisseReassuranceBar } from "./CaisseReassuranceBar";
import { CaissePainsAndFeatures } from "./CaissePainsAndFeatures";
import { CaisseHardwareSection } from "./CaisseHardwareSection";
import { CaisseSettingsAndCta } from "./CaisseSettingsAndCta";

export const metadata: Metadata = {
  title: "Logiciel de caisse NF525 certifié pour restaurant indépendant",
  description:
    "Caisse certifiée NF525, TVA multi-taux par client, plan de salle dynamique, calcul de marge en temps réel. Aucune surprise contractuelle.",
};

export default function CaissePage() {
  return (
    <>
      <CaisseFeatureHero />

      <CaisseReassuranceBar />

      <CaissePainsAndFeatures />

      <CaisseHardwareSection />

      <CaisseSettingsAndCta />
    </>
  );
}
