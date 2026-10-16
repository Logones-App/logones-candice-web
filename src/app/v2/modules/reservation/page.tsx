import type { Metadata } from "next";

/* Toutes les sections de la page en ligne, importées telles quelles. */
import { ReservationHero } from "../../../modules/reservation/ReservationHero";
import { ReservationProblem } from "../../../modules/reservation/ReservationProblem";
import { ReservationEmpreinte } from "../../../modules/reservation/ReservationEmpreinte";
import { ReservationConnectee } from "../../../modules/reservation/ReservationConnectee";
import { ReservationCtaFinal } from "../../../modules/reservation/ReservationCtaFinal";

import { Demonstrations } from "../../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../../components/v2/Fonctionnalites";
import {
  PartiPrisSection,
  FaqSection,
  AutresModulesSection,
} from "../../../components/v2/Ajouts";

export const metadata: Metadata = {
  title: "Réservation & acquisition — proposition",
};

/**
 * Réservation & acquisition, version proposée.
 *
 * Les quatre sections existantes sont conservées, empreinte bancaire comprise.
 * Le module s'élargit au site vitrine et aux avis — prévoir une redirection 301
 * depuis /modules/reservation le jour de la fusion.
 */
export default function ReservationV2() {
  return (
    <>
      <ReservationHero />
      <ReservationProblem />
      <ReservationEmpreinte />
      <ReservationConnectee />

      {/* ---- ajouts ---- */}
      <Demonstrations moduleId="reservation" couleur="var(--resa-bright, #D14343)" />
      <Fonctionnalites moduleId="reservation" couleur="var(--resa-bright, #D14343)" />
      <PartiPrisSection moduleId="reservation" />
      <FaqSection moduleId="reservation" />
      <AutresModulesSection sauf="reservation" />

      <ReservationCtaFinal />
    </>
  );
}
