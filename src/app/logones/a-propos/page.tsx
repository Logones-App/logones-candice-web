import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutTimeline } from "./AboutTimeline";
import { AboutConstats } from "./AboutConstats";
import { AboutTeam } from "./AboutTeam";
import { AboutValeurs } from "./AboutValeurs";
import { AboutCtaFinal } from "./AboutCtaFinal";

export const metadata: Metadata = {
  title: "À propos — Logones, fondé par des restaurateurs",
  description:
    "Nous avons cherché cet outil depuis 2022. Il n'existait pas. L'histoire de Logones, plateforme tout-en-un née du terrain pour protéger la rentabilité des restaurateurs.",
};

export default function AProposPage() {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <AboutConstats />
      <AboutTeam />
      <AboutValeurs />
      <AboutCtaFinal />
    </>
  );
}
