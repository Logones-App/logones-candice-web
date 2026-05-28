import type { Metadata } from "next";
import { ReservationHero } from "./ReservationHero";
import { ReservationProblem } from "./ReservationProblem";
import { ReservationEmpreinte } from "./ReservationEmpreinte";
import { ReservationConnectee } from "./ReservationConnectee";
import { ReservationCtaFinal } from "./ReservationCtaFinal";

export const metadata: Metadata = {
  title:
    "Module Réservation restaurant — Logones · Sans commission sur les réservations",
  description:
    "Logiciel de réservation restaurant connecté à votre caisse et à votre plan de salle. Aucune commission sur les réservations. Empreinte bancaire et anti-no-show inclus.",
};

export default function ReservationPage() {
  return (
    <>
      <ReservationHero />
      <ReservationProblem />
      <ReservationEmpreinte />
      <ReservationConnectee />
      <ReservationCtaFinal />
    </>
  );
}
