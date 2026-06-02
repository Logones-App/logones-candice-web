import type { Metadata } from "next";
import { LegalPageShell } from "../components/common/LegalPageShell";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Logones traite vos données personnelles, en conformité avec le RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      lastUpdated="à compléter"
    >
      <h2>Responsable de traitement</h2>
      <p>
        {siteConfig.legalEntity}, éditeur de Logones, est le responsable du
        traitement des données collectées sur ce site.
      </p>

      <h2>Finalités et bases légales des traitements</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Formulaire démo</strong> — Finalité : traitement des demandes de démonstration. Base légale : exécution de mesures précontractuelles (art. 6.1.b RGPD). Données : nom, email, téléphone (optionnel), restaurant, ville, couverts, modules. Conservation : 3 ans à compter du dernier contact ou de la fin du contrat.
        </li>
        <li>
          <strong>Analytics</strong> — Finalité : mesure d&apos;audience du site. Base légale : consentement (art. 6.1.a RGPD). Outil prévu : Matomo auto-hébergé avec anonymisation IP, ou Plausible Analytics. Conservation : 13 mois maximum (recommandation CNIL).
        </li>
        <li>
          <strong>Cookies techniques</strong> — Base légale : nécessité technique. Exemptés de consentement selon l&apos;art. 82 loi Informatique et Libertés.
        </li>
      </ul>

      <h2>Droits des personnes</h2>
      <p>
        Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17 du
        6 janvier 1978 modifiée (loi Informatique et Libertés), vous disposez :
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>d&apos;un droit d&apos;accès à vos données (art. 15 RGPD)</li>
        <li>d&apos;un droit de rectification (art. 16 RGPD)</li>
        <li>d&apos;un droit à l&apos;effacement (art. 17 RGPD)</li>
        <li>d&apos;un droit à la limitation du traitement (art. 18 RGPD)</li>
        <li>d&apos;un droit à la portabilité (art. 20 RGPD)</li>
        <li>d&apos;un droit d&apos;opposition (art. 21 RGPD)</li>
      </ul>
      <p>
        Pour exercer ces droits :{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cnil.fr
        </a>{" "}
        ou CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
      </p>

      <p className="text-xs text-text-muted">
        Document à finaliser par un juriste spécialisé RGPD avant mise en ligne.
      </p>
    </LegalPageShell>
  );
}
