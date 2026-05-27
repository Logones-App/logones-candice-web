import type { Metadata } from "next";
import { ModulePageHero } from "../../components/common/ModulePageHero";
import { Section, SectionLabel, SectionTitle, SectionLead } from "../../components/common/Section";
import { FeatureRow } from "../../components/common/FeatureRow";
import { LegalNotice } from "../../components/common/LegalNotice";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Module RH restaurant conforme CCN HCR",
  description:
    "Planning, pointeuse, contrats CDI/CDD/CDDU, conformité CCN HCR IDCC 1979, alerte DPAE automatique. Inclus dans Premium, sans supplément par employé.",
};

const risks = [
  {
    nonConformity: "DPAE non transmise",
    risk: "Travail dissimulé",
    amount: "1 625 € par salarié",
  },
  {
    nonConformity: "Bulletin de paie non conforme",
    risk: "Sanction Code du travail",
    amount: "750 € par bulletin",
  },
  {
    nonConformity: "Non respect CCN HCR",
    risk: "Rappel de salaires + dommages",
    amount: "Variable",
  },
  {
    nonConformity: "DUERP manquant",
    risk: "Sanction inspection du travail",
    amount: "1 500 € par employé",
  },
];

export default function RhPage() {
  return (
    <>
      <ModulePageHero
        module="rh"
        title="Les plannings et la paie sans risque juridique."
        lead="Planning hebdomadaire, pointeuse intégrée, gestion CDI/CDD/CDDU, alerte DPAE automatique. Conforme à la Convention Collective HCR IDCC 1979. Aucun supplément par salarié."
      />

      <Section tone="dark">
        <SectionLabel color="rh">Tableau des risques RH</SectionLabel>
        <SectionTitle>Ce que coûte chaque erreur — par salarié.</SectionTitle>
        <SectionLead>
          La gestion RH en restauration est l&apos;un des plus gros pôles de risque juridique. Logones vous protège là où ça compte.
        </SectionLead>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-surface">
              <tr>
                <th className="p-4 font-semibold text-text-primary">Non-conformité</th>
                <th className="p-4 font-semibold text-text-primary">Risque</th>
                <th className="p-4 font-semibold text-text-primary">Montant</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r) => (
                <tr key={r.nonConformity} className="border-t border-border">
                  <td className="p-4 text-text-primary">{r.nonConformity}</td>
                  <td className="p-4 text-text-secondary">{r.risk}</td>
                  <td className="p-4 font-mono font-semibold text-rh-accent">{r.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="surface">
        <div className="space-y-20">
          <FeatureRow
            module="rh"
            title="Conformité CCN HCR IDCC 1979"
            description="Logones intègre nativement les règles de la Convention Collective Nationale des Hôtels-Cafés-Restaurants. Coefficients, temps de pause, repos compensateur, jours fériés — tout est paramétré à l'embauche."
            bullets={[
              "Grille des coefficients à jour",
              "Calcul du temps de travail conforme",
              "Bulletin de paie pré-renseigné",
            ]}
          />
          <FeatureRow
            module="rh"
            title="Alerte DPAE automatique"
            description="Avant chaque embauche, Logones vérifie que la DPAE est transmise dans les délais. Une notification, un clic, c'est fait. Plus jamais d'amende à 1 625 €."
            bullets={[
              "Déclaration au plus tard 8 jours avant l'embauche",
              "Suivi du statut de la DPAE",
              "Archive horodatée transmise à l'expert-comptable",
            ]}
            reverse
          />
          <FeatureRow
            module="rh"
            title="Ratio masse salariale / CA en temps réel"
            description="Votre indicateur clé de rentabilité, calculé en continu à partir des plannings et du chiffre d'affaires. Vous pilotez la masse salariale — au lieu de la subir."
            bullets={[
              "Calcul quotidien automatisé",
              "Comparaison avec votre objectif",
              "Alerte dérive configurable",
            ]}
          />
        </div>
      </Section>

      <Section tone="dark">
        <div className="rounded-3xl border border-rh-bright/30 bg-rh-deep/40 p-8 sm:p-12">
          <SectionLabel color="rh">Tarif</SectionLabel>
          <h3 className="mt-3 font-display text-[clamp(22px,2.5vw,32px)] font-semibold text-text-primary">
            Inclus dans le tier Premium (300 € TTC/mois).
          </h3>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-text-secondary">
            Aucun supplément par salarié. Peu importe la taille de votre équipe — 3 employés ou 25, c&apos;est le même prix. Là où les solutions concurrentes facturent à l&apos;employé, nous facturons à l&apos;établissement.
          </p>
        </div>
      </Section>

      <Section tone="light" size="compact">
        <LegalNotice tone="light">
          Les informations présentées sur cette page ont un caractère informatif général. Elles ne constituent pas un conseil juridique ou comptable. Pour la gestion de vos obligations sociales et fiscales, consultez votre expert-comptable inscrit à l&apos;Ordre ou votre conseiller juridique.
        </LegalNotice>
      </Section>

      <FinalCTA />
    </>
  );
}
