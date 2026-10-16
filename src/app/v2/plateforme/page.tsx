import type { Metadata } from "next";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { Demonstrations } from "../../components/v2/Demonstrations";
import { Fonctionnalites } from "../../components/v2/Fonctionnalites";
import { FaqSection } from "../../components/v2/Ajouts";
import { CtaPremiumSection } from "../../components/home/CtaPremiumSection";

export const metadata: Metadata = {
  title: "La plateforme — proposition",
  description:
    "Douze propriétés incluses partout : fonctionnement hors ligne, coordination locale, droits par employé, hébergement en France.",
};

const LINE = onNight.border;

const FAQ = [
  {
    q: "Faut-il un serveur ou une installation informatique ?",
    r: "Non. Les appareils se découvrent et se coordonnent seuls sur votre réseau. Il n'y a pas de machine à héberger dans un placard, pas de maintenance de serveur, et pas d'informaticien à appeler pour ajouter un poste.",
  },
  {
    q: "Que se passe-t-il si un terminal tombe en panne ?",
    r: "Les autres continuent : aucun poste n'est indispensable au fonctionnement des autres. En location, le remplacement est prévu au contrat ; à l'achat, le matériel est garanti.",
  },
  {
    q: "Puis-je exporter mes données si je pars ?",
    r: "Oui, à tout moment et sans frais, dans des formats ouverts. Nous ne conditionnons pas la récupération de vos données à une négociation.",
  },
  {
    q: "Où sont hébergées les données ?",
    r: "En France, chez un hébergeur français, dans le respect du RGPD.",
  },
];

/**
 * La plateforme — le socle.
 *
 * Les douze propriétés qui n'appartiennent à aucun module, parce qu'elles
 * appartiennent à tous. Même structure que les pages module : trois
 * démonstrations d'abord, la liste complète ensuite.
 */
export default function PlateformeV2() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${ground.nightSurface}, ${ground.night})`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: container,
            paddingInline: gutter,
            paddingTop: "150px",
            paddingBottom: "72px",
          }}
        >
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: brand.orangeLight }}
          >
            La plateforme
          </p>
          <h1 className="max-w-[20ch] text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
            Ce qui ne s&apos;achète pas séparément
          </h1>
          <p
            className="mt-6 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed"
            style={{ color: onNight.subtle }}
          >
            Douze propriétés qui n&apos;appartiennent à aucun module, parce qu&apos;elles
            appartiennent à tous. Elles sont incluses dans chaque offre, et ne seront jamais
            une option.
          </p>
        </div>
      </section>

      <Demonstrations moduleId="socle" couleur={brand.orange} />

      <Fonctionnalites moduleId="socle" couleur={brand.orange} />

      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{ backgroundColor: ground.nightSurface, borderTop: `1px solid ${LINE}` }}
      >
        <div className="mx-auto" style={{ maxWidth: "52rem", paddingInline: gutter }}>
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: brand.orangeLight }}
          >
            Conformité
          </p>
          <h2 className="mb-6 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Ce que dit la loi, et ce que nous fournissons
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
            La loi n&apos;impose pas une marque privée. Elle impose quatre conditions —
            inaltérabilité, sécurisation, conservation, archivage — et la preuve se fait{" "}
            <strong className="text-white">au choix</strong> : par un certificat d&apos;organisme
            accrédité, ou par une attestation individuelle de l&apos;éditeur. Nous vous
            remettons la nôtre à la signature.
          </p>
          <p
            className="my-6 max-w-[52ch] border-l-2 pl-4 text-[17px] font-semibold leading-snug text-white"
            style={{ borderColor: brand.orange }}
          >
            Conforme à l&apos;article 286 du CGI — attestation éditeur. Certification NF525 en
            cours.
          </p>
        </div>
      </section>

      <FaqSection questions={FAQ} titre="Sur le socle technique" />

      <CtaPremiumSection />
    </>
  );
}
