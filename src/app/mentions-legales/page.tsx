import type { Metadata } from "next";
import { LegalPageShell } from "../components/common/LegalPageShell";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site logones.fr.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell title="Mentions légales" lastUpdated="à compléter">
      <h2>Identification de l&apos;éditeur</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Raison sociale : <strong>{siteConfig.legalEntity}</strong></li>
        <li>Forme juridique : SASU</li>
        <li>Capital social : [à compléter]</li>
        <li>Siège social : [adresse Lyon — à compléter]</li>
        <li>RCS Lyon : [à compléter]</li>
        <li>SIRET : [à compléter]</li>
        <li>TVA intracommunautaire : FR[à compléter]</li>
        <li>Représentant légal : [Prénom Nom], en qualité de Président</li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        [Prénom Nom] —{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
      </p>

      <h2>Hébergeur</h2>
      <p>
        [Nom de l&apos;hébergeur — à compléter]
        <br />
        [Adresse]
        <br />
        [Numéro de téléphone]
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, logotypes, structure) est la propriété exclusive de {siteConfig.legalEntity} et est protégé par les lois françaises et internationales sur la propriété intellectuelle.
      </p>

      <h2>Cookies et données personnelles</h2>
      <p>
        Voir notre <a href="/politique-confidentialite">politique de confidentialité</a> et notre <a href="/cookies">politique cookies</a>.
      </p>

      <h2>Médiation de la consommation</h2>
      <p>
        Conformément à l&apos;article L612-1 du Code de la consommation, en cas
        de litige, vous pouvez recourir gratuitement au médiateur de la
        consommation suivant : [coordonnées du médiateur à compléter].
      </p>

      <p className="text-xs text-text-muted">
        Mentions établies conformément à l&apos;article 6 de la Loi n°2004-575 du 21 juin 2004 (LCEN).
      </p>
    </LegalPageShell>
  );
}
