import { HomeHeroV2 } from "../components/home/v2/HomeHeroV2";
import { CockpitGridV2 } from "../components/home/v2/CockpitGridV2";

/* Sections reprises telles quelles : rien à y changer, donc rien n'est dupliqué.
   Une correction faite dans ces fichiers se répercute sur les deux versions. */
import { ProblemSolutionBanner } from "../components/home/ProblemSolutionBanner";
import { PlatformSection } from "../components/home/PlatformSection";
import { CtaPremiumSection } from "../components/home/CtaPremiumSection";

import {
  DouleursSection,
  SoireeSection,
  ForcesSection,
  MaterielSection,
  MigrationSection,
} from "../components/v2/Ajouts";
import { Configurateur } from "../components/v2/Configurateur";

export const metadata = {
  title: "Accueil — proposition",
};

/**
 * Accueil, version proposée.
 *
 * Même trame que la page en ligne. Deux composants sortent, deux sont
 * remplacés, trois sont importés depuis leur emplacement d'origine.
 * Les sections ajoutées portent un liseré orange à gauche.
 */
export default function HomeV2() {
  return (
    <>
      {/* REMPLACÉ — surtitre, sous-titre et première preuve.
          Les trois changements sont commentés dans HomeHeroV2. */}
      <HomeHeroV2 />

      {/* REMPLACÉ — 7 cartes ramenées à 6, désormais cliquables.
          « Comptabilité & TVA » n'est pas un module : ses fonctions
          appartiennent à Caisse. */}
      <CockpitGridV2 />

      {/* RETIRÉ — PlatformOrbit répétait le cockpit avec les mêmes libellés
          obsolètes. Son bouton vidéo est à récupérer dans le héros. */}

      {/* CONSERVÉ tel quel */}
      <ProblemSolutionBanner />

      {/* AJOUTÉ — prolonge « Trop d'outils, trop de pertes » en réponses. */}
      <DouleursSection />

      {/* AJOUTÉ — la section qui doit impressionner. */}
      <SoireeSection />

      {/* CONSERVÉ — ⚠ son sous-titre et sa barre de réassurance mentionnent
          encore NF525. C'est aussi d'ici qu'on extraira la section Pilotage :
          PlatformSection contient déjà PilotageTempsReel et la maquette de
          tableau de bord. */}
      <PlatformSection />

      {/* AJOUTÉ — met en avant les points forts. */}
      <ForcesSection />

      {/* AJOUTÉ — le prix se calcule en direct, le pack s'applique seul. */}
      <Configurateur preselection={["caisse", "stocks", "haccp", "pilotage"]} />

      {/* AJOUTÉ — sans aucun prix, décision du 4 août. */}
      <MaterielSection />

      {/* AJOUTÉ — aucune page équivalente aujourd'hui. */}
      <MigrationSection />

      {/* CONSERVÉ tel quel */}
      <CtaPremiumSection />

      {/* RETIRÉ — BaselineFinale : « Plus de simplicité. » seule après le CTA
          final affaiblissait la fin de page. */}
    </>
  );
}
